const IframeFileViewer = ({ fileUrl }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <h2>File Viewer using &lt;iframe&gt;</h2>
      <iframe src={fileUrl} width="80%" height="500px" title="File Viewer" />
    </div>
  );
};
