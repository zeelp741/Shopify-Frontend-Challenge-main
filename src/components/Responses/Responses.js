import React from 'react'

function Responses({prompt, response}) {
  return (
    <div className="bg-light border border-2 rounded-3 mt-3">
      <div style={{padding: '10px'}}>
        <div className="row mt-1">
          <div className="col">
            <b>Review</b>
          </div>
          <div className="col">
            {prompt}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <b>Response</b>
          </div>
          <div className="col">
            {response}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Responses