import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css'
import iconQuiz from '../img/iconQuiz.jpg'
import {Link} from "react-router-dom";
export default function Home(){
    return(
        <div className="container">
            <div className="quizText">
                퀴즈를 풀어보세요!!
            </div>
            <div className="quizIcon">
                <img src={iconQuiz} />
            </div>
            <Link to="/quiz">
                <div className="quizBtn">
                    <button className="btn btn-primary btn-lg">퀴즈 풀기</button>
                </div>
            </Link>
        </div>
    );
}