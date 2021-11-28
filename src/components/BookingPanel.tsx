import React from "react";
import styled from "@emotion/styled";

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

const Level = styled.span`
  display: inline-blocks;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  vertical-align: text-bottom;
`;

interface Props {
  meetingRooms?: any;
}

export default function BookingPanel({ meetingRooms }: Props) {
  const [currentLevel, setCurrentLevel] = React.useState("18F");

  return (
    <Container>
      <FloorPicker>
        <Level>13F</Level>
        <span>|</span>
        <Level>14F</Level>
        <span>|</span>
        <Level>15F</Level>
        <span>|</span>
        <Level>16F</Level>
        <span>|</span>
        <Level>17F</Level>
        <span>|</span>
        <Level>18F</Level>
      </FloorPicker>
    </Container>
  );
}
