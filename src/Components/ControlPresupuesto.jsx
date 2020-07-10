import React from 'react';
import PropTypes from "prop-types";
import {revisarPresupuesto} from '../helpers'

const ControlPresupuesto = ({quotation, residuary}) => {
    return (
      <>
        <div className="alert alert-primary">
            Presupuesto: $ {quotation}
        </div>
        <div className={revisarPresupuesto(quotation, residuary)}>
            Restante: $ {residuary}
        </div>
      </>
    );
}

ControlPresupuesto.propTypes = {
  quotation: PropTypes.number.isRequired,
  residuary: PropTypes.number.isRequired,
};
 
export default ControlPresupuesto;