import { useEffect, useState } from "react";
import SharedTitle from "../SharedTitle/SharedTitle";

const Menus = () => {
const [menus, setMenus] = useState([])

    useEffect( () => {
        fetch('./../../../public/menus.json')
        .then(res => res.json())
        .then(data => setMenus(data))
    } , [])


    return (
        <div className="my-16">
            <SharedTitle subHeader={'Check It Out'} header={'FROM OUR MENU'}></SharedTitle>
            <div className="grid md:grid-cols-2 gap-8 ">
                {
                    menus.filter(item => item.category === 'popular').map(menu => <div key={menu._id} className="flex gap-4">
                        <img className="w-24 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl" src={menu.image} alt="" />
                        <div>
                            <h2 className="text-xl font-medium">{menu.name}-----------</h2>
                            <p>{menu.recipe}</p>
                        </div>
                        <p className="text-orange-300">${menu.price}</p>
                    </div>)
                }
            </div>
            <div className="text-center mt-10">
            <button className="py-3 btn border-b-4 border-black">View Full Menu</button>

            </div>
            <div className="my-20 bg-black">
                <h2 className="text-white text-5xl px-16 py-20 text-center">Call Us: +88 0192345678910</h2>
            </div>
        </div>
    );
};

export default Menus;