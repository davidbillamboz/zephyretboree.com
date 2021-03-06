import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';

const ColumnStyled = styled.div`
  text-align: center;
  align-content: center;
`;

const ColumnContentStyled = styled.div`
  background: #ffffff;
  padding: 30px;
  width: 100%;
`;

const IconStyled = styled(Icon)`
  width: 70px;
  height: 70px;
`;

const IconTextColumns = ({ items }) => {
  const classColumns = items && items.length <= 2 ? 'is-mobile' : '';

  return (
    <div className={`columns ${classColumns}`}>
      {items &&
        items.map((item, index) => (
          <ColumnStyled className="column is-flex" key={index}>
            <ColumnContentStyled>
              <IconStyled name={item.icon} with="40" height="40" alt="" />
              <div>{item.text}</div>
            </ColumnContentStyled>
          </ColumnStyled>
        ))}
    </div>
  );
};

IconTextColumns.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default IconTextColumns;
