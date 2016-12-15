import React, { Component } from 'react'
import ConfirmBattle from '../components/ConfirmmBattle.jsx'

class ConfirmBattleContainer extends Component {
  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {
      isLoading: true,
      playerInfo: []
    }
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    let query = this.props.location.query;
    // Fetch info from github then update state
    console.log('componentDidMount')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    return (
      <ConfirmBattle
        isLoading={ this.state.isLoading }
        playerInfo={ this.state.playerInfo }
        />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer
