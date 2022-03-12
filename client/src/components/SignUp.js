import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { NativeSelect } from '@mui/material';
import { lightBlue,grey } from '@mui/material/colors'
import {useNavigate } from 'react-router-dom';
import SignUpIMG from '../image/SignUpIMG.png'
import { withStyles } from "@material-ui/core/styles";
import { purple,amber } from '@mui/material/colors'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        sajuzzam
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();
const MONTH_SELECT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

var nowYear = new Date().getFullYear();
var sy=1920;
var YEAR_SELECT = [];
var DATE_SELECT = [];
// The array literal notation [] is preferable 에러 해결
// var x = new Array(); 이렇게 했더니 에러낫음

for(var i=0;sy+i<=nowYear;i++){
  YEAR_SELECT[i] = sy+i;
}

for(var j=0;j<=30;j++){
  DATE_SELECT[j] = j+1;
}

const lightBlueTheme = createTheme(
  { palette: 
    { 
        primary: {
        main : lightBlue[300], 
      },
        secondary: {
          main : grey[500] 
      }
    }
  }) 
//const greyTheme = createTheme({ palette: { primary:{main : grey[500] } }}) 
//contained 버튼 기존 색 (primary) 변경


const styles1 = {
  /*"&.MuiButton-root": {
    border: "2px black solid"
  },*/
  "&.MuiButton-text": {
    color: "grey"
  },
  "&.MuiButton-contained": {
    color: amber[300]
  },
  "&.MuiButton-outlined": {
    color: "brown"
  },
  borderRadius: 28,
}; 

const styles2 = {
  /*"&.MuiButton-root": {
    border: "2px black solid"
  },*/
  "&.MuiButton-text": {
    color: "grey"
  },
  "&.MuiButton-contained": {
    color: purple[300]
  },
  "&.MuiButton-outlined": {
    color: "brown"
  }
}; 
//버튼 테두리, 텍스트 색 변경

export default function SignUp() {

  const [username,setName] = useState("");
  //이름 설정하는 변수

  const [ searchYear, setSearchYear ] = useState(new Date().getFullYear())
  const [ searchMonth, setSearchMonth ] = useState(new Date().getMonth() + 1)
  const [ searchDate, setSearchDate ] = useState(new Date().getDate())
  // 생년월일 구분하는 변수들

  const [flag, setFlag] = useState(true);
  // 양/음력 상태 구분하는 flag 변수


  const handleClick = () => {
    setFlag(!flag);
  };
  // 클릭 시 양/음력 변환 
  // true > 양력 false > 음력

  const nameChange = (e) =>{
    setName(e.target.value);
  }
  // 이름이 변경될 때마다 입력되는 값 반환


  const handleChange  = (e, type) => {
    const value = e.target.value;
    type === 'year' ? setSearchYear(value) : (type === 'month' ? setSearchMonth(value) : setSearchDate(value))
    
    var birthDate = searchYear + searchMonth + searchDate;
    console.log(birthDate)
  };
  // 생년월일 변경시 type(yeat, month, date) 별로 바뀌는 값에 따라 해당 값을 설정함

  const navigate = useNavigate();
  // 페이지 변환과 동시에 변수 값 전달하는 함수

  
const purpleTheme = createTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[400],
      dark: purple[300],
      contrastText: '#fff',
      
    },
    secondary: {
      light: purple[300],
      main: '#ffffff',
      dark: purple[300],
      contrastText: purple[300],
    },
  },
});


  const PurpleTextTypography = withStyles({
    root: {
      color: purple[400]
    }
  })(Typography);

  return (
    <div class="card" style={{ top:'9px'}}>
     <img src = {SignUpIMG} style={{maxWidth:'520px'}} />
       <div class="text-wrap" style={{ top:'420px',}}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
              <PurpleTextTypography id='HSYouji_font' theme={purpleTheme} style={{fontSize:'52px'}}>
                내 사주 알아보기
              </PurpleTextTypography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={3}>

                  <Grid item xs={12} textAlign="left">
                    <PurpleTextTypography id='HSYouji_font' theme={purpleTheme} style={{fontSize:'25px'}}>
                    이름
                    </PurpleTextTypography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      onChange = {nameChange}
                      value = {username}
                      
                    />
                  </Grid>

                  <Grid item xs={12} textAlign="left">
                    <PurpleTextTypography id='HSYouji_font' theme={purpleTheme} style={{fontSize:'25px'}}>
                    생년월일
                    </PurpleTextTypography>
                  </Grid>

                  <Grid item xs={12} sm={4} >
                    <ThemeProvider  theme={purpleTheme}>
                      <FormControl fullWidth   >
                        <InputLabel id="HSYouji_font" >년</InputLabel>
                          <NativeSelect 
                            id="HSYouji_font"
                            defaultValue={searchYear}
                            value={searchYear}
                            onChange={(e) => handleChange(e, 'year')}
                          >
                            {
                              YEAR_SELECT.map((year,idx) => {
                                return <option key={idx} value={year}>{year}</option>
                                }
                            )
                            }
                          </NativeSelect>
                        </FormControl>
                      </ThemeProvider>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <ThemeProvider  theme={purpleTheme}>
                      <FormControl fullWidth >
                        <InputLabel id="HSYouji_font" >월</InputLabel>
                          <NativeSelect
                            labelId="demo-simple-select-label"
                            id="HSYouji_font"
                            value={searchMonth}
                            label="Age"
                            onChange={(e) => handleChange(e, 'month')}
                          >
                            {
                              MONTH_SELECT.map((month, idx) => {
                                return <option key={idx} value={month}>{month}</option>
                                }
                              )
                            }
                          </NativeSelect>
                       </FormControl>
                    </ThemeProvider>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <ThemeProvider  theme={purpleTheme}>
                      <FormControl fullWidth>
                        <InputLabel id="HSYouji_font">일</InputLabel>
                          <NativeSelect
                            labelId="demo-simple-select-label"
                            id="HSYouji_font"
                            value={searchDate}
                            label="Age"
                            onChange={(e) => handleChange(e, 'date')}
                          >
                            {
                              DATE_SELECT.map((date, idx) => {
                                return <option key={idx} value={date}>{date}</option>
                                }
                              )
                            }
                          </NativeSelect>
                        </FormControl>
                    </ThemeProvider>
                  </Grid>

                  <Grid item xs={12} textAlign="left" >
                    <PurpleTextTypography id='HSYouji_font' theme={purpleTheme} style={{fontSize:'25px'}}>
                    양/음력
                    </PurpleTextTypography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <ThemeProvider  theme={purpleTheme}>
                      <Button 
                        id='HSYouji_font'
                        onClick={handleClick}
                        color={flag ? "primary" : "secondary"}
                        variant="contained" 
                        fullWidth 
                        style={{fontSize:'20px'}}
                        size="large"
                        sx={styles1}
                      >
                        양력
                      </Button>
                    </ThemeProvider>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <ThemeProvider theme={purpleTheme}>
                      
                      <Button 
                        id='HSYouji_font'
                        onClick={handleClick}
                        color={flag ? "secondary" : "primary"}
                        variant="contained" 
                        fullWidth 
                        size="large"
                        sx={styles1}
                        style={{fontSize:'20px'}}
                        >
                          음력
                      </Button>
                    </ThemeProvider>
                  </Grid>

                </Grid>
                <br></br>
                <ThemeProvider theme={purpleTheme}>
                  <Button
                    id='HSYouji_font'
                    style={{fontSize:'35px',top:'10px'}}
                    fullWidth
                    variant="contained"
                    sx={styles1}
                    onClick={()=> {
                      navigate
                      ('/result',
                      { state: { username: username ,
                        birthDate : searchYear +"/"+ searchMonth+"/" + searchDate, 
                        birthYear : searchYear,
                        birthMonth : searchMonth,
                        birthDay : searchDate,
                        flag: flag}}
                      )
                    }}
                  >
                    나의 사주 분석하기
                  </Button>
                </ThemeProvider>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}