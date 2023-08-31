import { useRef } from "react";
import { HTMLPropsAtributes } from "../modules/linkModule";
import { useToggleStore } from "../store/toggleStore";

const Link = ({ anchor, svg, products, ...props }: HTMLPropsAtributes) => {
  const { toggle, setToggle } = useToggleStore();
  const HTMLRefElement = useRef<HTMLAnchorElement>(null);

  let className = anchor === "" ? "home" : anchor;

  return (
    <>
      <li {...props}>
        <a
          href={`#/${anchor}`}
          onClick={() => setToggle(HTMLRefElement)}
          className={`${className.toLocaleLowerCase()} ${
            HTMLRefElement.current?.className.includes(toggle!)
              ? "active"
              : "desactive"
          }`}
          ref={HTMLRefElement}
        >
          {svg}
          <h4>{products}</h4>
        </a>
      </li>
    </>
  );
};

export default Link;
