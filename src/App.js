import React,{ Component } from 'react';
import Navbar from './components/Navbar';
import profileData from './profileData.json';
import Landing from './components/Landing';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navData : profileData.navbarData,
      landingData: profileData.LandingData
    }

  }
  render () {
    return (
      <div className="bgimage">
        <Navbar navbarData={this.state.navData}/>
        <Landing landingData={this.state.landingData}/>
        <div className=''>
          from app.js file<br/>
          hi<br/><br/><br/><br/><br/>
          this<br/>
          is<br/>hi<br/><br/><br/><br/><br/>hi<br/><br/><br/><br/><br/>hi<br/><br/><br/><br/><br/>
          hi<br/><br/><br/><br/><br/>hi<br/><br/><br/><br/><br/>hi<br/><br/><br/><br/><br/>
          last line
        </div>
    </div>
    );
  }
}

export default App;
