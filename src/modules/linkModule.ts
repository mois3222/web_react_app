export interface Props {
  svg: JSX.Element;
  anchor: string;
}

export type HTMLPropsAtributes = Partial<React.HTMLAttributes<HTMLLIElement>> &
  Props;
