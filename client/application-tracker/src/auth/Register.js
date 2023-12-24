const handleFormInput = (event) => {
  console.log(event.target.name);
  console.log(event.target.value);
};

const handleRegister = (event) => {
  //   event.preventdefault();
  console.log(event);
  console.log('logged in');
};

const Register = () => {
  return (
    <section className="register">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="first" onChange={handleFormInput} />
        <input type="text" name="last" onChange={handleFormInput} />
        <input type="text" name="email" onChange={handleFormInput} />
        <input type="password" name="password" onChange={handleFormInput} />
      </form>
      <button type="submit">Submit</button>
    </section>
  );
};

export default Register;
