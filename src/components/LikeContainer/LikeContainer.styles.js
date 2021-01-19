import styled from "styled-components";

import LoveReaction from "../../images/love_icon_reaction.svg";

export const LikeElement = styled.div`
  width: 2rem;
  height: 2rem;
  display: inline-block;
  border-radius: 0.5rem;
  text-align: center;
  background-color: ${(props) => props.theme.text};
  background-size: 1rem;
  cursor: pointer;
  mask: url(${LoveReaction}) no-repeat;
  -webkit-mask: url(${LoveReaction}) no-repeat;
  mask-size: 1.2rem;
  -webkit-mask-size: 1.2rem;
  &:hover {
    transform: scale(1.3);
    transition: 0.2s;
  }
  &.liked {
    background-color: ${(props) => props.theme.liked};
  }
`;
