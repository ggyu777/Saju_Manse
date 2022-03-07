import React from "react";
import {  Typography,Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IntroIMG from './image/IntroIMG.png';
import './Card.css';

const Intro = () => {
    function handleClick(){
        window.location.href = "/user"
    }
    // 클릭 시 /user로 링크 이동
//
    return (
        
        <main>
            
            <div class="card"> 
           
            <img src = {IntroIMG} style={{maxWidth:'520px'}} />
                <div class="text-wrap">

                <p><span id='HSYouji_font'>
                                    ~사주로 알아보는~ <br/>
                            </span></p>
                <p><span id='HSYouji_font' fontSize='10px'>
                                    당신에게 주어진 두가지 기운
                            </span></p>

                            <Typography variant="h1" align='center' >
                                <Button variant="contained" onClick={handleClick} endIcon={<SendIcon />}>
                                    보러가기
                                </Button>
                            </Typography>

                </div>
            </div>
        </main>
    );
}

export default Intro