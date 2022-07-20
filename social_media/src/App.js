import './App.css';
import Login from './Login';
import Register from './Register';
import { useState } from 'react';
import Main from './Main';

function App() {
  const [page , setPage] = useState('Login')
  const [name , setName] = useState([])

  const changePage = (data) => {setPage(data)}
  const changename = (data) => {setName([...data])}

  

  if(page==='Login')  return <Login changePage={changePage} data={name}></Login>
  if(page==='Register') return <Register changePage={changePage} sndName={changename}></Register>
  if(page==='main') return <Main name='temp'></Main>
}

export default App;
