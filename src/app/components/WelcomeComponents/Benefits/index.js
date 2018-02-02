import React from 'react';
import Particles from 'react-particles-js';

import * as styles from './styles.css';
import ParticleConfig from './particlesjs-config.json';

import MoreButton from '../../MoreButton';
import BenefitLists from '../../../components/BenefitList';
import StarTrail from '../../StarTrail';

class BenefitsSection extends React.Component {
  render() {
    const title = ['wow fadeInLeft animated', styles.title].join(' ');
    const subTitle = ['wow fadeInLeft animated text-left ', styles.subTitle].join(' ');
    const sectionDescription = ['mt-2 text-left text-white', styles.section_description].join(' ');
    const polgyonContainer = ['row', styles.polygonContainer].join(' ');

    return (
      <section id="benefits_section" className="call-to-section benefits_section">
        <div className="container-fluid">
          <div className={polgyonContainer}>
            <div className="col-md-6 offset-md-6 col-sm-12">
              <Particles
                params={ParticleConfig}
                height={600}
              />
            </div>
          </div>
          <div className="row">
            <div className={styles.star_trail_container}>
              <StarTrail />
            </div>
            <div className="col-md-10 offset-md-1 col-sm-12">
              <div className={title}>OUR <br /> BENEFITS</div>
              <div className={subTitle}>
                <div>OUR <br /> BENEFITS</div>
                <div className="row mr-0">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <p className={sectionDescription}>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit  odio s eu felis</p>
                  </div>
                </div>
                <MoreButton label="learn more" />
              </div>
            </div>
          </div>
          <BenefitLists rootClass={'row benefits'} />
        </div>
      </section>
    );
  }
}

export default BenefitsSection;
