
import './App.css';
import Food from './components/foodcomponent';

function App() {
  return (
    <div className='App'>
      <Food name='Pizza' price='450'img='https://source.unsplash.com/1600x800/?pizza'/>
      <Food name='Idly'price='100' img='https://source.unsplash.com/1600x800/?Idly'/>
      <Food name='Dosa' price='120'img='https://source.unsplash.com/1600x800/?Dosa'/>
    </div>
  );
}

export default App;
