import { SET_TWEETS, CLEAR_TWEETS, LIKE_TWEET } from "./constants";
import { tweets } from "../../dataSource";

export const getTweets = () => (dispatch) => {
  tweets.subscribe((tweet) =>
    dispatch({
      type: SET_TWEETS,
      tweet,
    })
  );
};

export const clearTweets = () => (dispatch) => {
  dispatch({
    type: CLEAR_TWEETS,
  });
};

export const likeTweet = (id, isLiked) => (dispatch) => {
  dispatch({
    type: LIKE_TWEET,
    id,
    isLiked,
  });
};
