import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';

class App extends React.Component{

    state = {
        headerText : 'Name It !',
        headerExpanded:true,
    };

    handleInputChange= (inputText) =>{
        this.setState({
            headerExpanded: !(inputText.length>0)
        });
        // console.log('Input text - ', inputText);
    }
    render(){
        return(
            <div>
            <Header 
             headerExpanded={this.state.headerExpanded} 
             headTitle={this.state.headerText}/>
                {/* <h1>This is my Class component</h1> */}

            <SearchBox onInputChange={this.handleInputChange} />
            </div>
        )
    }
}

// function App()
// {
//     return <h1>This is my Functional component</h1>
// }

export default App;