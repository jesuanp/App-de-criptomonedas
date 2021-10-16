import React, {useRef} from 'react';
import { connect } from 'react-redux';
import { order, estadoInicial, porcentaje, orderByprice } from '../redux/actions';
import './Select.css';

function Select({order, estadoInicial, porcentaje, orderByprice }){

    let miReft = useRef(null)
    let refPorcentaje = useRef(null)
    let refPrices = useRef(null)

    function actualizar(){
        let ref = miReft.current.value;
        if(ref !== 'Mas conocida') return order(ref);
        else if(ref === 'Mas conocida') return estadoInicial();
    }

    function filterByPorcentaje(){
        porcentaje(refPorcentaje.current.value);
    }

    function filterByPrices(){
        orderByprice(refPrices.current.value);
    }


    return (
        <div className='form'>
            <div className="containerSelects">
                <div className="div">
                    <div>
                        <label className='label'>alphabetical order:</label>
                    </div>
                    <div>
                        <select onChange={actualizar} defaultValue="Mas conocida" className='selector' ref={miReft}>
                            <option className='option'>Mas conocida</option>
                            <option className='option'>A - Z</option>
                            <option className='option'>Z - A</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="containerSelects">
                <div className="div">
                    <div>
                        <label className='label'>order by percentage:</label>
                    </div>
                    <div>
                        <select defaultValue="Select" className='selector' onChange={filterByPorcentaje} ref={refPorcentaje} >
                            <option disabled value="Select" >Select</option>
                            <option className='option'>Higher</option>
                            <option className='option'>Minor</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="containerSelects">
                <div className="div">
                    <div>
                        <label className='label'>sort by price:</label>
                    </div>
                    <div>
                        <select defaultValue="Select" className='selector' onChange={filterByPrices} ref={refPrices} >
                            <option disabled value="Select" >Select</option>
                            <option className='option'>Higher</option>
                            <option className='option'>Minor</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect (null, {order, estadoInicial, porcentaje, orderByprice})(Select)