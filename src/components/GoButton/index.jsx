export const GoButton = ({ GenerateQRCode, loading }) => {
  return (
    <button onClick={GenerateQRCode} className="app__form--button">
      {loading ? "Sec" : "Go"}
    </button>
  );
};
