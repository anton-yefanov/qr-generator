export const GoButton = ({ onClickGo, loading }) => {
  return (
    <button onClick={onClickGo} className="app__form--button">
      {loading ? "Sec" : "Go"}
    </button>
  );
};
