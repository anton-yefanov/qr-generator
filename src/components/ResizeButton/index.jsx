export const ResizeButton = ({ resolution, changeResolution, width }) => {
  return (
    <button
      style={
        +width === +resolution
          ? {
              transform: "translateY(3px)",
              boxShadow: "0 0 0 0 black",
              backgroundColor: "hsl(245, 45%, 60%)",
            }
          : null
      }
      onClick={changeResolution}
      className="qrCode__buttons--resize"
    >
      {resolution}
    </button>
  );
};
