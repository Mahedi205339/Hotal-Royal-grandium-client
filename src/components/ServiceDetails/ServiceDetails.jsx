import { Link, useLoaderData } from "react-router-dom";
import { FaRegComment } from 'react-icons/fa';


const ServiceDetails = () => {
    const service = useLoaderData();
    const { name, price_per_night, image, _id, availability, room_description } = service

    return (
        <div className="max-w-7xl mx-auto flex flex-col  lg:grid lg:grid-cols-5 md:gap-10">
            <div className="col-span-3">
                <div className="card card-compact  bg-base-100">
                    <figure><img className="w-96 md:w-[600px]" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl  font-semibold">{name}</h2>
                        <p className="text-xl font-bold">Cost:<span className="text-xl md:text-2xl font-extrabold"> ${price_per_night}</span></p>
                        <h2 className="text-2xl font-bold">Availability: {availability}</h2>
                        <p>{room_description}</p>
                        <Link to={`/checkout/${_id}`}><button className="btn bg-yellow-700 hover:bg-yellow-600 text-white">Book Now</button> </Link>
                    </div>

                </div>
            </div>
            <div className="  lg:col-span-2 w-full pl-3">
                <div>
                    <h2 className="text-xl my-3 md:text-2xl font-bold">Recent posts</h2>
                    <hr className="w-3/4 border-gray-400" />
                    <h3 className="text-gray-500 my-2">How to Start an Event Planning Service</h3>
                    <div className="flex gap-1 text-gray-500">
                        <p className="text-red-500">AUG 6 , 2023</p>
                        <p>| Admin |</p>
                        <div className="flex items-center gap-2">
                            <FaRegComment></FaRegComment>
                            <p> comments</p>
                        </div>
                    </div>
                </div>
                <div className="my-6">
                    <h3 className="text-gray-500 my-2">Turning a Profit in the Event Planning Business</h3>
                    <div className="flex gap-1 text-gray-500">
                        <p className="text-red-500">AUG 6 , 2023</p>
                        <p>| Admin |</p>
                        <div className="flex items-center gap-2">
                            <FaRegComment></FaRegComment>
                            <p> comments</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-500 my-2">How to Start an Event Planning Service</h3>
                    <div className="flex gap-1 text-gray-500">
                        <p className="text-red-500">AUG 6 , 2023</p>
                        <p>| Admin |</p>
                        <div className="flex items-center gap-2">
                            <FaRegComment></FaRegComment>
                            <p> comments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;