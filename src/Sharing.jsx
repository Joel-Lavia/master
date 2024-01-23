import { useState } from "react";
import { data } from "./Models/data";

function Sharing() {
    const [items, setItems] = useState(data); //État destiné à contenir le tableau d'éléments
    const [inputValue, setInputValue] = useState(''); //État dans lequel se trouve la valeur du champ de saisie

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddItem = () => {
        if (inputValue !== '') {
            setItems((prevItems) => [...prevItems, inputValue]);
            setInputValue(''); //Effacer le champ de saisie après l'ajout de l'élément
        }
    };
   return (
        <div className='container'>
            <h3>React Js Add Element or Items to Array bu Input field</h3>
            <div className='form'>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button onClick={handleAddItem}>Add Item</button>
            </div>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

    );
} 
export default Sharing