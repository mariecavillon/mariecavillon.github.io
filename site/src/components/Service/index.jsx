import React from 'react';
import cn from 'classnames';

import { BgImage, Card, Dropdown, Grid, PageContainer, Paragraph, Button, Section, Title, SubTitle, More, Less, List, Hero, Modal, Slider, Link, Animate } from '~atoms';
import { aboutPage, contactPage } from '~routes';
import { useGa } from '~hooks';
import gaTags from '~tags';
import { composeCb } from '~utils';

import styles from './styles.scss';

export const Service = () => {
  const [_, sendEvent] = useGa();

  return (
    <div className={styles.page}>
      <Section bgTop>
        <Grid col="1">
          <Title centered className={styles.marginTop}>A qui je m'adresse ?</Title>
        </Grid>
        <Grid col="4">
          <Grid.Item col="1100" className={styles.container}>
            <SubTitle><span className={styles.containerSpan}>Les</span>Explorateurs de Sens</SubTitle>
            <div className={styles.containerCta}>
              <Modal>
                <Modal.Consumer>
                  {({ open }) => (
                    <Button inverse onClick={composeCb([open, sendEvent(gaTags.service.button.modal.explorateur.description)])}>Qui sont-ils ?</Button>
                  )}
                </Modal.Consumer>
                <Modal.Content>
                  <SubTitle><span className={styles.containerSpan}>Les</span>Explorateurs de Sens</SubTitle>
                  <Paragraph className={styles.left}><b>Investi.e</b>, et <b>soucieux.se des autres</b>, vous souhaitez être au top à tous les niveaux - pro ou perso.</Paragraph>
                  <Paragraph className={styles.left}>Votre <b>équilibre</b> et/ou votre <b>besoin d'épanouissement</b> est vital pour vous et il vous arrive d’avoir un peu le <b>vertige entre tous vos engagements</b> et de ne plus savoir ou donner de la tête...</Paragraph>
                  <Paragraph className={styles.left}>Que vous soyez en <b>quête d’une nouvelle direction</b> pro ou perso, de <b>clarification</b> dans vos choix et décisions, d’ <b>alignement</b> avec vos valeurs internes ou de découverte et d’<b>aventures nouvelles</b>, ce coaching est fait pour vous si vous êtes en quête de <b>changements</b> et que vous souhaitez <b>remettre en question votre status quo</b>.</Paragraph>
                </Modal.Content>
              </Modal>
              <Modal>
                <Modal.Consumer>
                  {({ open }) => (
                    <Button onClick={composeCb([open, sendEvent(gaTags.service.button.modal.explorateur.theme)])}>Thématiques</Button>
                  )}
                </Modal.Consumer>
                <Modal.Content>
                  <SubTitle><span className={styles.containerSpan}>Les</span>Xplorateurs de Sens</SubTitle>
                  <List className={styles.left}>
                    <List.Item><SubTitle small>Équilibre</SubTitle>Equilibre vie pro/perso</List.Item>
                    <List.Item><SubTitle small>Nouveau projet de vie</SubTitle>Définition et/ou mise en place d'un nouveau projet de vie</List.Item>
                    <List.Item><SubTitle small>Relations</SubTitle>Communication plus authentique et connectée à soi et aux autres</List.Item>
                    <List.Item><SubTitle small>Épanouissement pro</SubTitle>Définition et/ou clarification  de next steps professionnelles</List.Item>
                    <List.Item><SubTitle small>Transition de vie</SubTitle>Accompagnement dans une nouvelle phase de vie (nouvellement parent, confinement, licenciement...)</List.Item>
                  </List>
                  <div className={styles.containerCta}><Button to={contactPage.path} onClick={sendEvent(gaTags.service.button.modal.explorateur.contact)}>Contactez moi</Button></div>
                </Modal.Content>
              </Modal>
            </div>
          </Grid.Item>
          <Grid.Item col="0011" className={styles.container}>
            <SubTitle><span className={styles.containerSpan}>Les</span>Global Nomads</SubTitle>
            <div className={styles.containerCta}>
              <Modal>
                <Modal.Consumer>
                  {({ open }) => (
                    <Button inverse onClick={composeCb([open, sendEvent(gaTags.service.button.modal.nomad.description)])}>Qui sont-ils ?</Button>
                  )}
                </Modal.Consumer>
                <Modal.Content>
                  <SubTitle><span className={styles.containerSpan}>Les</span>Global Nomads</SubTitle>
                  <Paragraph className={styles.left}><b>Expats</b> ou <b>A-CCK</b>*,  vous vous caractérisez par une <b>vie hautement mobile</b>.</Paragraph>
                  <Paragraph className={styles.left}>Le <b>changement</b> et la <b>nouveauté</b> font partie intégrante de votre quotidien. C’est excitant mais ça comporte aussi son <b>lot de challenge: appréhender la dimension émotionnelle de la complexité culturelle</b> (intégration, adaptation constante, recherche de stabilité & de repère, chamboulement identitaire…)</Paragraph>
                  <Paragraph className={styles.left}>Autant de sujet que nous pouvons aborder ensemble pour que vous puissiez <b>profiter pleinement</b> de ces expériences multiculturelles et transformantes!</Paragraph>
                  <Paragraph className={styles.left}><small><i>* CCK (Cross Culture Kids): Enfant ayant vécu au sein de - ou interagi de façon significative avec -  deux ou plusieurs cultures au cours de ses années de formation <i>(en savoir plus <Link to="https://globallygrounded.com/third-culture-kids/" external onClick={sendEvent(gaTags.service.button.modal.nomad.cck)}>ici</Link>)</i><br/>* A-CCK: CCK devenu adulte</i></small></Paragraph>
                </Modal.Content>
              </Modal>
              <Modal>
                <Modal.Consumer>
                  {({ open }) => (
                    <Button onClick={composeCb([open, sendEvent(gaTags.service.button.modal.nomad.theme)])}>Thématiques</Button>
                  )}
                </Modal.Consumer>
                <Modal.Content>
                  <SubTitle><span className={styles.containerSpan}>Les</span>Global Nomads</SubTitle>
                  <List className={styles.left}>
                    <List.Item><SubTitle small>Arrivée & Intégration</SubTitle>Appropriation des codes culturels, organisation de sa nouvelle vie...</List.Item>
                    <List.Item><SubTitle small>Adaptation & Identité</SubTitle>Choc culturel, questions identitaires, perte de repères, sentiment d’appartenance...</List.Item>
                    <List.Item><SubTitle small>Départ & Rapatriation</SubTitle>Organisation du départ, tristesse &/ou deuil lié aux séparations humaines, à la culture...</List.Item>
                    <List.Item><SubTitle small>Relations</SubTitle>Communication interculturelle et création de synergies (pro &/ou perso)</List.Item>
                  </List>
                  <div className={styles.containerCta}><Button to={contactPage.path} onClikc={sendEvent(gaTags.service.button.modal.nomad.contact)}>Contactez moi</Button></div>
                </Modal.Content>
              </Modal>
            </div>
          </Grid.Item>
        </Grid>
      </Section>
      <Section>
        <Title centered>Ce que je vous propose</Title>
      </Section>
      <Section bgRight>
        <Grid col="3">
          <Grid.Item col="110">
            <Card>
              <SubTitle><span className={styles.step}>1. </span>L'Accompagnement</SubTitle>
              <Dropdown className={styles.dropdown}>
                <Dropdown.Trigger>
                  <SubTitle.Sub>Régulier, Approfondi et en Ligne</SubTitle.Sub>
                  <Dropdown.Closed><More /></Dropdown.Closed>
                  <Dropdown.Opened><Less /></Dropdown.Opened>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <List>
                    <List.Item>Un accompagnement sur <b>6 mois</b></List.Item>
                    <List.Item>Avec des séances <b>toutes les 2 semaines</b> environ</List.Item>
                    <List.Item>Dont les séances préliminaires et de clôture de 2H et des séances de suivi de 1H chacune - soit <b>12h de coaching au total</b></List.Item>
                    <List.Item>Sur la <b>plateforme de votre choix</b>: zoom, skype, google meet. Vous n’avez qu’à choisir!</List.Item>
                  </List>
                </Dropdown.Content>
              </Dropdown>
              <Dropdown className={styles.dropdown}>
                <Dropdown.Trigger>
                  <SubTitle.Sub>Accessible en Anglais, Espagnol ou Français</SubTitle.Sub>
                  <Dropdown.Closed><More /></Dropdown.Closed>
                  <Dropdown.Opened><Less /></Dropdown.Opened>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <List>
                    <List.Item>De nationalité Française, j’ai grandi à l’étranger et ai toujours évolué professionnellement dans des environnements internationaux  devenant ainsi bilingue <b>Espagnol & Anglais</b> (5 ans en Amérique Latine, 2 ans à Londres...).</List.Item>
                  </List>
                </Dropdown.Content>
              </Dropdown>
            </Card>
          </Grid.Item>
        </Grid>
      </Section>
      <Section bgLeft>
        <Grid col="3">
          <Grid.Item col="011">
            <Card>
              <SubTitle><span className={styles.step}>2. </span>La Coach</SubTitle>
              <Dropdown className={styles.dropdown}>
                <Dropdown.Trigger>
                  <SubTitle.Sub>Certifiée</SubTitle.Sub>
                  <Dropdown.Closed><More /></Dropdown.Closed>
                  <Dropdown.Opened><Less /></Dropdown.Opened>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <List>
                    <List.Item>Titre <b>RNCP</b> et <b>ICF</b> niveau PCC chez Coaching Ways (formation et diplôme reconnu par l’Etat)</List.Item>
                    <List.Item>Formée à la <b>CNV</b> (Communication Non Violente): modules de base et modules d’approfondissement & “Référente CNV” en entreprise</List.Item>
                  </List>
                </Dropdown.Content>
              </Dropdown>
              <Dropdown className={styles.dropdown}>
                <Dropdown.Trigger>
                  <SubTitle.Sub>Sensibilisée à vos  Enjeux</SubTitle.Sub>
                  <Dropdown.Closed><More /></Dropdown.Closed>
                  <Dropdown.Opened><Less /></Dropdown.Opened>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <List>
                    <List.Item>Un coaching pour Xplorateurs de Sens et Global Nomads <b>PAR</b> une Exploratrice de Sens et Global Nomad. (En savoir plus sur moi <Link to={aboutPage.path}>ici</Link>)<br/><br/>Ainsi, parce que je connais ces enjeux et la complexité de ces environnements, parce que j’ai traversé les <b>difficultés</b> qui vont avec, j’ai choisi d’apporter ce <b>soutien</b> à ceux qui traverse les mêmes épreuves.</List.Item>
                  </List>
                </Dropdown.Content>
              </Dropdown>
              <Dropdown className={styles.dropdown}>
                <Dropdown.Trigger>
                  <SubTitle.Sub>En posture Dynamique et Ouverte</SubTitle.Sub>
                  <Dropdown.Closed><More /></Dropdown.Closed>
                  <Dropdown.Opened><Less /></Dropdown.Opened>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <List>
                    <List.Item>Un coaching <b>énergique</b> dans un climat de <b>non-jugement</b>, voilà ce que vous pouvez attendre de moi.<br/>Capitalisant sur <b>ma personnalité dynamique</b> ainsi que mon <b>ouverture d’esprit</b> cultivée par mon style de vie mobile, je mets ces deux attributs <b>au service de nos séances et de votre objectif</b>,<br/><br/>Ce que je vous demanderais en retour: <b>un engagement sincère</b> envers votre <b>processus de croissance</b>.</List.Item>
                  </List>
                </Dropdown.Content>
              </Dropdown>
            </Card>
          </Grid.Item>
        </Grid>
      </Section>
      <Section bgRight>
        <Grid col="3">
          <Grid.Item col="110">
            <Card>
              <SubTitle><span className={styles.step}>3. </span>La Démarche</SubTitle>
              <Dropdown className={styles.dropdown}>
                <Dropdown.Trigger>
                  <SubTitle.Sub>Pragmatique, Autonomisante & tournée vers le Futur</SubTitle.Sub>
                  <Dropdown.Closed><More /></Dropdown.Closed>
                  <Dropdown.Opened><Less /></Dropdown.Opened>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <div>
                    <Paragraph>Autant vous le dire tout de suite: vous - allez - travaillez!<br/><br/>C’est dans un cadre structuré et agile à la fois que je vous propose d’évoluer pour définir <b>concrètement</b> ce que vous souhaitez et <b>comment</b> y arriver - afin que vous seul.e puissiez vous approprier votre succès.</Paragraph>
                    <List>
                      <List.Item>Une <b>Vision cible</b> et des <b>Résultats clés Mesurables</b> définis par vous lors de la séance préliminaire</List.Item>
                      <List.Item>Des séances de suivi avec des <b>Objectifs intermédiaires</b>, en mode “PPP” (plus petit pas possibles) en <b>approfondissant</b> les sujets de votre choix</List.Item>
                      <List.Item>Des prises de recul régulières pour reconnaître et célébrer vos <b>avancements</b></List.Item>
                    </List>
                  </div>
                </Dropdown.Content>
              </Dropdown>
            </Card>
          </Grid.Item>
        </Grid>
      </Section>
      <Section margin>
        <Hero grey>
          <Hero.Title>Curieux.se d’échanger?</Hero.Title>
          <Hero.Content><Button to={contactPage.path} onClick={sendEvent(gaTags.service.button.banner.contact)}>Contactez moi</Button></Hero.Content>
        </Hero>
      </Section>
      <Section bgLeft>
        <Grid col="3">
          <Grid.Item col="011">
            <Card>
              <Title>Pourquoi vous offrir ce coaching?</Title>
              <Paragraph noTopMargin>A l'issue de ce coaching, imaginez vous avec…</Paragraph>
              <SubTitle>Une vision claire</SubTitle>
              <Paragraph noTopMargin>et peut être nouvelle ou différente, de <b>là où vous êtes</b> et ce que vous <b>souhaitez faire évoluer</b> dans votre vie</Paragraph>
              <SubTitle>Une meilleure connaissance</SubTitle>
              <Paragraph noTopMargin>des <b>forces et ressources</b> à votre disposition, de votre <b>environnement</b>, de vos propres <b>réactions & émotions</b></Paragraph>
              <SubTitle>Des plans d’actions</SubTitle>
              <Paragraph noTopMargin><b>adaptés</b> à vous, <b>crées par vous</b> avec lesquels vous vous sentez <b>à l'aise</b> et <b>actionnables</b> dans un lapse de temps que vous aurez fixé</Paragraph>
              <SubTitle>De multiples apprentissages</SubTitle>
              <Paragraph noTopMargin>que vous aurez acquis au travers de nombreuses <b>expérimentations</b> et qui vous aurons progressivement <b>amenés vers</b> votre objectif de départ.</Paragraph>
              <SubTitle>Apaisé.e, Confiant.e & Convaincu.e</SubTitle>
              <Paragraph noTopMargin>de vos <b>forces</b> et de votre capacité à <b>réussir</b> ce que vous entreprenez</Paragraph>
            </Card>
          </Grid.Item>
        </Grid>
      </Section>
      <Section margin noTopMargin>
        <Hero>
          <Hero.Title>Ce qu’il.elle.s en ont pensé</Hero.Title>
          <Slider>
            <Slider.Item className={styles.quote}>"Ta bienveillance, la pertinence de ton questionnement, ton état d'esprit positif, ton esprit de synthèse et un calme rassurant."</Slider.Item>
            <Slider.Item className={styles.quote}>"Merci Marie. Gardez votre sérénité et votre simplicité, votre ouverture."</Slider.Item>
            <Slider.Item className={styles.quote}>"Ce que j’ai le plus apprécié:<br/>de m’avoir poussé dans mes retranchements!"</Slider.Item>
            <Slider.Item className={styles.quote}>"Les séances de coaching m'ont permis plus de confiance en moi pour atteindre de mes objectifs"</Slider.Item>
            <Slider.Item className={styles.quote}>"Prendre le temps de réfléchir sur moi, casser mes croyances et mes peurs, faire de l’introspection, me connaître mieux…"</Slider.Item>
            <Slider.Item className={styles.quote}>"Ce que j’ai le plus apprécie: Les questionnements qui déclenchent des réflexions indispensables ou débloquent certains points de stagnation, la mesure de l'évolution de l'état d'esprit avec le système des échelles, le travail sur les valeurs"</Slider.Item>
            <Slider.Item className={styles.quote}>"Cet accompagnement m'a permis de trouver des ressources et des solutions internes et surtout de passer outre mes peurs et mes projections négatives pour faire des choix avec lesquels je me sens alignée."</Slider.Item>
            <Slider.Item className={styles.quote}>"Facilité à mettre à l'aise et à reformuler tout en me mettant dans mes propres contradictions ou croyances, capacité à créer du lien, à rassurer. Pas que écouter mais aussi participer"</Slider.Item>
          </Slider>
        </Hero>
      </Section>
      <Section bgLeft>
        <Grid col="3">
          <Grid.Item col="011">
            <Card>
              <Title>Alors ?</Title>
              <Paragraph>Quelle pelote d'expérience choisirez vous pour initier votre voyage?<br/>Sur quel fil de vos ressources tirerez vous pour tisser votre Patchwork?</Paragraph>
              <Paragraph>Découvrons le ensemble, <b>Dessinez moi votre Patchwork!</b></Paragraph>
              <div className={styles.cta}>
                <Button to={contactPage.path} onClick={sendEvent(gaTags.service.button.contact)}>Contactez moi</Button>
                <Button to={aboutPage.path} onClick={sendEvent(gaTags.service.button.about)}>Un peu de moi</Button>
              </div>
            </Card>
          </Grid.Item>
        </Grid>
      </Section>
    </div>
  );
};

export default Service;

