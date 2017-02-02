class TicTacToe {
    constructor() {
        this.currentSymbolFlag=true;
        this.ticTacArray=[
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.draw=false;
    }

    getCurrentPlayerSymbol() {

        if(this.currentSymbolFlag){
            return "x";
        }else{
            return "o";
        }
    }

    nextTurn(rowIndex, columnIndex) {

        if(this.ticTacArray[rowIndex][columnIndex]==null){
            if(this.currentSymbolFlag){
                this.ticTacArray[rowIndex][columnIndex]='x';
            }else{
                this.ticTacArray[rowIndex][columnIndex]='o';
            }
            
            this.currentSymbolFlag=!this.currentSymbolFlag;
        }
    }

    isFinished() {
        if(this.getWinner()||this.isDraw()){
            return true;
        }else{
            return false;
        }
    }

    getWinner() {
        if((this.ticTacArray[0][0]==this.ticTacArray[0][1])&&
            (this.ticTacArray[0][0]==this.ticTacArray[0][2])&&
            (this.ticTacArray[0][0]!=null)){
            return this.ticTacArray[0][0];
        }
        if((this.ticTacArray[1][0]==this.ticTacArray[1][1])&&
            (this.ticTacArray[1][0]==this.ticTacArray[1][2])&&
            (this.ticTacArray[1][0]!=null)){
            return this.ticTacArray[1][0];
        }
        if((this.ticTacArray[2][0]==this.ticTacArray[2][1])&&
            (this.ticTacArray[2][0]==this.ticTacArray[2][2])&&
            (this.ticTacArray[2][0]!=null)){
            return this.ticTacArray[2][0];
        }
        if((this.ticTacArray[0][0]==this.ticTacArray[1][0])&&
            (this.ticTacArray[0][0]==this.ticTacArray[2][0])&&
            (this.ticTacArray[0][0]!=null)){
            return this.ticTacArray[0][0];
        }        
        if((this.ticTacArray[0][1]==this.ticTacArray[1][1])&&
            (this.ticTacArray[0][1]==this.ticTacArray[2][1])&&
            (this.ticTacArray[0][1]!=null)){
            return this.ticTacArray[0][1];
        }
        if((this.ticTacArray[0][2]==this.ticTacArray[1][2])&&
            (this.ticTacArray[0][2]==this.ticTacArray[2][2])&&
            (this.ticTacArray[0][2]!=null)){
            return this.ticTacArray[0][2];
        }
        if((this.ticTacArray[0][0]==this.ticTacArray[1][1])&&
            (this.ticTacArray[0][0]==this.ticTacArray[2][2])&&
            (this.ticTacArray[0][0]!=null)){
            return this.ticTacArray[0][0];
        }
        if((this.ticTacArray[0][2]==this.ticTacArray[1][1])&&
            (this.ticTacArray[0][2]==this.ticTacArray[2][0])&&
            (this.ticTacArray[0][2]!=null)){
            return this.ticTacArray[0][2];
        }    
        return null;
    }

    noMoreTurns() {
        for(var i=0; i<this.ticTacArray.length; i++){
            for(var n=0; n<this.ticTacArray[i].length; n++){
                if(!(this.ticTacArray[i][n])){
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if((this.getWinner()==null)&&(this.noMoreTurns())){
            return true;
        }else{
            return false;
        }
    }

    getFieldValue(rowIndex, columnIndex) {
        return this.ticTacArray[rowIndex][columnIndex];
    }
}

module.exports = TicTacToe;
          