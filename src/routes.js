import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';


// Componente
const Routes = () => (
    // <BrowserRouter> - Definir o uso das rotas atraves de um browser
    // <Switch> - Permiti que apenas uma única rota seja chamada ao mesmo tempo.
    // Sem o exact é executado a primeira rota e ja para não passa pra segunda rota.
    // O exact faz com que o navegador identifique quando o path for path="valor"
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;