import { useEffect, useState } from "react";
import ServicesCart from "../ServiceCart/ServiceCart";
// import axios from "axios";

const Services = () => {
    const [services, setServices] = useState([]);

    // axios.get('http://localhost:5000/services', services)
    //     .then(res => {
    //         console.log(res)
    //     })
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)


    return (
        <div>
            <div className="text-center my-6 md:my-14 lg:my-20">
                <h4 className="text-xl md:text-2xl text-pink-400 font-semibold">Our Facilities</h4>
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">Explore The Royal Grandium</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 lg:gap-10">
                {
                    services.map(service => <ServicesCart service={service} key={service._id}></ServicesCart>)
                }

            </div>


        </div>
    );
};

export default Services;