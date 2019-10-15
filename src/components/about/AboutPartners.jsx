import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import AboutPartner from './AboutPartner';

const AboutPartners = ({ button, partners }) => (
  <StaticQuery
    query={graphql`
      query {
        vplpImage: file(relativePath: { eq: "pages/about/partners/vplp.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        cnimImage: file(relativePath: { eq: "pages/about/partners/cnim.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        diceImage: file(relativePath: { eq: "pages/about/partners/dice.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        vplpLogo: file(relativePath: { eq: "partners/logo_vplp_color.jpg" }) {
          childImageSharp {
            fixed(width: 140, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        cnimLogo: file(relativePath: { eq: "partners/logo_cnim_color.png" }) {
          childImageSharp {
            fixed(width: 140, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        diceLogo: file(relativePath: { eq: "partners/logo_d_ice_color.png" }) {
          childImageSharp {
            fixed(width: 140, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {partners &&
          partners.map(partner => {
            const image =
              data[`${partner.imageKey}Image`].childImageSharp.fluid;
            const logo = data[`${partner.imageKey}Logo`].childImageSharp.fixed;
            return (
              <section key={partner.imageKey} className="section">
                <AboutPartner
                  {...partner}
                  button={button}
                  image={image}
                  logo={logo}
                />
              </section>
            );
          })}
      </>
    )}
  />
);

AboutPartners.propTypes = {
  button: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AboutPartners;
