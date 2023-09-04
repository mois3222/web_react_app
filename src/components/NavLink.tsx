import { useRef } from "react";
import { HTMLPropsAtributes } from "../modules/linkModule";
import { useToggleStore } from "../store/toggleStore";
import { Link } from "react-router-dom";

const NavLink = ({ anchor, svg, ...props }: HTMLPropsAtributes) => {
  const { toggle, setToggle } = useToggleStore();
  const refElement = useRef<HTMLAnchorElement>(null);

  const navLinkName = anchor === "" ? "Home" : anchor;

  return (
    <>
      <li {...props}>
        <Link
          to={`/${anchor}`}
          className={`Header__a ${navLinkName} ${
            refElement.current?.className.includes(toggle!) ? "active" : ""
          }`}
          ref={refElement}
          onClick={() => setToggle(refElement)}
        >
          {svg}
          <h3>{navLinkName}</h3>
        </Link>
      </li>
    </>
  );
};

export default NavLink;
