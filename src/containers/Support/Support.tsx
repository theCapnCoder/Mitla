import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { Messenger } from "../../components/Icons/Messenger";
import { Telegram } from "../../components/Icons/Telegram";
import { Whatsapp } from "../../components/Icons/Whatsapp";

export const Support = () => {
  return (
    <Box sx={{ mt: "83px", mb: "150px" }}>
      <Typography variant="h3" sx={{ mb: "27px" }}>
        Служба поддержки 24/7
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
