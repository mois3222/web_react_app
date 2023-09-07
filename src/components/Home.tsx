import { useEffect, useState } from "react";
import TGames from "../modules/games";

type TGamesArr = Record<"games", TGames[]>;

const Home = () => {
  const [game, setGames] = useState<TGamesArr>();

  useEffect(() => {
    (async () => {
      const rta: TGamesArr = await fetch("./src/API/db.json")
        .then((res) => {
          if (!res.ok) throw new Error().message;
          return res.json();
        })
        .then((data) => data)
        .catch(() => {});

      setGames(rta);
    })();
  }, []);

  const gameList = game?.games;
  return (
    <section className="Main__home">
      <div className="Main__slider">
        {gameList?.map((game, index) => (
          <img
            key={index}
            src={game.img}
            alt={game.name}
            className={game.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
