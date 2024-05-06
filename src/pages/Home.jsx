import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer'

const Home = () => {
  return <>
    <div className=' w-screen'>
      <div className='bg-[#4B4AEF] w-full px-8 lg:px-[175px] pb-[170px]'>
        <Header />
        <Hero />
      </div>
    </div>
    <Footer />
  </>;
};

export default Home;
