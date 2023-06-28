import { useEffect, useState } from "react";
import React from "react";


const Trivia:React.FC = () => {

    const [questions, setQuestions]:any[] = useState([]);

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=9&type=multiple`)
            .then(req => req.json())
            .then(data => setQuestions(data.results))
    },[]);

    console.log(questions);
    
    const categoriesValues: any[] = [
        'General Knowledge',
        'Books',
        'Film',
        'Music',
        'Musicals & Theatre',
        'Television',
        'Video Games',
        'Board Games',
        'Science & Nature',
        'Computers',
        'Mathmetics',
        'Mythology',
        'Sports',
        'Geography',
        'History',
        'Politics',
        'Art',
        'Celebrities',
        'Animals',
        'Vehicles',
        'Comics',
        'Gadgets',
        'Anime & Manga',
        'Cartoon & Animations'
    ];

    const categories = categoriesValues.map((item: any, i: number) => {
        return(
            <option value={i+9}>{item}</option>
        )
    })

    const getTrivia = (e) => {
        e.preventDefault();
        fetch(`https://opentdb.com/api.php?amount=10&category=${e.target[0].value}&type=multiple`)
        .then(req => req.json())
        .then(data => setQuestions(data.results))
    }
    
    return(
        <div className="triviaDiv">
            <form onSubmit={getTrivia}>
                <select>
                    {categories}
                </select>
                <br/>
                <button type="submit">Find Trivia</button>
            </form>
            {questions.map((item: any, i:number) => {
                const regex = /&quot;|&#039;|amp;|&\Ww\cute;|&rsquo;/g;
                return (
                    <div key={i} className="question_div">
                        <h2>{i+1}. {item.question.split(regex)}</h2>
                        <ul>
                            <div>
                                <input type="radio" name='trivia' value={item.incorrect_answers[0]}/>
                                <label>{item.incorrect_answers[0].split(regex)}</label>
                            </div>
                            <div>
                                <input type="radio" name='trivia' value={item.correct_answer}/>{item.correct_answer.split(regex)}
                            </div>
                            <div>
                                <input type="radio" name='trivia' value={item.incorrect_answers[1]}/>{item.incorrect_answers[1].split(regex)}
                            </div>
                            <div>
                                <input type="radio" name='trivia' value={item.incorrect_answers[2]}/>{item.incorrect_answers[2].split(regex)}
                            </div>
                        </ul>
                    </div>
                )                
            })}
        </div>
    )
}

// setQuestions((questions: string) => [...questions, trivia])
export default Trivia