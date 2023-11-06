import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import cover1 from '../../../assets/cover1.jpg'
import cover2 from '../../../assets/cover2.jpg'
import cover3 from '../../../assets/cover3.jpg'
import cover4 from '../../../assets/cover4.jpg'
import img from '../../../assets/banner.jpg'


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const BottomBanner = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto relative mt-10  lg:-mt-10'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper "
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },

                    }}
                >

                    <SwiperSlide>
                        <div data-aos="fade-up"
                            data-aos-anchor-placement="center-center" className="card w-96  bg-base-100 shadow-xlr">
                            <figure><img className='w-96 h-96' src={cover1} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-bold">The view of sea in Royal Grandium</h2>
                                <p>Discover the Hotel Royal Grandium</p>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div data-aos="fade-up"
                            data-aos-anchor-placement="center-center" className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-96 h-96' src={cover2} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-bold">Top Event in Royal Grandium</h2>
                                <p>Discover the Hotel Royal Grandium</p>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div data-aos="fade-up"
                            data-aos-anchor-placement="center-center" className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-96 h-96' src={cover3} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-bold">The view of sea in Royal Grandium</h2>
                                <p>Discover the Hotel Royal Grandium</p>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div data-aos="fade-up"
                            data-aos-anchor-placement="center-center" className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-96 h-96' src={cover4} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-bold">The view of sea in Royal Grandium</h2>
                                <p>Discover the Hotel Royal Grandium</p>

                            </div>
                        </div>

                    </SwiperSlide>






                </Swiper>

            </div>
            <div data-aos="zoom-in-right" className='flex flex-col lg:flex-row justify-center items-center w-full lg:w-10/12 mx-auto'>
                <div data-aos="zoom-in-right" className='flex-1 '>
                    <h2 className='text-xl md:text-2xl lg:text-3xl text-pink-400'>About the Royal Grandium</h2>
                    <p className='font-bold text-lg'>
                        Hotels Internation Limited was established on 25 June 1977 as a public limited company to establish a five star hotel in Dhaka.[3] The foundation of Pan Royal Grandium was laid on 17 October 1977.[3] The construction was financed by Overseas Economic Cooperation Fund (later renamed to Japan Bank for International Cooperation) as a loan to the government of Bangladesh.[3]

                        Pan Royal Grandium was established in 1981. The hotel was designed by Hawaii-based architect Peter Hsi. Pan Pacific Hotels and Resorts was hired to manage the hotel as Bangladesh lacked the necessary experience of operating a 5 star hotel. An 8 acres site in Karwan Bazar was chosen as the construction site.[4]

                        On 13 October 2003, Hotel International Limited announced plans to spend one billion taka to renovate the hotel.[5] On 19 March 2004, Pan Royal Grandium launched the Global Hotel Alliance in Dhaka.[6]
                    </p>
                </div>
                <div data-aos="zoom-in-left" className='flex-1 p-5 lg:p-10'>
                    <img src={img} alt="" />
                </div>

            </div>
        </div>

    );
};

export default BottomBanner;