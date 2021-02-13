import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Psd from './PSD/Psd'
import Max from './3dMax.js/3dMax'
import ILust from './Ai/Ai'
import Corel from './Corel/Corel'
import img from './assets/star.jpg'

function App() {
    return (
        <div 
            style={{
                    width:'100%', 
                    height:'100%', 
                     }} >
               
                <Router>
                   <div 
                       style={{
                           width:'100vw',
                           height:'100vh',
                           backgroundImage:`url(${img})`,
                           backgroundSize:'cover',
                           backgroundAttachment:'fixed',
                           position:'fixed',
                           zIndex:'-10'}}></div>
                        <Navbar/>
                                <div style={{
                                    width:'80%',
                                    height:"100%",
                                    margin:'auto',
                                    backgroundColor:'white'
                                    }} >
                        <Switch>
                            <Route exact path='/'>
                                <Home/>
                            </Route>
                            <Route exact path='/photoshop'>
                                <Psd/>
                            </Route>
                            <Route exact path='/3dmax'>
                                <Max/>
                            </Route>
                            <Route exact path='/illustrator'>
                                <ILust/>
                            </Route>
                            <Route exact path='/coreldraw'>
                                <Corel/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            
        </div>
    )
}

export default App
