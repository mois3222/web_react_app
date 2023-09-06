import NavLink from "./NavLink";
import iconsController from "../controller/iconsController";
import useShowStore from "../store/showStore";

const ExtensibleMenu = () => {
  const { show } = useShowStore();
  return (
    <>
      <nav className={`Header__nav--extensible ${show ? "show" : ""}`}>
        <ul>
          {show ? (
            <>
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
            </>
          ) : null}
        </ul>
      </nav>
    </>
  );
};

export default ExtensibleMenu;
