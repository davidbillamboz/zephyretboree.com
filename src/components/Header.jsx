import React, { useState } from 'react';
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
    background: #ffffff;
  }
`;

const Header = ({ data }) => {
  const { logo, links, contactButton } = data.frontmatter;
  const [navbarMenuActive, setNavbarActive] = useState(false);

  const onBurgerClick = e => {
    e.preventDefault();
    setNavbarActive(!navbarMenuActive);
  };

  const onClickLink = () => {
    setNavbarActive(false);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <NavbarBrand className="navbar-brand">
        <GatsbyLink to={logo.url} className="navbar-item" onClick={onClickLink}>
          <Logo
            src="/images/logos/logo_horizontal_color.svg"
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
    </nav>
  );
};

Header.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.shape({
      links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
      contactButton: PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
      logo: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
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
