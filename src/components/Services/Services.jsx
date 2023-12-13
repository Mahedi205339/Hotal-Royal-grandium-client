import { useState } from "react";
import ServicesCart from "../ServiceCart/ServiceCart";
import axios from "axios";
import { useQuery } from "react-query";


const categories = [
    'suite',
    'double-room',
    'single-room'
]

const Services = () => {
    const [services, setServices] = useState([]);
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const getServices = async () => {
        const response = await axios.get(`https://hotel-royal-grandium-server-8gp5e4fi5-mahedis-projects.vercel.app/services?sortField=price_per_night&sortOrder=${price}&category=${category}`, services)
            .then(result => {
                setServices(result)
            })
        return response
    }



    const {
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['services', price, category],
        queryFn: getServices
    });

    if (isLoading) {
        return <p>loading</p>
    }
    if (isError) {
        return <p>SomeThing error : {error}</p>
    }




    return (
        <div>
            <div className="text-center my-6 md:my-14 lg:my-20">
                <h4 className="text-xl md:text-2xl text-pink-400 font-semibold">Our Facilities</h4>
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">Explore The Royal Grandium</h2>
            </div>
            <div className="my-12 flex justify-end flex-col lg:flex-row items-center border-2 rounded-xl p-6 gap-5 max-w-7xl mx-auto">
                <h1 className="flex-1 text-xl font-semibold">
                    Choose your favorite
                </h1>

                <div className="form-control font-sans">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select className="input input-bordered" onChange={(e) => setCategory(e.target.value)}>
                        <option disabled  >
                            Chose one
                        </option>
                        {categories.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-control font-serif">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <select className="input input-bordered"
                        onChange={(e) => setPrice(e.target.value)}
                    >
                        <option value="asc">from low to high</option>
                        <option value="desc">from high to low</option>

                    </select>
                </div>





            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 lg:gap-10">
                {
                    services?.data?.result?.map(service => <ServicesCart service={service} key={service._id}></ServicesCart>)
                }

            </div>
            <div className="my-6 flex justify-center">
                <div className="join ">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn ">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
            </div>



        </div>
    );
};

export default Services;