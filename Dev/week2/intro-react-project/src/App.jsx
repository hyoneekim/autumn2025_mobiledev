import './styles.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Greeting from './Greeting';



function App() {
  return (
    <div>
      <Header title="Welcome to My Intro React App" />
      <MainContent content="This is going to be my react app :)" />
      <Greeting message="Goodbye" name="Sami" />
      <Footer footerText="© 2025 Your React App" />
    </div>
  );
}

export default App;