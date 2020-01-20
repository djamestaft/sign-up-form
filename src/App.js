import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="login-page">
        <div className="typography">
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
        </div>
        <div className="form-wrapper">
          <button className="submit-green try-button"><strong>Try it free 7 days</strong> then $20/mo. thereafter</button>
          <div className="white-form">
            <form>
              <input placeholder="First Name" type="text" name="name" />     
              <input placeholder="Last Name" type="text" name="name" />
              <input placeholder="Email" type="text" name="name" />
              <input placeholder="Password" type="text" name="name" />
              <input className="submit-green" type="submit" value="Claim Your Free Trial" />
            </form>
            <p id="terms-services">By clicking the button, you are agreeing to our <a id="red-terms-link">Terms and Services</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
