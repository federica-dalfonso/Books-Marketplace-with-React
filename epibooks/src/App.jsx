import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav/MyNav.jsx'
import WelcomeAlert from './components/WelcomeAlert/WelcomeAlert.jsx';
import AllBooks from './components/Main/AllBooks.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <MyNav />
      <WelcomeAlert />
      <AllBooks />
      <Footer />
    </>
  );
}

export default App;
