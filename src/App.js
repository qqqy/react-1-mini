import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      friends: [],
      picture: '',
      name: '',
    };
    // this.updatePicture = this.updatePicture.bind(this);
    // this.updateName = this.updateName.bind(this);
    // this.render = this.render.bind(this);
  }

  updatePicture(value) {
    this.setState(
      {picture: value})
  }

  updateName(value) {
    this.setState(
      {name: value})
  }

  addFriend(){
    const {friends, picture, name} = this.state;

    console.log('Friend Added!')

    let newFriends = friends.slice();

    console.log(newFriends)

    newFriends.push({name, picture});
    this.setState({friends: newFriends, picture: '', name: ''})
  }

  render(){

    const friends = this.state.friends.map((friend,index) => 
    <div key={index}>
      <img src={friend.picture} alt={friend.name + "s picture"} />
      <span>{friend.name}</span>
    </div>
    )

    
    return (
      <div>
        <label>URL to picture</label>
        <input onChange={( e ) => this.updatePicture(e.target.value)} value={this.state.picture} />
        <label> Friend's Name</label>
        <input onChange={( e ) => this.updateName(e.target.value)} value={this.state.name}  />
        <button onClick={() => this.addFriend()}>Add Friend</button>
        { friends }
      </div>



      



    );
  }
}

export default App;