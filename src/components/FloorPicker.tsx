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
  border-radius: 30px;
  margin: 1rem 0 1.5rem;
  background-color: #6868ba;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 7px 14px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const Level = styled.span<{ selected: boolean }>`
  display: inline-block;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  line-height: 2.5em;
  text-align: center;
  vertical-align: text-bottom;
  background-color: ${({ selected }) => selected && "#FAF8FF"};
  transition-property: background-color;
  transition-duration: 0.5s;
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
        >
          {`${floor.id}F`}
        </Level>
      ))}
    </Container>
  );
}
