import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";

export default function Experiences() {
  return (
    <React.Fragment>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2019-present</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="teal" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h4">
              Sindicatul Studenților din Cibernetică (SiSC)
            </Typography>
            <Typography variant="h7">
              Volunteer - IT Front-end Member
            </Typography>
            <br></br>
            <br></br>
            <Typography variant="h9" align="justify">
              •I coordinated of the event entitled Algoritmică. Our team worked
              on creating, solving and testing the exercises.
            </Typography>
            <br></br>
            <Typography variant="h9" align="justify">
              •My curiosity and desire to learn new things allowed me to get all
              sorts of knowledge from my colleagues.
            </Typography>
            <br></br>
            <Typography variant="h9" align="justify">
              •I have managed to complete my tasks on time while learning
              JavaScript and consolidating my knowledge of HTML/CSS.
            </Typography>
            <br></br>
            <Typography variant="h9" align="justify">
              •I held a short front-end training in which I had the opportunity
              to develop my communication skills and to teach people how to code
              using HTML, CSS and JavaScript and how to use the Inspect Tool.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <br></br>
        <br></br>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2019-present</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="teal" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h4">
              The Bucharest University of Economic Studies
            </Typography>
            <Typography variant="h7">
              Faculty of Economic Cybernetics, Statistics and Informatics -
              Economic Informatics
            </Typography>
            <br></br>
          </TimelineContent>
        </TimelineItem>
        <br></br>
        <br></br>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2015-2019</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="teal" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h4">
              The "Vladimir Streinu" High School - Găești
            </Typography>
            <Typography variant="h7">
              Mathematics - Informatics - Bilingual English
            </Typography>
            <br></br>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}
