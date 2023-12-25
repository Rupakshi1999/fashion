import Login from './Login';
import Register from './Register';

function Auth({ setToken }) {
  return (
    <div className="auth">
      <Register setToken={setToken} />
      <Login setToken={setToken} />
    </div>
  );
}

export default Auth;
