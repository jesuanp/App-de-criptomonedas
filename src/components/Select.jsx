import React, {useRef, useEffect} from 'react';
import { connect } from 'react-redux';
import { order, estadoInicial } from '../redux/actions';
import './Select.css';

function Select({order, estadoInicial}){

    let miReft = useRef(null)

    function actualizar(){
        let ref = miReft.current.value;
        if(ref !== 'Mas conocida') return order(ref);
        else if(ref === 'Mas conocida') return estadoInicial();
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

export default connect (null, {order, estadoInicial})(Select)