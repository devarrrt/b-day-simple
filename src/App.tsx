import React, { useState } from 'react'
import {data} from './data'
import {List} from './List'


interface Props {}




const App = (props: Props) => {
const [ people, setPeople ] = useState(data)

  return (
 <main>
      <section className="container">
        <h3> 0 b-day today </h3>
        <List people={ people}  />
        <button onClick={ ()=> setPeople([])}> clear all </button>  
    </section>
 </main>
  )
}

export default App

//20