import { Helmet } from 'react-helmet';
import img from '../../assets/cover2.jpg'
import Testimonials from '../../components/Testimonials/Testimonials';
const AboutUs = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row font-bold my-10 max-w-7xl mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
                <div className='flex-1'>
                    <h3 className="text-xl text-yellow-600">YOUR PERFECT ESCAPE</h3>
                    <h3 className="text-xl md:text-3xl lg:text-5xl text-yellow-600 my-7">About Page</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, dignissimos atque minus libero eligendi iste ipsum praesentium eveniet deserunt! Eius provident placeat voluptatem non, commodi ea nemo hic eaque ipsa?
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nobis deserunt voluptatum labore tenetur, deleniti facilis aperiam quod architecto nesciunt dolores, repellendus dolor esse neque magnam eaque dolorum provident voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, minus, earum voluptas voluptates possimus molestias doloribus cumque consequuntur ab officia dolore. Quos doloremque laborum repudiandae quaerat iusto neque harum vel!
                    </p>
                </div>
                <div className='flex-1'>
                    <img src={img} alt="" />
                </div>
            </div>

            <div className='flex flex-col lg:flex-row font-bold my-10 max-w-7xl mx-auto gap-3 md:gap-10 lg:gap-14'>
                <div className='flex-1'>
                    <h3 className="text-xl text-yellow-600 my-6 ">ABOUT ROYAL GRANDIUM</h3>
                    <h3 className="text-xl md:text-3xl lg:text-5xl text-yellow-600">Our Philosophy</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero aperiam, necessitatibus quasi dolor minus dicta repellendus dolorum perferendis repudiandae cum nobis, hic rem? Velit inventore molestias nisi accusamus nam!
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque corporis ex quo autem numquam ipsum dolore natus minus laboriosam sapiente reprehenderit delectus similique culpa dolorem, temporibus deserunt placeat beatae?
                    </p>
                </div>
                <div className='flex-1'>

                    <h3 className="text-xl text-yellow-600 my-6">ABOUT ROYAL GRANDIUM</h3>
                    <h3 className="text-xl md:text-3xl lg:text-5xl text-yellow-600">Our Mission</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero aperiam, necessitatibus quasi dolor minus dicta repellendus dolorum perferendis repudiandae cum nobis, hic rem? Velit inventore molestias nisi accusamus nam!
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque corporis ex quo autem numquam ipsum dolore natus minus laboriosam sapiente reprehenderit delectus similique culpa dolorem, temporibus deserunt placeat beatae?
                    </p>
                </div>
            </div>
            <div className='my-7'>
                 <Testimonials></Testimonials>
            </div>
           
        </div>


    );
};

export default AboutUs;