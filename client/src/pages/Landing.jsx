import React from 'react';

function Landing() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://www.sss-solutions.org/wp-content/uploads/2018/01/1116146294-login-page-background-image-112.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <a href="/signup" className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
