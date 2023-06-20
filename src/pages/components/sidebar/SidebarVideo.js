import React, { useState } from "react";
import "./css_sidebar.css";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ChatIcon from "@mui/icons-material/Chat";
// import ShareIcon from "@mui/icons-material/Share";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

function SidebarVideo({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  library.add(solidHeart, regularHeart, faCommentDots, faShare);

  function handdleLike() {
    setLiked(!liked);
  }

  return (
    <div className="sidebarVideo">
      <div className="sidebarVideo__options favorite" onClick={handdleLike}>
        {liked ? (
          <FontAwesomeIcon
            className="flipHeart"
            icon={solidHeart}
            size="2xl"
            style={{ color: "#e34a4a" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={regularHeart}
            beatFade
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        )}

        <p className="sombraSidebar">{liked ? likes + 1 : likes}</p>
      </div>

      <div className="sidebarVideo__options">
        <FontAwesomeIcon
          icon={faCommentDots}
          size="2xl"
          style={{ color: "#ffffff" }}
        />
        <p className="sombraSidebar">{messages}</p>
      </div>

      <div className="sidebarVideo__options">
        <FontAwesomeIcon
          icon={faShare}
          size="2xl"
          style={{ color: "#ffffff" }}
        />
        <p className="sombraSidebar">{shares}</p>
      </div>
    </div>
  );
}

export default SidebarVideo;
