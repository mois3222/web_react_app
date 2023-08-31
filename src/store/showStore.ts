import create from "zustand";

interface ShowStore {
  show: boolean;
  setShow: () => void;
}

const useShowStore = create<ShowStore>((set) => ({
  show: false,
  setShow: () =>
    set((state) => ({
      show: !state.show,
    })),
}));

export default useShowStore;
