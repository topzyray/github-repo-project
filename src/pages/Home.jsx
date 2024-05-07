// import Deliverman from '../assets/images/hero-image.png';
// import AppStore from '../assets/images/AppStore.svg';
// import PlayStore from '../assets/images/PlayStore.svg';
// import Scooter from '../assets/images/Scooter.svg';
import { FaQuoteLeft } from 'react-icons/fa6';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BiSolidQuoteRight } from 'react-icons/bi';

const Dish = ({ number, iconClass, icon, text }) => {
  return (
    <>
      <div className="max-w-[214px] ">
        <span className="z-10 inline-block text-[35px] md:text-[43px] text-primary font-semibold">
          {number}
        </span>
        <div className="z-20 bg-[#FAFAFA] h-[267px] -mt-9 px-[23px] py-[33px] flex flex-col justify-center items-center gap-6 rounded-[28px]">
          <p
            className={`bg-white px-[24px] py-[18px] ${iconClass} text-[35px] md:text-[45px]`}
          >
            {icon}
          </p>
          <p className="max-w-[128px] text-[24px] text-[#191720] text-center font-medium">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      {/* Hero */}
      <div className="w-full h-full lg:my-24 px-6 md:px-10 lg:px-28">
        <div className="w-full h-full flex flex-col md:flex-row md:justify-between md:items-center gap-8 ">
          <div className="md:w-[485px] lg:w-[585px] flex flex-col gap-6 md:gap-8 py-4">
            <div className="space-y-2">
              <h1 className="text-[38px] sm:text-[40px] md:text-[45px] lg:text-[65px] text-center md:text-left font-bold leading-snug md:leading-[65px]">
                Your Favorite Food Delivery Partner
              </h1>
              <p className="text-base md:text-[18px] text-center md:text-left font-normal">
                The food at your doorstep. Why starve when you have us. You{' '}
                <br />
                hunger partner. Straight out of the oven to your doorstep
              </p>
            </div>
            <div className="sm:max-w-[464px] relative rounded-[56px] py-1 pr-1 mx-auto md:mx-0 shadow-sm bg-[#F6F6F6]">
              <input
                type="search"
                className="input bg-transparent w-[19rem] lg:w-[29rem] rounded-[56px] pl-5 pr-20 sm:text-sm sm:leading-6"
                placeholder="Enter your delivery location"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
            {/* <div className="flex gap-4 lg:gap-7 mx-auto md:mx-0">
              <img
                src={AppStore}
                alt="App Store"
                className="h-[50px] lg:h-[60px]"
              />
              <img
                src={PlayStore}
                alt="App Store"
                className="h-[50px] lg:h-[60px]"
              />
            </div> */}
          </div>

          {/* <div className="">
            <div className=" px-[35px] bg-[#F2EBDA] rounded-[36px] pt-[50px] ">
              <img
                src={Deliverman}
                className="w-[30rem] lg:w-[32rem] scale-x-[-1]"
              />
            </div>
          </div> */}
        </div>
      </div>

      {/* Achievements */}
      <div className="w-full mx-auto mt-[50px] md:mt-[15px] mb-[58px] px-6 md:px-10 lg:px-28">
        <div className="w-full md:max-w-[622px] mx-auto">
          <h1 className="text-[35px] sm:text-[40px] md:text-[46px] text-center font-semibold leading-tight md:leading-[58px]">
            More Than <span className="text-primary">10,000</span> Dishes To
            Order!
          </h1>
          <p className="text-[18px] text-center mt-3">
            Welcome to The Biggest Network of Food Ordering & Delivery
          </p>
        </div>
      </div>

      {/*  */}
      <div className="w-full mb-[88px] space-y-6 lg:space-y-10 lg:mb-[195px] px-6 md:px-10 lg:px-28">
        {/* Container 1 */}
        <div className="flex flex-wrap justify-center lg:justify-end  gap-5 ">
          <div className="flex flex-wrap justify-center items-center gap-5">
            <Dish icon="🍕" iconClass="rounded-full" text="Pizza" />
            <Dish icon="🍔" iconClass="rounded-full" text="Burger" />
            <Dish icon="🍣" iconClass="rounded-full" text="Sushi" />
          </div>
          <div className="bg-[#FAFAFA] flex flex-col gap-4 lg:gap-10 px-[23px] pt-[33px] rounded-[16px]">
            <p className="max-w-[437px] text-[18px] md:text-[25px] font-semibold">
              Find <span className="text-primary">deals</span>,{' '}
              <span className="text-[#009B00]">free delivery</span>, and more
              from our restaurant partners.
            </p>
            {/* <img src={Scooter} className="w-[6rem] lg:w-[10rem] self-end" /> */}
          </div>
        </div>
        {/* Container 2 */}
        <div className="text-[#494949] flex flex-row-reverse flex-wrap justify-center lg:justify-end  gap-5 ">
          <div className="flex flex-wrap justify-center items-center gap-5">
            <Dish icon="🍝" iconClass="rounded-full" text="Pasta" />
            <Dish icon="🥗" iconClass="rounded-full" text="Salad" />
            <Dish icon="🍰" iconClass="rounded-full" text="Desserts" />
          </div>
          <div className="bg-[#FAFAFA] flex flex-col-reverse gap-4 lg:gap-10 px-[23px] pb-[33px] rounded-[16px]">
            <p className="max-w-[437px] text-[18px] md:text-[20px] font-normal">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
            <BiSolidQuoteRight className="text-[40px] lg:text-[61px] self-start" />
          </div>
        </div>
      </div>

      {/* How to order */}
      <div className="w-full px-6 md:px-10 lg:px-28">
        <div>
          <h1 className="text-[30px] md:text-[46px] font-semibold text-center">
            How to Order?
          </h1>
          {/* container */}
          <div className="flex flex-wrap justify-around gap-5 ">
            <Dish
              number="1"
              iconClass="rounded-[16px]"
              icon="📍"
              text="Choose location"
            />
            <Dish
              number="2"
              iconClass="rounded-[16px]"
              icon="🙇🏻‍♂️"
              text="Choose what to eat"
            />
            <Dish
              number="3"
              iconClass="rounded-[16px]"
              icon="🍔"
              text="Make your first order"
            />
            <Dish
              number="4"
              iconClass="rounded-[16px]"
              icon="🏠"
              text="Now! Your food in way"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full flex justify-center items-center py-[60px] md:py-[100px] lg:py-[167px] px-6 md:px-10 lg:px-28">
        <div className="max-w-[787px] flex flex-col items-center text-center gap-3 md:gap-6">
          <div className="max-w-[532px]">
            <h3 className="text-[30px] lg:text-[44px] font-bold">
              Our Clients Feedback
            </h3>
            <p>
              The food at your doorstep. Why starve when you have us. You hunger
              partner. Straight out of the oven to your doorstep.
            </p>
          </div>
          <FaQuoteLeft className="text-[66px] text-primary" />
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi”
          </p>
          <div className="flex flex-col gap-3">
            <h3 className="text-[18px] font-semibold">Mitchell Marsh</h3>
            <p className="text-xs">CEO, Bexon Agency</p>
            <div className="flex justify-center items-center gap-3">
              <span className="bg-[#E2E2E2] text-text p-1.5 flex justify-center items-center rounded-full shadow-xl hover:opacity-85 cursor-pointer transition-all ease-in-out duration-300">
                <IoIosArrowBack />
              </span>
              <span className="bg-primary text-white p-1.5 flex justify-center items-center rounded-full shadow-xl hover:opacity-85 cursor-pointer transition-all ease-in-out duration-300">
                <IoIosArrowForward />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <div className="bg-[#FFEFEC] text-black w-full py-[30px] md:py-[60px] lg:py-[103px] px-6 md:px-10 lg:px-28 flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="flex-1 flex flex-col gap-3 lg:gap-5 text-center lg:text-left">
          <h2 className="text-[36px] lg:text-[46px] font-semibold leading-[45px]">
            Subscribe to our newsletter
          </h2>
          <p className="">
            Browse local restaurants and businesses for delivery by entering
            your address blow.
          </p>
        </div>
        <div className="relative rounded-[56px] py-1 pr-1 shadow-sm bg-white">
          <input
            type="email"
            className="input w-[19rem] lg:w-[29rem] rounded-[56px] pl-5 pr-20 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
