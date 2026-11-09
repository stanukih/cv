import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Rating,
  Typography,
} from "@mui/material";

function DB({ dbdata }: any) {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography component="span">{dbdata["Database"]}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Paper elevation={1}>
          <Rating name="pl-rating" value={dbdata["Level"]} max={10} readOnly />
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
}

export default DB;
