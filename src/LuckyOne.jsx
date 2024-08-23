import { useState } from "react";
import Dice from "./Dice";
import {getRolls, sum} from "./Utils.js"
import "./luckyOne.css";

export default function LuckyOne({ numDice = 2, goal = 7, color}) {
    const [count, setCount] = useState(getRolls(numDice));
    const winner = sum(count) === goal;
    function RollAgain(){
        return setCount(getRolls(numDice));
    }

    return (
        <div className="luckyOne">
            <h1>Lucky {goal}</h1>
            <h2>{winner && "You win!"}</h2>
            <Dice dice = {count} color = {color}/>
            <button class="button-10" role="button" onClick={RollAgain}>Roll again!</button>
        </div>
    )
}