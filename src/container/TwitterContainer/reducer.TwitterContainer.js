import { CLEAR_TWEETS, LIKE_TWEET, SET_ERROR, SET_TWEETS } from "./constants";
import { getRelativeTimeDiff } from "../../utils/dateUtils";

const initialState = {
  tweets: [],
  isInError: false,
  errorMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TWEETS:
      return {
        ...state,
        tweets: getTweetsToShow(state.tweets, action.tweet),
        isInError: false,
        errorMessage: '',
      };
    case CLEAR_TWEETS:
      return {
        ...state,
        tweets: [],
      };
    case LIKE_TWEET:
      return {
        ...state,
        tweets: state.tweets.map((eachTweet) => ({
          ...eachTweet,
          isLiked:
            (eachTweet.id === action.id && action.isLiked) ||
            (eachTweet.id !== action.id && eachTweet.isLiked),
        })),
      };
    case SET_ERROR:
      return {
        ...state,
        isInError: action.error,
        errorMessage: action.errorMessage,
      }
    default:
      return state;
  }
};

const getTweetsToShow = (tweetsInState = [], newTweet) => {
  if (newTweet) {
    const returnTweets = [newTweet, ...tweetsInState];
    const currentDate = new Date();
    return returnTweets
      .filter(
        (eachTweet) => currentDate.getTime() - eachTweet.timestamp <= 30000
      )
      .map((eachTweet) => ({
        ...eachTweet,
        relativeDiff: eachTweet.timestamp
          ? getRelativeTimeDiff(eachTweet.timestamp)
          : "",
        id: `${eachTweet.account} - ${eachTweet.timestamp}`,
      }));
  }
  return [];
};

export default reducer;
