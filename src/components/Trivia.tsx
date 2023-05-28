import { useEffect, useState } from "react";
import React from "react";


const Trivia:React.FC = () => {

    const [questions, setQuestions]:any[] = useState([]);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=9&type=multiple')
            .then(req => req.json())
            .then(data => setQuestions(data.results))
    },[]);

    console.log(questions);
    
    
    return(
        <div>
            {questions.map((item: any, i:number) => {
                return (
                    <div key={i} className="question_div">
                        <h2>{i+1}. {item.question}</h2>
                        <ul>
                            <input type="radio" name={'trivia'} value={item.incorrect_answers[0]}/>{item.incorrect_answers[0]}<br/>
                            <input type="radio" name={'trivia'} value={item.correct_answer}/>{item.correct_answer}<br/>
                            <input type="radio" name={'trivia'} value={item.incorrect_answers[1]}/>{item.incorrect_answers[1]}<br/>
                            <input type="radio" name={'trivia'} value={item.incorrect_answers[2]}/>{item.incorrect_answers[2]}<br/>
                        </ul>
                    </div>
                )                
            })}
        </div>
    )
}

// setQuestions((questions: string) => [...questions, trivia])
export default Trivia