import { Fab } from "@mui/material";
import React from "react";
import { BasicModal } from "./BasicModal";

export const Documentation = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setShowModal(true)}
        sx={{
          position: "fixed",
        }}
      >
        Documentation
      </Fab>

      <BasicModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};
