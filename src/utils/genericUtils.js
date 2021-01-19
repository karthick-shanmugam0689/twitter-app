export const getTweetCountText = (count, showLikesText) => {
  if (showLikesText) {
    return `${count} liked tweet${count > 1 ? "s" : ""}`;
  } else {
    return `${count} tweet${count > 1 ? "s" : ""}`;
  }
};
