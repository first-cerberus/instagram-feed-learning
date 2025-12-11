import { useState, useEffect } from "react";

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollY = 0;
        const delayInPx = 75;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            
            if (Math.abs(scrollY - lastScrollY) < delayInPx) {
                return;
            }

            const direction = scrollY > lastScrollY ? "down" : "up";
        
            setScrollDirection(direction);

            lastScrollY = scrollY;
        };

        window.addEventListener("scroll", updateScrollDirection);
        
        return () => window.removeEventListener("scroll", updateScrollDirection);
    }, []);

    return scrollDirection;
};

export default useScrollDirection;