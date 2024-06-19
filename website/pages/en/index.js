/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/gifcafe.gif`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('doc1.html')}>Sobre Nós</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Confira nossos deliciosos Frappuccinos</h2>
        <MarkdownBlock>Conheça um poquinho da história dos nossos campeões em vendas dos melhores frappuccinos do brasil!</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'Esta maravilha refrescante está disponível por tempo limitado, então não perca a oportunidade de experimentá-la. Venha ao nosso café e deixe-se envolver pela magia refrescante do Frappuccino Verde de Menta. Quando você provar o nosso Frappuccino Verde de Menta, entenderá por que ele é tão especial. É uma explosão refrescante de sabor que vai encantar os seus sentidos e fazer você desejar mais a cada gole. Venha e experimente essa delícia hoje mesmo!', 
            image: `${baseUrl}img/verdepequeno.png`,
            imageAlign: 'left',
            title: 'Frappuccino Cactus',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'Esta maravilha de doçura está disponível por tempo limitado, então não perca a oportunidade de experimentá-la. Venha ao nosso café e permita-se apaixonar-se pelo sabor irresistível do Frappuccino Branco com Calda de Doce de Leite. Quando você provar o nosso Frappuccino Branco com Calda de Doce de Leite, descobrirá por que ele é tão especial. É uma experiência de doçura e suavidade que vai fazer você desejar mais a cada gole. Venha e desfrute desta delícia hoje mesmo!',
              image: `${baseUrl}img/brancopequeno.png`,
            imageAlign: 'right',
            title: 'Frappuccino Caramelo',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Não perca a chance de experimentar esta maravilha de sabor. Nosso Frappuccino Rosa está disponível por tempo limitado, então corra para o nosso café e deixe-se seduzir por esta tentação rosada. Quando você provar o nosso Frappuccino Rosa, vai descobrir por que ele é muito mais do que apenas uma bebida - é uma experiência deliciosa que vai conquistar o seu coração e paladar!',
            image: `${baseUrl}img/cafepequeno.png`,
            imageAlign: 'right',
            title: 'Vai um Frappuccino ai ?'    
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Variações de sabores',
            image: `${baseUrl}img/cafemarrom.png`,
            imageAlign: 'top',
            title: 'Sabores diversificados',
          },
          {
            content: 'Delicioso e viciante',
            image: `${baseUrl}img/cafeeee.png`,
            imageAlign: 'top',
            title: 'Os melhores sabores só aqui!',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Novidades em breve...</h2>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              Não clique em {siteConfig.title}
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
