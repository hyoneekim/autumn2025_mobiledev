import './styles.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Greeting from './Greeting';



function App() {
  return (
    <div>
      <Header title="Welcome to My React App" />
      <MainContent content="This is the main content of the page." />
      <Greeting message="Goodbye" name="John" />
      <Footer footerText="© 2025 My React App" />
    </div>
  );
}

export default App;