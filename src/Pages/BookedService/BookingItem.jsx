import { Link } from "react-router-dom";


const BookingItem = ({ booking, handleCancel }) => {

    const { image, date, customerName, price, _id, category
    } = booking;

    return (
        <div className="card flex flex-col lg:flex-row items-center card-side max-w-6xl mx-auto font-extrabold my-5">
            <div>
                <img className="rounded-xl" src={image} alt="Movie" />
            </div>

            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <p>{customerName}</p>
                <p>Cost: {price}</p>
                <p>{date}</p>
            </div>
            <div className="flex flex-row lg:flex-col  gap-3">
                <button onClick={() => handleCancel(_id)} className="btn bg-red-600 hover:bg-red-800 text-white">Cancel</button>
                <div >
                    <Link to={`/updateBookings/${_id}`}><button className="btn bg-yellow-700 hover:bg-yellow-600 text-white">Change Date</button> </Link>
                </div>
                <Link to={`/feedbackBookings/${_id}`}>
                    <button className="btn bg-indigo-600 hover:bg-indigoP-800 text-white">FeedBack</button></Link>
            </div>
        </div>
    );
};

export default BookingItem;