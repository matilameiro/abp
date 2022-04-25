import { useState } from 'react';
import './App.css';
import { skaters_list } from './assets/ej_abp';
import  logo  from './assets/imgs/abp-logo.jpg'

function App() {
  const [ value, setValue ] = useState('');
  const [ skater, setSkater ] = useState(null);
  const [ showResult, setShowResult ] = useState(false);

  const handleClick = (event)=> {
    event.preventDefault();
    const skaters = skaters_list;
    let skater = skaters.find( (skater) => skater.dni === Number(value));
    setShowResult(true);
    if (skater) {
      setSkater(skater);
    } else {
      setSkater(null);
    }
  }
  
  const resetForm = () => {
    setValue('');
    setSkater(null);
    setShowResult(false);
  }

  return (
    <div className="App" style={{ height: '100vh'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
        <img src={logo} style={{width: '10rem', height:'10rem'}} alt='logo de la asociacion bahiense de patin'></img>
        <h3 style={{ margin: '1rem' }}>Control de acceso</h3>
      </div>
      <form onSubmit={handleClick} style={{marginTop: '1rem', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <label style={{ marginBottom: '1rem' }}>Ingrese un número de documento: </label>
        <input value={value} onChange={e => setValue(e.target.value)}></input>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button 
            className={'primary-button'} 
            type={'submit'} 
            style={{ marginTop: '1rem' }}
            disabled={ value === ''}>
            BUSCAR
          </button>
          <button 
            className={'secondary-button'} 
            type={'button'} 
            onClick={resetForm} 
            style={{ marginTop: '1rem' }}>
            LIMPIAR
          </button>
        </div>
      </form>

      {
        showResult &&
        <div style={{display:'flex', justifyContent:'center'}}>
          {
            skater ? 
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ textAlign: 'center' }}>{skater.name + ' ' + skater.lastname}</h2>
                <h2 style={{ color: 'green', textAlign: 'center'}}>PUEDE INGRESAR</h2>

              </div>
              :
              <h3 style={{}}>El usuario no se encontró en el listado.</h3>
          }
        </div>
        
      }
    </div>
  );
}

export default App;
