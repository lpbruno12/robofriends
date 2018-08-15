import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots';//Use of {} for exports that are not default

ReactDOM.render(
	<App />
	,document.getElementById('root'));
registerServiceWorker();
