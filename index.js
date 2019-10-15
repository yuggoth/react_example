import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer'
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './App';


let store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
