import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListBooks from '../../components/ListBooks';
import api from '../../services/api';
import image from '../../../imgs/Lupa.webp'

const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;

  >h1{
    color: white;
    font-weight: normal;
    text-align: center;

    >span{
      color: #010411;
    }
  }

  .input{
    display: block;
    padding: 5px;
    padding-left: 10px;
    width: 100%;

    border: none;
    color: white;

    background-color: transparent;
    outline: none;
    transition: all.2s;

    &:focus{
      border-bottom: #022be4;
    }

    
  }

  .lupa{
    height: 30px;
    width: 30px;
  }

  .search{
    display: flex;
    align-items: center;
    background-color: #313030;
    width: 30%;
    height: 40px;
    margin-left: 75px;
    border-radius: 20px;

  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:10px;
`;

const Msg = styled.p`
  font-size: 2rem;
  color: #262626;
`

function ListaBooks() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const url = '/books';
    const params = {};

    if (search) {
      params.title_like = search;

      api.get('/books?_embed=books', { params })
        .then((response) => {
          setBooks(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      api.get(url)
        .then((response) => {
          setBooks(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [search]);

  return (
    <Container>
      <h1>Pesquisa de <span>Livros</span></h1>
      <div className='search'>
      <input
      className='input'
        type="search"
        placeholder='Pesquisar'
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <img className='lupa' src={image} alt="lupa" />
      </div>
      <ListContainer>
        {books.length > 0 ? (
          books.map(book => (
            <ListBooks
              key={book.url}
              books={book}
            />
          ))
        ) : (
          <Msg>Nenhum livro encontrado!</Msg>
        )}
      </ListContainer>
    </Container>
  );
}

export default ListaBooks;
