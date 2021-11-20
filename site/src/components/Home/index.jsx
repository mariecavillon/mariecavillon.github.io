import React, { useCallback } from 'react';
import cn from 'classnames';

import { BgImage, Card, Dropdown, Grid, PageContainer, Paragraph, Button, Section, Title, SubTitle, More, Less, List, Hero, Modal, Slider, Link, Animate, Quote } from '~atoms';
import { servicePage, aboutPage, contactPage } from '~routes';

import styles from './styles.scss';

export const Home = () => {
  return (
    <>
      <Section bg home>
        <div className={styles.titleWrapper}>
          <div className={styles.titleText}>
            <h1 className={styles.title}>
              <span className={styles.titleBig}>Le Coaching Digital Trilingue</span>
              <span>des Explorateurs de Sens & Global Nomads</span>
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
              <Title noMargin>Permettre à chacun de pouvoir influencer sa vie</Title>
                <Paragraph className={styles.paragraphWithoutBottomMargin}>Libérez votre conscience de vous et votre pouvoir d'agir</Paragraph>
                <List>
                  <List.Item>Développer sa capacité à <b>compter sur soi</b></List.Item>
                  <List.Item>Prendre conscience de son <b>pouvoir d'action</b></List.Item>
                  <List.Item>Découvrir ses <b>propres forces</b> dissimulées dans ses défauts ou ses symptômes</List.Item>
                  <List.Item>Diversifier la <b>lecture</b> de ses différentes <b>expériences de vies</b></List.Item>
                  <List.Item>Imaginer ce que pourrait être <b>demain</b> pour impacter aujourd'hui</List.Item>
                  <List.Item><b>Expérimenter</b> par soi même pour trouver ses propres solutions et libérer sa capacité d'agir</List.Item>
                </List>
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
              <Paragraph>Mon expérience atypique riche en <b>diversité & multiculturalité</b> (en savoir plus sur moi <Link to={aboutPage.path}>ici&nbsp;!</Link>) m’a amenée à avoir une lecture du monde multiple, dynamique et non linéaire - ouvrant le champ des possibles.<br/>A l’instar d’un patchwork, j’ai donc tissé mon parcours et mon identité, avec des morceaux, tous très différents, mais tous uniques, utiles et <b>singuliers</b>.</Paragraph>
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
            <Button to={servicePage.path}>Mes services</Button>
            <Button to={aboutPage.path}>Un peu de moi</Button>
            <Button to={contactPage.path}>Contactez moi</Button>
          </Hero.Content>
        </Hero>
      </Section>
    </>
  );
};

export default Home;
