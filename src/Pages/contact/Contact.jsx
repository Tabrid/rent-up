import React from "react";
import "./contact.css";
const Swal = require('sweetalert2');

const Contact = () => {

const handleSubmit =() =>{
  Swal.fire({
    icon: 'success',
    title: 'submission  successfully',
    showConfirmButton: false,
    timer: 1500
  }) ; 
}

  return (
    <>
      <section className='contact mb'>

        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button onClick={handleSubmit}>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
