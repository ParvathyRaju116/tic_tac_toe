import React, { useState } from 'react'
import Square from './Square'
import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Board() {

    const [state,setState]=useState(Array(9).fill(null))
    const [isXTurn,setIsXTrun]=useState(true)

    const checkWinner =()=>{
        const winnerlogic=
           [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let logic of winnerlogic){
            const [a,b,c]=logic
            if(state[a]!==null && state[a]===state[b] && state[b]===state[c] ){
                return state[a]
            }
            else{
              <p>  game over</p>
            }
           
        }
        
        return false
    }

    const isWinner=checkWinner()

    const handleClick =(index)=>{
       if(state[index]!==null){
        toast.error('This square is already filled!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        return
       }
       const newState = state.slice(); 
       newState[index] = isXTurn ? "X" : "O";
       setState(newState);
       setIsXTrun(!isXTurn);
    }

    const checkTie = () => {
        return state.every((square) => square !== null);
    };
    const isTie = checkTie();    


    const handleReset=()=>{
        setState(Array(9).fill(null));
    }

    return (
        <div className='board-container m-5 text-center'>
            <h1 className=''>Tic Tac Toe</h1>
          { isWinner?(
            <> 
       <div className='text-center w-100 div1 mt-5'>
             <div className='shadow  p-5'>
                   <h2 className=''> <b style={{fontSize:'50px'}}>"{isWinner}"</b> Won The Game </h2>
                   <div className='p-3'> <Button onClick={handleReset} >New Game</Button></div>
             </div>
       </div>
            </>
             ) : isTie ? (
                <div className='text-center w-100 div1 mt-5'>
                    <div className='shadow  p-5'>
                        <h2 >It's a Tie!</h2>
                        <div className='p-3'>
                            <Button onClick={handleReset}>New Game</Button>
                        </div>
                    </div>
                </div>
          ):(<>
           <div className="boarde-row">
            <Square onClick={()=>handleClick(0)} value={state[0] }/>
            <Square  onClick={()=>handleClick(1)} value={state[1] }/>
            <Square  onClick={()=>handleClick(2)} value={state[2] }/>
            </div>
            <div className="boarde-row">
            <Square  onClick={()=>handleClick(3)}  value={state[3] }/>
            <Square  onClick={()=>handleClick(4)} value={state[4] }/>
            <Square   onClick={()=>handleClick(5)} value={state[5] }/>
            </div>
            <div className="boarde-row">
            <Square   onClick={()=>handleClick(6)} value={state[6] }/>
            <Square  onClick={()=>handleClick(7)} value={state[7] }/>
            <Square  onClick={()=>handleClick(8)} value={state[8] }/>
            </div>
            <div className='btn1 text-center m-5'><Button onClick={handleReset}>Restart Game</Button></div>
</>)}
<ToastContainer />
        </div>
        

    )
}

export default Board