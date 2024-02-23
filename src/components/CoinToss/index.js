// Write your code here
import {Component} from 'react'
import './index.css'

const HEADIMG = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILIMG = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultimg: HEADIMG,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickCoinToss = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossimg = ''
    let latestheadcount = headsCount
    let latesttailcount = tailsCount

    if (toss === 0) {
      tossimg = HEADIMG
      latestheadcount += 1
    } else {
      tossimg = TAILIMG
      latesttailcount += 1
    }

    this.setState({
      tossResultimg: tossimg,
      headsCount: latestheadcount,
      tailsCount: latesttailcount,
    })
  }

  render() {
    const {tossResultimg, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img src={tossResultimg} alt="toss result" className="img" />
          <button className="btn" type="button" onClick={this.onClickCoinToss}>
            Toss Coin
          </button>
          <div className="total-list">
            <p className="list">Total: {totalCount}</p>
            <p className="list">Heads: {headsCount}</p>
            <p className="list">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
