import Link from "./Link";
import SVGHome from "../icons/SVGHome";
function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__ul">
          <Link subTitle={"Home"} svg={<SVGHome />} />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
