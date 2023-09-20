import PropTypes from 'prop-types';

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <>
      <div className="relative py-16 cursor-pointer">
        <img className="h-96 min-w-[300px] rounded-2xl" src={img} alt="" />
        <div className=" absolute top-32 left-12">
          <h3 className="text-4xl mb-3 w-64">{title}</h3>
          <p>{description}</p>
          <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

LargeCard.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
};

export default LargeCard;
