import React from "react";
import styled from "@emotion/styled";
import { OfficeFloor } from "../types";

const Container = styled.div`
  height: 15rem;
  padding: 0.5rem;
  border-radius: 0 0 10px 10px;
  background-color: #c49ecf;
`;

const FloorPicker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #5f0080;
  border-radius: 5px;
  margin: 1rem 0;
`;

const Level = styled.span<{ selected: boolean }>`
  display: inline-block;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  vertical-align: text-bottom;
  background-color: ${({ selected }) => selected && "white"};
`;

interface Props {
  officeFloors: OfficeFloor[];
}

export default function BookingPanel({ officeFloors }: Props) {
  return (
    <Container>
      <FloorPicker>
        {officeFloors.map((floor) => (
          <Level
            key={floor.id}
            selected={floor.selected}
          >{`${floor.id}F`}</Level>
        ))}
      </FloorPicker>
    </Container>
  );
}
