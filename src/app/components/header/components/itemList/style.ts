import { styled } from "styled-components";

interface ItemContainerProps {
  isCliked: "active" | "disable";
}

export const ItemContainer = styled.li<ItemContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 6.25rem;
  cursor: pointer;
  z-index: 1;
  border-bottom: ${(p) =>
    p.isCliked === "active" ? "6px solid black" : "6px solid transparent"};
  && > span {
    position: absolute;
    top: 1.8rem;
    right: 0rem;
    background-color: red;
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;

    font-size: 0.7rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
