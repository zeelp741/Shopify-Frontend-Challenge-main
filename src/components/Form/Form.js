import React from 'react'
import './styles.css'

const Form = () => {
  return (
    <div className='form'>
        <div style={{width: '350px', display: 'flex'}}>
                <select  className="form-select" aria-label="Default select example" >
                  <option value="text-curie-001">Curie</option>
                  <option value="text-ada-001">Ada</option>
                  <option value="text-babbage-001">Babbage</option>
                  <option value="text-davinci-002">Davinci</option>
                </select>
        </div>

    </div>
  )
}

export default Form
