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


    const callApi = async () => {
        axios.get("/api",{
       
        }
        ).then((res)=> {
        setIlju(res.data.elements[0].elements[1].elements[0].elements[0].elements[1].elements[0].text);
        console.log(res.data.elements[0].elements[1].elements[0].elements[0].elements[1].elements[0].text);

      })
      };
    
      useEffect(()=>{
        callApi();
      },[]);
    
    return(
        <div> 내이름은 {name1} 이고 
        생년월일은 {SorL} {birthday} 야! 그리고 {ilju} 일주야! </div>
    );
}

