import PropTypes from 'prop-types';

const SmallCard = ({ img, distance, location }) => {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out
  "
    >
      {/* left */}
      <div className="relative h-16 w-16">
        <img src={img} alt="" className="rounded-lg" />
      </div>
      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

SmallCard.propTypes = {
  img: PropTypes.object,
  distance: PropTypes.string,
  location: PropTypes.string,
};

export default SmallCard;
