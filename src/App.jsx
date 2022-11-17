import { Header } from './components/Header';
import { Bio } from './components/Bio';
import { Search } from './components/Search';
import { Footer } from './components/Footer';
import { Title } from './components/Title';

import './App.css';

const App = () => (
  <div className="App">
    <Header>
      <Title text='Meu github search' />
    </Header>
    <Bio />
    <Search />
    <Footer>
      Feito por LisA
    </Footer>
  </div>
);

export default App;