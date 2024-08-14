export interface BearState {
  bears: number;
  increase: (value: number) => void;
  decrease: (value: number) => void;
}
