import React, {useState} from 'react'
import shortid from 'shortid'
import PropTypes from "prop-types";
import Error from './Error'

const Form = ({setExpense, setCreateExpense}) => {
    
    const [nombre, setNombre] = useState("");
    const [cant, setCant] = useState(0);
    const [error, setError] = useState(false);

    /*Cuando el usuario crea un gasto*/
    const addExpense = e => {
        e.preventDefault();
        
        /*Validar*/
        if (cant < 1 || isNaN(cant) || nombre.trim() === '') {
            setError(true);
            return ;
        }
        setError(false);
        
        /*Construir el gasto*/
        const gasto = {
            nombre,
            cant,
            id:shortid.generate()
        }

        /*Pasar el gasto al componente padre*/
        setExpense(gasto);
        setCreateExpense(true)

        /*Resetear el form*/
        setNombre("");
        setCant(0)
    }

    return (  
        <form 
            onSubmit={addExpense}
        >
            <h2>Agrega tus gastos acá</h2>
            {error ? <Error message="Ambos campos son obligatorios"/> : null}
            <div className="campo">
                <label>Nombre gasto</label>
                <input 
                    type="text" 
                    className="u-full-width"
                    name=""
                    placeholder="Ej. transporte"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad de gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    name={cant}
                    placeholder="Ej. 300"                    
                    onChange={e => setCant(parseInt(e.target.value))}
                />
                <input 
                    type="submit"
                    className="u-full-width"
                    value="Agregar gasto"
                />
            </div>
        </form>
    );
}

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired,
};

export default Form;