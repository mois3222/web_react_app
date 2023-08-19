import { useState } from "react";
import { HTMLPropsAtributes } from "../modules/linkModule";

const Link = ({ anchor, svg, ...props }: HTMLPropsAtributes) => {
  const [buttonSwitch, SetButtonSwitch] = useState(false);

  const tooggle = () => SetButtonSwitch(!buttonSwitch);
  return (
    <>
      <li {...props}>
        <a
          onClick={tooggle}
          href={`#/${anchor}`}
          className={buttonSwitch ? `active` : `desactive`}
        >
          {svg}
        </a>
      </li>
    </>
  );
};

export default Link;
