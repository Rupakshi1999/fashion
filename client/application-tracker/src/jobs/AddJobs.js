const handleFormInput = (event) => {
  console.log(event.target.name);
  console.log(event.target.value);
};

const handleSubmit = (event) => {
  console.log('submitted');
};

const AddJobs = () => {
  return (
    <section>
      <h2>Add Jobs to track</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleFormInput} />
        <input type="text" name="company" onChange={handleFormInput} />
        <input type="file" name="resume" />
        <input type="file" name="coverLetter" />
      </form>
      <button type="submit">Submit</button>
    </section>
  );
};

export default AddJobs;
