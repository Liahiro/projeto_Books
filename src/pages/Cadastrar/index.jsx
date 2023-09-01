import React, {useState} from 'react';

import './styles.module.css'
import styled from "styled-components"

const Color = styled.div`
    background-color: #172231;
    border-radius: 20px;
    box-shadow: 0px 0px 20px #000205;

    >body{color: #072f68}
`


import api from '../../services/api'
import {useNavigate} from 'react-router-dom'

const initialValues = {
    title:'',
    price:0,
    img:'',
    url:''
}


function Cadastrar (){
    const [values, setValues] = useState(initialValues)
    const navigate = useNavigate()

    function onSubmit (e){
        e.preventDefault()

        const url = '/books'

        api.post(url, values)
             .then(() => {
                navigate('/')
             })
    }

    const onChange = (e) =>{
      const {name, value} = e.target
      let newState = {... values}
      newState[name] = value
      setValues(newState)
    }

    return(
        <body>
        <Color>
            <h1>Cadastrar</h1>

            <form onSubmit={onSubmit}>

                <label htmlFor="title">
                    Título
                    <input type="text" name="title" id="title" onChange={onChange} />
                </label>

                <label htmlFor="image">
                    Imagem
                    <input type="text" name="img" id="imagem" onChange={onChange} />
                </label>

                <label htmlFor="url">
                    URL
                    <input type="text" name="url" id="url" onChange={onChange} />
                </label>

                <label htmlFor="price">
                    Preço
                    <input type="text" name="price" id="price" onChange={onChange} />
                </label>

                <button>Cadastrar</button>

            </form>
            
            </Color>
        </body>

    )
}

export default Cadastrar;
