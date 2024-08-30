import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';



const Banner = () => {
    return (
        <div  className='rounded-lg'>
           <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide className='rounded-lg w-full h-[60vh] md:h-[90vh] bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/BT6GVXd/french-food-confit-de-canard.jpg")]'>
           
            <div className='w-full gap-4 h-[60vh] md:h-[90vh] flex flex-col justify-center items-center bg-[#0307124c]'>
            
            <h1 className='  text-white font-bold text-4xl  md:text-5xl'>Mediterranean</h1>
            <p className='text-center text-white font-bold text-2xl  md:text-xl'>Tender chicken marinated in saffron and spices, grilled to perfection.</p>
            <Link to="/all"><button className='btn btn-success px-8 text-xl'>See All</button></Link>
            
 
            </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg w-full h-[60vh] md:h-[90vh] bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/KFwSW39/sushi-2853382-1024x600.jpg")]'>
        <div className='w-full gap-4 h-[60vh] md:h-[90vh] flex flex-col justify-center items-center bg-[#03071265]'>
            
            <h1 className='  text-white font-bold text-4xl  md:text-5xl'>Japanese</h1>
            <p className='text-center text-white font-bold text-2xl  md:text-xl'>Crispy tofu and crunchy vegetables rolled in sushi rice and nori, with a kick of spicy mayo.</p>
            <Link to="/all"><button className='btn btn-success px-8 text-xl'>See All</button></Link>
            </div>
          </SwiperSlide>
        <SwiperSlide className='rounded-lg w-full h-[60vh] md:h-[90vh] bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/hHvGKq4/chocolate-ganache-tart-with-roasted-strawberries-155957-2.jpg")]'>
        <div className='w-full gap-4 h-[60vh] md:h-[90vh] flex flex-col justify-center items-center bg-[#03071265]'>
            
            <h1 className=' text-white  font-bold text-4xl  md:text-5xl'>French</h1>
            <p className='text-center text-white font-bold text-2xl  md:text-xl'>Indulge in the rich, molten chocolate center of this decadent cake, served with a scoop of vanilla ice cream.</p>
            <Link to="/all"><button className='btn btn-success px-8 text-xl'>See All</button></Link>
            </div>
          </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;