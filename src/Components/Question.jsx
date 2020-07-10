import React, {useState} from 'react';
import PropTypes from "prop-types";
import Error from './Error'

const Question = ({setQuotation, setResiduary, setShowQuotation}) => {
    /*Definir el state*/
    const [cant, setCant] = useState(0);
    const [error, setError] = useState(false);

    /*funcion que lee el presupuesto*/
    const defineQuotation = e => {
        setCant(parseInt(e.target.value));
    }

    /*Funcion para definir presupuesto*/
    const saveQuotation = e => {
        e.preventDefault();

        /*Validar*/
        if(cant < 1 || isNaN(cant)){
            setError(true);
            return;
        }
        /*Si se pasa la validacion*/
        setError(false);
        setQuotation(cant);
        setResiduary(cant);
        setShowQuotation(false);
    }

    return (  
        <>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error message="El presupuesto es incorrecto" />: null}

            <form
                onSubmit={saveQuotation}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={defineQuotation}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </>
    );
}

Question.propTypes = {
  setQuotation: PropTypes.func.isRequired,
  setShowQuotation: PropTypes.func.isRequired,
  setResiduary: PropTypes.func.isRequired,
};

export default Question;