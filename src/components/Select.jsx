import React, {useRef, useEffect} from 'react';
import { connect } from 'react-redux';
import { mayorAMenor, menorAMayor, searchCoins } from '../redux/actions';
import './Select.css';

function Select({mayorAMenor, menorAMayor, searchCoins}){

    let miReft = useRef(null)

    function actualizar(){
        let ref = miReft.current.value;
        if(ref === 'A - Z') return mayorAMenor();
        else if(ref === 'Z - A') return menorAMayor();
        else if(ref === 'Mas conocida') return searchCoins();
    }


    return (
        <div>
            <form onChange={actualizar} className='form'>
                <label className='label'>Ordenar:</label>
                <select className='selector' ref={miReft}>
                    <option className='option'>Mas conocida</option>
                    <option className='option'>A - Z</option>
                    <option className='option'>Z - A</option>
                </select>
            </form>
        </div>
    )
}

export default connect (null, {mayorAMenor, menorAMayor, searchCoins})(Select)