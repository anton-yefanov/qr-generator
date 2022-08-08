export const ColorButton = ({ colorBG, colorQR, changeColor, color }) => {
  return (
    <button
      style={
        colorQR === color.dark && colorBG === color.light
          ? {
              transform: "translateY(3px)",
              boxShadow: "0 0 0 0 black",
              backgroundColor: "hsl(245, 45%, 60%)",
            }
          : null
      }
      onClick={changeColor}
      className="qrCode__buttons--color"
    >
      <svg
        width="26"
        height="7"
        viewBox="0 0 26 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 3.5C0 1.567 1.567 0 3.5 0H16L14 7H3.5C1.567 7 0 5.433 0 3.5V3.5Z"
          fill={colorBG}
        />
        <path
          d="M14 0H22.5C24.433 0 26 1.567 26 3.5V3.5C26 5.433 24.433 7 22.5 7H12L14 0Z"
          fill={colorQR}
        />
      </svg>
    </button>
  );
};
