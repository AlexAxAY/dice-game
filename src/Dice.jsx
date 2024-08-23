
import Die from "./Die";
import "./Dice.css";

export default function Dice({dice, color}){
    return (
        <div className="dice">
            {dice.map(function(d, i){
                return <Die number = {d} key ={i} color = {color}/>
            })}
        </div>
    )
}