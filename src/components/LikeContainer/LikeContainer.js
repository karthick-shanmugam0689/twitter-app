import React from "react";
import { LikeElement } from "./LikeContainer.styles";
import PropTypes from "prop-types";
import classNames from "classnames";

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

export default LikeContainer;
