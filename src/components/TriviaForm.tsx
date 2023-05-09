import React from "react";

const TriviaForm:React.FC = () => {
    const questions: any[] = [];
    for (let i:number = 0; i < 10 ; i++) {
        questions.push(<input type="text" placeholder={`question ${i+1}`}/>);
    }
    return (
        <>
            <div>
                <form>
                    <input type="text" placeholder='Trivia Title'/>
                    {questions}
                </form>
            </div>
        </>
    )
}

export default TriviaForm