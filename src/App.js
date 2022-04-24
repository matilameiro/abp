import { useState } from 'react';
import './App.css';
import { skaters_list } from './assets/ej_abp';

function App() {
  const [ value, setValue ] = useState('');
  const [ skater, setSkater ] = useState(null);

  const handleClick = ()=> {
    const skaters = skaters_list;
    console.log(value)
    let skater = skaters.find( (skater) => skater.dni === Number(value));

    console.log(skater);

    if (skater) {
      setSkater(skater);
    } else {
      setSkater(null)
    }
  }
  
  return (
    <div className="App" style={{ backgroundColor:'black', height: '100vh'}}>
      <h1 style={{color: 'white', margin: '1rem'}}>ABP</h1>
      <h3 style={{ color: 'white', margin: '1rem' }}>Control de acceso</h3>
      <div style={{marginTop: '1rem', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <label style={{ color: 'white' }}>Ingrese un num de doc: </label>
        <input value={value} onChange={e => setValue(e.target.value)}></input>
        <button onClick={handleClick} style={{marginTop:'1rem'}}>Buscar</button>
      </div>

      {
        skater &&
        <div >
          <h3 style={{color: 'white'}}>El usuario {skater.name + ' ' + skater.lastname} puede ingresar.</h3>
        </div>

      }
    </div>
  );
}

export default App;
