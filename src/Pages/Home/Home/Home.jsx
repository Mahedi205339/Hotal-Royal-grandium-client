
import Testimonials from "../../../components/Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import BottomBanner from "../ButtomBanner/BottomBanner";
import Services from "../../../components/Services/Services";
import ContactUs from "../../../components/ContactUs/ContactUs";


const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <BottomBanner></BottomBanner>
            <Services></Services>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;