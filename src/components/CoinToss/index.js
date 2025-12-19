// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, isActive: true}

  onTossCoin = () => {
    const tossCoinResult = Math.floor(Math.random() * 2)
    if (tossCoinResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        total: prevState.total + 1,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.heads + 1,
        total: prevState.total + 1,
        isActive: !prevState.isActive,
      }))
    }
  }

  render() {
    const {total, heads, tails, isActive} = this.state
    return (
      <div>
        <div>
          <div>
            <h1>Coin TOss Game</h1>
            <p>Heads (or) Tails</p>
            {isActive ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                alt="heads"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                alt="tails"
              />
            )}
            <button type="button" onClick={this.onTossCoin}>
              Toss Coin
            </button>
            <div>
              <p>Total: {total}</p>
              <p>Heads: {heads}</p>
              <p>Tails: {tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
