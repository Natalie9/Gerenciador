import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { App } from "@hoda5/h5doc";
import { sessao } from './model/sessao';
import "./model/usuarioLogado";


ReactDOM.render(
  <App session={sessao} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
