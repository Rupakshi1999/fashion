import post from '../../axios/post';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await post('auth/login', {
        email,
        password,
      });
      console.log(typeof setToken);
      props.setToken(response.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="login">
      <form>
        <h2>Login</h2>
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="login_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="login_password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button onClick={handleLogin}>Submit</button>
    </section>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
