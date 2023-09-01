import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body{
        min-height: 100vh;
        display:grid;
        place-content: center;
        background-color: #072f68;
    }

    button{
        cursor: pointer;
    }
`