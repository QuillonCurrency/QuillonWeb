import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { makeSelectRoadmaps, makeActiveRoadmap } from './selectors';
import * as actions from './actions';
import * as styles from './styles.css';

import RoadNode from '../../RoadmapSelection';
import RoadmapShow from '../../RoadmapShow';

import roadmap_line from '../../../../assets/images/roadmap_line.png';

class RoadmapSection extends React.Component{

  static createRoadmapItems(roadmaps, roadmapClick) {
    // console.log(this.props.roadmaps);
    return roadmaps.map((roadmap) => (
      <RoadNode key={roadmap.id} roadmap={roadmap} handleClick={roadmapClick} />
    ));
  }

  render() {
    const title = ["wow fadeInLeft animated", styles.roadmapTitle].join(" ");
    const subTitle = ["wow fadeInUp  animated", styles.roadmapSubTitle].join(" ");
    const subTitleDetail = [styles.subTitleDetail].join(" ");

    const { roadmaps, roadmapClick, activeRoadmap} = this.props;
    return(
      <section id="roadmap_section">
        <div className={title}>
          ROAD MAP
        </div>
        <div>
          <div className={subTitle}>
            ROAD MAP
          </div>
          <div className={subTitleDetail}>
            quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh im
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className={styles.main}>
              <img className={styles.roadmap_line} width="1200" src={roadmap_line}/>
              {RoadmapSection.createRoadmapItems(roadmaps, roadmapClick)}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className={styles.arrowButton}>
                <div id="button_left"> </div>
                <div id="button_right"> </div>
              </div>
            </div>
            <RoadmapShow activeRoadmap={activeRoadmap}/>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  roadmaps: makeSelectRoadmaps(),
  activeRoadmap: makeActiveRoadmap(),
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: {
      ...ownProps.actions,
      ...bindActionCreators({ ...actions }, dispatch),
    },
    roadmapClick(roadmap) {
      dispatch(actions.selectRoadmap(roadmap));
    },
  };
}
RoadmapSection.propTypes = {
  roadmaps: PropTypes.array,
  roadmapClick: PropTypes.func,
  activeRoadmap: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoadmapSection);

//export default RoadmapSection;
