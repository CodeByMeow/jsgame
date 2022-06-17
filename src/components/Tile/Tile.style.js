import styled, {keyframes} from "styled-components";

export const show = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
}
`

export const Content = styled.div`
  width: 20vmin;
  height: 20vmin;
  position: absolute;
  left: ${({cell}) => `${(cell.x *(20 + 1) + 1)}vmin`};
  top: ${({cell}) => `${(cell.y *(20 + 1) + 1)}vmin`};
  background: ${({cell}) => `url(images/${cell.tile.value}.gif)`};
  background-size: cover;
  border-radius: inherit;
  animation: show 200ms ease-in-out;
  transition: 100ms ease-in-out;
`;

