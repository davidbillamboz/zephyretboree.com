import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';
import theme from '../../styles/theme';
import '../../styles/app.scss';

const HeaderPreview = ({ entry, widgetFor }) => {
  // TODO: fix data extraction
  return (
    <ThemeProvider theme={theme}>
      <Header
        links={entry.getIn(['data', 'links'])}
        contactButton={entry.getIn(['data', 'contactButton'])}
        logo={entry.getIn(['data', 'logo'])}
      />
    </ThemeProvider>
  );
};

HeaderPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default HeaderPreview;
