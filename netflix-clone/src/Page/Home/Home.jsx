import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import RowList from '../../components/Rows/RowList';



const Home = () => {
  return (
    <div>
      <Header /><br></br>
<Banner />
<RowList />
      <Footer />

    </div>
  );
}

export default Home;