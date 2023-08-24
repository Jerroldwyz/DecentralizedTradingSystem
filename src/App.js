import GridComponent from './GridComponent';
import Blog from './blog.js';
import Home from './Home.js';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Blog">Blogs</Link>
            </li>
            <li>
              <Link to="/GridComponent">GridComponent</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} /> 
          <Route path="/Blog" element={<Blog />} />
          <Route path="/GridComponent" element={<GridComponent />} />
        </Routes>


      </div>


    );
  }
}


// function App() {
//     return (
//         <div>
//             <GridComponent />
//             <Blog />
//         </div>
//     );
// }

 export default App;