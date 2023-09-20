import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import file from '/Users/JM/Development/Javascript skillup/Projects/airbnb/src/assets/data/file.json';
import file2 from '/Users/JM/Development/Javascript skillup/Projects/airbnb/src/assets/data/file2.json';
import SmallCard from './SmallCard';
import MediumCard from './MediumCard';
import LargeCard from './LargeCard';

// export const getJSON = () => {
//   const response
//   https://jsonkeeper.com/b/4G1G
// }

const Airbnb = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-6xl mx-auto px-8 sm:px-16">
        {/* section one */}
        <section className="pt-12">
          <h1 className="text-4xl font-semibold pb-5">Explore Nearby</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {file?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        {/* secction two */}
        <section className="">
          <h1 className="text-4xl font-semibold my-6">Live Anywhere</h1>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-4">
            {file2?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
          {/* Pull data from server */}
        </section>
        {/* section three */}
        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlist is curated by Airbnb"
            buttonText="Get Inspired"
          />
          {/* <img src="./src/assets/images/banner2.jpg" alt="" /> */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Airbnb;
