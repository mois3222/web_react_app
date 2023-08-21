import { useState } from "react";
import Link from "../components/Link";
import iconsController from "../controller/iconsController";

function Header() {
  const [buttonSwitch, SetButtonSwitch] = useState(false);

  const tooggle = () => SetButtonSwitch(!buttonSwitch);

  return (
    <header className="Header">
      <nav className="Header__nav navbar">
        <section className="navbar__section">
          <button onClick={tooggle}>
            <div className={buttonSwitch ? `active` : `desactive`}>
              <span></span>
            </div>
          </button>
        </section>
        <section className="navbar__section">
          <ul>
            <Link anchor={""} svg={<iconsController.IoMdHome size={"2em"} />} />
            <Link
              anchor={"Discord"}
              svg={<iconsController.RiDiscordLine size={"2em"} />}
            />
            <Link
              anchor={"Games"}
              svg={<iconsController.BiGame size={"2em"} />}
            />
            <Link
              anchor={"About"}
              svg={<iconsController.IoIosPeople size={"2em"} />}
            />
            <Link
              anchor={"Facebook"}
              svg={<iconsController.AiOutlineFacebook size={"2em"} />}
            />
            <Link
              anchor={"Instagram"}
              svg={<iconsController.TfiInstagram size={"2em"} />}
            />
            <Link
              anchor={"Twitter"}
              svg={<iconsController.FiTwitter size={"2em"} />}
            />
          </ul>
        </section>
      </nav>
    </header>
  );
}

export default Header;
