import { useState } from "react";

function Forms(props) {
let [value, setValue] = useState('');
let {addTask} = props;

let sendSubmit = e => {
  e.preventDefault();
  addTask(value);
  setValue('');

}

  return (

    <div>

    <form onSubmit={sendSubmit}>
      <input 
      type="text" 
      className="input" 
      value={value}
      onChange={e => setValue(e.target.value)}
      />
    </form>

    </div>

  )
}

export default Forms;