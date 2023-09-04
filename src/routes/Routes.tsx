import getHash from "../util/getHash";
import resolveRoutes from "../util/resolveHash";
import Home from "../components/Home";
import { useEffect } from "react";
import { useToggleStore } from "../store/toggleStore";

const Routes = () => {
  const { toggle } = useToggleStore();

  let hash = getHash(),
    route = resolveRoutes(hash);
  const routes = {
    "/": <Home />,
  };

  return (
    <>
      <h2>Home!</h2>
    </>
  );
};

export default Routes;
