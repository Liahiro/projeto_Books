import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListaBooks from '../pages/ListaBooks'
import Cadastrar from '../pages/Cadastrar'
import NotFound from '../pages/NotFound'
import Administrar from '../pages/Administrar';
import Editar from '../pages/Editar'

const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <ListaBooks />} />
                <Route path='/cadastrar' element={ <Cadastrar/>} />
                <Route path='*' element={ <NotFound />} />
                <Route path='/administrar' element={ <Administrar/>} />
                <Route path='/Editar/:id' element={ <Editar/>} />
            </Routes>
        </Router>

    );
}

export default Root;