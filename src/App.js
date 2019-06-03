import React, { Component } from 'react'
import './myStyles.css'

class App extends Component{

  state = {
    clickedFriends: [],
    win: false,
    score: 0,
    roundEnd: false,

    friends: [
      {
        gif: require('./gifs/1.jpg'),
        id: 1
      },
      {
        gif: require('./gifs/2.jpg'),
        id: 2
      },
      {
        gif: require('./gifs/3.png'),
        id: 3
      },
      {
        gif: require('./gifs/4.png'),
        id: 4
      },
      {
        gif: require('./gifs/5.png'),
        id: 5
      },
      {
        gif: require('./gifs/6.png'),
        id: 6
      },
      {
        gif: require('./gifs/7.png'),
        id: 7
      },
      {
        gif: require('./gifs/8.png'),
        id: 8
      }
    ]
  }

  roundReset = () => {
    let { clickedFriends, score, roundEnd } = this.state

    clickedFriends = []
    score = 0
    roundEnd = false

    this.setState({
      clickedFriends,
      score,
      roundEnd
    })
  
  }

  onClick = (id) => {
    let { clickedFriends, score, friends, roundEnd, win } = this.state;

    let friendCount = friends.length;
    let friendSelected;
    let temp;

    while (friendCount > 0) {
      friendSelected = Math.floor(Math.random() * friendCount);
      friendCount--;
      temp = friends[friendCount];
      friends[friendCount] = friends[friendSelected];
      friends[friendSelected] = temp;

    }

    if (clickedFriends.includes(id)) {
      roundEnd = true
      clickedFriends = []
      score = 0 
      setTimeout(this.roundReset, 2000)
    } else {
      clickedFriends.push(id)
      score++
      if (score === friendCount)
      win = true
      roundEnd = true
      setTimeout(this.roundReset, 2000)
    }
    
    this.setState({
      clickedFriends,
      score,
      friends,
      roundEnd,
      win
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Clicky Friends</h1>
        <p>Click all the friends, with no duplicates, to win!</p>
        <div className="Friend">
          <h3>Score: {this.state.score}</h3>
          {(this.state.roundEnd && !this.state.win) ? <div><h1>You Lose!</h1></div>
          : 
          (this.state.roundEnd && this.state.win) ? <h1> Congratz!</h1>
          :
        (this.state.friends.map(friend => <img onClick={() => this.onClick(friend.id)} key={friend.id} src={friend.gif} alt="place holder" />))}

        </div>
      </div>
    );
  }
}

export default App;