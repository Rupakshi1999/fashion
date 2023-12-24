import post from '../../axios/post';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await post('auth/login', {
      email,
      password,
    });
    console.log(response.data);
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

export default Login;
