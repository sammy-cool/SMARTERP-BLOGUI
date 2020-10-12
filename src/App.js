import React from 'react';
import {BrowserRouter,Link,Route,} from 'react-router-dom'
import './App.css'

import DashBoard from './components/DashBoard'
import BlogPost from './components/BlogPost';
import BlogList from './components/BlogList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
       {    
        
            <ul>
                
                <div style={{marginRight: "900px"}}>
                    <Link to ="/" className="nav-link">SMART ERP</Link>
                </div>
                <li>
                    <Link to ="/bloglist" className="nav-link">PUBLISHED</Link>
                </li>
                <li>
                   <Link to="/blogpost" className="nav-link"> NEW POST</Link> 
                </li>

          </ul>
       }
       </div>
              <Route path="/blogpost" component={BlogPost} exact={true} />
              <Route path="/bloglist" component={BlogList} exact={true}/>  
              <Route path="/" component={DashBoard} exact={true}/>  
             
       </BrowserRouter>
    </div>
  )
}

export default App
