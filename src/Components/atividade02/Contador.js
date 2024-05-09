import { useState } from 'react';
import homemImg from '../../assets/icon-homem.png';
import mulherImg from '../../assets/icon-mulher.png';
import reload from '../../assets/reload.png';
import mais from '../../assets/mais.png';
import menos from '../../assets/menos.png';
import './style-Contador.css';


export default function Contador() {

  const [contH, setContH] = useState(0);
  const [contM, setContM] = useState(0);
  const [contT, setContT] = useState(0);

  const incrementH = () => {
    setContH(contH + 1);
    setContT(contT + 1);
  };

  const decrementH = () => {
    if (contT > 0 && contH > 0) {
      setContH(contH - 1);
      setContT(contT - 1);
    }
  };

  const incrementM = () => {
    setContM(contM + 1);
    setContT(contT + 1);
  };

  const decrementM = () => {
    if (contT > 0 && contM > 0) {
      setContM(contM - 1);
      setContT(contT - 1);
    }
  };

  const resetCounts = () => {
    setContH(0);
    setContM(0);
    setContT(0);
  };

  return (
    <>
      <div style={{ display: 'flex', position: 'relative', margin: '0 auto', border: '2px solid black', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Total</h1>
        <span style={{ border: '2px solid', padding: '7px 45px', borderRadius: '5px' }}>{contT}</span>
        <img src={reload} style={{ display: 'flex', position: 'absolute', width: '50px', right: '10px', top: '10px' }} onClick={resetCounts} />
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={homemImg} style={{ width: '200px' }} />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
              <img src={mais} style={{ width: '50px' }} onClick={incrementH} />
              <img src={menos} style={{ width: '50px' }} onClick={decrementH} />
            </div>
            <h1>HOMEM</h1>
            <span style={{ border: '2px solid', padding: '7px 45px', borderRadius: '5px' }}>{contH}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={mulherImg} style={{ width: '200px' }} />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
              <img src={mais} style={{ width: '50px' }} onClick={incrementM} />
              <img src={menos} style={{ width: '50px' }} onClick={decrementM} />
            </div>
            <h1>MULHER</h1>
            <span style={{ border: '2px solid', padding: '7px 45px', borderRadius: '5px' }}>{contM}</span>
          </div>
        </div>
      </div>
    </>
  )

}

