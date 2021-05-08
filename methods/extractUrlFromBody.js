const extractUrlfromBody = (url) => {
  let arrayOfUrlComponts;

  // Split the incoming url into an array separated by the slash so that we can return the last one
  arrayOfUrlComponts = url.split("/");

  if (arrayOfUrlComponts.length == 0) {
    return null;
  }

  let lastElement = arrayOfUrlComponts.pop();

  return lastElement;
};

module.exports = extractUrlfromBody;
