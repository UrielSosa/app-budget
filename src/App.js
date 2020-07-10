import React, {useState, useEffect} from 'react';
import Question from './Components/Question'
import Form from './Components/Form'
import List from './Components/List'
import ControlPresupuesto from "./Components/ControlPresupuesto";


function App() {
  /*Definir el state*/
  const [quotation, setQuotation] = useState(0);
  const [residuary, setResiduary] = useState(0);
  const [showQuotation, setShowQuotation] = useState(true)
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({})
  const [createExpense, setCreateExpense] = useState(false)

  /*UseEffect que actualiza el restante*/
  useEffect(() => {
    if (createExpense) {
      /*Agrega el nuevo presupuesto*/
      setExpenses([...expenses, expense]);

      /*Resta del presupuesto actual*/
      const expenseResiduary = residuary - expense.cant;
      setResiduary(expenseResiduary);

      /*Resetear a false */
      setCreateExpense(false);
    }
  }, [expense, createExpense, expenses, residuary]);

  return (
    <div className="container">
      <header>
        <h1>Presupuesto</h1>
        <div className="contenido contenido-principal">
          {showQuotation ? 
          (
            <Question
              setQuotation={setQuotation}
              setResiduary={setResiduary}
              setShowQuotation={setShowQuotation}
            />
          ) 
          :
          (
              <div className="row">
                <div className="one-half column">
                  <Form 
                    setExpense= {setExpense}
                    setCreateExpense={setCreateExpense}
                  />
                </div>
                <div className="one-half column">
                  <List
                    expenses={expenses}
                  />

                  <ControlPresupuesto
                    quotation={quotation}
                    residuary={residuary}
                  />
                </div>
              </div>
          )
          }          
        </div>
      </header>
    </div>
  );
}

export default App;
