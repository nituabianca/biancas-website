import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Skills() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROFESSIONAL SKILLS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col s6">
              <p>HTML</p>
              <CircularProgress variant="determinate" value={90} />
            </div>
            <div className="col s6">
              <p>CSS</p>
              <CircularProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>JAVASCRIPT</p>
              <CircularProgress variant="determinate" value={65} />
            </div>
            <div className="col s6">
              <p>C/C++</p>
              <CircularProgress variant="determinate" value={50} />
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>SQL</p>
              <CircularProgress variant="determinate" value={50} />
            </div>
            <div className="col s6">
              <p>PYTHON</p>
              <CircularProgress variant="determinate" value={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
