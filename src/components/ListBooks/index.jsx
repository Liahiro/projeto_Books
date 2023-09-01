 import React from 'react'
import styled from 'styled-components';

const ItemConteiner = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 10px #26262628;

  position: relative;

  height: 160px;
  width: 262px;
  padding: 10px;

  color: white;
  background-color: #172231;

  margin-bottom: 10px;
  margin-right: 10px;
`;

const Thumbnaill = styled.img`
height: 100%;
float: left;

margin-right: 15px;

border-radius: 5px;
`

const Title = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`

const Price = styled.div`
  margin-bottom: 5px;
  color: ${({theme}) => theme.COLORS.secondary};
`;

const Button = styled.div`
  position: absolute;
  bottom: -10px;
  left: 125px;

  font-size: 14px;
  padding: 8px 15px;

  color: #f6f6f6;
  background-color: rgb(66, 63, 63);

  border-radius: 4px;

  transition:.4s;

  &:hover{
    transform:translateY(-10%);
    box-shadow:#022be4;
  }
`;

const ItemLink = styled.a`
  text-decoration: none;
`


export default function ListBooks({books}) {
  return (
    <>
    <ItemLink href={books.url} target="_blank">
      <ItemConteiner>
        <Thumbnaill src={books.img} />
        <Title>{books.title}</Title>
        <Price>R${books.price}</Price>
        <Button>Comprar</Button>
      </ItemConteiner>
      </ItemLink>
    </>
  )
}
