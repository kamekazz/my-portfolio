import React from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

const ButtonEl = styled(Fab)``;

function Signature() {
  return (
    <ButtonEl variant="extended" color="secondary">
      hire me
    </ButtonEl>
  );
}

export default Signature;
