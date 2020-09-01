import React from 'react';

export function Dashboard(props) {
  return (
    <>
      <h1>Dashboard</h1>
      <div>{props.location.pathname}</div>
      <div><button onClick={() => props.history.push('/')}>Go Home</button></div>
      <div><button onClick={props.history.goBack}>Go Back</button></div>
    </>
  );
}
