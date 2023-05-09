import { useEffect, useState } from "react";
import React from "react";


const Trivia:React.FC = () => {

    const [questions, setQuestions]:any[] = useState([]);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=9')
            .then(req => req.json())
            .then(data => setQuestions(data.results))
    },[]);
    // console.log(questions);
    
    return(
        <div>
            {questions.map((item: any, i:number) => {
                return (
                    <div key={i}>
                        <h2>{i+1}. {item.question}</h2>
                    </div>
                )
                
            })}
        </div>
    )
}

// setQuestions((questions: string) => [...questions, trivia])
export default Trivia