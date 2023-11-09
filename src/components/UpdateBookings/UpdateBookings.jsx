import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const UpdateBookings = () => {

    const { user } = useContext(AuthContext)
    const booking = useLoaderData();
    console.log(booking)
    const { customerName, _id, category } = booking


    const handleUpdateBookings = e => {

        e.preventDefault();


        const date = e.target.date.value
        const updatedBookings = { date }

        fetch(`https://hotel-royal-grandium-server-5t1nlon2f-mahedis-projects.vercel.app/bookings/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBookings)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    title: 'success!',
                    text:'Updated',
                    icon:'success',
                })
            }
        })

    }

    return (
        <div className="font-bold">
            <h2 className="text-center font-bold text-xl">Book Service : {category}</h2>


            <form onSubmit={handleUpdateBookings} className=" w-3/4 mx-auto h-auto lg:h-[70vh]">
                <div className="grid grid-cols-1 
    md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={customerName}
                            name="name"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input name="date" type="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user.email} className="input input-bordered" required />
                    </div>

                </div>

                <div className="w-1/2 mx-auto my-6">

                    <input className="bg-orange-500 w-full text-white font-semibold py-2 rounded-2xl hover:text-orange-600 hover:bg-orange-200" type="submit" value="Bookings Confirm" />

                </div>
            </form>
        </div>
    );
};

export default UpdateBookings;