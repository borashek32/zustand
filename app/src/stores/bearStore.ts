import { create } from 'zustand';

// Определяем интерфейс состояния хранилища
interface BearState {
  bears: number;
  increase: (by: number) => void;
}

// Создаем хранилище с помощью `create` и типизируем его интерфейсом `BearState`
export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));
