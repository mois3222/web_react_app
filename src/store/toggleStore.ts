import create from "zustand";

type TRef = React.RefObject<HTMLAnchorElement>;

interface toggleState {
  toggle: string | undefined;
  setToggle: (ref: TRef) => void;
}
export const useToggleStore = create<toggleState>((set) => ({
  toggle: "",
  setToggle: (ref: TRef) => {
    return set((state) => ({
      toggle: (state.toggle = ref.current?.className),
    }));
  },
}));
