import React from 'react';
import {Card} from '../card/card.componet';
export const CardList = props => {
 return (
    
 <div className='container mt-2 center'>
    <div className='row'>
       {
        props.monsters.map(monster =>(
        <h3 style={{backgroundColor:'#95dada'}} className='col-sm-3 ms-4'>
         <Card key={monster.id} monster={monster}/>
        </h3>
        ) )}
    </div>
</div>

 )
}