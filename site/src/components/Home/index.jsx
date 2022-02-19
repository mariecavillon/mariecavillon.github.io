import React, { useCallback } from 'react';
import cn from 'classnames';

import { BgImage, Card, Dropdown, Grid, PageContainer, Paragraph, Button, Section, Title, SubTitle, More, Less, List, Hero, Modal, Slider, Link, Animate, Quote } from '~atoms';
import { servicePage, aboutPage, contactPage } from '~routes';
import { useGa } from '~hooks';
import gaTags from '~tags';

import styles from './styles.scss';

export const Home = () => {
  const [_, sendEvent] = useGa();

  return (
    <>
      <Section bg home>
        <div className={styles.titleWrapper}>
          <div className={styles.titleText}>
            <h1 className={styles.title}>
              <span className={styles.titleBig}> Accueillez votre Transformation Culturelle</span>
              <span>pour les Organisations et les Individus<br/>avides de Changement et de Diversité</span>
            </h1>
          </div>
        </div>
      </Section>
      <Grid col="1">
        <Grid.Item col="1">
          <p className={cn(styles.wrapper, styles.hero)}>L’art d’<strong>assembler</strong> des <strong>expériences de vies</strong><br/>pour libérer de <strong>nouveaux possibles</strong></p>
        </Grid.Item>
      </Grid>
      <Section bgRight>
        <Grid col="5">
          <Grid.Item col="11100">
            <Card>
              <Title noMargin>Le Changement & la Diversité sont devenus des réalités quotidiennes</Title>
              <Paragraph>La Transformation ou l'intégration de ces nouvelles variables que sont le Changement et la Diversité est <b>affaire d’engagement réciproque</b>.</Paragraph>
              <Paragraph>Il y a interaction & coexistence à différents niveaux. chaque parts de nous, chaque entité, équipe, métier, être humain, organisation possède une culture différente, des <b>référentiels complexes et multiples</b>.</Paragraph>
              <Paragraph>Toute la valeur du travail en Transformation est de permettre une mise en commun de ces richesses, de trouver un terrain commun de rencontres.</Paragraph>
              <Paragraph>L’Objectif n’est pas de sommer et de tout uniformiser mais de <b>faire émerger une unité de la diversité</b> - qu’elle soit Intérieure, au niveau individuel ou Organisationnelle.</Paragraph>
            </Card>
          </Grid.Item>
        </Grid>
      </Section>
      <Section bgLeft>
        <Grid col="4">
          <Grid.Item col="0111">
            <Card>
              <Title noMargin>Le coaching comme un Atelier d’assemblage en perpétuelle évolution</Title>
              <Paragraph>Ma conviction: <Quote>Comme un Patchwork, nous tissons notre Vie, récit par récit, reliant nos Expériences par le fil de nos Apprentissages</Quote></Paragraph>
              <Paragraph>Mon expérience atypique riche en <b>diversité & multiculturalité</b> (en savoir plus sur moi <Link to={aboutPage.path} onClick={sendEvent(...gaTags.home.link.about)}>ici</Link>&nbsp;!) m’a amenée à avoir une lecture du monde multiple, dynamique et non linéaire - ouvrant le champ des possibles.<br/>A l’instar d’un patchwork, j’ai donc tissé mon parcours et mon identité, avec des morceaux, tous très différents, mais tous uniques, utiles et <b>singuliers</b>.</Paragraph>
              <Paragraph>C’est dans cet état d’esprit que je souhaite vous <b>accompagner</b>.</Paragraph>
              <Paragraph><b>Déployons</b>, ensemble, votre <b>potentiel</b> & votre Patchwork en s’appuyant sur ces expériences de vies, Celles qui ont compté pour vous, vous ont aidé ou celles qui ont été source d'<b>apprentissage</b> et qui recèlent de ressources insoupçonnées pour <b>transformer positivement votre présent</b>.</Paragraph>
            </Card>
          </Grid.Item>
        </Grid>
      </Section>
      <Section margin>
        <Hero grey>
          <Hero.Title>Vous souhaitez en savoir plus ?</Hero.Title>
          <Hero.Content horizontal>
            <Button to={servicePage.path} onClick={sendEvent(...gaTags.home.button.service)}>Mes services</Button>
            <Button to={aboutPage.path} onClick={sendEvent(...gaTags.home.button.about)}>Un peu de moi</Button>
            <Button to={contactPage.path} onClick={sendEvent(...gaTags.home.button.contact)}>Contactez moi</Button>
          </Hero.Content>
        </Hero>
      </Section>
    </>
  );
};

export default Home;
