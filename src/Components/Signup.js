import React from 'react';

const Signup = () => {


    

    return (
        <div>
            <form className='container'>

            <h3>Sign in to your account</h3>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Your Email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    console.log(email);
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Continue</button>
</form>
        </div>
    );
}

export default Signup;
