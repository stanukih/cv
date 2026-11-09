import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";
import PL from "./PL";
import DB from "./DB";
import OS from "./OS";
import Language from "./Language";

function Skill({ skilldata, t }: any) {
  return (
    <>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            {t("Skills.Programming Languages.Label")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper elevation={1}>
            {skilldata["Programming Languages"].map((item: any, _index: number) => (
              <PL pldata={item} key={`pl${_index}`} t={t}></PL>
            ))}
          </Paper>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            {t("Skills.Databases.Label")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper elevation={1}>
            {skilldata["Databases"].map((item: any, _index: number) => (
              <DB dbdata={item} key={`db${_index}`} t={t}></DB>
            ))}
          </Paper>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            {t("Skills.Operating Systems.Label")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper elevation={1}>
            {skilldata["Operating Systems"].map((item: any, _index: number) => (
              <OS osdata={item} key={`os${_index}`} t={t}></OS>
            ))}
          </Paper>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            {t("Skills.Languages.Label")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper elevation={1}>
            {skilldata["Languages"].map((item: any, _index: number) => (
              <Language
                languagedata={item}
                key={`lan${_index}`}
                t={t}
              ></Language>
            ))}
          </Paper>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Skill;
