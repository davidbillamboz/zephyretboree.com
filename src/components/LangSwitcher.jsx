import PropTypes from 'prop-types';
import { navigate } from 'gatsby-link';

const LangSwitcher = ({ children }) => {
  const onClickLink = (e, lang, path) => {
    e.preventDefault();

    // Update localstorage
    if (localStorage) {
      localStorage.setItem('lang', lang);
    }

    navigate(path);
  };

  return children(onClickLink);
};

LangSwitcher.propTypes = {
  children: PropTypes.func.isRequired,
};

export default LangSwitcher;
