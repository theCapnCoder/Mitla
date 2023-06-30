import { Button, Stack } from "@mui/material";
import { Telegram } from "../../../components/Icons/Telegram";
import { Whatsapp } from "../../../components/Icons/Whatsapp";
import { Messenger } from "../../../components/Icons/Messenger";

const GroupIcons = () => {
  return (
    <Stack direction={"row"} spacing={1.38}>
      <Telegram />
      <Messenger />
      <Whatsapp />
    </Stack>
  );
};

export const ContactButton = () => {
  return (
    <Button
      sx={{
        padding: "19px 25px",
        "& .MuiButton-endIcon": {
          marginLeft: "15px", 
        },
      }}
      variant="contained"
      color="warning"
      endIcon={<GroupIcons />}
    >
      +48 797 524 604
    </Button>
  );
};
