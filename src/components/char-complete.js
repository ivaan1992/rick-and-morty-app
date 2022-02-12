import PropTypes from 'prop-types';
import './char.css';


export default function Character({
  img, name, gender, status, id, location,
}) {
  return (
    <div className="body-card">
      <img src={img} alt={name} srcSet={name} />
      <div className="char-info">
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{status}</p>
        <p>{id}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
