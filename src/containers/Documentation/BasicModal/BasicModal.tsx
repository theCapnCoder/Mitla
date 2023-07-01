import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Technologies } from "../Technologies";
import { Link, Stack } from "@mui/material";
import { PixelPerfect } from "../PixelPerfect";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

export const BasicModal: React.FC<Props> = ({ showModal, setShowModal }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setShowModal(false);
    setOpen(false);
  };

  React.useEffect(() => {
    if (showModal) {
      handleOpen();
    }
  }, [showModal]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box mb={3}>
            <Technologies />
          </Box>

          <Stack mb={3} direction="row" justifyContent={"center"} gap={3}>
            <Link
              href="https://github.com/theCapnCoder/Mitla"
              target="_blank"
              component={"a"}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ padding: "16px 0", justifyContent: "center" }}
              >
                Git Hub
              </Button>
            </Link>

            <Link
              href="https://www.figma.com/file/tC1Zxwusdl0ooowoMmqF6B?type=design&node-id=0:1"
              target="_blank"
              component={"a"}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ padding: "16px 0", justifyContent: "center" }}
              >
                Figma
              </Button>
            </Link>
          </Stack>

          <PixelPerfect />
        </Box>
      </Modal>
    </>
  );
};
