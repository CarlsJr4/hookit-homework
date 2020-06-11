function sortLikes(a, b) {
  return b.Likes - a.Likes;
}

function sortComments(a, b) {
  return b.Comments - a.Comments;
}

function sortViews(a, b) {
  return b.Views - a.Views;
}

function sortInteractions(a, b) {
  const first = a.Likes + a.Comments + a.Views;
  const second = b.Likes + b.Comments + b.Views;
  return second - first;
}

function sortAlphabetical(a, b) {
  const first = a.Displayname.toLowerCase();
  const second = b.Displayname.toLowerCase();
  if (first > second) {
    return 1;
  }
  if (first < second) {
    return -1;
  }
  return 0;
}

export {
  sortComments,
  sortInteractions,
  sortAlphabetical,
  sortLikes,
  sortViews,
};
