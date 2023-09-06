import NavLink from "../components/NavLink";
import iconsController from "../controller/iconsController";
import ButtonHome from "../components/ButtonHome";
import ExtensibleMenu from "../components/ExtensibleMenu";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__container">
        <nav className="Header__nav">
          <section className="Header__section--home">
            <ButtonHome />
          </section>
          <section className="Header__section--navbar">
            <ul className="Header__ul">
              <NavLink
                anchor={""}
                className="Header__li"
                svg={<iconsController.IoMdHome size={"2em"} />}
              />
              <NavLink
                anchor={"discord"}
                svg={<iconsController.RiDiscordLine size={"2em"} />}
              />
              <NavLink
                anchor={"games"}
                svg={<iconsController.BiGame size={"2em"} />}
              />
              <NavLink
                anchor={"about"}
                svg={<iconsController.IoIosPeople size={"2em"} />}
              />
              <NavLink
                anchor={"facebook"}
                svg={<iconsController.AiOutlineFacebook size={"2em"} />}
              />
              <NavLink
                anchor={"instagram"}
                svg={<iconsController.TfiInstagram size={"2em"} />}
              />
              <NavLink
                anchor={"twitter"}
                svg={<iconsController.FiTwitter size={"2em"} />}
              />
              <NavLink
                anchor={"settings"}
                svg={<iconsController.FcSettings size={"2em"} />}
              />
            </ul>
          </section>
        </nav>
        <ExtensibleMenu />
      </div>
    </header>
  );
};

export default Header;
