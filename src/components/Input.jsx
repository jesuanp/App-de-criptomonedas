import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import './Input.css';
import { coinEspesifica } from '../redux/actions';

function Input({coinEspesifica}){

    let miRef = useRef(null)

    function filtrar(){
        let ref = miRef.current.value
        coinEspesifica(ref)
    }

    return (
        <div>
            <input type="text" placeholder='Busca una cryto...' ref={miRef} onChange={()=>filtrar()}/>
        </div>
    )
}

export default connect (null, {coinEspesifica})(Input)