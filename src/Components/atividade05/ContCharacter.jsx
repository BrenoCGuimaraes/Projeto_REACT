import { useState } from 'react';

export default function ContCharacter() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const getCounts = (text) => {
        const length = text.length;
        const alphabets = text.replace(/[^a-zA-Z]/g, '').length;
        const numbers = text.replace(/[^0-9]/g, '').length;
        const symbols = text.replace(/[a-zA-Z0-9\s]/g, '').length;
        const spaces = text.split(' ').length - 1;
        return { length, alphabets, numbers, symbols, spaces };
    };

    const { length, alphabets, numbers, symbols, spaces } = getCounts(text);

    return (
        <>
            <h2>Contador de Caracteres</h2>
            <input type="text" value={text} onChange={handleChange} placeholder="Digite algo:" />
            <div id="container-contadores">
                <span>Text Length: {length}</span>
                <span>Alphabets: {alphabets}</span>
                <span>Numbers: {numbers}</span>
                <span>Symbols: {symbols}</span>
                <span>Spaces: {spaces}</span>
            </div>
        </>
    );
}