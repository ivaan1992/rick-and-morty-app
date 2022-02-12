import PropTypes from 'prop-types';

export default function Character({
  img, name, gender, status, location,
}) {
  return (
    <div className="div">
      <img src={img} alt={name} srcSet={name} />
      <h1>{name}</h1>
      <p>{gender}</p>
      <p>{status}</p>
      <p>{location}</p>
    </div>
  );
}

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
