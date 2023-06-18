import {Link, useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/result.css'
export default function Result(){

        const location = useLocation();
        const { score }=location.state

    return(
        <div className="resultContainer">
            <div className="bannerText">당신의 점수는?</div>
            <div className="score">{score}/10</div>
            <Link to="/">
            <div className="gotoHome d-grid gap-2">
                  <button className="btn btn-primary btn-lg" >처음으로</button>
            </div>
            </Link>
        </div>
    )
}