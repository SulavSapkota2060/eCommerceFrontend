import React from 'react';
import SlideShow from '../../components/SlideShow/SlideShow';
import FeaturesCard from '../../components/FeaturesCard/FeaturesCard';
import TopPicks from '../../components/TopPicks/TopPicks';
import './Home.scss';
import ShopCategory from '../../components/ShopCategory/ShopCategory';
import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/Navigation';

const Home = () => {
  return (
    <div>
      <SlideShow />
      <FeaturesCard />
      <TopPicks />
      <ShopCategory />
      <Footer />
    </div>
  );
};

export default Home;
