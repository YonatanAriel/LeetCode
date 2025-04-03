import { useState, useRef } from "react";
import ObjectFileViewer from "./ObjectFileViewer";
import EmbedFileViewer from "./EmbedFileViewer";
import IframeFileViewer from "./IframeFileViewer";

const ViewersContainer = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [currentFileType, setCurrentFileType] = useState(null);
  const [viewerType, setViewerType] = useState("embed");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file); // Create a temporary URL for the local file
      setFileUrl(url);
      setCurrentFileType(
        file.type.includes("pdf")
          ? "pdf"
          : file.type.includes("image")
          ? file.type.split("/")[1]
          : null
      );
    }
  };

  const handleViewerTypeChange = (type) => {
    setViewerType(type);
  };

  const handleOpenFileDialog = () => {
    fileInputRef.current.click();
  };

  const buttonStyle = {
    padding: "8px 16px",
    margin: "8px",
    cursor: "pointer",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "16px",
  };

  return (
    <div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={handleOpenFileDialog}>
          Upload File
        </button>
      </div>

      <div style={buttonContainerStyle}>
        <button
          style={buttonStyle}
          onClick={() => handleViewerTypeChange("embed")}
          disabled={!fileUrl}
        >
          Use &lt;embed&gt;
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleViewerTypeChange("object")}
          disabled={!fileUrl}
        >
          Use &lt;object&gt;
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleViewerTypeChange("iframe")}
          disabled={!fileUrl}
        >
          Use &lt;iframe&gt;
        </button>
      </div>

      <input
        type="file"
        accept=".pdf, image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
        ref={fileInputRef}
      />

      {fileUrl && viewerType === "embed" && currentFileType && (
        <EmbedFileViewer fileUrl={fileUrl} fileType={currentFileType} />
      )}

      {fileUrl && viewerType === "object" && currentFileType && (
        <ObjectFileViewer fileUrl={fileUrl} fileType={currentFileType} />
      )}

      {fileUrl && viewerType === "iframe" && fileUrl && (
        <IframeFileViewer fileUrl={fileUrl} />
      )}
    </div>
  );
};

export default ViewersContainer;
