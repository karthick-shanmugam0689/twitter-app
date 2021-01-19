import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import { Header } from "./TweetsHeader.styles";
import Button from "react-bootstrap/Button";
import { getTweetCountText } from "../../utils/genericUtils";

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
  handleShowLikedTweets: PropTypes.func.isRequired,
  showLikedTweets: PropTypes.bool,
  handleClearTweets: PropTypes.func.isRequired,
  tweetsLength: PropTypes.number,
};

export default TweetsHeader;
