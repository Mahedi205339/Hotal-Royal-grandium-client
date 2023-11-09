

const BookingItem = ({ booking, handleDelete, handleConfirm }) => {

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
            <div className="flex flex-row lg:flex-col text-white gap-3">
                <button onClick={() => handleDelete(_id)} className="btn bg-red-600 hover:bg-red-800 ">Watch</button>
                <button className="btn btn-primary">Watch</button>
                <button className="btn btn-primary">Watch</button>
            </div>
        </div>
    );
};

export default BookingItem;