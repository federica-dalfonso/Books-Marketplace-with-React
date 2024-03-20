import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav/MyNav.jsx'
import WelcomeAlert from './components/WelcomeAlert/WelcomeAlert.jsx';
import AllBooks from './components/Main/AllBooks.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useState, useContext } from 'react';
import jsonData from './data/fantasy.json'
import { ThemeContext } from "./context/ThemeContextProvider";

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
      {/* passo le prop a MyNav per gestire la ricerca: */}
      <MyNav text={inputName} onSearchChange={handleSearch} />

      <WelcomeAlert/> 
      {/* passo le prop a AllBooks per mostrare i risultati: */}
      <AllBooks results={searchResult}/>
      <Footer />
    </div>
  );
}

export default App;
