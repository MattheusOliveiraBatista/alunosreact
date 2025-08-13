// Importa a biblioteca React, necessária para criar componentes React
import React from 'react';

// Importa a API de renderização do React para o DOM (React 18 usa 'react-dom/client')
import ReactDOM from 'react-dom/client';

// Importa o componente principal da aplicação (App)
import App from './App';

// Importa os estilos do Bootstrap (framework CSS para design responsivo)
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa estilos personalizados da aplicação
import './App.css';

// Cria a raiz da aplicação React vinculada ao elemento HTML com id 'root'
// Esse é o ponto de entrada para a renderização do app no DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro da raiz criada
// Isso faz com que a interface do App apareça na tela
root.render(<App />);
