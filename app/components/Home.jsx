import React, { Component }    from 'react'
import { Link } from 'react-router'
import { transparentBg } from '../styles/index.jsx'

// const Home = React.createClass({
//   render() {
//     return (
//       <div style={transparentBg} className="jumbotron col-sm-12 text-center">
//         <h1>Github Battle</h1>
//         <p className='lead'>text</p>
//         <Link to='/playerOne'>
//           <button
//             type='buttton'
//             className='btn btn-lg btn-success'>
//             Get Started
//           </button>
//         </Link>
//       </div>
//     );
//   }
// });

function Home(props) {
  console.log(props);
  return (
    <div>
      <p>Well, hello there!</p>
      <p>We1re going to now talk to the GitHub API. Ready?
        <a href={"https://github.com/login/oauth/authorize?scope=user:email&client_id="+props.githubAuth.clientID}>Click here</a>
      </p>
      <p>
        If that link doesn't work, remember to provide your own <a href="/v3/oauth/#web-application-flow">Client ID</a>!
      </p>
    </div>  
    )
}

export default Home;
