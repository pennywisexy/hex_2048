interface ICellProps {
  x: number
  y: number
  z: number
  value: number
}

export interface ICell extends  ICellProps {
  prevCell?: ICellProps
}
