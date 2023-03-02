import React from 'react';
import { Card, Button } from 'react-bootstrap';
function Carte_produit (props) {
return (
    <div className='mt-2'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ props.image} />
        <Card.Body>
        <Card.Title>{ props.name}</Card.Title>
        <Card.Text>{ props.price}</Card.Text>
        <Button variant="primary">Commander</Button>
        </Card.Body>
        </Card>
    </div>
);
};
export default Carte_produit;

{/* <div className='d-flex flex-wrap justify-content-between'>
        <Card image={produit_1} name='Produit 1' price='1200 dh'/>
        <Card image={produit_2} name='Produit 2' price='1400 dh'/>
        <Card image={produit_3} name='Produit 3' price='1600 dh'/>

        <Card image={produit_1} name='Produit 1' price='1200 dh'/>
        <Card image={produit_2} name='Produit 2' price='1400 dh'/>
        <Card image={produit_3} name='Produit 3' price='1600 dh'/>
      </div> */}