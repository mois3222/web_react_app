export interface Props {
  svg: JSX.Element;
  category?: string;
  anchor: string;
}

export type HTMLPropsAtributes = Partial<React.HTMLAttributes<HTMLLIElement>> &
  Props;
