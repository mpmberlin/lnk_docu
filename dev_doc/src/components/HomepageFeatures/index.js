import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const FeatureList = [
  {
    title: 'API documentation',
    Svg: require('@site/static/img/undraw_code_thinking_re_gka2.svg').default,
    description: (
      <>
        Start here to get a better understanding of how to use our API.
      </>
    ),
    link: '/docs/intro', // Internal link

  },
  {
    title: 'Swagger collection',
    Svg: require('@site/static/img/swagger-svgrepo-com.svg').default,
    description: (
      <>
       Go to the Swagger API definition.
      </>
    ),
    link: 'https://swagger.io/tools/swagger-ui/', // External link
    isExternal: true, // Flag to indicate an external link
  },
  {
    title: 'Postman collection',
    Svg: require('@site/static/img/postman-icon-svgrepo-com.svg').default,
    description: (
      <>
        Download our Postman collection.
      </>
    ),
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
