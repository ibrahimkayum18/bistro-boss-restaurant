import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Recomended = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("./../../../public/menus.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);
  console.log(menus);
  return (
    <div className="my-20">
      <SharedTitle
        subHeader={"Should Try"}
        header={"CHEF RECOMMENDS"}
      ></SharedTitle>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {menus.filter(item => item.category === 'salad').map((menu) => (
            <SwiperSlide key={menu._id}>
              <div className="card h-[420px] lg:rounded-t-none lg:rounded-b-none card-compact bg-base-100 shadow-xl">
                <figure>
                  <img
                  className="w-full"
                    src={menu.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body text-center bg-gray-200">
                  <h2 className="card-title mx-auto">{menu.name}</h2>
                  <p>{menu.recipe}</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add To Cart</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Recomended;
