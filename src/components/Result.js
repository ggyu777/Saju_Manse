import React from "react";
import { useLocation } from "react-router-dom";

export default function Result()
{
    const location = useLocation();

    const name1 = location.state.name;
    const birthday = location.state.birthDate;
    const flag1 = location.state.flag;

    const SorL = (flag1 ? "양력" : "음력")
    console.log(birthday)

    return(
        <div> 내이름은 {name1} 이고 
        생년월일은 {SorL} {birthday} 야! </div>
    );
}