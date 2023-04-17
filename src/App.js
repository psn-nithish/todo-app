import logo from './logo.svg';
import './App.css';
import './components/style.scss'
import AddList from './components/AddList';
import HiOutlineViewGridAd from 'react-icons/hi'
import Login from './components/Login';

function App() {
  return (
   <div className='TodoApp'>
    <AddList/>
    {/* <Login/> */}
   </div>
  );
}

export default App;
