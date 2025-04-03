export default function ObjectFileViewer({ fileUrl, fileType }) {
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
      <h2>File Viewer using &lt;object&gt;</h2>
      {fileType === "pdf" ? (
        <object
          data={fileUrl}
          type="application/pdf"
          width="80%"
          height="500px"
        >
          <p>
            Your browser doesn't support PDFs.{" "}
            <a href={fileUrl}>Download the PDF</a>.
          </p>
        </object>
      ) : (
        <object data={fileUrl} type={getMediaType()} width="80%" height="500px">
          <p>Your browser doesn't support this image format.</p>
        </object>
      )}
    </div>
  );
}
