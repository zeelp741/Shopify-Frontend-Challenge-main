import { useState } from 'react';
import Responses from './components/Responses/Responses'
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';

function App() {


  const question = "Rate this idea. Also give a rating from 1-10.  \n";


  const [engine, setEngine] = useState('text-curie-001');
  const [prompt, setPrompt] = useState("");
  const [responses, setResponses] = useState([]);



  async function sendPrompt() {

    const data = {
      prompt: question+ prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }

    try {
      const res = await fetch(`https://api.openai.com/v1/engines/${engine}/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI}`,
        },
        body: JSON.stringify(data),
      });

      const value = await res.json();

      setResponses([{prompt: prompt, response: value['choices'][0].text}, ...responses]);
      setPrompt('');

    } catch(err) {
      console.log("Error Occured")
      console.log(err);
    }
  }

  return (
    <>

  <Header/>

      
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="form-floating w-50">
          <textarea className="form-control" 
              placeholder="Leave a comment here" 
                id="floatingTextarea" style={{height: "100px"}} 
                value ={prompt} 
                onChange={(e) => setPrompt(e.target.value)}>

            </textarea>
        </div>

        {/* <Form/> */}

        <div style={{width: '350px', display: 'flex', paddingTop: '20px', paddingBottom:'10px'}}>
            <select value={engine} className="form-select" aria-label="Default select example" onChange={(e) => setEngine(e.target.value)} >
                <option value="text-curie-001">Curie</option>
                <option value="text-ada-001">Ada</option>
                <option value="text-babbage-001">Babbage</option>
                <option value="text-davinci-002">Davinci</option>
              </select>
          </div>

        
          <button type="button" className="btn btn-success mt-1" onClick={sendPrompt}>Submit</button>

          

        <h2 className="display-5 mt-5 ">Responses</h2>
        <div className="mb-5" style={{width: '40%', overflowY: 'auto', height: '450px'}}>
          {responses.length > 0 ? responses.map((item, key) => {
            return <Responses key={key} prompt={item.prompt} response={item.response}/>
          }) : <h3 className="text-center">No responses here. Enter a review!</h3>}
        </div>
      </div>
    </>
  );
}

export default App;
