import { create } from "zustand";

// no parameters and use old state
interface CounterState {
  CounterCount: number;
}
interface CounterActions {
  CounterIncrement: () => void;
  CounterDecrement: () => void;
}

const useCounter = create<CounterState & CounterActions>((set) => ({
  CounterCount: 0,
  CounterIncrement: () =>
    set((state) => ({ CounterCount: state.CounterCount + 1 })),
  CounterDecrement: () =>
    set((state) => ({ CounterCount: state.CounterCount - 1 })),
}));

export default useCounter;
