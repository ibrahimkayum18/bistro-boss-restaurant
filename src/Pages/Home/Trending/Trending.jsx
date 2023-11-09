import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const Trending = () => {
  return (
    <div className="mt-10">
      <SharedTitle
        subHeader={"From 11.00am to 10.00pm"}
        header={"ORDER ONLINE"}
      ></SharedTitle>
      <div className="mb-16">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={img1} alt="" />
              <h2 className="text-3xl -mt-16 pb-5 text-center text-white">SALAD</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img2} alt="" />
              <h2 className="text-3xl -mt-16 pb-5 text-center text-white">SOUPS</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img3} alt="" />
              <h2 className="text-3xl -mt-16 pb-5 text-center text-white">PIZZAS</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img4} alt="" />
              <h2 className="text-3xl -mt-16 pb-5 text-center text-white">
                DESSERTS
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img5} alt="" />
              <h2 className="text-3xl -mt-16 pb-5 text-center text-white">SALAD</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
