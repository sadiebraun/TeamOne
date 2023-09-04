import React from "react";

const TranslationToggle = ({ t }) => (
  <button
    style={{
      position: "absolute",
      top: "1em",
      right: "0em",
      width: 150
    }}
    onClick={() => t.setLanguage(t.getLanguage() === "jp" ? "en" : "jp")}
  >
    {t("SET_LANGUAGE")}
  </button>
);

export default TranslationToggle;
