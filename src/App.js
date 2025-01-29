import React, { useEffect, useState } from "react";
import "./App.css";
import NotificationIcon from "./notification";
import HomeNotification from "./HomeNotfication"; // Corrected typo: HomeNotfication -> HomeNotification
import Navbar from "./Tabs";
import ProfileIcon from "./ProfileIcon";
import Stepper from "./Stteper";
import KmlGenerator from "./kmlGenerator";
import Googlebar from "./Goglebar";

export default function App() {
    const [animation, setAnimation] = useState(false);
    const [router, setRouter] = useState(0);
    const [pages, setPages] = useState(null); // Initialize pages to null

    useEffect(() => {
        if (animation) {
            const timer = setTimeout(() => {
                setAnimation(false);
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [animation]);

    const handleRoute = () => {
      if(router <=6) {
        setRouter(prevRouter => prevRouter + 1);
       } // Use functional update for router
    };
     const handlePrevRoute = () => {
      if(router >0) {
        setRouter(prevRouter => prevRouter -1);
       } // Use functional update for router
    };

    useEffect(() => {
        switch (router) {
            case 1:
                setPages(<HomeNotification />); // Use JSX directly
                break; // Add break statements
            case 2:
                setPages(<Navbar />);
                break;
            case 3:
                setPages(<ProfileIcon />);
                break;
            case 4:
                setPages(<Stepper />);
                break;
            case 5:
                setPages(<KmlGenerator />);
                break;
            case 6:
                setPages(<NotificationIcon />);
                break;
            case 7:
                setPages(<Googlebar />);
                break;
            default: // Use default instead of case 0
                setPages(
                    <div className="main-logo">
                        <div>Click the icon to see the effect or use the buttons below to navigate:</div>
                        <div className={`container  ${animation ? "animatecon" : ""}`}>
                            <div className={`circle ${animation ? "animate" : ""}`}></div>
                            <div
                                className={`icon ${animation ? "animate-icon" : "animate-reversed"}`}
                                onClick={() => setAnimation(true)}
                            >
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"
                                        fill="white "
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                );
        }
    }, [router, animation]); // Add animation to dependency array

    return (
        <div>
            {pages} {/* Render pages */}
            <div className="navigation-buttons">
            
                <button onClick={handlePrevRoute} className="button-nav right-button">Go to Previous Route</button> {/* Changed button text */}
                <button onClick={handleRoute} className="button-nav">Go to Next Route</button> {/* Changed button text */}
            </div>
        </div>
    );
}