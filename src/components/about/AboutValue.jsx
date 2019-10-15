import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  background: #ffffff;
  padding: 30px;
`;

const Title = styled.h3`
  font-family: 'ZephyrEtBoree', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 30px;
  text-align: center;
`;

const Icon = styled.img`
  display: block;
  margin: auto;
  width: 85px;
`;

const Text = styled.div``;

const AboutValue = ({ title, icon, text }) => (
  <Container>
    <Title>{title}</Title>
    <Icon src={icon.publicURL} alt="" width="40" height="40" />
    <Text dangerouslySetInnerHTML={{ __html: text }} />
  </Container>
);

AboutValue.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    publicURL: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutValue;
