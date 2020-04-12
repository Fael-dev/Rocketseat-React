import React from 'react';
import './style.css';
import Header from './components/Header';
import Routes from './routes';


const App = () =>(
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//     </div>
//   );
// }

