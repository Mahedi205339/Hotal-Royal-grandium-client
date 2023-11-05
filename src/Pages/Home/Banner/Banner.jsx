import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import banner1 from '../../../assets/banner.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import banner4 from '../../../assets/banner4.jpg'


// import required modules
import { Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <>


            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <div>
                    <SwiperSlide >
                        <div id="slide1" className="carousel-item relative   md:h-[600px] max-w-7xl mx-auto h-[80vh] ">
                            <img src={banner1} className="w-full rounded-xl" />
                            <div className="absolute h-full flex  bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                                <div className="text-white md:w-1/2  pl-10  md:pl-14 lg:pl-24 ">
                                    <h2 className='text-2xl w-full md:text-4xl lg:text-6xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                                        Explore The  <span className='text-yellow-600'>Royal Grandium</span> 
                                    </h2>
                                    <h2 className='text-xl md:text-3xl lg:text-4xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                                        Accommodation &
                                        Room styles
                                    </h2>

                                    <p >
                                        There are many variations of rooms of  available,<br />
                                        Explore Our facilities
                                    </p>

                                </div>
                            </div>
                            < div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl">❮</a>
                                <a href="#slide2" className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl">❯</a>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div id="slide2" className="carousel-item relative  md:h-[600px] max-w-7xl mx-auto h-[80vh] ">
                            <img src={banner2} className="w-full rounded-xl" />
                            <div className="absolute h-full flex  bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                                <div className="text-white md:w-1/2  pl-10  md:pl-14 lg:pl-24 ">
                                    <h2 className='text-2xl w-full md:text-4xl lg:text-6xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                                        Explore The  <span className='text-yellow-600'>Royal Grandium</span> 
                                    </h2>
                                    <h2 className='text-xl md:text-3xl lg:text-4xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                                        Accommodation &
                                        Room styles
                                    </h2>

                                    <p >
                                        There are many variations of rooms of  available,<br />
                                        Explore Our facilities
                                    </p>

                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl">❮</a>
                                <a href="#slide3" className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl">❯</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id="slide3" className="carousel-item relative   md:h-[600px] max-w-7xl mx-auto h-[80vh] ">
                            <img src={banner3} className="w-full rounded-xl" />
                            <div className="absolute h-full flex  bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                                <div className="text-white md:w-1/2  pl-10  md:pl-14 lg:pl-24 ">
                                    <h2 className='text-2xl w-full md:text-4xl lg:text-6xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                                        Explore The  <span className='text-yellow-600'>Royal Grandium</span> 
                                    </h2>
                                    <h2 className='text-xl md:text-3xl lg:text-4xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                                        Accommodation &
                                        Room styles
                                    </h2>

                                    <p >
                                        There are many variations of rooms of  available,<br />
                                        Explore Our facilities
                                    </p>

                                </div>
                            </div>
                            < div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl">❮</a>
                                <a href="#slide4" className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl">❯</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id="slide4" className="carousel-item relative  md:h-[600px] max-w-7xl mx-auto h-[80vh] ">
                            <img src={banner4} className="w-full rounded-xl" />
                            <div className="absolute h-full flex  bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                                <div className="text-white md:w-1/2  pl-10  md:pl-14 lg:pl-24 ">
                                    <h2 className='text-2xl w-full md:text-4xl lg:text-6xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                                        Explore The  <span className='text-yellow-600'>Royal Grandium</span> 
                                    </h2>
                                    <h2 className='text-xl md:text-3xl lg:text-4xl font-bold space-y-1 md:space-y-5 lg:space-y-7'>
                                        Accommodation &
                                        Room styles
                                    </h2>

                                    <p >
                                        There are many variations of rooms of  available,<br />
                                        Explore Our facilities
                                    </p>

                                </div>
                            </div>
                            < div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl">❮</a>
                                <a href="#slide1" className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl">❯</a>
                            </div>
                        </div>
                    </SwiperSlide>


                </div>

            </Swiper>

        </>
    );
};

export default Banner;