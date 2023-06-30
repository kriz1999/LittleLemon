
import {  createTheme, ThemeProvider } from '@mui/material';
import { teal} from '@mui/material/colors';
import './App.css';
import Footer from './componant/Footer';
import Form from './componant/Form';
import All from './componant/All';
import Nav from './componant/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './componant/Login';
import Order from './componant/Order';



const theme = createTheme({
  palette: {
    myColor: {
      main: '#d4e157',
      dark:'#9e9d24' ,
      lihgt: '#e0ef5914'
    },
    rate: {
 
      main: '#ffff00',
    },
    blue: {
 
      main: '#0d47a1',
      lihgt: '#e0ef5914'
    },
    rablueviolette: {
 
      main: '##8e24aa',
    },
    success: teal
  },
});


function App() {

  return (
    <div className="App">
    <ThemeProvider theme={theme}> 

      <BrowserRouter>
          <Nav></Nav>   
            <Routes>
                <Route path="/LittleLemon" element={<All/>} />
                <Route path="/Form" element={<Form />} />
                <Route path="/Order" element={<Order />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
            <Footer></Footer>
         
          </BrowserRouter>
        
    </ThemeProvider>
   
     
    </div>
  );
}

export default App;


// 
// 
// 
//