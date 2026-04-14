import React, { useState } from 'react';

const VideoUpload = ({ onUpload }) => {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (videoFile) {
      onUpload(videoFile);
      setVideoFile(null);
    }
  };

  return (
    <div className="video-upload">
      <h2>Upload a Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default VideoUpload;