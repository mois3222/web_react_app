import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Main from "./containers/Main";

// import CrudApi from "./service/crudApi";
// import { useEffect } from "react";

const App = () => {
  // const api = CrudApi.getInstance();
  /* useEffect(() => {
    (async () => {
      await api.GET();
      const rta = await api
        .POST({
          name: "Mini Arrows",
          img: "imgs/miniarrows-back.jpg",
          url: "https://html5.gamemonetize.com/f1eta6xj4p282uxtt4fomstuq9sbkwcz/",
        })
        .then((res) => res);

      console.log(rta);
    })();
  }, []); */
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
