import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage.jsx';
import { useState, useContext } from 'react';
import jsonData from './data/fantasy.json'
import { ThemeContext } from "./context/ThemeContextProvider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  //stato per l'input di ricerca in MyNav:
  const [inputName, setInputName] = useState("");

  // Aggiornare lo stato in base all'input:
  const handleSearch = (event) => {
    setInputName(event.target.value);
  };

  // Filtro che restituisce i risultati:
  const searchResult = jsonData.filter((element) => {
    return element.title.toLowerCase().includes(inputName.toLowerCase());
  });

  const { theme } = useContext(ThemeContext);
  const appTheme = theme === "dark" ? "bg-dark" : "bg-light";

  return (
    <div className={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage results={searchResult} text={inputName} onSearchChange={handleSearch}/>}></Route>
          <Route path='*' element={<h1>Page not found</h1>} ></Route> {/*sistema pagina*/}
        </Routes>    
      </BrowserRouter>
    </div>
  );
}

export default App;
