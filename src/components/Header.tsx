import Link from "./Link";
import iconsController from "../controller/iconsController";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__ul">
          <section className="header__section">
            <a href="#/" className="header__a--menu">
              <div>
                <span></span>
              </div>
              <h3>Menu</h3>
            </a>
          </section>
          <section className="header__section">
            <Link
              anchor={"Home"}
              svg={<iconsController.IoMdHome size={"2em"} />}
            />
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
          </section>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
