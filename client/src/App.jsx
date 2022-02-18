import React, { useEffect } from "react";
import Intro from './Intro'
import axios from "axios";


function App() {
  
  
  return(
    <>
      <Intro />
    </>
  )
}
export default App;

 /*
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          showInfo: 0,
          showResult: false,
        }
        
        this._onStartClick = this._onStartClick.bind(this)
        this._onResultClick = this._onResultClick.bind(this)

      }
    
    renderIntro() {
        return <Intro _onStartClick={this._onStartClick } title="" />
        // 여기가 타이틀
      }
      
    renderUserinfo() {
        return <SignUp _onResultClick={this._onResultClick } showResult={this.showResult} />
    }
   
   
    render() {


        let showInfo = this.state.showInfo 
        let showResult = this.state.showResult

        //this.state 를 사용함으로써 위에 props에 있는 state, 즉 여기서는 showquestion의 상태를 불러옴

       
        if (showInfo==0 && showResult==false)
          return this.renderIntro()

        else if (showInfo==1  && showResult==false)
        {
        return this.renderUserinfo()
        }

        else if (showResult==true)
        return this.renderSibal()

        
      }
    
      _onStartClick() {
        this.setState({ showInfo: !this.state.showInfo})
      }
      
      _onResultClick() {
        this.setState({ showResult: !this.state.showResult})
        console.log(this.state.birthDate);

       }

    }


export default App
*/
// 초코야 사랑해 2022/02/06