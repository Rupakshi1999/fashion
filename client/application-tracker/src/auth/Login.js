const handleFormInput = (event) => {
  console.log(event.target.name);
  console.log(event.target.value);
};

const handleLogin = (event) => {
  console.log('logged in');
};

const Login = () => {
  return (
    <section className="login">
      <h2>Login</h2>
      <form>
        <input type="text" name="email" onChange={handleFormInput} />
        <input type="password" name="password" onChange={handleFormInput} />
      </form>
      <button onClick={handleLogin}>Submit</button>
    </section>
  );
};

export default Login;
