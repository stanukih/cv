//import myImage from './assets/my_image.jpg'
import {
  Stack,
  Paper,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import "./App.css";
import { useTranslation, type Language } from "./utils/useTranslation";
import { dataRu, dataEn, dataFi } from "./utils/data";
import Work from "./components/Work";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Hobby from "./components/Hobby";
import Other from "./components/Other";

function App() {
  const { t, language, setLanguage } = useTranslation();
  let data = null;
  switch (language) {
    case "en":
      data = dataEn;
      break;
    case "ru":
      data = dataRu;
      break;
    case "fi":
      data = dataFi;
      break;
  }
  return (
    <>
      <Paper elevation={1}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <Card
            sx={{
              width: { xs: "100%", md: 400 },
              maxWidth: "100%",
              p: 2,
              boxSizing: "border-box",
            }}
          >
            <CardMedia
              component="img"
              image="/my_image.jpg"
              alt="Profile photo"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 400,
                objectFit: "contain",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ivkin Stanislav
              </Typography>
            </CardContent>
            <Stack
              spacing={1}
              sx={{
                px: 2,
                pb: 2,
              }}
            >
              <Button
                size="medium"
                variant="contained"
                href="tel:+358401234567"
              >
                +3584577358616
              </Button>
              <Button
                size="medium"
                variant="contained"
                href="mailto:stanukih@gmail.com"
              >
                stanukih@gmail.com
              </Button>
            </Stack>
          </Card>
          <Paper
            elevation={5}
            sx={{
              flex: "1 1 400px",
              minWidth: 0,
              p: 2,
            }}
          >
            <Select
              value={language}
              onChange={(event) => setLanguage(event.target.value as Language)}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="ru">Русский</MenuItem>
              <MenuItem value="fi">Suomi</MenuItem>
            </Select>
            <Accordion>
              <AccordionSummary>
                <Typography component="span">{t("Work.Label")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper elevation={3}>
                  {data.Work.map((item, _index) => (
                    <Work workdata={item} key={`work${_index}`} t={t}></Work>
                  ))}
                </Paper>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                <Typography component="span">{t("Education.Label")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper elevation={3}>
                  {data.Education.map((item, _index) => (
                    <Education
                      edudata={item}
                      key={`edu${_index}`}
                      t={t}
                    ></Education>
                  ))}
                </Paper>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>
                <Typography component="span">{t("Skills.Label")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper elevation={3}>
                  {data.Skills.map((item, _index) => (
                    <Skill
                      skilldata={item}
                      key={`skill${_index}`}
                      t={t}
                    ></Skill>
                  ))}
                </Paper>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                <Typography component="span">{t("Hobbies")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper elevation={3}>
                  {data.Hobbies.map((item, _index) => (
                    <Hobby hobbydata={item} key={`hob${_index}`} t={t}></Hobby>
                  ))}
                </Paper>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                <Typography component="span">{t("Other")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper elevation={3}>
                  {data.Other.map((item, _index) => (
                    <Other
                      otherdata={item}
                      key={`other${_index}`}
                      t={t}
                    ></Other>
                  ))}
                </Paper>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Stack>
      </Paper>
    </>
  );
}

export default App;
