import React, { useState } from "react";

export default function LanguageSelect() {
  // State to manage dropdown visibility

  // State to manage the selected language
  const [selectedLanguage, setSelectedLanguage] = useState("En");

  // Toggle dropdown visibility

  // Handle language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <li className="languageSelect">
      <a href="#" className="mn-has-sub opacity-1">
        {selectedLanguage} <i className={`mi-chevron-down`} />
      </a>

      <ul className="mn-sub to-left">
        <li>
          <a href="#" onClick={() => handleLanguageSelect("En")}>
            English
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleLanguageSelect("Fr")}>
            French
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleLanguageSelect("De")}>
            German
          </a>
        </li>
      </ul>
    </li>
  );
}
