import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

// O "exact" dentro da função, no caminho da rota, é para que a página carregue exclusivamente cada uma e não concatene tudo
// O "switch" tem uma função de fazer cada caminho carregar exclusivamente também, é opcional

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} /> 
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/orphanages/create" exact component={CreateOrphanage} /> 
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
