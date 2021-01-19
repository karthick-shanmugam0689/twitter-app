import { SET_TWEETS, CLEAR_TWEETS, LIKE_TWEET, SET_ERROR } from "./constants";
import { tweets } from "../../dataSource";

export const getTweets = () => (dispatch) => {
  try {
    tweets.subscribe((tweet) =>
      dispatch({
        type: SET_TWEETS,
        tweet,
      })
    );
  } catch (ex) {
    dispatch({
      type: SET_ERROR,
      isInError: true,
      errorMessage: 'Some error occured. Please try again'
    })
  }
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
