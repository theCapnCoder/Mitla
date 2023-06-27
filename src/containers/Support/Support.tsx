import { Box, Button, Stack, Typography } from "@mui/material";
import { Messenger } from "../../components/Icons/Messenger";
import { Telegram } from "../../components/Icons/Telegram";
import { Whatsapp } from "../../components/Icons/Whatsapp";
import { FC } from "react";

type Props = {
  text: string;
};

export const Support: FC<Props> = ({ text }) => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: "27px" }}>
        {text}
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={1.25}>
        <Button variant="contained" color="secondary" startIcon={<Telegram />}>
          Telegram
        </Button>
        <Button variant="contained" color="primary" startIcon={<Messenger />}>
          Messenger
        </Button>
        <Button variant="contained" color="success" startIcon={<Whatsapp />}>
          WhatsApp
        </Button>
      </Stack>
    </Box>
  );
};
