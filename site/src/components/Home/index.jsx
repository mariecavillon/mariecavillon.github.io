import React from 'react';
import cn from 'classnames';

import { BgImage, Card, Dropdown, Grid, PageContainer, Paragraph, Button, Section, Title, SubTitle, More, Less, List, Hero, Modal, Slider, Link, Animate } from '~atoms';
import { aboutPage, contactPage } from '~routes';

import styles from './styles.scss';

export const Home = () => (
  <>
    <Section bg home>
      <div className={styles.titleWrapper}>
        <div className={styles.titleText}>
          <h1 className={styles.title}>
            <span className={styles.titleBig}>Dessine moi un PatchWork</span>
            <span>L’Art d’assembler des Expériences de vies pour libérer de Nouveaux Possibles</span>
          </h1>
        </div>
      </div>
    </Section>
    <Grid col="1">
      <Grid.Item col="1">
        <p className={cn(styles.wrapper, styles.hero)}>Le <strong>coaching en ligne</strong> trilingue<br /> des <strong>Explorateurs de Sens</strong> & <strong>Global Nomads</strong></p>
      </Grid.Item>
    </Grid>
    <Section bgRight>
      <Grid col="5">
        <Grid.Item col="11100">
          <Card>
            <Title noMargin>Ce en quoi je crois ?</Title>
            <SubTitle>Permettre à chacun de Pouvoir Influencer sa vie</SubTitle>
              <List>
                <List.Item>Développer sa capacité à <b>compter sur soi</b></List.Item>
                <List.Item>Prendre conscience de son <b>pouvoie d'action</b></List.Item>
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
            <Title noMargin>Ma vision pour y arriver ?</Title>
            <SubTitle>Le coaching comme un Atelier d’Assemblage en perpétuelle évolution</SubTitle>
            <SubTitle.Sub>Ma conviction: “Comme un Patchwork, nous tissons notre Vie, récit par récit, reliant nos Expériences par le fil de nos Apprentissages”</SubTitle.Sub>
            <Paragraph>Mon expérience atypique riche en <b>diversité & multiculturalité</b> (en savoir plus sur moi <Link to={aboutPage.path}>ici!</Link>) m’a amené à avoir une lecture du monde multiple, dynamique et non linéaire - ouvrant le champ des possibles.<br/>A l’instar d’un patchwork, j’ai donc tissé mon parcours et mon identité, avec des morceaux, tous très différents, mais tous uniques, utiles et singuliers.</Paragraph>
            <Paragraph>C’est dans cet état d’esprit que je souhaite vous accompagner.</Paragraph>
            <Paragraph><strong className={styles.exceptionSubtitle}>Déployons, ensemble, votre potentiel & votre nouveau Patchwork en s’appuyant sur ces expériences de vies,</strong><br/>Celles qui ont compté pour vous, vous ont aidé ou celles qui ont été source d'<b>apprentissage</b> et qui recèlent de ressources insoupçonnées pour <b>transformer positivement votre présent</b>.</Paragraph>
          </Card>
        </Grid.Item>
      </Grid>
    </Section>
    <Section bgTop>
      <Grid col="1">
        <Title centered className={styles.marginTop}>A qui je m'adresse ?</Title>
      </Grid>
      <Grid col="4">
        <Grid.Item col="1100" className={styles.container}>
          <SubTitle><span className={styles.containerSpan}>Les</span>Xplorateurs de Sens</SubTitle>
          <div className={styles.containerCta}>
            <Modal>
              <Modal.Consumer>
                {({ open }) => (
                  <Button inverse onClick={open}>Qui sont-ils ?</Button>
                )}
              </Modal.Consumer>
              <Modal.Content>
                <SubTitle><span className={styles.containerSpan}>Les</span>Xplorateurs de Sens</SubTitle>
                <Paragraph className={styles.left}><b>Investi.e</b>, et <b>soucieux.se des autres</b>, vous souhaitez être au top à tous les niveaux - pro ou perso.</Paragraph>
                <Paragraph className={styles.left}>Votre <b>équilibre</b> et/ou votre <b>besoin d'épanouissement</b> est vital pour vous et il vous arrive d’avoir un peu le <b>vertige entre tous vos engagements</b> et de ne plus savoir ou donner de la tête...</Paragraph>
                <Paragraph className={styles.left}>Que vous soyez en <b>quête d’une nouvelle Direction</b> pro ou perso, de <b>Clarification</b> dans vos choix et décisions, d’ <b>Alignement</b> avec vos Valeurs internes ou de découverte et d’<b>Aventures nouvelles</b>, ce coaching est vous fait pour si vous êtes en quête de Changements et que vous souhaitez <b>remettre en question votre Status quo</b>.</Paragraph>
              </Modal.Content>
            </Modal>
            <Modal>
              <Modal.Consumer>
                {({ open }) => (
                  <Button onClick={open}>Thématiques phares</Button>
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
                <div className={styles.containerCta}><Button to={contactPage.path}>Contactez moi</Button></div>
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
                  <Button inverse onClick={open}>Qui sont-ils ?</Button>
                )}
              </Modal.Consumer>
              <Modal.Content>
                <SubTitle><span className={styles.containerSpan}>Les</span>Global Nomads</SubTitle>
                <Paragraph className={styles.left}><b>Xpats</b> ou <b>A-CCK</b>*,  vous vous caractérisez par une <b>vie hautement mobile</b>.</Paragraph>
                <Paragraph className={styles.left}>Le <b>changement</b> et la <b>nouveauté</b> font partie intégrante de votre quotidien. C’est excitant mais ça comporte aussi son <b>lot de challenge: appréhender la dimension émotionnelle de la complexité culturelle</b> (intégration, adaptation constante, recherche de stabilité & de repère, chamboulement identitaire…)</Paragraph>
                <Paragraph className={styles.left}>Autant de sujet que nous pouvons aborder ensemble pour que vous puissiez <b>profiter pleinement</b> de ces expériences multiculturelles et transformantes!</Paragraph>
                <Paragraph className={styles.left}><small><i>* CCK: Enfant ayant vécu au sein de - ou interagi de façon significative avec -  deux ou plusieurs cultures au cours de ses années de formation (dix-huit premières années de vie)<br/>* A-CCK: CCK devenu adulte</i></small></Paragraph>
              </Modal.Content>
            </Modal>
            <Modal>
              <Modal.Consumer>
                {({ open }) => (
                  <Button onClick={open}>Thématiques phares</Button>
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
                <div className={styles.containerCta}><Button to={contactPage.path}>Contactez moi</Button></div>
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
                  <List.Item><b>RNCP</b> et <b>ICF</b> <b>niveau PCC</b> chez Coaching Ways</List.Item>
                  <List.Item>Formée à la <b>CNV</b> (modules de base et modules d’approfondissement) & “Référente CNV” en entreprise</List.Item>
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
                <strong>Pragmatique, Autonomisante & tournée vers le Futur</strong>
                <Dropdown.Closed><More /></Dropdown.Closed>
                <Dropdown.Opened><Less /></Dropdown.Opened>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <div>
                  <Paragraph>Autant vous le dire tout de suite: VOUS - allez - travaillez!<br/><br/>C’est dans un cadre structuré et agile à la fois que je vous propose d’évoluer pour définir <b>concrètement</b> ce que vous souhaitez et <b>comment</b> y arriver - afin que vous seul puissiez vous approprier votre succès.</Paragraph>
                  <List>
                    <List.Item>Une approche proche des “<b>OKR</b>” (pour les fins connaisseurs ;) ) avec une <b>Vision cible Séduisante</b> et des <b>Résultats clés Mesurables</b> définis par VOUS lors de la séance préliminaire</List.Item>
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
        <Hero.Content><Button to={contactPage.path}>Contactez moi</Button></Hero.Content>
      </Hero>
    </Section>
    <Section bgLeft>
      <Grid col="3">
        <Grid.Item col="011">
          <Card>
            <Title>Pourquoi vous offrir ce coaching?</Title>
            <Paragraph noTopMargin>A l'issue de ce coaching, imaginez vous avec…</Paragraph>
            <SubTitle>Une vision claire</SubTitle>
            <Paragraph noTopMargin>et peut être nouvelle ou différente, de <b>la ou vous êtes</b> et ce que vous <b>souhaitez faire évoluer</b> dans votre vie</Paragraph>
            <SubTitle>Une meilleure connaissance</SubTitle>
            <Paragraph noTopMargin>des <b>forces et ressources</b> à votre disposition, de votre <b>environnement</b>, de vos propres <b>réactions & émotions</b></Paragraph>
            <SubTitle>Des plans d’actions</SubTitle>
            <Paragraph noTopMargin><b>adaptés</b> à vous, <b>crées par vous</b> (eh oui, c'est vous qui bossez!) avec lesquels vous vous sentez <b>à l'aise</b> et <b>ACTIONNABLES</b>, dans un lapse de temps que vous aurez fixé (puisque c'est vous qui les aurez imaginez ;) )</Paragraph>
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
        <Hero.Title>Ce qu’ils en ont pensé</Hero.Title>
        <Slider>
          <Slider.Item className={styles.quote}>"Ta bienveillance, la pertinence de ton questionnement, ton état d'esprit positif, ton esprit de synthèse et un calme rassurant."</Slider.Item>
          <Slider.Item className={styles.quote}>"Merci Marie. Gardez votre sérénité et votre simplicité, votre ouverture."</Slider.Item>
          <Slider.Item className={styles.quote}>"Ce que j’ai le plus apprécié:<br/>de m’avoir poussé dans mes retranchements!"</Slider.Item>
          <Slider.Item className={styles.quote}>"Les séances de coaching m'ont permis plus de confiance en moi pour atteindre de mes objectifs"</Slider.Item>
          <Slider.Item className={styles.quote}>"Prendre le temps de réfléchir sur moi, casser mes croyances et mes peurs, faire de l’introspection, me connaître mieux…"</Slider.Item>
          <Slider.Item className={styles.quote}>"Ce que j’ai le plus apprécie: Les questionnements qui déclenchent des réflexions indispensables ou débloquent certains points de stagnation, la mesure de l'évolution de l'état d'esprit avec le système des échelles, le travail sur les valeurs"</Slider.Item>
          <Slider.Item className={styles.quote}>"Cet accompagnement m'a permis de trouver des ressources et des solutions internes et surtout de passer outre mes peurs et mes projections négatives pour faire des choix avec lesquels je me sens alignée."</Slider.Item>
          <Slider.Item className={styles.quote}>"Facilité à mettre à laiSe et à reformuler tout en me mettant dans mes propres contradictions ou croyances, capacité à créer du lien, à rassurer. Pas que écouter mais aussi participer"</Slider.Item>
        </Slider>
      </Hero>
    </Section>
    <Section bgLeft>
      <Grid col="3">
        <Grid.Item col="011">
          <Card>
            <Title>Alors ?</Title>
            <Paragraph>Quel pelote d'expérience choisirez vous pour initier votre voyage?<br/>Sur quel fil de vos ressources tirerez vous pour tisser votre PatchWork?</Paragraph>
            <Paragraph>Découvrons le ensemble, <b>Dessinez moi votre PatchWork!</b></Paragraph>
            <div className={styles.cta}>
              <Button to={contactPage.path}>Contactez moi</Button>
              <Button to={aboutPage.path}>En savoir plus sur moi</Button>
            </div>
          </Card>
        </Grid.Item>
      </Grid>
    </Section>
  </>
);

export default Home;
