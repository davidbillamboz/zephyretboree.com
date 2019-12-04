import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LangSwitcher from './LangSwitcher';

const FooterStyled = styled.footer`
  padding: 1rem !important;
  color: ${props => props.theme.black};

  a {
    color: ${props => props.theme.black};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LogoStyled = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  max-height: none !important;

  &:hover {
    opacity: 0.5;
  }
`;

const RightColumnStyled = styled.div`
  @media (min-width: ${props => props.theme.breakpointTablet}) {
    margin-top: 40px;
  }
`;

const LinkedinLinkStyled = styled.a`
  font-size: 2rem;
`;

const MenuStyled = styled.div`
  a {
    display: block;

    @media (min-width: ${props => props.theme.breakpointTablet}) {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 0.6rem;
      }
    }
  }
`;

const CopyrightsStyled = styled.p`
  cursor: default;
  font-size: 0.8rem;
`;

const Footer = ({
  logo,
  linkedinUrl,
  links,
  links2,
  copyrights,
  alternates,
}) => (
  <FooterStyled className="footer">
    <div className="container">
      <div className="content">
        <div className="columns">
          <div className="column is-one-third has-text-centered-mobile">
            <GatsbyLink to={logo.url}>
              <LogoStyled src="/images/logo_horizontal_black.svg" alt="" />
            </GatsbyLink>
          </div>

          <RightColumnStyled className="column has-text-centered-mobile has-text-right-tablet">
            <MenuStyled>
              {links &&
                links.map(link => (
                  <GatsbyLink key={link.url} to={link.url}>
                    {link.title}
                  </GatsbyLink>
                ))}
            </MenuStyled>

            <MenuStyled>
              {links2 &&
                links2.map(link => (
                  <GatsbyLink key={link.url} to={link.url}>
                    {link.title}
                  </GatsbyLink>
                ))}
              <LangSwitcher>
                {onClickLink => (
                  <>
                    {alternates &&
                      alternates
                        .filter(link => !link.current)
                        .map(link => (
                          <GatsbyLink
                            key={link.lang}
                            to={link.path}
                            onClick={e => onClickLink(e, link.lang, link.path)}
                          >
                            {link.lang === 'fr' && 'Version française'}
                            {link.lang === 'en' && 'English version'}
                          </GatsbyLink>
                        ))}
                  </>
                )}
              </LangSwitcher>
            </MenuStyled>
            <div>
              <LinkedinLinkStyled
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </LinkedinLinkStyled>
            </div>
          </RightColumnStyled>
        </div>
        <CopyrightsStyled className="has-text-centered">
          {copyrights}
        </CopyrightsStyled>
      </div>
    </div>
  </FooterStyled>
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
  linkedinUrl: PropTypes.string.isRequired,
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
        linkedinUrl
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
