import React, { Component } from 'react';
// import CatList from './CatList';
 
export default class CatIndex extends Component {
 constructor(props){
   super(props);
   this.state = {
     breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
   }
 }
render (){
   return (
           <div>
           <li>
      <CatList breeds={this.state.breeds} />
      </li>
      </div>)
       }

}


class CatList extends Component {
  render(){
    return(
      <div>
        {this.props.breeds.map((cat) => {
          return <Cats passingCats={cat}/>;
        })}
      </div>
    );
  }
}

const Cats = (props) => {
  return (
    <div>
      <h3>{props.passingCats}</h3>
    </div>
  )
}

