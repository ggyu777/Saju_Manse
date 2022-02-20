import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Result()
{
    const [ilju,setIlju] = useState('');

    const location = useLocation();

    const name1 = location.state.username;
    const birthday = location.state.birthDate;
    const birthYear1 = location.state.birthYear;
    const flag1 = location.state.flag;



    const SorL = (flag1 ? "양력" : "음력")
    console.log(birthday)
    fetch("http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo?serviceKey=Tcv1D3HbX2tvmM9kiulXfVycMLwOvXeTrVDbaCOMDhLabVxSuz0oyd%2FviaMRqdfA%2FpRdHQnCtO3GyupkmZBbmw%3D%3D")
    .then((response) => response.json(console.log(response.data.elements[0].elements[1].elements[0].elements[0].elements[1].elements[0].text)))
    .then((data) => console.log(data));
    /*const callApi = async () => {
        axios.get("/api",{
        params :
        {
          //serviceKey : decodeURIComponent("Tcv1D3HbX2tvmM9kiulXfVycMLwOvXeTrVDbaCOMDhLabVxSuz0oyd%2FviaMRqdfA%2FpRdHQnCtO3GyupkmZBbmw%3D%3D"),
          lunYear : "1996",
          lunMonth : "09",
          lunDay : "18"
        }
        }
        ).then((res)=> {
        setIlju(res.data.elements[0].elements[1].elements[0].elements[0].elements[1].elements[0].text);
        console.log(res.data.elements[0].elements[1].elements[0].elements[0].elements[1].elements[0].text);

      })
      };
    
      useEffect(()=>{
        callApi();
      },[]);
    */
    return(
        <div> 내이름은 {name1} 이고 
        생년월일은 {SorL} {birthday} 야! 그리고 {ilju} 일주야! </div>
    );
}

