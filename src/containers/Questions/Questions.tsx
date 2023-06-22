import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import questionsData from "./questionsData";
import styled from "@emotion/styled";
import Support from "../Support";

const QuestionTypography = styled(Typography)({
  fontWeight: 700,
  fontSize: 24,
  lineHeight: "48px",
  color: "#212121",
});

export const Questions = () => {
  return (
    <Box sx={{ padding: "135px 0", backgroundColor: "#FAFAFA" }}>
      <Typography variant="h2" sx={{mb: 1}}>Часто задаваемые вопросы</Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "1400px" }}>
          {questionsData.map(({ question, answer }, index) => (
            <Accordion key={index}>
              <AccordionSummary
                sx={{ padding: 0 }}
                expandIcon={<ExpandMoreIcon sx={{ fontSize: 65}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <QuestionTypography>{question}</QuestionTypography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
      <Support/>
    </Box>
  );
};
