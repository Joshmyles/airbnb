const Banner = () => {
  return (
    <div className="relative w-screen ">
      <img className="w-full " src="./src/assets/images/banner.jpg" alt="" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-xl text-white font-bold ">
          Welcome to the art museum of the ancient time.
        </p>
        <button className="bg-white text-purple-600 p-2 shadow rounded-full m-6 hover:shadow-xl active:scale-90 transition duration-300">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
