import { Figure, FigureNames } from "./Figure"
import { Colors } from "../Colors"
import { Cell } from "../Cell"
import blackLogo from "../../assets/chessnut/bQ.png"
import whiteLogo from "../../assets/chessnut/wQ.png"
export class Queen extends Figure{
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN;
        
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false 
        }
        if(this.cell.isEmptyVertical(target)){
            return true
        }
        if(this.cell.isEmptyHorizontal(target)){
            return true
        }
        if(this.cell.isEmptyDiagonal(target)){
            return true
        }
        return false
    }
}