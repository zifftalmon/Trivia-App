import { useEffect, useState } from "react";
import React from "react";


const Trivia:React.FC = () => {

    const [questions, setQuestions]:any[] = useState([]);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=9')
            .then(req => req.json())
            .then(data => setQuestions(data.results))
    },[]);

    console.log(questions);
    
    
    return(
        <div>
            {questions.map((item: any, i:number) => {
                if(item.type == 'multiple') {
                    return (
                        <div key={i} className="question_div">
                            <h2>{i+1}. {item.question}</h2>
                            <ul>
                                <input type="checkbox"/>{item.incorrect_answers[0]}<br/>
                                <input type="checkbox"/>{item.correct_answer}<br/>
                                <input type="checkbox"/>{item.incorrect_answers[1]}<br/>
                                <input type="checkbox"/>{item.incorrect_answers[2]}<br/>
                            </ul>
                        </div>
                    )
                }
            })}
        </div>
    )
}

// setQuestions((questions: string) => [...questions, trivia])
export default Trivia