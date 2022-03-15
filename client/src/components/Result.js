import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import LunarCalendar from './LunarCalendar';

export default function Result()
{
    const location = useLocation();

    var birthYear1 = location.state.birthYear;
    var birthMonth1 = location.state.birthMonth;
        if (birthMonth1<10)
        {
          birthMonth1 = '0' + birthMonth1;
        }
    var birthDay1 = location.state.birthDay;
        if( birthDay1<10 )
        {
          birthDay1 = '0' + birthDay1;
        }

    var birthdate1 = birthYear1 + birthMonth1 + birthDay1;

    const flag1 = location.state.flag;
      //ㅎㅎhk
    if(flag1 == false)
    {
      birthdate1 = LunarCalendar(birthdate1)
      var birthYear1 = birthdate1.substring(0,4);
      var birthMonth1 = birthdate1.substring(4,6);
      var birthDay1 = birthdate1.substring(6,8);

    }
    
    let params = { solYear: birthYear1, solMonth : birthMonth1 ,solDay : birthDay1 };
    let query = Object.keys(params) .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])) .join('&');
    let url = 'http://localhost:5000/api?' + 'serviceKey=Tcv1D3HbX2tvmM9kiulXfVycMLwOvXeTrVDbaCOMDhLabVxSuz0oyd%2FviaMRqdfA%2FpRdHQnCtO3GyupkmZBbmw%3D%3D'+'&'+ query;
    
    
    const [ilju,setIlju] = useState('');

    const name1 = location.state.username;

//.data.elements[0].elements[1].elements[0].elements[0].elements[1].elements[0].text)

    const SorL = (flag1 ? "양력" : "음력")
    console.log(birthdate1)
 

    const callApi = async () => {
      axios.get(url,
        ).then((res) => console.log(setIlju(res.data.elements[0].elements[1].elements[0].elements[0].elements[1].elements[0].text)))
      };
    
      useEffect(()=>{
          callApi();
        return ()=>{

        }
      },[]);
    

    return(
        <div> 내이름은 {name1} 이고 
        생년월일은 {SorL} {birthdate1} 야! 그리고 {ilju} 일주야! </div>
    );
}

