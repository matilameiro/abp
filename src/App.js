import { useState } from 'react';
import './App.css';
import { skaters_list } from './assets/ej_abp';
import  logo  from './assets/imgs/abp-logo.jpg'

function App() {
  const [ value, setValue ] = useState('');
  const [ skater, setSkater ] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleClick = ()=> {
    const skaters = skaters_list;
    let skater = skaters.find( (skater) => skater.dni === Number(value));
    setShowResult(true);
    if (skater) {
      setSkater(skater);
    } else {
      setSkater(null);
    }
  }
  
  return (
    <div className="App" style={{ height: '100vh'}}>
      {/* <h1 style={{color: 'white', margin: '1rem'}}>ABP</h1> */}
      <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
        <img src={logo} style={{width: '10rem', height:'10rem'}} alt='logo de la asociacion bahiense de patin'></img>
        <h3 style={{ margin: '1rem' }}>Control de acceso</h3>
      </div>
      <div style={{marginTop: '1rem', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <label>Ingrese un num de doc: </label>
        <input value={value} onChange={e => setValue(e.target.value)}></input>
        <button onClick={handleClick} style={{marginTop:'1rem'}}>Buscar</button>
      </div>

      {
        showResult &&
        <div style={{display:'flex', justifyContent:'center'}}>
          {
            skater ? 
              <h3 style={{}}>El usuario {skater.name + ' ' + skater.lastname} puede ingresar.</h3>
              :
              <h3 style={{}}>El usuario no se encontró en el listado.</h3>
          }
        </div>
        
      }
    </div>
  );
}

export default App;
