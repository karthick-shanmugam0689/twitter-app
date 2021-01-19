import React, { memo } from "react";
import PropTypes from "prop-types";

import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";

import LikeContainer from "../LikeContainer/LikeContainer";
import PersonImage from "../../images/person.svg";

import { TweetContainer } from "./Tweet.styles";

const Tweet = ({
  account,
  content,
  relativeDiff,
  isLiked,
  id,
  handleLikePost,
}) => {
  const handleLikeTweetPost = (isTweetLiked) => {
    handleLikePost(id, isTweetLiked);
  };

  return (
    <TweetContainer>
      <Media>
        <Image src={PersonImage} roundedCircle className="avatar" />
        <Media.Body className="tweet-body">
          <h5>
            {account}
            <span className="time-element">{relativeDiff}</span>
          </h5>
          <p>{content}</p>
          <LikeContainer
            handleLikePost={handleLikeTweetPost}
            isLiked={isLiked}
          />
        </Media.Body>
      </Media>
    </TweetContainer>
  );
};

Tweet.propTypes = {
  account: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  relativeDiff: PropTypes.string.isRequired,
  timestamp: PropTypes.any,
  isLiked: PropTypes.bool,
  handleLikePost: PropTypes.func.isRequired,
};

export default memo(Tweet);
