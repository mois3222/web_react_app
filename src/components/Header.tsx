import { useState } from "react";
import Link from "./Link";
import BurgerLink from "./BurgerLink";
import iconsController from "../controller/iconsController";

function Header() {
  const [buttonSwitch, SetButtonSwitch] = useState(false);

  const tooggle = () => SetButtonSwitch(!buttonSwitch);

  return (
    <header className="header">
      <nav className="header__nav--navbar nav">
        <section className="nav__section">
          <button className="nav__button--menu" onClick={tooggle}>
            <div className={buttonSwitch ? `active` : `desactive`}>
              <span></span>
            </div>
          </button>
        </section>
        <section className="nav__section">
          <ul className="nav__ul">
            <Link
              className="nav__li"
              anchor={""}
              svg={<iconsController.IoMdHome size={"2em"} />}
            />
            <Link
              className="nav__li icon_show"
              anchor={"Discord"}
              svg={<iconsController.RiDiscordLine size={"2em"} />}
            />
            <Link
              className="nav__li icon_show"
              anchor={"Games"}
              svg={<iconsController.BiGame size={"2em"} />}
            />
            <Link
              className="nav__li icon_show"
              anchor={"About"}
              svg={<iconsController.IoIosPeople size={"2em"} />}
            />
            <Link
              className="nav__li"
              anchor={"Facebook"}
              svg={<iconsController.AiOutlineFacebook size={"2em"} />}
            />
            <Link
              className="nav__li"
              anchor={"Instagram"}
              svg={<iconsController.TfiInstagram size={"2em"} />}
            />
            <Link
              className="nav__li"
              anchor={"Twitter"}
              svg={<iconsController.FiTwitter size={"2em"} />}
            />
          </ul>
        </section>
      </nav>
      <nav
        className={`header__nav--burger burger ${
          buttonSwitch ? "active" : "desactive"
        }`}
      >
        <ul className="burger__ul">
          <BurgerLink
            className="burger__li"
            category="Discord"
            anchor="discord"
            svg={<iconsController.RiDiscordLine size={"2em"} />}
          />
          <BurgerLink
            className="burger__li"
            anchor={"games"}
            category="Games"
            svg={<iconsController.BiGame size={"2em"} />}
          />
          <BurgerLink
            className="burger__li"
            anchor={"about"}
            category="About"
            svg={<iconsController.IoIosPeople size={"2em"} />}
          />
          <BurgerLink
            className="burger__li"
            anchor={"facebook"}
            category="Facebook"
            svg={<iconsController.AiOutlineFacebook size={"2em"} />}
          />
          <BurgerLink
            className="burger__li"
            anchor={"instagram"}
            category="Instagram"
            svg={<iconsController.TfiInstagram size={"2em"} />}
          />
          <BurgerLink
            className="burger__li"
            anchor={"twitter"}
            category="Twitter"
            svg={<iconsController.FiTwitter size={"2em"} />}
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
