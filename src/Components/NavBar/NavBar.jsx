import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLiks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-[#EEFF25]" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contact-us"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-[#EEFF25]" : ""
        }
      >
        Contact us
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-[#EEFF25]" : ""
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/our-menu"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-[#EEFF25]" : ""
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to="/our-shop"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-[#EEFF25]" : ""
        }
      >
        Our Shop
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-[#EEFF25]" : ""
        }
      >
        Log in
      </NavLink>
    </>
  );
  return (
    <div className="drawer fixed z-10 max-w-7xl bg-black bg-opacity-40 text-white">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar ">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="flex flex-col ">
            <h2 className="text-3xl font-bold">BISTRO BOSS</h2>
            <p className="text-2xl tracking-[7px]">RESTURANT</p>
            </div>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal flex gap-5 text-xl">
              {/* Navbar menu content here */}
              {navLiks}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full  bg-black bg-opacity-70 text-white space-y-3 ">
          {/* Sidebar content here */}
          {navLiks}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
