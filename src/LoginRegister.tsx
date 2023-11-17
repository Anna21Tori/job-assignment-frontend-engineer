import { useState} from "react";
const LoginPage = () =>{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e: any) => {
    const res = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: {email, password}}),
    });
  }

  return (
    <>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>

              <form>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" onClick={handleSubmit}>Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;