import React from "react";

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            I consider myself a sociable person, who likes to work in a team but
            I can also adapt to individual tasks. When I think about the near
            future from a professional point of view, I want to work on a part
            time job as a Front-end Developer, because I had the opportunity to
            develop in this field in the last year and I don't want to stop
            here. My long-term goal is to learn as many new things as possible
            in other areas too. As for me, I like to read, travel and I hope to
            discover as many new places in the future.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row ">
            <div class="col s10">
              {" "}
              <strong>Address:</strong> Romania, Ilfov, Chiajna, Roșu, Street
              Tineretului 2B
            </div>

            <div class="col s10">
              <strong>Email:</strong> nitu.abianca@gmail
            </div>

            <div class="col s10">
              {" "}
              <strong>Phone:</strong> 0787662649
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
