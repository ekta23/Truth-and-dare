import React from "react";
import "./Modes.css"
import {useState} from "react";
import Game from "./Game";

function Modes(){
    const [startGame, setStartGame]=useState(false);
    const [formData,setFormData]=useState({
        gameMode:"",
        players:[]
    })

    
    
    const [player,setPlayer]=useState("");
    

    function handleChange(event){
        const {name,value}=event.target;
        let currFormData=formData;
        if(name==="mode"){
            setFormData(prevFormData=>{
                return{
                  ...prevFormData,
                  gameMode:value
                }
              })
        }
        else{
            if(player==="")
            alert("Please enter player's name")
            currFormData.players.push(player);
            setPlayer("");
            setFormData(currFormData);
        }

    }

    function handlePlayer(event){
        setPlayer(event.target.value);
        
}
    function handleSubmit(event){
        event.preventDefault();
        if(formData.gameMode==="")
        {
            alert("Please select Mode");
            return;
        }
        if(formData.players.length<=1)
        {
            alert("There should be atleast 2 players to start the game")
            return;
        }
        
        
        //navigate("/game");
        setStartGame(true);
    }

    function endGame(){
        setStartGame(false);
        setFormData({
            gameMode:"",
            players:[]
        })
    }

    return(
        <>
        {
            !startGame?
            <center>
        <div className="container">
        <div className="card">
            <h2 className="card-heading">Welcome to T&D Game</h2>
            <form>
            <select
            id="mode"
            name="mode"
            onChange={handleChange}
            className="selectMode"
            value={formData.gameMode}>
                <option value="">--Choose game mode--</option>
                <option value="Kids">Kids</option>
                <option value="Teenager">Teenager</option>
                <option value="Adults">Adults</option>
            </select>
        
            
            <div className="addPlayer">
                <input
                id="inputName"
                type="text"
                name="nameOfPlayers"
                placeholder="Enter name of Player"
                onChange={handlePlayer}
                value={player}>
                </input>
                <img alt="add" src="https://img.icons8.com/cotton/344/add--v2.png" id="addIcon" onClick={handleChange}></img>

            </div>
            <button
            id="submit"
            onClick={handleSubmit}>
            <span id="buttonSpan">SUBMIT</span>
            </button>
            </form>
            
        
        </div>
        <div className="chotuCard">
        <h2>Players Added</h2>
        <p>{formData.players.length===0?"No Players Added":""}</p>
          <ul>
          {formData.players.map(element=>{
            return <li className="playerName">{element}</li>
          })}
          </ul>
        </div>
        
        </div>

        </center>
        :
        <Game gameDetails={formData} endGame={endGame}/>
        }
        </>
        
        
    )
}

export default Modes;