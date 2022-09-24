import React from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends React.Component{
    render(){
        return(
            <div>
            <Header />
                {/* <h1>This is my Class component</h1> */}
            </div>
        )
    }
}

// function App()
// {
//     return <h1>This is my Functional component</h1>
// }

export default App;