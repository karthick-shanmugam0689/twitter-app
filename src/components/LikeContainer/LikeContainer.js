import React, {memo} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { LikeElement } from "./LikeContainer.styles";

const LikeContainer = ({ handleLikePost, isLiked }) => {
  return (
    <LikeElement
      onClick={() => handleLikePost(!isLiked)}
      className={classNames({
        liked: isLiked,
      })}
    />
  );
};

LikeContainer.propTypes = {
  isLiked: PropTypes.bool,
  handleLikePost: PropTypes.func.isRequired,
};

export default memo(LikeContainer);
