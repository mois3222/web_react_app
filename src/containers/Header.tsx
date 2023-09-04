import NavLink from "../components/NavLink";
import iconsController from "../controller/iconsController";
import ButtonHome from "../components/ButtonHome";
import ExtensibleMenu from "../components/ExtensibleMenu";

const Header = () => {
  return (
    <header className="Header">
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
          </ul>
        </section>
      </nav>
      <ExtensibleMenu />
    </header>
  );
};

export default Header;
