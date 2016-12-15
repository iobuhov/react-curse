import React    from 'react'
import { Link } from 'react-router'
import { transparentBg } from '../styles/index.jsx'

const Home = React.createClass({
  render() {
    return (
      <div style={transparentBg} className="jumbotron col-sm-12 text-center">
        <h1>Github Battle</h1>
        <p className='lead'>text</p>
        <Link to='/playerOne'>
          <button
            type='buttton'
            className='btn btn-lg btn-success'>
            Get Started
          </button>
        </Link>
      </div>
    );
  }
});

export default Home;
