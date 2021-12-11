import React from "react";
import styled from "@emotion/styled";
import { OfficeFloor } from "../types";
import FloorPicker from "./FloorPicker";

const Container = styled.div`
  height: 15rem;
  padding: 0.5rem;
  border-radius: 0 0 10px 10px;
  background-color: #c49ecf;
`;

interface Props {
  officeFloors: OfficeFloor[];
}

export default function BookingPanel({ officeFloors }: Props) {
  return (
    <Container>
      <FloorPicker officeFloors={officeFloors} />
    </Container>
  );
}
