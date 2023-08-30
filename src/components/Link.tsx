import { useRef } from "react";
import { HTMLPropsAtributes } from "../modules/linkModule";
import { useToggleStore } from "../store/toggleStore";

const Link = ({ anchor, svg, category, ...props }: HTMLPropsAtributes) => {
  const { toggle, setToggle } = useToggleStore();
  const HTMLRefElement = useRef<HTMLAnchorElement>(null);

  let className = anchor === "" ? "Home" : anchor;

  return (
    <>
      <li {...props}>
        <a
          href={`#/${anchor}`}
          onClick={() => {
            console.log(HTMLRefElement.current?.className.includes(toggle!));

            console.log(toggle);
            return setToggle(HTMLRefElement);
          }}
          className={`${className} ${
            HTMLRefElement.current?.className.includes(toggle!)
              ? "active"
              : "desactive"
          }`}
          ref={HTMLRefElement}
        >
          {svg}
          <h4>{category}</h4>
        </a>
      </li>
    </>
  );
};

export default Link;
