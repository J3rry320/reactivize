const Art = require("ascii-art");
const ArtImage = require("ascii-art-image");
const renderImage = (imagePath) => {
  const options = {
    filepath: imagePath,
    width: 80,
    height: 40,
  };

  new ArtImage(options).write(function (err, rendered) {
    if (err) {
      console.error("Error rendering the image:", err);
      return;
    }
    return rendered;
  });
};
const renderText = (text, font) => {
  Art.font(text, font, function (rendered) {
    return rendered;
  });
};
module.exports = { renderImage, renderText };
