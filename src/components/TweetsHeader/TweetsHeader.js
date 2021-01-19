import React, { memo } from "react";
import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { getTweetCountText } from "../../utils/genericUtils";

import { Header } from "./TweetsHeader.styles";


const TweetsHeader = ({
  tweetsLength = 0,
  likedTweetsLength = 0,
  handleShowLikedTweets,
  showLikedTweets,
  handleClearTweets,
}) => {
  return (
    <Header>
      {tweetsLength > 0 && (
        <>
          <div className="flex-container">
            <span>
              {likedTweetsLength > 0 ? (
                <>
                  {getTweetCountText(likedTweetsLength, true)} of{" "}
                  {getTweetCountText(tweetsLength)}
                </>
              ) : (
                <>{getTweetCountText(tweetsLength)}</>
              )}
            </span>
            <div className="switch flex-container">
              <Form.Check
                type="switch"
                id="like-switch"
                checked={showLikedTweets}
                onChange={handleShowLikedTweets}
              />
              <span className="switch-text-right">Show Only Liked Tweets</span>
            </div>
          </div>
          <Button
            className="clear-btn"
            variant="secondary"
            onClick={handleClearTweets}
          >
            Clear Tweets
          </Button>
        </>
      )}
    </Header>
  );
};

TweetsHeader.propTypes = {
  likedTweetsLength: PropTypes.number,
  showLikedTweets: PropTypes.bool,
  tweetsLength: PropTypes.number,
  handleClearTweets: PropTypes.func.isRequired,
  handleShowLikedTweets: PropTypes.func.isRequired,
};

export default memo(TweetsHeader);
