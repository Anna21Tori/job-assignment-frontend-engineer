import { useContext, useState } from "react";
import { IUserCredentials } from "../../models/user-credentials.model";
import { LoginUser } from "services/auth.service";
import { IUser } from "models/user.model";
import { IUserContext, UserContext } from "contexts/user.context";
import { useHistory } from "react-router-dom";

const defaultCredentials: IUserCredentials = {
  email: "",
  password: "",
};
const LoginPage = () => {
  const { setCurrentUser } = useContext<IUserContext>(UserContext);
  const [credentials, setCredentials] = useState(defaultCredentials);
  const history = useHistory();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const value = input.value;
    const name = input.name;

    if (name) {
      setCredentials(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const response = await LoginUser(credentials);

    if (!response.ok) {
      //handle error
      console.log();
    } else {
      const data = await response.json();
      setCurrentUser(data.user);
      history.push("/");
    }
  };

  return (
    <div className="auth-page content-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>

            <form>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right" onClick={handleSubmit}>
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
