import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperty from '@/components/HomeProperty';
import FeaturedProperties from '@/components/FeaturedProperties';

const HomePage = async () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperty />
    </>
  );
};

export default HomePage;
