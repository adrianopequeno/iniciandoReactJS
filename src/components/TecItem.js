import React from 'react';
import PropTypes from 'prop-types';

function TecItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

TecItem.defaultProps = {
  tech: 'Oculto',
};

TecItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TecItem;