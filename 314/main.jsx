import React from 'react'
import ReactDOM from 'react-dom/client'
import Galeria from './src/Components/Galeria/Galeria'
import Eventos from './src/Components/Eventos/Eventos'

ReactDOM.createRoot(document.getElementById('eventos')).render(
  <Eventos />
)

ReactDOM.createRoot(document.getElementById('galeria')).render(
  <Galeria/>
)