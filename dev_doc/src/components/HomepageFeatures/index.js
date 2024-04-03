import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'API documentation',
    Svg: require('@site/static/img/undraw_code_thinking_re_gka2.svg').default,
    description: (
      <>
        Start here to get a better understanding of how to use our API.
      </>
    ),

  },
  {
    title: 'Swagger collection',
    Svg: require('@site/static/img/swagger-svgrepo-com.svg').default,
    description: (
      <>
       Direct access to our Swagger collection.
      </>
    ),
  },
  {
    title: 'Postman collection',
    Svg: require('@site/static/img/postman-icon-svgrepo-com.svg').default,
    description: (
      <>
        Download our Postman collection to get started.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
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
