import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';
import styled from 'styled-components'

const initialValue = {
    title: '',
    img: '',
    price: 0,
    url: '',
};

const Container = styled.div`
    background-color: #172231;
    border-radius: 20px;

    >h1{
    color: #f8f5f5;
    font-weight: normal;
    font-size: 2.8rem;
    margin-left: 10px; 
}

    >form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 355px;
    height: 500px;
    color: white;
    border-radius: 20px;
}
    >label{
    display: flex;
    flex-direction: column;
}

    >input{
    padding: 8px;
    border-radius: 5px;
    border: none;
    background-color: rgb(66, 63, 63);
    width: 250px;
}

    >button{
    display: flex;
    justify-content: center;
    color: white ;
    background-color: rgb(66, 63, 63);
    padding: 8px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    width: 100px;
    text-align: center;
}

    >button:hover{
    color: #595f68;
    background-color: white;
}
`



function Editar(){
    //
    const [values, setValues] = useState(initialValue);

    //
    const navigate = useNavigate();

    const { id } = useParams();

    const url = `/books/${id}`;

    useEffect( () =>{
        if (id){
            api.get(url)
                .then( (response) => {
                    setValues(response.data)
                })
        }
    },[])
    

    // 
    function onSubmit(evento){
        evento.preventDefault(); // não executa o comportamento default do form

        api.put(url, values)
            .then( () =>{
                navigate('/administrar');
            })
    }

    //
    function onChange(ev){
        const {name, value } = ev.target
        // console.log({name, value});

        setValues({ ...values, [name]:value})
        // console.log(values);
    }

    return(
        <Container>
            <h1>Editar</h1>
            {/* <img src={values.image} alt="" /> */}
            <form onSubmit={onSubmit}>
                <div className={styles.booksFormGroup}>
                    <label htmlFor="title">Titulo</label>
                    <input className={styles.InputText} type="text" id="title" name="title" value={values.title} onChange={onChange}/>
                </div>
                <div className={styles.booksFormGroup}>
                    <label htmlFor="url">Url do Livro</label>
                    <input className={styles.InputText} type="text" id="url" name="url" value={values.url} onChange={onChange}/>
                </div>
                <div className={styles.booksFormGroup}>
                    <label htmlFor="img">Url/Image</label>
                    <input className={styles.InputText} type="text" id="img" name="img" value={values.img} onChange={onChange}/>
                </div>
                <div className={styles.booksFormGroup}>
                    <label htmlFor="price">Preço</label>
                    <input className={styles.InputText} type="text" id="price" name="price" value={values.price} onChange={onChange}/>
                </div>
                <button type="submit">Salvar</button>
            </form>            
        </Container>
    )
}

export default Editar;