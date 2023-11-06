import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'

const Testimonials = () => {
    return (
        <div>
            <div className="text-center my-6 md:my-14 lg:my-20">
                <h4 className="text-xl md:text-2xl text-pink-400 font-semibold">Testimonials</h4>
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">Happy Clients</h2>

            </div>

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
                            <div data-aos="flip-down" className="card w-96  shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Let us take most of the money we would have spent on paid advertising and paid marketing and instead of spending it on that, invest it in the customer experience /customer service and then let our customers do the marketing for us through word of mouth
                                    </h2>
                                    <p>With growing competition in every industry in every aspect — from price to technology to innovation — Allwood believes the way to differentiate your brand is through improving customer experience.</p>
                                </div>
                                <figure><img className='w-24 my-2' src={user1} alt="Shoes" /></figure>
                                <div className='text-center'>
                                    <h2 className='font-serif font-semibold'>Mark Aden</h2>
                                    <p className='font-bold'>Shylet </p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div data-aos="flip-down" className="card w-96  shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Let us take most of the money we would have spent on paid advertising and paid marketing and instead of spending it on that, invest it in the customer experience /customer service and then let our customers do the marketing for us through word of mouth
                                    </h2>
                                    <p>With growing competition in every industry in every aspect — from price to technology to innovation — Allwood believes the way to differentiate your brand is through improving customer experience.</p>
                                </div>
                                <figure><img className='w-24 my-2' src={user2} alt="Shoes" /></figure>
                                <div className='text-center'>
                                    <h2 className='font-serif font-semibold'>Alexa </h2>
                                    <p className='font-bold'>Puran Dhaka,Dhaka</p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div data-aos="flip-down" className="card w-96  shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Let us take most of the money we would have spent on paid advertising and paid marketing and instead of spending it on that, invest it in the customer experience /customer service and then let our customers do the marketing for us through word of mouth
                                    </h2>
                                    <p>With growing competition in every industry in every aspect — from price to technology to innovation — Allwood believes the way to differentiate your brand is through improving customer experience.</p>
                                </div>
                                <figure><img className='w-24 my-2' src={user3} alt="Shoes" /></figure>
                                <div className='text-center'>
                                    <h2 className='font-serif font-semibold'>Alisa shah</h2>
                                    <p className='font-bold'>Puran Dhaka,Dhaka</p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div data-aos="flip-down" className="card w-96  shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Let us take most of the money we would have spent on paid advertising and paid marketing and instead of spending it on that, invest it in the customer experience /customer service and then let our customers do the marketing for us through word of mouth
                                    </h2>
                                    <p>With growing competition in every industry in every aspect — from price to technology to innovation — Allwood believes the way to differentiate your brand is through improving customer experience.</p>
                                </div>
                                <figure><img className='w-24 my-2' src={user1} alt="Shoes" /></figure>
                                <div className='text-center'>
                                    <h2 className='font-serif font-semibold'>Aden Mark</h2>
                                    <p className='font-bold'>Puran Dhaka,Dhaka</p>
                                </div>

                            </div>

                        </SwiperSlide>

                    </Swiper>

                </div>



            </div>




        </div>
    );
};

export default Testimonials;