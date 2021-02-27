import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Images1 from './pictures/images.png';
import Images2 from './pictures/images2.png';
import Images3 from './pictures/images3.png';
const App=()=>{
     return (
     <div className="Container">
          <img src={Images1} className="pic"></img>
          <div className="InnerContainer">
               <h3>Alex</h3>
               <p className="time">Today at 5:00</p>
               <p className="Text">Great Blog Post!</p>
          </div>
          
          <img src={Images2} className="pic2"></img>
          <div  className="InnerContainer">
               <h3>Sam</h3>
               <p className="time">Today at 7:51</p>
               <p className="Text">Informative. Thanks.</p>
          </div>

          <img src={Images3} className="pic3"></img>
          <div className="InnerContainer">
               <h3>Jane</h3>
               <p className="time">Today at 9:01</p>
               <p className="Text">Looks great.</p>
          </div>
          
     </div>
     

     
     
     )

}
ReactDOM.render(<App />,document.getElementById('root'))


