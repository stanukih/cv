import {
  Paper,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


function Work({ workdata, t }: any) {
  console.log("Translation:", t("Work.Achievements"));
  return (
    <Accordion>
      <AccordionSummary>
        <Typography component="span">{workdata["Job Title"]}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Paper elevation={1}>
          <h3>{workdata["Place of Employment"]}</h3>

          <h5>{workdata["Period"]}</h5>
          <Paper elevation={5}>
            <h3>{t("Work.Responsibilities")}</h3>
            <List>
              {workdata["Responsibilities"].map((item: any, _index: number) => (
                <ListItem key={`Responsibilities${_index}`}>{item}</ListItem>
              ))}
            </List>
          </Paper>
          {workdata["Achievements"].length > 0 && (
            <Paper elevation={5}>
              <h3>{t("Work.Achievements")}</h3>
              <List>
                {workdata["Achievements"].map((item: any, _index: number) => (
                  <ListItem key={`Achievements${_index}`}>{item}</ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
}

export default Work;
