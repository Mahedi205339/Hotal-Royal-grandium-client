import { Link } from "react-router-dom";
const ServicesCart = ({ service }) => {
    const { name, price_per_night, image, _id } = service

    return (

        <div data-aos="zoom-in" className="card  shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-2xl font-bold text-yellow-700">Cost: $ {price_per_night}</p>
                <div className="card-actions justify-center">

                    {/* <Link to={`/checkout/${_id}`}><button className="btn bg-yellow-700 hover:bg-yellow-600 text-white">Details</button> </Link> */}
                    <Link to={`/details/${_id}`}><button className="btn bg-yellow-700 hover:bg-yellow-600 text-white">Details</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;