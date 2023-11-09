import Menus from "../../../Components/Menus/Menus";
import Banner from "../Banner/Banner";
import BistroInfo from "../BistroInfo";
import Recomended from "../Recomended/Recomended";
import Trending from "../Trending/Trending";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-10/12 mx-auto">
            <Trending></Trending>
            <BistroInfo />
            <Menus></Menus>
            <Recomended></Recomended>
            </div>
        </div>
    );
};

export default Home;