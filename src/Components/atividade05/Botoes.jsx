import { useState } from "react";

export default function Regex() {

    const [resultado, setResultado] = useState(0);

    const somar = () => {
        setResultado(resultado + 1);
    };

    const subtrair = () => {
        setResultado(resultado - 1);
    };

    const multiplicar = () => {
        setResultado(resultado * 2);
    };

    const dividir = () => {
        setResultado(resultado / 2);
    };

    const quadrado = () => {
        setResultado(resultado * resultado);
    };

    const cubo = () => {
        setResultado(resultado * resultado * resultado);
    };

    const zerar = () => {
        setResultado(0);
    };

    return (
        <>
            <span>Value: {resultado}</span>
            <div id="container-buttons">
                <button onClick={somar}>+</button>
                <button onClick={subtrair}>-</button>
                <button onClick={multiplicar}>*</button>
                <button onClick={dividir}>/</button>
                <button onClick={quadrado}>x²</button>
                <button onClick={cubo}>x³</button>
                <button onClick={zerar}>0</button>
            </div>
        </>
    )
}