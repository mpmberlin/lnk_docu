import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import con from '/config.json';

const swagger=con.urls.checklynx_app
const FeatureList = [
  {
    title: 'API Documentation',
    Svg: require('@site/static/img/code_thinking.svg').default,
    description: (
      <>
        Learn how to use the API
      </>
    ),
    link: '/docs/intro', // Internal link

  },
  {
    title: 'Swagger',
    Svg: require('@site/static/img/swagger-svgrepo-com.svg').default,
    description: (
      <>
       Visit Swagger API definition.
      </>
    ),
    link: con.urls.swagger_url, // External link
    isExternal: true, // Flag to indicate an external link
  },
  {
    title: 'Postman',
    Svg: require('@site/static/img/postman-icon-svgrepo-com.svg').default,
    description: (
      <>
        Visit Postman API collection.
      </>
    ),
    link: con.urls.postman_url, // External link
    isExternal: true, // Flag to indicate an external link
  },
];

function Feature({ Svg, title, description, link, isExternal }) {
  // Choose the correct element based on whether the link is internal or external
  const Wrapper = isExternal ? 'a' : Link;
  // Set properties for the wrapper element
  const wrapperProps = isExternal
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : { to: link };

  return (
    <Wrapper {...wrapperProps} className={clsx('col col--4', styles.featureItem)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
      <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
      <p className={styles.featureDescription}>{description}</p>
      </div>
    </Wrapper>
  );
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
