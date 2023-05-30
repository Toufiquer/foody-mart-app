import { Link } from "react-router-dom";

const Nav = () => {
  const ulComponent = (
    <>
      <li>
        <Link to="/">HOME</Link>
        {/* <a href="#">HOME</a> */}
      </li>
      <li>
        <Link to="/about">ABOUT</Link>
      </li>
      <li>
        <Link to="/service">SERVICE</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {ulComponent}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex gap-4 ">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{ulComponent}</ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
