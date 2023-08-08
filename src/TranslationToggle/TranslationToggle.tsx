import React from "react";

const TranslationToggle = ({ t }) => {
  return (
    <button
      style={{
        position: "absolute",
        top: "5em",
        right: "2em",
        width: 150
      }}
      onClick={() => t.setLanguage(t.getLanguage() === "jp" ? "en" : "jp")}
    >
      {t("SET_LANGUAGE")}
    </button>
  );
};

export default TranslationToggle;
