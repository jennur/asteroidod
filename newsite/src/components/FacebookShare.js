import React from "react";

class FacebookShare extends React.Component {
  render() {
    return (
      <div className="facebook-share">
        <h4 className="facebook-share__headline">
          Share with your friends on Facebook ➔
        </h4>
        <div
          className="fb-share-button"
          data-href="https://asteroidod.com"
          data-layout="button"
          data-size="large"
        >
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fasteroidod.com%2F&amp;src=sdkpreparse"
            className="fb-xfbml-parse-ignore"
          >
            Share
          </a>
        </div>
      </div>
    );
  }
}

export default FacebookShare;
