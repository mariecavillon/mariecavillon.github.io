import React from 'react';
import cn from 'classnames';

import { More, Less, Dropdown, Card, Grid, Paragraph, Title, SubTitle, Section, Button, Link } from '~atoms';
import { contactPage } from '~routes';

import styles from './styles.scss';

export const About = () => (
  <div className={styles.page}>
    <Section marie>
      <Grid col="3">
        <Grid.Item col="011">
          <Card>
            <Title>Bonjour, moi c'est Marie</Title>
            <Paragraph>J'ai grandi, vécu et travaillé à l'<b>étranger</b> toute ma vie (9 pays différents à mon actif, sur 6 continents!), ce qui fait également de moi une CCK*!, et a influencé qui je suis et les projets que j’entreprends.<br/><br/><small><i>* CCK (Cross Culture Kid): Enfant ayant vécu au sein de - ou interagi de façon significative avec -  deux ou plusieurs cultures au cours de ses années de formation (en savoir plus <Link to="https://globallygrounded.com/third-culture-kids/">ici</Link>)</i></small></Paragraph>
            <SubTitle>Entre Diversité & Curiosité de l’être humain</SubTitle>
            <Paragraph>J’ai débuté ma carrière dans l’<b>accompagnement d’entreprises</b>, sur des sujets de transformation digital, sur des projets très variés et dans des environnements toujours challengeants & innovants - en agence, puis en conseil, pour finir en start-up /scale-up.</Paragraph>
            <Paragraph>C’est en suivant cette envie intérieure forte, et fort du constat que nous sommes nombreux à accepter les status quo en limitant ainsi nos options de développement et de réalisation, que j’ai souhaité approfondir ma connaissance de la psychologie et du développement humain et que je suis maintenant <b>Coach certifiée</b> depuis Septembre 2020 (titre RNCP - reconnu par l'Etat - et ICF niveau PCC), avec près de <b>100 heures de pratique</b> à mon actif.</Paragraph>
          </Card>
        </Grid.Item>
      </Grid>
    </Section>
    <Section bgRight>
      <Grid col="4">
        <Grid.Item col="1110">
          <Card>
            <SubTitle>“Building Bridges to Unlock Potentials”</SubTitle>
            <Paragraph>Ainsi, ce qui me drive aujourd’hui c’est d’accompagner les personnes à <b>construire des ponts</b> pour <b>libérer</b> tous ces <b>potentiels</b>, tous ces <b>nouveaux possibles</b> <i>“en attente”</i>.</Paragraph>
            <Paragraph>-- Qu’il s’agissent de ponts entre soi et soi, entre soi et autrui ou entre projets ou expertises différentes,<br/>-- Qu’ils s’agissent de libérer des compétences ou des relations, en entreprise ou auprès de particuliers, ou même de libérer de nouvelles idées,</Paragraph>
            <Paragraph>J’aspire, à <b>relier</b> toutes ces <b>singularités</b> pour que chacun puisse en ressortir <b>potentialisé, augmenté</b>.</Paragraph>
            <Paragraph>C’est cela, qui m’inspire aujourd’hui.</Paragraph>
          </Card>
        </Grid.Item>
      </Grid>
    </Section>
    <Section bgLeft>
      <Grid col="4">
        <Grid.Item col="0111">
          <Card>
            <SubTitle>Mon Patchwork à moi...</SubTitle>
            <Dropdown className={styles.dropdown}>
              <Dropdown.Trigger>
                <SubTitle.Sub>La Diversité & la Multiculturalité comme Ressource</SubTitle.Sub>
                <Dropdown.Closed><More /></Dropdown.Closed>
                <Dropdown.Opened><Less /></Dropdown.Opened>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <div>
                  <Paragraph>Ayant appris a évoluer dès mon plus jeune âge dans des <b>contextes pluri-culturels</b> avec souvent des systèmes de valeur différents, j’ai fait de cette appréhension de la différence une force.<br/>En développant ma tolérance, m’épanouissant ensuite professionnellement dans des environnements changeants, jonglant parmis des cultures d’entreprises différentes en tant que consultante, reliant des expertises distinctes entre elles via des postes transverses ou en construisant des équipes pluridisciplinaires en cultivant l’unicité de chacun.</Paragraph>
                  <Paragraph>Ainsi, ma capacité à appréhender des environnements, contextes et personnalités diverses me permet <b>tolérance, respect, non jugement et ouverture d’esprit</b> sur les problématiques et enjeux de chacun.<br/>C’est également cette expérience qui me permet de vous accompagner en tant que Global Nomad ou Explorateur de Sens, puisque j’ai moi fait face aux même <b>Enjeux</b>.</Paragraph>
                </div>
              </Dropdown.Content>
            </Dropdown>
            <Dropdown className={styles.dropdown}>
              <Dropdown.Trigger>
                <SubTitle.Sub>L’Empathie comme Compétence</SubTitle.Sub>
                <Dropdown.Closed><More /></Dropdown.Closed>
                <Dropdown.Opened><Less /></Dropdown.Opened>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Paragraph>Intégrer cette diversité et cette différence dans la compréhension du monde qui m’entoure m’a de facto amené à développer mes capacités d’empathie, pour, à la fois m’adapter étant plus jeune, et maintenant <b>me relier aux autres</b> - qu’ils aient la même culture ou non - et ainsi construire des relations plus “connectées”.<br/>Je mets aujourd’hui à profit cette compétence au service de nos séances.</Paragraph>
              </Dropdown.Content>
            </Dropdown>
            <Dropdown className={styles.dropdown}>
              <Dropdown.Trigger>
                <SubTitle.Sub>L’Energie comme Talent</SubTitle.Sub>
                <Dropdown.Closed><More /></Dropdown.Closed>
                <Dropdown.Opened><Less /></Dropdown.Opened>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Paragraph>Dynamique, active, déterminée - voici quelques adjectifs que mes proches ou anciens collègues utilisent pour me décrire.<br/>Investie dans ce que j’entreprends, je puise dans cette <b>vitalité</b> pour vous accompagner de la manière la plus adéquate et personnalisée en m’<b>ajustant à vos besoins</b>.</Paragraph>
              </Dropdown.Content>
            </Dropdown>
            <Dropdown className={styles.dropdown}>
              <Dropdown.Trigger>
                <SubTitle.Sub>La Transformation comme Perspective</SubTitle.Sub>
                <Dropdown.Closed><More /></Dropdown.Closed>
                <Dropdown.Opened><Less /></Dropdown.Opened>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Paragraph>Aussi loin que je me souvienne le <b>changement, la métamorphose ou le développement</b> d’une idée, d’un projet, d’une personne ou tout simplement d’un potentiel quelqu’il soit m’a toujours fasciné.<br/>Commençant par l’accompagnement d’entreprise dans leur innovation et l’utilisation du digital au service de leur mission, je souhaite maintenant accompagner des personnes dans leur propre Transformation.</Paragraph>
              </Dropdown.Content>
            </Dropdown>
          </Card>
        </Grid.Item>
      </Grid>
    </Section>
    <Grid col="1">
      <Grid.Item col="1" className={styles.cta}><Button to={contactPage.path}>Contactez moi</Button></Grid.Item>
    </Grid>
  </div>
);

export default About;

