import PropTypes from 'prop-types';

export default function Character({
  img, name, gender, status,
}) {
  return (
    <div className="div">
      <p>{name}</p>
      <p>{gender}</p>
      <p>{status}</p>
      <img src={img} alt={name} srcSet={name} />
    </div>
  );
}

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};
