import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";

function Language({ languagedata }: any) {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography component="span">{languagedata["Language"]}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Paper elevation={1}>
          <p>{languagedata["Comment"]}</p>
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
}

export default Language;
