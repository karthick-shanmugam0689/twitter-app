import styled from "styled-components";

export const TweetContainer = styled.div`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  line-height: 16px;
  border-color: ${(props) => props.theme.tweetBorder};
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 3px ${(props) => props.theme.tweetBox};
  margin: 10px auto;
  padding: 1rem;
  width: 30rem;
  text-align: left;

  img.avatar {
    border: 1px solid ${(props) => props.theme.avatarBorder};
    width: 3rem;
    height: 3rem;
    box-shadow: 0 1px 3px ${(props) => props.theme.tweetBox};
    padding: 0.5rem;
    background: ${(props) => props.theme.avatarBackground};
  }

  .tweet-body {
    margin-left: 1rem;

    .time-element {
      font-size: 0.75rem;
      font-weight: 100;
      margin-left: 0.5rem;

      &:before {
        content: ".";
        margin-right: 0.25rem;
        font-size: 1.25rem;
      }
    }

    p {
      font-weight: 400;
    }
  }
`;
