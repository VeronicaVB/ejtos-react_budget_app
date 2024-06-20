import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    function handleCurrency(event) {
        console.log(event.target.value)

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });

        const selectEl = document.getElementById('curr-select');
        console.log(selectEl.selectedIndex)
        const optionTxt = (selectEl.options[selectEl.selectedIndex]).text
        console.log(optionTxt)
  
        document.getElementById('curr-span').innerHTML  = `Currency (${optionTxt})`
        // Hide drop down
        document.getElementById('curr-select').hidden=true;



    }
    
    function handleClick() {
        if (document.getElementById('curr-select').hidden) {

            document.getElementById('curr-select').removeAttribute('hidden')
        } else {
            document.getElementById('curr-select').hidden= true
        }
            

    
    }

    return (
        <div className='alert alert-danger' onClick={handleClick}>
            <span id='curr-span'>Currency ({currency} )</span> 
            <br></br>
            <select className='custom-select ' id = 'curr-select' hidden defaultValue={currency}  onChange={handleCurrency}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};
export default Currency;
