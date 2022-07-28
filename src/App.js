
import './App.css';
import Food from './components/foodcomponent';

function App() {
  return (
    <div className='App'>
      <Food name='Pizza' price='450'img='https://source.unsplash.com/1600x800/?pasta'/>
      <Food name='Idly'price='100' img='https://source.unsplash.com/1600x800/?Idly'/>
      <Food name='Dosa' price='120'img='https://source.unsplash.com/1600x800/?Dosa'/>
      <Food name='chocolate' price='120'img='https://source.unsplash.com/1600x800/?chocolate'/>
      <Food name='sweet' price='120'img='https://source.unsplash.com/1600x800/?sweet'/>
      <Food name='icecream' price='120'img='https://source.unsplash.com/1600x800/?icecream'/>
      <Food name='burger' price='120'img='https://source.unsplash.com/1600x800/?burger'/>
      <Food name='milkshake' price='120'img='https://source.unsplash.com/1600x800/?masala'/>
      <Food name='biryani' price='120'img='https://source.unsplash.com/1600x800/?biryani'/>
    </div>
  );
}

export default App;
