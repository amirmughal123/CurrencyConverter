import ReactDOM from 'react-dom';
import './App.css';
import 'antd/dist/antd.css'; 
import { renderRoutes } from './routes';

import * as serviceWorker from './serviceWorker';

ReactDOM.render( renderRoutes(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
