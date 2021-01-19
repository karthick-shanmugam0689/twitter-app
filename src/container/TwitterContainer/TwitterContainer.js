import React, { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getTweets, clearTweets, likeTweet } from "./action";
import Tweet from "../../components/Tweet/Tweet";
import { TweetsContainer } from "./TwitterContainer.styles";
import TweetsHeader from "../../components/TweetsHeader/TweetsHeader";

const TwitterContainer = ({
  tweets,
  getTweetsForMe,
  clearTweetsForMe,
  likeTweetForMe,
}) => {
  const [showLikedTweets, setShowLikedTweets] = useState(false);

  useEffect(() => {
    getTweetsForMe();
  }, [getTweetsForMe]);

  const handleClearTweets = useCallback(() => {
    clearTweetsForMe();
  }, [clearTweetsForMe]);

  const handleLikePost = useCallback(
    (id, isLiked) => {
      likeTweetForMe(id, isLiked);
    },
    [likeTweetForMe]
  );

  const toggleShowLikedTweets = useCallback(() => {
    setShowLikedTweets(!showLikedTweets);
  }, [setShowLikedTweets, showLikedTweets]);

  const tweetsToShow = useMemo(() => {
    if (showLikedTweets) {
      return tweets && tweets.filter((eachTweet) => eachTweet.isLiked);
    } else {
      return tweets;
    }
  }, [showLikedTweets, tweets]);

  const likedTweetsLength = useMemo(
    () => tweets && tweets.filter((eachTweet) => eachTweet.isLiked).length,
    [tweets]
  );

  return (
    <TweetsContainer>
      <TweetsHeader
        tweetsLength={tweets && tweets.length}
        handleClearTweets={handleClearTweets}
        handleShowLikedTweets={toggleShowLikedTweets}
        showLikedTweets={showLikedTweets}
        likedTweetsLength={likedTweetsLength}
      />
      {tweetsToShow &&
        tweetsToShow.map((eachTweet) => (
          <Tweet
            {...eachTweet}
            handleLikePost={handleLikePost}
            key={eachTweet.id}
          />
        ))}
      {tweetsToShow && !tweetsToShow.length && (
        <>
          {tweets && tweets.length ? (
            <h5>Like the tweets to see the filter working</h5>
          ) : (
            <h5>Please wait for the tweets to load or come back later</h5>
          )}
        </>
      )}
    </TweetsContainer>
  );
};

TwitterContainer.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      account: PropTypes.string,
      timestamp: PropTypes.any,
      content: PropTypes.string,
      id: PropTypes.string,
      relativeDiff: PropTypes.string,
    })
  ),
  getTweetsForMe: PropTypes.func,
  clearTweetsForMe: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getTweetsForMe: () => dispatch(getTweets()),
  clearTweetsForMe: () => dispatch(clearTweets()),
  likeTweetForMe: (id, isLiked) => dispatch(likeTweet(id, isLiked)),
});

const mapStateToProps = (state) => ({
  tweets: state.tweets,
});

export default connect(mapStateToProps, mapDispatchToProps)(TwitterContainer);
