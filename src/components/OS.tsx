import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Rating,
  Typography,
} from "@mui/material";

function OS({ osdata }: any) {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography component="span">{osdata["OS"]}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Paper elevation={1}>
          <Rating name="pl-rating" value={osdata["Level"]} max={10} readOnly />
          <p>{osdata["Comment"]}</p>
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
}

export default OS;
