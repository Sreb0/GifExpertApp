import { useState } from 'react';


export const AddCaterory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');


    const onInputChange = ({ target }) => { //form event.target.value
        setInputValue(target.value);
    }

    const onSubmitInput = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return; //the input mus be more then 1 char
        onNewCategory(inputValue.trim());//get the input in the list in parent
        setInputValue('');//clear the input field

    }

    return (

        <form onSubmit={onSubmitInput}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

