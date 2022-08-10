import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import _ from 'lodash';

function FindLargest(arr) {
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }

const prepareStateFromWord = (word) => {
    let chars = _.shuffle(Array.from(word))
    let ToNum = chars.map(Number)
    let Largest = FindLargest(ToNum);
    return {
        word,
        chars,
        ToNum,
        Largest,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => { 
        console.log(`${c} has been activated.`) 

        let guess = state.guess + c
        setState({...state, guess})

        //if(guess.length == state.word.length){
            if(guess == state.Largest){
                console.log('yeah!')
                setState({...state, guess: '', completed: true})
            }else{
                console.log('reset')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }   
        //} 
    }

    return (
        <div>
            {
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                )
            }
        </div>
    )    
}
