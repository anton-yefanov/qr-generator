import { GoButton } from "../GoButton";

export const Input = ({ onClickGo, inputValue, setInputValue, loading }) => {
  return (
    <div className="app__form">
      <input
        required
        onChange={setInputValue}
        value={inputValue}
        className="app__form--input"
        type="text"
        placeholder="Type URL or Text..."
      />
      <GoButton onClickGo={onClickGo} loading={loading} />
    </div>
  );
};
