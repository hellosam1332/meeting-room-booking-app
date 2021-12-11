import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { OfficeFloor } from "../types";
import { selectOfficeFloor } from "../slice";

const Container = styled.div`
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

export default function FloorPicker({ officeFloors }: Props) {
  const dispatch = useDispatch();

  const handleClickLevel = (id: number) => () =>
    dispatch(selectOfficeFloor(id));

  return (
    <Container>
      {officeFloors.map((floor) => (
        <Level
          key={floor.id}
          selected={floor.selected}
          onClick={handleClickLevel(floor.id)}
        >{`${floor.id}F`}</Level>
      ))}
    </Container>
  );
}
