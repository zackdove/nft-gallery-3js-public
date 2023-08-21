import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  bottom: 0;

  h1 {
    font-size: 1.2rem;
    color: #fff;
    margin: 0 0 0 1em;
  }
  div {
    backdrop-filter: blur(5px);
    width: 100vw;
    white-space: nowrap;
    overflow-x: scroll;
    padding: 1em;
    height: 4em;
  }
`;

export const ViewedNft = styled.img`
  width: 4em;
  height: 4em;
  margin-right: 1em;
`;
