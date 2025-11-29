import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import RowList from '../../components/Rows/RowList';
import Hea from '../../components/HEA/Hea';


const Home = () => {
  return (
    <div>
      <Header /><br></br>
      {/* <Hea /> */}
<Banner />
<RowList />
      <Footer />

    </div>
  );
}

export default Home;