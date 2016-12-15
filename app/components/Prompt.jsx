import React, { Component, PropTypes } from 'react'
import { transparentBg } from '../styles/index.jsx'


const Prompt = (props) => {
  const view = (
    <div style={ transparentBg } className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>{ props.header }</h1>
      <div className="col-sm-12">
        <form onSubmit={ props.onSubmitUser }>
          <div className="form-group">
            <input
              className="form-control" type="text"
              onChange={props.onUpdateUser}
              value={props.username}
              placeholder="github username"/>
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-block btn-success"
                    type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
  return view
}

Prompt.PropTypes = {
  header       : PropTypes.string.isRequired,
  onUpdateUser : PropTypes.func.isRequired,
  onSubmitUser : PropTypes.func.isRequired,
  username     : PropTypes.string.isRequired,
}


export default Prompt
