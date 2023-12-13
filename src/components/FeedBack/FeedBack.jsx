import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const FeedBack = () => {
    const { user } = useContext(AuthContext)
    const booking = useLoaderData();
    // console.log(booking)
    // console.log(user.email);

    const handleFeedback = async event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const data = {
            message, userEmail: user?.email, roomCategory: booking?.category,
            roomId: booking._id
        }
        // console.log(data);
        await axios.post('https://hotel-royal-grandium-server-8gp5e4fi5-mahedis-projects.vercel.app/feedback', data)
            .then(data => {
                console.log(data)
                if (data.data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Thank you for your feedback',
                        icon: 'success',
                    })
                }
            })
        event.target.reset()
    }

    return (
        <div className="max-w-4xl mx-auto min-h-[calc(100vh-305px)]">
            <div className="text-center font-semibold">
                <h1>Booked Room Id: {booking?._id}</h1>
                <p className="my-3">Category:{booking?.category}.</p>
            </div>
            <form onSubmit={handleFeedback} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-600 font-bold">Email :</span>
                    </label>
                    <input type="email"
                        name="email"
                        placeholder="email" defaultValue={user?.email} className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-600 font-bold">Name</span>
                    </label>
                    <input type="text"
                        defaultValue={booking.customerName}
                        name="customerName"
                        placeholder="Name" className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-yellow-600 font-bold">White Your FeedBack</span>
                    </label>
                    <textarea name="message" placeholder="Write your message" cols="30" rows="10"></textarea>
                </div>

                <input type="submit" value="submit" className="bg-yellow-700 px-3 py-2 text-white rounded-lg hover:bg-yellow-800 w-32 mx-auto" />
            </form>
        </div>
    );
};

export default FeedBack;