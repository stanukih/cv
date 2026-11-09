import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Paper,
  Typography,
} from "@mui/material";

function Education({ edudata }: any) {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography component="span">{edudata["Degree"]}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Paper elevation={1}>
          <h4>{edudata["Institution"]}</h4>
          <h5>{edudata["Period"]}</h5>
          {edudata["Diploma"] && (
            <Link href={edudata['Link']}>{edudata["Diploma"]}</Link>
          )}
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
}

export default Education;
