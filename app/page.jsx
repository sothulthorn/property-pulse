import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import Footer from '@/components/Footer';
import HomeProperty from '@/components/HomeProperty';

const HomePage = async () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperty />
      <Footer />
    </>
  );
};

export default HomePage;
