import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import BookingItem from "../BookedService/BookingItem";
import { useQuery } from "react-query";
// import { useQuery } from "react-query";

const BookService = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    console.log(user.email)



    const getBookings = async () => {
        const response = axios.get(`http://localhost:5000/bookings?email=${user.email}`)
            .then(result => {
                setBookings(result.data)
            })
        return response
    }

    const {
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['bookings'],
        queryFn: getBookings
    });

    if (isLoading) {
        return <p>loading</p>
    }
    if (isError) {
        return <p>SomeThing error : {error}</p>
    }


    const handleDelete = id => {
        const proceed = confirm('Are You sure you delete');
        if (proceed) {
            fetch(``, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }


    const handleConfirm = id => {
        fetch(``, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)

                }
            })



    }

    if (bookings.length == 0) {
        return <div className="h-[70vh] flex justify-center items-center text-2xl md:text-4xl lg:text-6xl font-extrabold "> No Bookings</div>
    }



    return (
        <div className="min-h-[70vh]">
            <h2 className="text-4xl">Your Bookings:{bookings.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Service Name </th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingItem booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                                key={booking._id}></BookingItem>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default BookService;