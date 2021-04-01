import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ImgSiSC from "../../../images/sisc.jpeg";
import ImgFacultate from "../../../images/ase.jpeg";
import ImgLiceu from "../../../images/cnvs.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    alignItems: "center",
    paddingTop: "56.25%", // 16:9
  },
}));

export default function Experiences() {
  const classes = useStyles();

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
            <Card className={classes.root}>
              <CardHeader
                title="Sindicatul Studenților  din Cibernetică(SiSC)"
                subheader="Volunteer - IT Front-end Member"
              />
              <img className="media" src={ImgSiSC} alt="sisc" />
              <Typography paragraph>
              •I coordinated of the event entitled Algoritmică. Our team worked
              on creating, solving and testing the exercises.
            </Typography>
            <Typography paragraph>
              •My curiosity and desire to learn new things allowed me to get all
              sorts of knowledge from my colleagues.
            </Typography>
            <Typography paragraph>
              •I have managed to complete my tasks on time while learning
              JavaScript and consolidating my knowledge of HTML&CSS.
            </Typography>
            <Typography paragraph>
              •I held a short front-end training in which I had the opportunity
              to develop my communication skills and to teach people how to code
              using HTML, CSS and JavaScript and how to use the Inspect Tool.
            </Typography>
            </Card>
            
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
            <Card className={classes.root}>
              <CardHeader
                title="The Bucharest University of Economic Studies"
                subheader="Faculty of Economic Cybernetics, Statistics and Informatics - Economic Informatics"
              />
              <img className="media" src={ImgFacultate} alt="ase" />
            </Card>
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
            <Card className={classes.root}>
              <CardHeader
                title="The Vladimir Streinu High School - Găești"
                subheader="Mathematics - Informatics - Bilingual English"
              />
              <img className="media" src={ImgLiceu} alt="cnvs" />
            </Card>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}
