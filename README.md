# Gerenciador
Gerenciador de tarefas


1. create-react-app my-app --scripts-version=react-scripts-ts
2. npm i @hoda5/h5doc @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @hoda5/extensions @material-ui/core @material-ui/icons @material-ui/lab @types/classnames firebase
3. excluir app.tsx
4. alterar index.tsx para
```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { sessao } from './database/pessoaDB';
import { App } from './h5doc/h5doc';

ReactDOM.render(
  <App session={sessao} />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

```
5. definir o banco de dados (model/db)
6. definir o pacote (model/db)
7. definir app (model/app)
8. definir driver (model/driver)
9. definir sessao (model/sessao)
10. sessao.initRouter
11. definir processos
12. definir menus
13. No firebase (criar banco de dados e habilitar métodos de login)
14. npm start
