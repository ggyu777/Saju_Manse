import React from "react";
import {  Typography,Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IntroIMG from './image/IntroIMG.png';
import { purple,amber } from '@mui/material/colors'
import './Card.css';
import { createTheme ,ThemeProvider} from '@mui/material/styles';
import { withStyles } from "@material-ui/core/styles";
import { SvgIcon } from "@material-ui/core";

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
                                        onClick={handleClick} endIcon={<SvgIcon style={{width:'45px',height:'45px',marginLeft:'12px'}} >
                                          <path d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" />
                                        </SvgIcon>}>
                                    사주 보러가기
                                </Button>
                              </ThemeProvider>

                </div>
            </div>
        </main>
    );
}

export default Intro