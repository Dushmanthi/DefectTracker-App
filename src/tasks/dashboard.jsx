import React, { Component } from 'react';
import { Card,CardDeck,CardBody,CardImg } from "react-bootstrap";
import './dashboard.css';

class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div class='body'>
  <div class='card-item'>
                <br/>
                <h5>Dashboard Components/ Product Admin Dashboard</h5>
                <br/>
                <CardDeck>
  <Card>
    <Card.Body >
    <div class= 'img'>
             <Card.Title><b>Clients</b></Card.Title>
            <Card.Text>
                15 
             </Card.Text>
             <img  src={require('../assets/img/clients.png')} width='120px' height='100px' />
             </div>
      
    </Card.Body>
  </Card>


         </div>
         );
    }
}
 
export default Dashboard;
