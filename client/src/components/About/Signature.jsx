import React from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

const ButtonEl = styled(Fab)`
  font-weight: 900;
  .MuiFab-secondary {
    background-color: #61dafb;
  }
`;

function Signature() {
  return (
    <ButtonEl variant="extended" color="secondary">
      like what you see
    </ButtonEl>
  );
}

export default Signature;
