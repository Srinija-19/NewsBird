import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
export default class App extends Component {
   apiKey="e208e885c09d4a719a4c69dc99ed09fe"
  state={
  progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
      <div >
      <NavBar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />

       <Routes>
       <Route exact path="/" element={<News setProgress={this.setProgress } apiKey={this.apiKey} key='home' pageSize={20} country={'us'} category={'general'}/>}/>
       <Route exact path="/home" element={<News setProgress={this.setProgress } apiKey={this.apiKey} key='1' pageSize={20} country={'us'} category={'general'}/>}/>
        <Route exact path="/business" element={<News setProgress={this.setProgress } apiKey={this.apiKey} key='business' pageSize={20} country={'us'} category={'business'}/>}/>
        <Route exact path="/health" element={<News setProgress={this.setProgress } apiKey={this.apiKey} key='health' pageSize={20} country={'us'} category={'health'}/>}/>
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress } apiKey={this.apiKey} key='entertainment' pageSize={20} country={'us'} category={'entertainment'}/>}/>
        <Route exact path="/technology" element={<News setProgress={this.setProgress } apiKey={this.apiKey} key='technology' pageSize={20} country={'us'} category={'technology'}/>}/>
        <Route exact path="/science" element={<News setProgress={this.setProgress } apiKey={this.apiKey} key='science' pageSize={20} country={'us'} category={'science'}/>}/>
        <Route exact path="/sports" element={<News setProgress={this.setProgress } apiKey={this.apiKey} key='sports' pageSize={20} country={'us'} category={'sports'}/>}/>
        <Route exact path="/general" element={<News setProgress={this.setProgress } apiKey={this.apiKey} key='general' pageSize={20} country={'us'} category={'general'}/>}/>
       </Routes>
      
      </div>
      </Router>
    )
  }
}
