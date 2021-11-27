import React, { useCallback, useRef, useEffect, useState } from 'react';
import { faCheck, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import { Button, Card, Grid, Icon, Input, Select, Textarea, Paragraph, Picture, Title, Section } from '~atoms';
import { homePage } from '~routes';
import { useGa } from '~hooks';
import gaTags from '~tags';

import styles from './styles.scss';

const minLength = (l) => (val) => {
  if (val.length < l) {
    return `Minimum ${l} characteres`;
  }

  return false;
}; 

const name = (type) => (val) => {
  if (val.trim().length < 1) {
    return `Veuillez renseignre votre ${type}`;
  }
  return false;
}

const email = (val) => {
  if (!/\S+@\S+\.\S+/.test(val)) {
    return 'Veuillez renseigner un email valide';
  }

  return false;
};

const phone = (val) => {
  if (!/(\d{10}|(\d\d\s?){5})/g.test(val)) {
    return 'Veuillez renseigner un numéro de téléphone valide (xxxxxxxxxx, xx xx xx xx xx)';
  }

  return false;
};

const TEL = '07 85 30 47 18';
const MAIL = 'cavillon.marie@gmail.com';

const inputs = [
  {
    type: 'text',
    name: '$firstname',
    label: 'Prénom',
    validator: name('Prénom'),
  },
  {
    type: 'text',
    name: '$lastname',
    label: 'Nom',
    validator: name('Nom'),
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    validator: email,
  },
  {
    type: 'tel',
    name: 'phone',
    label: 'Téléphone',
    validator: phone,
  },
  {
    type: 'select',
    name: '$interest',
    label: 'Intéressez par',
    options: ['Présentation / Fit', 'Informations tarifaires', 'Autres'],
  },
  {
    type: 'textarea',
    name: '$otherInterest',
    label: 'Veuillez préciser',
  },
  {
    type: 'select',
    name: '$about',
    label: 'Vous êtes plutôt',
    options: ['Xplorateurs de Sens', 'Global Nomads', 'Autres'],
  },
  {
    type: 'textarea',
    name: '$otherAbout',
    label: 'Veuillez préciser',
  },
];

const URL = 'https://api.staticforms.xyz/submit';
const ACCESS_KEY = 'f753ab3d-f93c-4652-bd86-2c8a429ba751';

export const Contact = () => {
  const [inputList, setInputList] = useState(inputs);
  const [formSent, setFormSent] = useState(false);
  const [formSubmissionError, setFormSubmissionError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formValues, setFormValues] = useState(false);
  const formElement = useRef(null);
  const [displayInterestConditionVerified, setDisplayInterestConditionVerified] = useState(false);
  const [displayAboutConditionVerified, setDisplayAboutConditionVerified] = useState(false);
  const [_, sendEvent] = useGa();

  const toggleDisplayCondition = useCallback((val) => {
    if (val[0] === '$interest' && val[1] === 'Autres') {
      setDisplayInterestConditionVerified(true);
    } else if (val[0] === '$interest') {
      setDisplayInterestConditionVerified(false);
    }
    if (val[0] === '$about' && val[1] === 'Autres') {
      setDisplayAboutConditionVerified(true);
    } else if (val[0] === '$about') {
      setDisplayAboutConditionVerified(false);
    }
  }, [inputList]);

  useEffect(() => {
    if (!submitting) {
      return;
    }

    async function send() {
      try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formValues, accessKey: ACCESS_KEY }),
        });

        if (!response.ok) {
          throw Error('error');
        }

        setFormSent(true);
        setSubmitting(false);
        sendEvent(...gaTags.contact.form.sent);
      } catch (e) {
        setFormSubmissionError(true);
        setSubmitting(false);
      }
    }

    send();
  }, [submitting, formValues]);

  const submit = (e) => {
    e.preventDefault();

    setSubmitting(true);
    sendEvent(...gaTags.contact.form.started);

    const newInputList = inputList.map(i => ({
      ...i,
      errors:
        i.type === 'textarea' ? [] : i.validator ?
          [i.validator(formElement.current[i.name].value)] :
          formElement.current[i.name].value === '' ? ['Champs requis'] : [],
    }));

    const isFormValid = newInputList.every(i => (i.errors[0] === false || i.errors.length === 0));

    if (!isFormValid) {
      setInputList(newInputList.map(i => ({ ...i, errors: i.errors[0] === false ? [] : i.errors })));
      setSubmitting(false);
      return;
    }

    setFormValues(inputList.reduce((a, i) => ({ ...a, [i.name]: formElement.current[i.name].value}), {}));
  };

  return (
    <div className={styles.page}>
      <Section bgLeft>
        <Grid col="3">
          <Grid.Item col="011">
            <Card>
              <Title>On s'appelle ?</Title>
              <Paragraph>Vous souhaitez en savoir plus, prendre rendez-vous ou vous avez des questions sur ma façon de travailler?
    Appelons nous!</Paragraph>
              <Paragraph>Laissez un message ici et je prendrai un plaisir à vous répondre dans les meilleurs délais</Paragraph>
              <form ref={formElement} action="" mehtod="post" className={cn(styles.form, { })}>
                {submitting && (
                  <div className={styles.formSubmitting}><Icon icon={faSpinner} className={styles.spinner} size="3x" spin /></div>
                )}
                {formSubmissionError && (
                  <div className={styles.formError}>
                    <Icon icon={faTimes} className={styles.formErrorIcon} size="3x" />
                    <Paragraph>Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer plus tard.</Paragraph>
                    <Button to={homePage.path}>Revenir a l'accueil</Button>
                  </div>
                )}
                {formSent && !formSubmissionError && (
                  <div className={styles.formSent}>
                    <Icon icon={faCheck} className={styles.formSentIcon} size="3x" />
                    <Paragraph>Le formulaire a bien été envoyé.</Paragraph>
                    <Button to={homePage.path}>Revenir a l'accueil</Button>
                  </div>
                )}
                <div className={styles.formWrapper}>
                  {inputList.map(i => 
                    i.type === 'select' ? (<Select key={i.name} className={styles.input} name={i.name} label={i.label} options={i.options} required err={i.errors && i.errors.length > 0 ? i.errors : null} onInput={toggleDisplayCondition} />) : i.type === 'textarea' ? (((displayInterestConditionVerified && i.name === '$otherInterest') || (displayAboutConditionVerified && i.name === '$otherAbout')) ? <Textarea key={i.name} className={styles.input} name={i.name} label={i.label} type={i.type} required validator={i.validator} err={i.errors} /> : null) : (<Input key={i.name} className={styles.input} name={i.name} label={i.label} type={i.type} required validator={i.validator} err={i.errors} />)
                  )}
                </div>
                <div className={styles.formActions}>
                  <Button className={styles.submit} onClick={submit}>Envoyez</Button>
                </div>
              </form>
            </Card>
          </Grid.Item>
        </Grid>
      </Section>
    </div>
  );
};

export default Contact;
