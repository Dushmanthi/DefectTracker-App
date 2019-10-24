import React from 'react';
import './App.css';
import './tasks/defectConfig.css';
import MaterialTableDemo from './tasks/defectConfig';
import TransitionsModal from './tasks/add_defects';
import CompanyPrivillege from './tasks/companyPrivillege';

function App() {
  return (
    <div >
      {/* <TransitionsModal/> 
     <MaterialTableDemo/> */}

     <CompanyPrivillege/>
     
    </div>
  );
}

export default App;
