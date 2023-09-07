import CrudApi from "../service/crudApi";
import { useEffect, useState } from "react";
import TGames from "../modules/games";

const HomeSettings = () => {
  const api = CrudApi.getInstance();
  const [res, setRes] = useState<TGames[]>([]);

  useEffect(() => {
    (async () => {
      const rta: TGames[] = await api.GET();
      setRes(rta);
      console.log(rta);
    })();
  }, []);

  const games: TGames[] = [
    {
      name: "Zrist",
      img: "imgs/zrist-back.jpg",
      url: "https://html5.gamemonetize.com/iyq1x3g396ik7vhf71czo9ubmjrimzd4/",
    },
    {
      name: "Mini Switcher",
      img: "imgs/miniswitcher-back.jpg",
      url: "https://html5.gamemonetize.com/r822rwum14259b7wacvt1acbp3e4jv4a/",
    },
    {
      name: "FireBlob",
      img: "imgs/fireblob-back.jpg",
      url: "https://html5.gamemonetize.com/18maefikrn6r5isrep10icvc6lzfrfft/",
    },
    {
      name: "Mini Blocks",
      img: "imgs/miniblocks-back.jpg",
      url: "https://html5.gamemonetize.com/a3g08anaetn716zmnmike7tvgokee4ip/",
    },
    {
      name: "Mini Colors",
      img: "imgs/minicolors-back.jpg",
      url: "https://html5.gamemonetize.com/qdi48bsj1weirf128p32hoagcw2q9kr0/",
    },
    {
      name: "Emerald And Amber",
      img: "imgs/emeraldandamber-back.jpg",
      url: "https://html5.gamemonetize.com/qjyxz4nan9jjcwed12rspodfjqrsc773/",
    },
    {
      name: "Mini Push",
      img: "imgs/minipush-back.jpg",
      url: "https://html5.gamemonetize.com/fkcezxby2ig5nff714fgjvc287a7cd7s/",
    },
    {
      name: "FireBlob Winter",
      img: "imgs/fireblobwinter-back.jpg",
      url: "https://html5.gamemonetize.com/pj05r8tubjj0ukl65o5t9ha5pp111a2r/",
    },
    {
      name: "Gum Adventures DX",
      img: "imgs/gumdx-back.jpg",
      url: "https://html5.gamemonetize.com/ej2w8vnngsep8kcqsfxae8iyg6ghuci9/",
    },
    {
      name: "Mini Arrows",
      img: "imgs/miniarrows-back.jpg",
      url: "https://html5.gamemonetize.com/f1eta6xj4p282uxtt4fomstuq9sbkwcz/",
    },
  ];

  const post = async () => {
    const data = games.map((el, index) => ({
      id: index + 1,
      ...el,
      createAdt: new Date(),
    }));

    for (const el of data) {
      await api.POST(el).then((res) => res);
    }
  };
  return (
    <>
      <section className="Main__settings--home">
        <article className="Main__GET">
          <div>
            <h3>GET</h3>
            {/*  <span className="Main__span--req">
              Req Get {``}
            </span> */}
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates itaque molestiae maxime corrupti repellat at distinctio
              laudantium.
            </p>
          </div>
        </article>
        <article>A</article>
        <article className="Main__POST">
          <div>
            <h3>POST</h3>
            <button onClick={async () => await post()}>Click me!</button>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates itaque molestiae maxime corrupti repellat at distinctio
              laudantium.
            </p>
          </div>
        </article>
        <article>B</article>
        <article className="Main__UPDATE">
          <div>
            <h3>UPDATE</h3>
            <button>Click me!</button>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates itaque molestiae maxime corrupti repellat at distinctio
              laudantium.
            </p>
          </div>
        </article>
        <article>C</article>
        <article className="Main__DELETE">
          <div>
            <h3>DELETE</h3>
            <button>Click me!</button>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates itaque molestiae maxime corrupti repellat at distinctio
              laudantium.
            </p>
          </div>
        </article>
        <article>C</article>
      </section>
    </>
  );
};

export default HomeSettings;
