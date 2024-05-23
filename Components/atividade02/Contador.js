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
      <div id="container-total">
        <h1>Total</h1>
        <span class="spans">{contT}</span>
        <img id="reload" src={reload} onClick={resetCounts} />
        <div id="containerCasal">
          
          <div class="containerHomemMulher">
            <img class="imgCasal" src={homemImg}/>
            <div class="operacoes">
              <img class="imgAdiçãoSub" src={mais} onClick={incrementH} />
              <img class="imgAdiçãoSub" src={menos} onClick={decrementH} />
            </div>
            <h1>HOMEM</h1>
            <span class="spans">{contH}</span>
          </div>

          <div class="containerHomemMulher">
            <img class="imgCasal" src={mulherImg}/>
            <div class="operacoes">
              <img class="imgAdiçãoSub" src={mais} onClick={incrementM} />
              <img class="imgAdiçãoSub" src={menos} onClick={decrementM} />
            </div>
            <h1>MULHER</h1>
            <span class="spans">{contM}</span>
          </div>
        </div>
      </div>
    </>
  )

}

