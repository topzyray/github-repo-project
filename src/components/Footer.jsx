// import AppStore from '../assets/images/AppStore.svg';
// import PlayStore from '../assets/images/PlayStore.svg';

const Footer = () => {
  return (
    <div className="w-full pt-[40px] pb-[55px] md:pt-[80px] md:pb-[90px] lg:pt-[128px] lg:pb-[111px] px-6 md:px-10 lg:px-28">
      <div className="grid lg:grid-cols-6 gap-7 lg:gap-16 mb-8 lg:mb-20">
        <div className="col-span-2 flex flex-col gap-7 lg:gap-10">
          <h1 className="text-[32px] md:text-[42px]">🍕</h1>
          <div className="flex gap-6 lg:gap-7">
            {/* <img
              src={AppStore}
              alt="App Store"
              className="max-w-[186px] max-h-[45px] md:max-h-[50px]"
            /> */}
            {/* <img
              src={PlayStore}
              alt="App Store"
              className="max-w-[186px] max-h-[45px] md:max-h-[50px]"
            /> */}
          </div>
        </div>
        <div>
          <ul className="space-y-2 lg:space-y-3">
            <li className="text-white font-bold">Quick links</li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Features
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Food Menu
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Offer
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Review
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Rider
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 lg:space-y-3">
            <li className="text-white font-bold">Get to know us</li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Gift Cards
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              DoorBash Stories
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Linkedin
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Glassdoor
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Accessibility
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 lg:space-y-3">
            <li className="text-white font-bold">News</li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Blog
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              FAQ
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Lift Media
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Press
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Presse kit
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 lg:space-y-3">
            <li className="text-white font-bold">Contact</li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Whatsapp
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              Support 24
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-4 lg:gap-0">
        <div>
          <p>© 2023 Pizza. All right reserved</p>
        </div>
        <div>
          <ul className="flex gap-3 sm:gap-5 lg:gap-10 font-bold">
            <li>Privacy</li>
            <li>Policy</li>
            <li>Terms</li>
            <li>Servies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
