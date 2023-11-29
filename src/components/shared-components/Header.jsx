import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";
import { Menu, Transition } from "@headlessui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { userLoggedOut } from "../../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const isAuth = useAuthCheck();
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  const handleLogut = () => {
    localStorage.clear();
    toast.success(`Logged out!`);
    dispatch(userLoggedOut());
    navigate("/");
  };
  return (
    <React.Fragment>
      <Toaster position="top-right" reverseOrder={false} />
      <nav className="shadow px-8 md:px-20">
        <div className="md:h-16 h-28 mx-auto container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="md:order-1">
            <Link to={"/"}>
              <img className="w-52" src="/src/assets/logo.png" alt="" />
            </Link>
          </div>

          {isAuth && (
            <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
              <ul className="flex font-semibold justify-between">
                <li className="md:px-4 md:py-2 hover:text-indigo-400">
                  <a href="#">Profile</a>
                </li>
                <li
                  className={`md:px-4 md:py-2 ${
                    location.pathname === "/create/event"
                      ? "text-indigo-500"
                      : "hover:text-indigo-400"
                  } `}
                >
                  <Link to={"/create/event"}>Create Event</Link>
                </li>
              </ul>
            </div>
          )}

          <div className="order-2 md:order-3">
            {isAuth ? (
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    <div className="flex justify-between items-center">
                      {user?.first_name} {user?.last_name}
                      <i className="fas fa-chevron-down -mr-1 ml-2 text-violet-200 hover:text-violet-100"></i>
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        <button
                          onClick={handleLogut}
                          className={`"text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Log Out
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link to={"/login"}>
                <button className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-gray-50 rounded-xl flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Login</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
