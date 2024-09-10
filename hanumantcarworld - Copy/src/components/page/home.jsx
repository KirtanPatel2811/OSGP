import React, { useEffect, useRef } from "react";
import Video from "../Video/Cinematic Car Videos- Download 1,824+ Free 4K & HD Stock Footage Clips.mp4";
import "../../styles/Home.css";

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleCanPlay = () => {
      if (videoElement) {
        videoElement.muted = true; // Ensure the video is muted to allow autoplay
        videoElement.play().catch((error) => {
          console.error("Error attempting to play the video:", error);
        });
      }
    };

    if (videoElement) {
      videoElement.addEventListener("canplay", handleCanPlay);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("canplay", handleCanPlay);
      }
    };
  }, []);

  return (
    <div className="App">
      <div className="video-container">
        <video ref={videoRef} className="background-video" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>
      </div>
      <div className="content">
        <h1>1500+ Happy Customers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          convallis pellentesque metus id lacinia.
        </p>
        <button className="button">BUTTON</button>
      </div>
    </div>
  );
}

export default Home;
