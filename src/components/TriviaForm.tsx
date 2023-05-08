import React from "react";

const TriviaForm:React.FC = () => {
    const questions: any[] = [];
    for (let i:number = 0; i < 10 ; i++) {
        questions.push(<input type="text"/>);
    }
    return (
        <div>
            <form>
                <input type="text"/>
                {questions}
            </form>
        </div>
    )
}

export default TriviaForm