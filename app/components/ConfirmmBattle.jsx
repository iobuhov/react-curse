import React from 'react'

const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <p>Loading!</p>
    : <p>ConfirmBattle</p>
}

export default ConfirmBattle
