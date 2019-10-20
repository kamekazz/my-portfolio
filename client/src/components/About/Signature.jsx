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
    <a href="imgx\Manuel_Taveras_resume.pdf" target="_blank">
      <ButtonEl variant="extended" color="secondary">
        like what you see
      </ButtonEl>
    </a>
  );
}

export default Signature;
