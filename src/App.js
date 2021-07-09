import logo from './logo.svg';
import './App.css';
import AddComment  from './components/addComment/AddComment';
import { Component } from 'react';
import CommentList from './components/CommentList/CommentList';
class App extends Component {
  render(){
  return (
    <div className="App">
      <CommentList/>
    </div>
  );
  }
}

export default App;
