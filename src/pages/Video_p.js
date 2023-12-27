import React from 'react';

function Video_p() {
  const videoSy = {width: "100%"};

  return (
    <>
      <video style={videoSy} autoPlay muted loop>
        <source src="/video/jejuVideo.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default Video_p;
