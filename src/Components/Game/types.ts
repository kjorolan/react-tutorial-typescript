export interface IState{
    history: Array<ISquare>
    xIsNext: boolean
    stepNumber: number
}
export interface ISquare {
    squares: Array<string>
}
export interface IProps{}

export type TGameData = {
    X: string
    O: string
}
