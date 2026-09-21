import { useState } from "react";

function Person() {
  let [person, setPerson] = useState({
    firstName:"Ivan",
    lastName: "Ivanov"
  });

  function rename() {
    // setPerson({firstName: "Igor", lastName: person.lastName})
    setPerson({...person, firstName: "Igor"})
  }

  return (
    <div>
      <p>{person.firstName} {person.lastName}</p>
      <button onClick={rename}>Rename</button>
    </div>
  )
}

export default Person;