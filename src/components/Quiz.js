import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/quiz.css'
import quizBanner from "../img/quizBanner.png";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Quiz(){
    const navi = useNavigate();
    const [quizList, setQuizList] = useState([]);
    const [correctCount, setCorrectCount] = useState(0);
    const [quizCount, setQuizCount] = useState(0);
    const [quizID,setquizID] = useState(0);
    const [question,setQuestion] = useState();
    const [choice1,setchoice1] = useState();
    const [choice2,setchoice2] = useState();
    const [choice3,setchoice3] = useState();
    const [choice4,setchoice4] = useState();

    const navigateToResult= () => {
        navi(`/quiz/result` , {
            state: {
                score: `${correctCount}`
            },
        });
    }

    useEffect(()=> {
        getQuiz()
    },[])

    const getQuiz =() => {
        const url= `/api/quiz/getQuizOne`;
        axios.get(url)
            .then((response) => {
                setQuizList(response.data);
                setquizID(response.data.quizID)
                setQuestion(response.data.question)
                setchoice1(response.data.choice1)
                setchoice2(response.data.choice2)
                setchoice3(response.data.choice3)
                setchoice4(response.data.choice4)

            })

    }
    const checkAnswer=(answer) =>{
        const checkUrl= `/api/quiz/isTrue`;
        const data  = {
            quizID : quizID,
            answer : answer
        }
        axios.post(checkUrl, data)
            .then((response) => {
                setQuizCount(quizCount+1)
                if(response.data==true){
                    setCorrectCount(correctCount+1)
                }
                if(quizCount>=10){
                    navigateToResult();
                }
                getQuiz();
            })



    }





    return(
        <div>
            <div className="container">
                <div className="quizBanner">
                    <img width="700px" src={quizBanner} />
                </div>
                    <div className="quizContent">
                        <h2>{question}</h2>
                    </div>
                    <div className="quizSelectFirstLine d-grid gap-2">

                        <button className="btn btn-primary btn-lg" name="correct"
                                /* () => 를 안하면 페이지 로딩시 함수 실행됨*/
                                value="1" onClick={() =>checkAnswer(1)}>{choice1}</button>
                    </div>
                    <div className="quizSelectSecondLine d-grid gap-2">
                        <button className="btn btn-primary btn-lg"  name="correct"
                                value="2" onClick={() =>checkAnswer(2)}>{choice2}</button>
                    </div>
                    <div className="quizSelectThirdLine d-grid gap-2">
                        <button className="btn btn-primary btn-lg" name="correct"
                                value="3" onClick={() =>checkAnswer(3)}>{choice3}</button>
                    </div>
                    <div className="quizSelectFourthLine d-grid gap-2">
                        <button className="btn btn-primary btn-lg" name="correct"
                                value="4" onClick={() =>checkAnswer(4)}>{choice4}</button>
                    </div>
                    <div className="correctCount">
                        현재 맞춘 개수: {correctCount}/10
                    </div>
            </div>
        </div>
    )
}