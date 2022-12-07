
import React from "react";

const Jumbotron =() =>{
    return (
        <div className="d-flex justify-content-center mt-5 rounded ">
<div className="jumbotron w-75 bg-light px-3">
  <h1 className="display-4"><strong>A Warm Welcome!</strong></h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action!</a>
  </p>
</div>
</div>
);
};

export default Jumbotron;