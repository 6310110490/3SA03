import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "12345";
const word2 = "65279";
const word3 = "07652";
function App() {
    return (
        <div>
            <h1>Find the largest number</h1>
            <h3>How to play</h3>
            <p>You must choose the largest number in each row</p>
            <WordCard value={word}/>
            <WordCard value={word2}/>
            <WordCard value={word3}/>
        </div>
    );
}

export default App;