import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import Link from './Link';
import LangSwitcher from './LangSwitcher';

const LogoLinkWrapper = styled.div`
  a {
    padding: 0 !important;

    &:focus,
    &:focus-within,
    &:hover,
    &.is-active {
      background: transparent !important;
    }
  }
`;

const Logo = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  max-height: none !important;

  &:hover {
    opacity: 0.5;
  }
`;

const SocialLinks = styled.div`
  justify-content: center;
  align-items: stretch;
  display: flex;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    justify-content: flex-end;
  }
`;

const SocialLink = styled.div`
  display: flex;

  &:not(:first-child) {
    margin-left: 20px;
  }

  a {
    display: block;
    width: 40px;
    height: 40px;
    font-size: 1.5em;
    line-height: 40px;
    border: 1px solid ${props => props.theme.blue1};
    color: ${props => props.theme.blue1};

    &:hover {
      color: ${props => props.theme.blue1};
      opacity: 0.5;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const FooterMenu = styled.div``;

const FooterMenuItem = styled.div`
  display: flex;
`;

const FooterMenuTop = styled(FooterMenu)`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    justify-content: flex-end;
  }

  ${FooterMenuItem} {

    &:not(:first-child) {
      margin-left: 20px;
    }

    a {
    color: #ffffff;

    &:hover {
      color: ${props => props.theme.blue1};
    }
  }
`;

const FooterMenuBottom = styled(FooterMenu)`
  margin-top: 20px;
  align-items: stretch;
  display: flex;
  justify-content: center;

  ${FooterMenuItem} {
    &:not(:first-child) {
      margin-left: 20px;
    }

    a {
    color: ${props => props.theme.blue1};

    &:hover {
      color: #ffffff;
    }
  }
`;

const Copyrights = styled.p`
  cursor: default;
  color: ${props => props.theme.blue1};
  margin-bottom: 0 !important;
`;

const Footer = ({
  logo,
  socialLinks,
  links,
  copyrights,
  links2,
  alternates,
}) => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <div className="columns">
          <LogoLinkWrapper className="column is-one-third">
            <GatsbyLink to={logo.url} className="navbar-item">
              <Logo src="/images/logo_horizontal_white.png" alt="" />
            </GatsbyLink>
          </LogoLinkWrapper>

          <div className="column">
            <SocialLinks>
              {socialLinks &&
                socialLinks.map(link => (
                  <SocialLink key={link.url}>
                    <Link {...link} />
                  </SocialLink>
                ))}
            </SocialLinks>

            <FooterMenuTop>
              {links &&
                links.map(link => (
                  <FooterMenuItem key={link.url}>
                    <Link {...link} />
                  </FooterMenuItem>
                ))}
            </FooterMenuTop>
          </div>
        </div>
        <Copyrights>{copyrights}</Copyrights>

        <FooterMenuBottom>
          {links2 &&
            links2.map(link => (
              <FooterMenuItem key={link.url}>
                <Link {...link} />
              </FooterMenuItem>
            ))}
          <LangSwitcher>
            {onClickLink => (
              <>
                {alternates &&
                  alternates
                    .filter(link => !link.current)
                    .map(link => (
                      <FooterMenuItem key={link.lang}>
                        <GatsbyLink
                          key={link.lang}
                          to={link.path}
                          onClick={e => onClickLink(e, link.lang, link.path)}
                        >
                          {link.lang === 'fr' && 'Version française'}
                          {link.lang === 'en' && 'English version'}
                        </GatsbyLink>
                      </FooterMenuItem>
                    ))}
              </>
            )}
          </LangSwitcher>
        </FooterMenuBottom>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  alternates: PropTypes.arrayOf(
    PropTypes.shape({
      current: PropTypes.bool.isRequired,
      lang: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  logo: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  copyrights: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.shape({
        publicURL: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  links2: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;

export const query = graphql`
  fragment Footer on Query {
    footer: markdownRemark(
      fields: { lang: { eq: $lang }, name: { eq: "footer" } }
    ) {
      frontmatter {
        logo {
          url
        }
        copyrights
        socialLinks {
          title
          url
          icon {
            publicURL
          }
        }
        links {
          title
          url
        }
        links2 {
          title
          url
        }
      }
    }
  }
`;
