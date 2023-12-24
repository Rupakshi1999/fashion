import React from 'react';
import Resume from './Resume';

function Job(props) {
  console.log(props);
  const { company, title, status, dateCreated } = props.job;

  return (
    <article className="job">
      <h2>{company}</h2>
      <h2>{title}</h2>
      <h4>{status}</h4>
      <h4>{dateCreated}</h4>

      <Resume />
    </article>
  );
}
// function Title() {
//   return <h2>Title</h2>;
// }
// function Company() {
//   return <h2>Company</h2>;
// }
// function Status() {
//   return <h2>Status</h2>;
// }

export default Job;
