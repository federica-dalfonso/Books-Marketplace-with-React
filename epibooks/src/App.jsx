import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav/MyNav.jsx'
import WelcomeAlert from './components/WelcomeAlert/WelcomeAlert.jsx';
import AllBooks from './components/Main/AllBooks.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useState } from 'react';
import jsonData from './data/fantasy.json'

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

  return (
    <>
      {/* passo le prop a MyNav per gestire la ricerca: */}
      <MyNav text={inputName} onSearchChange={handleSearch} />

      <WelcomeAlert/> 
      {/* passo le prop a AllBooks per mostrare i risultati: */}
      <AllBooks results={searchResult}/>
      <Footer />
    </>
  );
}

export default App;
