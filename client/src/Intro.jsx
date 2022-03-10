import React from "react";
import {  Typography,Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IntroIMG from './image/IntroIMG.png';
import { purple,amber } from '@mui/material/colors'
import './Card.css';
import { createTheme ,ThemeProvider} from '@mui/material/styles';
import { withStyles } from "@material-ui/core/styles";


const Intro = () => {
    function handleClick(){
        window.location.href = "/user"
    }
    // 클릭 시 /user로 링크 이동


const styles = {
  /*"&.MuiButton-root": {
        border: "2px black solid"
  },*/
  "&.MuiButton-text": {
        color: amber[100]
  },
  "&.MuiButton-contained": {
        color: amber[50]
  },
  // 박스 안쪽 텍스트 컬러
  "&.MuiButton-outlined": {
        color: amber[100]
  },
  borderRadius: 28,
}; 

const purpleTheme = createTheme({
    palette: {
      primary: {
        light: purple[300],
        main: purple[400],
        dark: purple[300],
        contrastText: '#fff',
        
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  const PurpleTextTypography = withStyles({
    root: {
      color: purple[400]
    }
  })(Typography);
  
    return (
        
        <main>
            
            <div class="card"> 
           
            <img src = {IntroIMG} style={{maxWidth:'520px'}} />
                <div class="text-wrap" style={{ top:'240px'}}>

                <PurpleTextTypography id='HSYouji_font' theme={purpleTheme}  >
                                    ~사주로 알아보는~ <br/>
                            </PurpleTextTypography>
              <PurpleTextTypography id='HSYouji_font' theme={purpleTheme} style={{ fontSize:'40px'}}>
                                    당신에게 주어진 두가지 기운
                            </PurpleTextTypography>
                              <ThemeProvider theme={purpleTheme}>
                                <Button sx={styles} variant="contained" id='HSYouji_font' 
                                        style={{ top:'500px', width: '380px', height: '70px', fontSize: '35px'}} 
                                        onClick={handleClick} endIcon={<SendIcon />}>
                                    사주 보러가기
                                </Button>
                              </ThemeProvider>

                </div>
            </div>
        </main>
    );
}

export default Intro