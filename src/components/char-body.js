import PropTypes from 'prop-types';

export default function Character({
  img, name,
}) {
  return (
    <div className="div">
      <img src={img} alt={name} srcSet={name} />
      <h1>{name}</h1>
    </div>
  );
}

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
