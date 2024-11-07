import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center max-lg:hidden gap-16">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={hamburger}
            alt="menu"
            height={25}
            width={25}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
