import logo from './logo.svg';
import './App.css';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';
import Result from './components/Result';
import Navbar from './components/Navbar';
import { Container, Grid } from '@mui/material';
import { useState } from 'react';


function App() {
  const [data,setData]=useState({
    homeValue:3000,
    downPayment:3000 *0.2,
    loanAmount:3000 *0.8,
    interestRate:2,
    loanTerm:5
  })
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container spacing={2} alignItems={'center'}>
          <Grid item xs={12} sm={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
