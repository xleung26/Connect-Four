// define the shape of the state which Redux will store 

export interface StoreState {
  board: Array<Array<number>>;
  turn: boolean;
  winner?: number;
}