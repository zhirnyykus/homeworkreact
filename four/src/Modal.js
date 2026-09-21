import { useState } from "react";
import './Modal.css'

function Modal() {

  let [open, setOpen] = useState(false);

  let image = "https://image.fonwall.ru/o/yi/arch-neural-network-rendering.jpeg?auto=compress&fit=resize&h=282&w=500&display=thumb&domain=img3.fonwall.ru";

  return (

    <div>

      <img src={image} alt="" className="small" style={{ display: open ? "none" : "block" }} onClick={() => setOpen(true)} />

      {
        open && (
          <div>
            <div>
              <img src={image} alt="" className="big" onClick={() => setOpen(false)} />
            </div>
          </div>
        )
      }

    </div>

  )
}

export default Modal;