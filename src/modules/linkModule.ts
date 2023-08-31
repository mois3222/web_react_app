export interface Props {
  svg: JSX.Element;
  products?: string;
  anchor: string;
}

export type HTMLPropsAtributes = Partial<React.HTMLAttributes<HTMLLIElement>> &
  Props;
