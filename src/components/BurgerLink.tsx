import { useState } from "react";
import { HTMLPropsAtributes } from "../modules/linkModule";

const BurgerLink = ({
  anchor,
  svg,
  category,
  ...props
}: HTMLPropsAtributes) => {
  const [active, setActive] = useState(false);

  const toggle = () => setActive(!active);
  return (
    <>
      <li {...props}>
        <a
          href={`#/${anchor}`}
          onClick={toggle}
          className={`burger__a ${active ? "active" : "desactive"}`}
        >
          {svg}
          <h4 className="burger__h4">{category}</h4>
        </a>
      </li>
    </>
  );
};

export default BurgerLink;
