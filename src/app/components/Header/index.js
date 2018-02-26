import React from 'react';
import { IndexLink } from 'react-router';
import logo from '../../../assets/images/logo.png';
import * as styles from './styles.css';

const HeaderComponent = function HeaderComponent() {
  function handleClick(id, e) {
    $('html, body').stop().animate({
      scrollTop: $(id).offset().top,
    }, 1500, 'easeInOutExpo');
    e.preventDefault();
  }

  return (
    <React.Fragment>
      <header>
        <div id="st-logo">
          <IndexLink to="/">
            <img src={logo} alt="Quillon" />
          </IndexLink>
        </div>
      </header>

      <div id="st-nav">
        <a href="#0" className="st-nav-trigger">
          Menu<span> </span>
        </a>

        <nav id="st-main-nav">
          <ul>
            <li>
              <a onClick={(e) => handleClick('#hero', e)} className="page-scroll hvr-underline-from-center" href="#hero">home</a>
            </li>
            <li>
              <a onClick={(e) => handleClick('#benefits_section', e)} className="page-scroll hvr-underline-from-center" href="#benefits_section">benefits</a>
            </li>
            <li>
              <a className="page-scroll hvr-underline-from-center" href="#compare">statistics</a>
            </li>
            <li>
              <a onClick={(e) => handleClick('#join_section', e)} className="page-scroll hvr-underline-from-center" href="#join_section">network</a>
            </li>
            <li>
              <a onClick={(e) => handleClick('#roadmap_section', e)} className="page-scroll hvr-underline-from-center" href="#roadmap_section">roadmap</a>
            </li>
            <li>
              <a onClick={(e) => handleClick('#team_section', e)} className="page-scroll hvr-underline-from-center" href="#team_section">team</a>
            </li>
            <li>
              <a onClick={(e) => handleClick('#connect_section', e)} className="page-scroll hvr-underline-from-center" href="#connect_section">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

HeaderComponent.propTypes = {
};

export default HeaderComponent;

