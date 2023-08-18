interface Props {
  svg: JSX.Element;
  subTitle: string;
}

const Link = ({ subTitle, svg }: Props) => {
  return (
    <>
      <li className="header__li">
        <a href="#/" className="header__a">
          <h3 className="header__h3">{subTitle}</h3>
          {svg}
        </a>
      </li>
    </>
  );
};

export default Link;
