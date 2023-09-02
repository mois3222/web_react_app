import Header from "./containers/Header";
import Footer from "./containers/Footer";
import CrudApi from "./service/crudApi";
import { useEffect } from "react";

const App = () => {
  const api = CrudApi.getInstance();
  useEffect(() => {
    (async () => {
      const rta = await api.GET();
      console.log(rta);
    })();
  }, []);
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
};

export default App;
