import { useRef } from "react";
import { HTMLPropsAtributes } from "../modules/linkModule";
import { useToggleStore } from "../store/toggleStore";

const Link = ({ anchor, svg, ...props }: HTMLPropsAtributes) => {
  const { toggle, setToggle } = useToggleStore();
  const HTMLRefElement = useRef<HTMLAnchorElement>(null);

  const utilName = anchor === "" ? "Home" : anchor;

  return (
    <>
      <li {...props}>
        <a
          href={`#/${anchor}`}
          onClick={() => setToggle(HTMLRefElement)}
          className={`${utilName.toLocaleLowerCase()} ${
            HTMLRefElement.current?.className.includes(toggle!)
              ? "active"
              : "desactive"
          }`}
          ref={HTMLRefElement}
        >
          {svg}
          <h4>{utilName}</h4>
        </a>
      </li>
    </>
  );
};

export default Link;
