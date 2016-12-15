import React, { Component } from 'react'
import Home from '../components/Home.jsx'
import auth from '../config/auth.js'

class HomeContainer extends Component {
    render() {
        return <Home githubAuth={ auth.githubAuth }/>
    }
}

export default HomeContainer