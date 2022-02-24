import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Result()
{
    const location = useLocation();

    const birthYear1 = location.state.birthYear;
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

    let params = { solYear: birthYear1, solMonth : birthMonth1 ,solDay : birthDay1 };
    //let query = encodeURIComponent('lunYear') + '=' + encodeURIComponent("1996")+'&'+ encodeURIComponent('lunMonth') + '=' + encodeURIComponent("09") + '&'+encodeURIComponent('lunDay') + '=' + encodeURIComponent("18");
    let query = Object.keys(params) .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])) .join('&');

    let url = 'http://localhost:5000/api?' + 'serviceKey=Tcv1D3HbX2tvmM9kiulXfVycMLwOvXeTrVDbaCOMDhLabVxSuz0oyd%2FviaMRqdfA%2FpRdHQnCtO3GyupkmZBbmw%3D%3D'+'&'+ query;

    

    const [ilju,setIlju] = useState('');


    const name1 = location.state.username;
    const birthday = location.state.birthDate;
    const flag1 = location.state.flag;

//.data.elements[0].elements[1].elements[0].elements[0].elements[1].elements[0].text)

    const SorL = (flag1 ? "양력" : "음력")
    console.log(birthday)
 

 //   .then((data) => console.log(elements[0].elements[1].elements[0].elements[0].elements[1].elements[0].text))
    const callApi = async () => {
        axios.get(url,
        ).then((res)=> {
        console.log(setIlju(res.data.elements[0].elements[1].elements[0].elements[0].elements[1].elements[0].text));
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

