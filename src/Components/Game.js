import React from "react";
import { useState } from "react";
import "./Game.css";
import data from "../data";


function Game(props){
    var currValue="";
    var questionArr=[];
    var currObject={};
    const name=props.gameDetails.players;
    const gameMode=props.gameDetails.gameMode;
    const playerChance=name[Math.floor(Math.random()*name.length)];
    const [heading,setHeading]=useState(playerChance);
    const [question,setQuestion]=useState("");
    

    
    function displayQuestion(event){
        currValue=event.target.value;
        console.log(currValue);
        questionArr=data.filter((element)=>{

            return element.type===currValue && element.mode===gameMode;
        })
        currObject=questionArr[Math.floor(Math.random()*questionArr.length)];
        setQuestion(currObject.statement);
           
    }
    function changePlayer(event){
        let playerChance=name[Math.floor(Math.random()*name.length)];
        setHeading(playerChance);
        setQuestion("");
    }



    return(
        <center>
            <div className="card-question">
            <h2 className="player">Player: {heading}</h2>
            <h3 className="questionType">{question}</h3>
            <div className="buttonDiv">
                {question.length===0?<button value="truth"className="buttonTruth" onClick={displayQuestion}>Truth</button>:<button value="done" className="buttonTruth" onClick={changePlayer}>Done</button>}
                {question.length===0?<button value="dare" className="buttonDare" onClick={displayQuestion}>Dare</button>:<button value="forfeit" className="buttonDare" onClick={changePlayer}>Forfeit</button>}
            </div>
            


            <p className="modeDetails">Your current mode is: {gameMode}</p>
            <button  onClick={props.endGame} className="endGame">End Game</button>
            
            
        
         </div>
        </center>
        
    )
}
export default Game;