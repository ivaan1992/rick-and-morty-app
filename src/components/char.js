import PropTypes from 'prop-types';
import './char.css';
// import { Link } from 'react-router-dom';

export default function Character({
  img, name,
}) {
  return (
    <div className="body-card">
      <img src={img} alt={name} srcSet={name} />
      <div className="char-info">
        <h1>{name}</h1>
        {/* <p>{gender}</p>
        <p>{status}</p> */}
        <button type="button">See details</button>
      </div>
    </div>
  );
}

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // status: PropTypes.string.isRequired,
  // gender: PropTypes.string.isRequired,
};
