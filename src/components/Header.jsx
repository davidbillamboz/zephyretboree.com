import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import Link from './Link';

const Logo = styled.img`
  width: 210px;
  height: auto;
  max-height: 68px !important;
`;

const BurgerStyled = styled.a`
  height: auto !important;
`;

const NavbarBurger = ({ onClick, isActive }) => (
  <BurgerStyled
    href="/"
    role="button"
    className={`navbar-burger burger${isActive ? ' is-active' : ''}`}
    aria-label="menu"
    aria-expanded="false"
    onClick={onClick}
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </BurgerStyled>
);

NavbarBurger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const NavbarMenu = styled.div`
  @media (max-width: 768px) {
    padding: 1rem !important;
    text-align: right;
    font-size: 20px;
    font-weight: 600;

    .navbar-item + .navbar-item {
      margin-top: 20px;
    }

    display: block !important;
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    opacity: 0;
    transform: translateY(-50%);
    transition: all 0.23s ease-out;
    pointer-events: none;

    &.is-active {
      opacity: 1;
      transform: translateY(0%);
      pointer-events: auto;
    }
  }
`;

const NavbarBrand = styled.div`
  @media (max-width: 768px) {
    position: relative;
    z-index: 2;
    transition: background 0.23s ease-in-out;
    background: #ffffff;
  }
`;

const NavBar = styled.nav`
  transition: all 0.23s ease-in-out;

  &.can-be-transparent.is-transparent:not(.is-menu-open) {
    background-color: transparent !important;

    ${NavbarBrand} {
      @media (max-width: 768px) {
        background: transparent;
      }
    }
  }

  &.is-hidden-up {
    transform: translateY(-100%);
  }
`;

const THRESHOLD_SCROLL_TOP = 20;
const THRESHOLD_SCROLL_CHANGE = 10;
const THRESHOLD_MIN_WIN_HEIGHT_TOP = 0.33;

const Header = ({
  logo,
  links,
  contactButton,
  withBodyPadding,
  canBeTransparent,
}) => {
  const [navbarMenuActive, setNavbarActive] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isDensed, setIsDensed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const onBurgerClick = e => {
    e.preventDefault();
    setNavbarActive(!navbarMenuActive);
  };

  const onClickLink = () => {
    setNavbarActive(false);
  };

  if (withBodyPadding) {
    document.body.classList.add('has-navbar-fixed-top');
  } else {
    document.body.classList.remove('has-navbar-fixed-top');
  }

  let lastScrollTop = document.documentElement.scrollTop;
  let scrollDirection = null;
  let lastScrollTopBeforeDirectionChange = lastScrollTop;

  const handleScroll = () => {
    const { scrollTop } = document.documentElement;

    // Change the layout when the scroll initied
    if (scrollTop > THRESHOLD_SCROLL_TOP) {
      setIsTransparent(false);
      setIsDensed(true);
    } else {
      setIsTransparent(true);
      setIsDensed(false);
    }

    const newDirection = scrollTop < lastScrollTop ? 'up' : 'down';

    // Save position when the direction changes
    if (newDirection !== scrollDirection) {
      lastScrollTopBeforeDirectionChange = scrollTop;
    }
    scrollDirection = newDirection;

    // Calculate the diff with the last position when the direction changed
    const changeScrollTopDiff = Math.abs(
      lastScrollTopBeforeDirectionChange - scrollTop
    );

    const winHeight = window.innerHeight;
    const minScrollThreshold = winHeight * THRESHOLD_MIN_WIN_HEIGHT_TOP;

    // The scroll did not reach the minimum threshold
    if (scrollTop <= minScrollThreshold) {
      setIsVisible(true);

      // The direction is up and the change threshold is reached
    } else if (
      scrollDirection === 'up' &&
      changeScrollTopDiff > THRESHOLD_SCROLL_CHANGE
    ) {
      setIsVisible(true);

      // The direction is down and the change threshold is not reached
    } else if (
      scrollDirection === 'down' &&
      changeScrollTopDiff < THRESHOLD_SCROLL_CHANGE
    ) {
      setIsVisible(true);

      // Hide the bar by default
    } else {
      setIsVisible(false);
    }

    lastScrollTop = scrollTop;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const classes = [];
  if (!isDensed) {
    classes.push('is-spaced');
  }
  if (canBeTransparent) {
    classes.push('can-be-transparent');
  }
  if (isTransparent) {
    classes.push('is-transparent');
  }
  if (!isVisible) {
    classes.push('is-hidden-up');
  }
  if (navbarMenuActive) {
    classes.push('is-menu-open');
  }

  return (
    <NavBar
      className={`navbar is-fixed-top ${classes.join(' ')}`}
      role="navigation"
      aria-label="main navigation"
    >
      <NavbarBrand className="navbar-brand">
        <GatsbyLink to={logo.url} className="navbar-item" onClick={onClickLink}>
          <Logo
            src="/images/logo_horizontal_color.svg"
            width="210"
            height="68"
            alt=""
          />
        </GatsbyLink>
        <NavbarBurger isActive={navbarMenuActive} onClick={onBurgerClick} />
      </NavbarBrand>
      <NavbarMenu
        className={`navbar-menu${navbarMenuActive ? ' is-active' : ''}`}
      >
        <div className="navbar-end">
          {links &&
            links.map(link => (
              <Link
                className="navbar-item"
                key={link.url}
                {...link}
                onClick={onClickLink}
              />
            ))}

          <GatsbyLink
            to={contactButton.url}
            className="navbar-item is-hidden-tablet"
            onClick={onClickLink}
          >
            {contactButton.title}
          </GatsbyLink>

          <div className="navbar-item is-hidden-mobile">
            <div className="buttons">
              <GatsbyLink
                to={contactButton.url}
                className="button is-primary"
                onClick={onClickLink}
              >
                <strong>{contactButton.title}</strong>
              </GatsbyLink>
            </div>
          </div>
        </div>
      </NavbarMenu>
    </NavBar>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  contactButton: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  logo: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  withBodyPadding: PropTypes.bool.isRequired,
  canBeTransparent: PropTypes.bool.isRequired,
};

export default Header;

export const query = graphql`
  fragment Header on Query {
    header: markdownRemark(
      fields: { lang: { eq: $lang }, name: { eq: "header" } }
    ) {
      frontmatter {
        links {
          title
          url
        }
        contactButton {
          title
          url
        }
        logo {
          url
        }
      }
    }
  }
`;
