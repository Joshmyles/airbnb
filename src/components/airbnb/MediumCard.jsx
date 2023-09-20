import PropTypes from 'prop-types';

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div>
        <img className="rounded-xl" src={img} alt="" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

MediumCard.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
};

export default MediumCard;
