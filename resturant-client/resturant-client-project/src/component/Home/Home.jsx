import Banner from "./Banner";

// image
import choose1 from "../../assets/whyChoose/1.webp";
import choose2 from "../../assets/whyChoose/2.webp";
import choose3 from "../../assets/whyChoose/3.webp";
import choose4 from "../../assets/whyChoose/4.webp";
import choose5 from "../../assets/whyChoose/5.webp";
import TopFood from "../TopFood/TopFood";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Home = () => {
    return (
<div>
<Helmet>
  <title>DineEase | Home</title>
</Helmet>
            <Banner></Banner>

             <TopFood></TopFood>
             <div className='w-full flex justify-center'> <Link to="/all"><button className='btn mt-12 btn-success bg-green-600 px-8 text-3xl text-white hover:bg-sky-600'>See All</button></Link></div>
             
            {/* Testimonials */}
        <div className="gadgetContainer px-2 md:px-10 py-24 mt-20 bg-[#07dc87f2] rounded-lg">
          {/* header */}
          <div className="text-center md:text-left ">
            <p className="font-semibold text-[#cf3984] mb-3 text-center text-3xl md:text-left">
              <span className="bg-[#fa40ee] text-black mr-3 text-xl px-2 py-1 rounded-full">
              <i className='bx bxs-quote-single-left'></i>
              </span>
              Testimonial
            </p>
            <p className="text-[32px] lg:text-[40px] font-semibold text-black">
              Users Feedback
            </p>
          </div>

          {/* Container */}
          <div className="text-gray-600 dark:text-gray-200 body-font">
  <div className="mx-auto mt-8">
    <div className="grid grid-cols-1 md:grid-cols-2 m-4">
      <div className="p-4 w-full ">
        <div className="h-full bg-gray-100 dark:bg-[#1a2641d5] p-8 shadow-lg rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">I recently purchase some food from the website, and I must say, I am thoroughly impressed with this fantastic service of yours. From your quality, it has exceeded my expectations in every way.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://i.ibb.co/TKYdH3g/girl1.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900 dark:text-white">Mrs X</span>
              
            </span>
          </a>
        </div>
      </div>
      <div className="p-4  w-full">
        <div className="h-full bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed  mb-6">I have eaten many countries & their popular food, and I must say, I am thoroughly impressed with this fantastic food & service of yours.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://i.ibb.co/n1KHYYp/boy1.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900 dark:text-white">Mr. Y</span>
              
            </span>
          </a>
        </div>
      </div>
      <div className="p-4  w-full">
        <div className="h-full bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed  mb-6">I have eaten many countries & their popular food, and I must say, I am thoroughly impressed with this fantastic food & service of yours.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://i.ibb.co/n1KHYYp/boy1.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900 dark:text-white">Mr. Y</span>
              
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 w-full ">
        <div className="h-full bg-gray-100 dark:bg-[#1a2641d5] p-8 shadow-lg rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">I recently purchase some food from the website, and I must say, I am thoroughly impressed with this fantastic service of yours. From your quality, it has exceeded my expectations in every way.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://i.ibb.co/TKYdH3g/girl1.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900 dark:text-white">Mrs X</span>
              
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

          
        </div>
        {/* Why people choose us */}
        <div className="mx-2 md:mx-8 bg-[#be14b5f0] px-2 md:px-5 py-5 mt-20">
          {/* header */}
          <div className="text-center md:text-left  ">
            <p className="font-bold  text-white mb-3 text-center md:text-left">
              <span className="bg-[#22c513]  mr-3 text-xl px-2 py-1 rounded-full">
                <i className="bx bxs-like"></i>
              </span>
              Why Us
            </p>
            <p className="text-[32px] lg:text-[40px] font-semibold text-white">
              Why People Choose Us
            </p>
          </div>

          {/* Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 bg-[#498c4d]">
              <img src={choose1} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                Fast & Secure <br />
                Service
              </p>
            </div>
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 bg-[#834379]">
              <img src={choose2} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                Money Back <br />
                Guarantee
              </p>
            </div>
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 bg-[#41341a]">
              <img src={choose3} alt="" />
              
              <p className="font-semibold text-lg text-center dark:text-white">
                24 Hour Return <br />
                Policy
              </p>
            </div>
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 bg-[#de6a71]">
              <img src={choose4} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                Pro Quality <br />
                Support
              </p>
            </div>
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 bg-[#5932ce]">
              <img src={choose5} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                Next Level Pro <br />
                Quality
              </p>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Home;