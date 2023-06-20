import React, { useState, useRef } from "react";
import "./css_buscaVideo.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function BuscaVideo() {
  library.add(faMagnifyingGlass, faCircleXmark, faXmark);

  const [showClearIcon, setShowClearIcon] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setShowClearIcon(inputValue.length > 0);
  };

  const handleClearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setShowClearIcon(false);
    }
  };

  return (
    <div className="container__input">
      <input
        ref={inputRef}
        type="text"
        className="input__text"
        placeholder="Encontrar conteúdo relacionado"
        onChange={handleInputChange}
      />
      {showClearIcon && (
        <FontAwesomeIcon
          icon={faXmark}
          size="sm"
          className="input__clear"
          onClick={handleClearInput}
        />
      )}

      <a href="#" className="input__search">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </a>
    </div>
  );
}

export default BuscaVideo;
