import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import { Balence } from './Components/Balence';
import { IncomeExpence } from './Components/IncomeExpence';
import { Headers } from './Components/Headers';
import { AddTransaction } from './Components/AddTransaction';
import { TransactionList } from './Components/TransactionList';
import { GlobalProvider } from './Context/GlobalState';


function App() {

  return (
    <div className="App">
      <GlobalProvider>
        <Grid container spacing={2}>
        <Grid item xs>
          <Paper>
            <Headers />
            <Balence />
            <IncomeExpence />
            <AddTransaction />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper>
            <TransactionList />
          </Paper>
        </Grid>
      </Grid>
    
      </GlobalProvider>
    </div>
  );
}

export default App;
