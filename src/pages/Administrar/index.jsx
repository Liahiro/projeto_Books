import { useEffect, useState } from 'react';
import React from "react";
import api from "../../services/api";
import { useNavigate } from 'react-router-dom';

import "./adm.css";


function Administrar () {
    const [books, setBooks] = useState([
    ])

    const navigate = useNavigate()

    useEffect(() => {
        const url = './books'
        api.get(url)
           .then((response) =>{
            setBooks(response.data);
        })
    }, [books]);

        const handleDelete = (id) => {
            // const newItems = [...items];
            // newItems.splice(id, 1);
            // setItems(newItems);
            const url = `/books/${id}`
            api.delete(url);
        }

    function handleEdit(id){
        navigate(`/Editar/${id}`)
    }
           

    return ( 
        <>
            <h1>Administrar Livros</h1>
            <button id='modo' onClick={() => (item.id)}> <a href='http://localhost:5173/cadastrar'>Cadastrar Outros</a> </button>

        <table>
            <thead>
                <tr>
                    <th>Imagem</th>
                    <th>Titulo</th>
                    <th>Preço</th>
                    <th>Link</th>
                    <th>Edit</th>
                    <th>Excluir</th>
                </tr>
            </thead>
            <tbody>
            {books.map(item => {

                return (
                    <>
                    <tr key={item.id}>
                        <td><img src={item.img} alt={`Imagem do ${item.title}`} /></td>
                        <td>{item.title}</td>
                        <td><a id="link" target="_blank" href={item.url}>Link</a></td>
                        <td>{item.price}</td>
                        <td><button id='edit' onClick={() => handleEdit(item.id)}>Editar</button></td>
                        <td><button id='edit' onClick={() => handleDelete(item.id)}>Excluir</button></td>
                    </tr>
                    </>

                )
                
                
            })}
            </tbody>
        </table>

        </>
     );
}

export default Administrar ;