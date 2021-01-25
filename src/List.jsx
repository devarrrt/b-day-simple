import React from 'react'


// interface iData[] {
//   id: number,
//   name: string,
//   age: string,
//   image: string
// }

// interface IList {
//   people: iData[]
//  }


export const List= ({ people }) => {
  return (
    <>
      { people.map( (person) => (
        <article className="person" key={ person.id }> 
          <img src={ person.image } alt="person" />
          <div> 
            <h4> { person.name } </h4>
            <p> { person.age } </p>
          </div>
         </article>
      ) ) }
    </>
  )
}
