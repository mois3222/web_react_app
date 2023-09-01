import Link from "./Link";
import iconsController from "../controller/iconsController";
import useShowStore from "../store/showStore";

const ExtensibleMenu = () => {
  const { show } = useShowStore();
  return (
    <>
      <nav className={`Header_nav extensiblemenu ${show ? "show" : ""}`}>
        <ul>
          {show ? (
            <>
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
            </>
          ) : null}
        </ul>
      </nav>
    </>
  );
};

export default ExtensibleMenu;
