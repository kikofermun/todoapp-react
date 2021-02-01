import { render } from '@testing-library/react';
import React from 'react';
import Cabecera from './Cabecera';
import Cuerpo from './Cuerpo';

class App extends React.Component{
    render(){
        return (
            <div className="app">
                <Cabecera />
                <Cuerpo />
            </div>
        );
    }
}

export default App;