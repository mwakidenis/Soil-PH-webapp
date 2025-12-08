import React from 'react';
import { useDropzone } from 'react-dropzone';

const UploadSection = ({ image, uploadProgress, onImageUpload }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => onImageUpload(acceptedFiles[0]),
  });

  return (
    <div className="upload-section">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? 'active' : ''}`}
      >
        <input {...getInputProps()} />
        {image ? (
          <img src={image} alt="Soil sample" className="preview-image" />
        ) : (
          <p>{isDragActive ? 'Drop the image here!' : 'Drag & drop a soil image, or click to upload'}</p>
        )}
      </div>
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default UploadSection;