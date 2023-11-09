import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import BookingItem from "../BookedService/BookingItem";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
// import { useQuery } from "react-query";

const BookService = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);



    const getBookings = async () => {
        const response = axios.get(`https://hotel-royal-grandium-server-5t1nlon2f-mahedis-projects.vercel.app/bookings?email=${user.email}`, { withCredentials: true })
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


    const handleCancel = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {


            if (result.isConfirmed) {

                fetch(`https://hotel-royal-grandium-server-5t1nlon2f-mahedis-projects.vercel.app/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining)
                        }
                    })


            }
        });



    }


    if (bookings.length == 0) {
        return <div className="h-[70vh] flex justify-center items-center text-2xl md:text-4xl lg:text-6xl font-extrabold "> No Bookings</div>
    }



    return (
        <div className="min-h-[70vh]">
                <Helmet>
                <meta charSet="utf-8" />
                <title>Bookings</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <h2 className="text-center text-xl md:text-3xl lg:text-5xl font-extrabold">Your Bookings : {bookings.length}</h2>
            </div>

            <div className="my-4">
                {
                    bookings.map(booking => <BookingItem booking={booking}
                        handleCancel={handleCancel}
                        key={booking._id}></BookingItem>)
                }
            </div>


        </div>
    );
}


export default BookService;


