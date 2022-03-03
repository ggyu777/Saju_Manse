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

    return (
        <main>
            <div class="card"> 
            <img src = {IntroIMG} style={{display: "block"}} margin='0px auto'/>
                        <Container  style={{marginTop: '100px'}}> 

                            <Typography variant="h1" align='center' color='textPrimary' gutterBottom>
                                사주로 보는 나는?
                            </Typography>

                            <Typography variant="h1" align='center' style={{marginTop: '100px'}}>
                                <Button variant="contained" onClick={handleClick} endIcon={<SendIcon />}>
                                    보러가기
                                </Button>
                            </Typography>

                        </Container>
            </div>
        </main>
    );
}

export default Intro