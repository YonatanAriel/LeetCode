export default function EmbedFileViewer({ fileUrl, fileType }) {
  const getMediaType = () => {
    switch (fileType) {
      case "pdf":
        return "application/pdf";
      case "png":
        return "image/png";
      case "jpg":
        return "image/jpeg";
      default:
        return "";
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <h2>File Viewer using &lt;embed&gt;</h2>
      {fileType === "pdf" ? (
        <embed
          src={fileUrl}
          type="application/pdf"
          width="80%"
          height="500px"
        />
      ) : (
        <img
          src={fileUrl}
          alt="Image"
          style={{ maxWidth: "80%", maxHeight: "500px" }}
        />
      )}
    </div>
  );
}
