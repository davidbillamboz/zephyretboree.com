import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Column = styled.div`
  text-align: center;
  align-content: center;
`;

const ColumnContent = styled.div`
  background: #ffffff;
  padding: 30px;
  width: 100%;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const IconTextColumns = ({ items }) => {
  const classColumns = items && items.length <= 2 ? 'is-mobile' : '';

  return (
    <div className={`columns ${classColumns}`}>
      {items &&
        items.map(item => (
          <Column className="column is-flex" key={item.icon}>
            <ColumnContent>
              <Icon
                src={`/images/icons/${item.icon}.svg`}
                with="40"
                height="40"
                alt=""
              />
              <div>{item.text}</div>
            </ColumnContent>
          </Column>
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
