import Link from "../components/Link";
import iconsController from "../controller/iconsController";
import ButtonHome from "../components/ButtonHome";
import useShowStore from "../store/showStore";

const Header = () => {
  const { show } = useShowStore();
  return (
    <header className="Header">
      <nav className="Header__nav navbar">
        <section className="navbar__section">
          <ButtonHome />
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
      <nav className={`Header_nav navres ${show ? "show" : ""}`}>
        <ul>
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
      </nav>
    </header>
  );
};

export default Header;
