interface Props {
  svg: JSX.Element;
  anchor: string;
}

const Link = ({ anchor, svg }: Props) => {
  return (
    <>
      <li className="header__li">
        <a href="#/" className="header__a">
          <h3 className="header__h3">{anchor}</h3>
          {svg}
        </a>
      </li>
    </>
  );
};

export default Link;
