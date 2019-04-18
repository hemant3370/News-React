import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import HDirectory from './Hospitals/HDirectory';
import registerServiceWorker from './registerServiceWorker';
import 'rss-parser/dist/rss-parser.min.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
