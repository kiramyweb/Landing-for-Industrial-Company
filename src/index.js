import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/normalize.css';
import './styles/main.scss';
import 'react-image-lightbox/style.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import icons from "./icons";

library.add(icons);

ReactDOM.render(<App />, document.getElementById("App"));
