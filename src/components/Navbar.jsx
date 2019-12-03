import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';
import Link from './Link';

const THRESHOLD_SCROLL_TOP = 20;
const THRESHOLD_SCROLL_CHANGE = 10;
const THRESHOLD_MIN_WIN_HEIGHT_TOP = 0.33;

const LogoStyled = styled.img`
  width: 210px;
  height: auto;
  max-height: 68px !important;
  transition: all 0.23s ease-in-out;

  &.is-small {
    width: 168px;
  }
`;

const LinkStyled = styled(Link)`
  font-family: 'ZephyrEtBoree';
`;

const ButtonStyled = styled(GatsbyLink)`
  font-family: 'ZephyrEtBoree';
`;

const BurgerStyled = styled.div`
  height: auto !important;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: transparent !important;
  }

  &:focus {
    outline: none;
  }
`;

const NavbarMenuStyled = styled.div`
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

const NavbarBrandStyled = styled.div`
  @media (max-width: 768px) {
    position: relative;
    z-index: 2;
    transition: background 0.23s ease-in-out;
    background: #ffffff;
  }
`;

const NavbarStyled = styled.nav`
  padding: 1rem;
  transition: all 0.23s ease-in-out;

  &.is-densed {
    padding: 0.5rem 1rem;
  }

  &.can-be-transparent.is-transparent:not(.is-menu-open) {
    background-color: transparent !important;

    ${NavbarBrandStyled} {
      @media (max-width: 768px) {
        background: transparent;
      }
    }
  }

  &.is-hidden-up {
    transform: translateY(-100%);
  }
`;

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

  let lastScrollTop = 0;
  let scrollDirection = null;
  let lastScrollTopBeforeDirectionChange = lastScrollTop;

  const getScrollTop = () => {
    return (document.scrollingElement || document.documentElement).scrollTop;
  };

  const handleScroll = () => {
    const scrollTop = getScrollTop();

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

  const bodyClass = withBodyPadding ? 'has-navbar-fixed-top' : '';

  const classes = [];
  if (canBeTransparent) {
    classes.push('can-be-transparent');
  }
  if (isDensed) {
    classes.push('is-densed');
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
    <BodyClassName className={bodyClass}>
      <NavbarStyled
        className={`navbar is-fixed-top ${classes.join(' ')}`}
        role="navigation"
        aria-label="main navigation"
      >
        <NavbarBrandStyled className="navbar-brand">
          <GatsbyLink
            to={logo.url}
            className="navbar-item"
            onClick={onClickLink}
          >
            <LogoStyled
              src="/images/logo_horizontal_color.svg"
              width="210"
              height="68"
              alt=""
              className={`${isDensed ? ' is-small' : ''}`}
            />
          </GatsbyLink>
          <BurgerStyled
            className={`navbar-burger burger ${
              navbarMenuActive ? 'is-active' : ''
            }`}
            onClick={onBurgerClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </BurgerStyled>
        </NavbarBrandStyled>
        <NavbarMenuStyled
          className={`navbar-menu${navbarMenuActive ? ' is-active' : ''}`}
        >
          <div className="navbar-end">
            {links &&
              links.map(link => (
                <LinkStyled
                  className="navbar-item"
                  key={link.url}
                  {...link}
                  onClick={onClickLink}
                />
              ))}

            <ButtonStyled
              to={contactButton.url}
              className="navbar-item is-hidden-tablet"
              onClick={onClickLink}
            >
              {contactButton.title}
            </ButtonStyled>

            <div className="navbar-item is-hidden-mobile">
              <div className="buttons">
                <ButtonStyled
                  to={contactButton.url}
                  className="button is-primary"
                  onClick={onClickLink}
                >
                  <strong>{contactButton.title}</strong>
                </ButtonStyled>
              </div>
            </div>
          </div>
        </NavbarMenuStyled>
      </NavbarStyled>
    </BodyClassName>
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
