import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const timeout = 350;

const TransitionGroupStyled = styled(TransitionGroup)`
  .fade-enter-active {
    z-index: 1;
  }

  .fade-enter-active,
  .fade-exit-active {
    transition: all ${timeout}ms ease-in-out;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
  }

  &.with-translation-x {
    .fade-enter {
      transform: translateX(-15%);
    }
    .fade-enter-active {
      transform: translateX(0);
    }
    .fade-exit-active {
      transform: translateX(15%);
    }
  }

  &.with-translation-y {
    .fade-enter {
      transform: translateY(-15%);
    }
    .fade-enter-active {
      transform: translateY(0);
    }
    .fade-exit-active {
      transform: translateY(15%);
    }
  }
`;

const FadeTransition = ({
  children,
  id,
  withTranslationX,
  withTranslationY,
}) => (
  <TransitionGroupStyled
    className={`${withTranslationX ? 'with-translation-x' : ''} ${
      withTranslationY ? 'with-translation-y' : ''
    }`}
  >
    <CSSTransition
      classNames="fade"
      key={id}
      timeout={{
        enter: timeout,
        exit: timeout,
      }}
    >
      {children}
    </CSSTransition>
  </TransitionGroupStyled>
);

FadeTransition.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  withTranslationX: PropTypes.bool,
  withTranslationY: PropTypes.bool,
};

FadeTransition.defaultProps = {
  withTranslationX: false,
  withTranslationY: false,
};

export default FadeTransition;
