import React from 'react';

export function Product(props) {
  // console.log(props);

  return (
    <>
      <h1>Product</h1>
      <div>{props.location.pathname}</div>
      <div>{props.match.params.id}</div>
      <div><button onClick={() => props.history.push('/')}>Go Home</button></div>
      <div><button onClick={props.history.goBack}>Go Back</button></div>
    </>
  );
}
