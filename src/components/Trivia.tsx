import { useEffect, useState } from "react";
import React from "react";


const Trivia:React.FC = () => {
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=9')
        .then(req => req.json())
        .then(questions => console.log(questions))
    },[])
    return(
        <div>

        </div>
    )
}

export default Trivia