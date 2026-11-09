import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Rating,
  Typography,
} from "@mui/material";

function PL({ pldata }: any) {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography component="span">{pldata["Technology"]}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Paper elevation={1}>
          <Rating name="pl-rating" value={pldata["Level"]} max={10} readOnly />
          <p>{pldata["Comment"]}</p>
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
}

export default PL;
