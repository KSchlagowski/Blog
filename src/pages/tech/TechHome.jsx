import React from 'react'; 
import CardComponent from '../../components/CardComponent';
import { RegularList } from '../../components/RegularList';
import { Card } from 'react-bootstrap';
import journeyImg from "../../images/journey.jpg"
import compImg from "../../images/computer.jpg"
import cardImg from "../../images/card.jpg"

const articles = [{
    title: 'siema eniu',
    description: 'lorem ipsum',
    image: cardImg
}, {
    title: 'second',
    description: 'doret amet',
    image: compImg
}, {
    title: 'third',
    description: 'hello world',
    image: journeyImg
}];

function TechHome() {     
    return (
    <>
        <h1>this is the tech homepage</h1> 
        <RegularList  
            items={articles}
            resourceName="content"
            itemComponent={CardComponent} />
    </>
    ); 
} 

export default TechHome;