import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import VideoFooter from "./components/footer/VideoFooter";
import SidebarVideo from "./components/sidebar/SidebarVideo";
import BuscaVideo from "./components/header/BuscaVideo";

function Video({ likes, messages, shares, name, description, music, url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  useEffect(() => {
    function handleScroll() {
      if (play) {
        videoRef.current.pause();
        setPlay(false);
        console.log("Video paused");
      }
    }

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [play]);

  // window.onwheel = function () {
  //   if (play) {
  //     videoRef.current.pause();
  //     setPlay(false);
  //     console.log("ok 1");
  //   }
  // };

  return (
    <div className="video">
      <BuscaVideo />
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <SidebarVideo likes={likes} messages={messages} shares={shares} />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  );
}

export default Video;
