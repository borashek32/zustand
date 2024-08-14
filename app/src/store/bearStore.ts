import { create } from 'zustand';
import { BearState } from './store.types';

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: (value: number) =>
    set((state) => ({
      ...state,
      bears: state.bears + value,
    })),
  decrease: (value: number) =>
    set((state) => ({
      ...state,
      bears: state.bears - value,
    })),
}));
