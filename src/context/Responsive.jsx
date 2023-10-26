import { createContext, useEffect, useMemo, useState } from "react";

export const ContextResponsive = createContext();

export const ResponsiveContext = ({ children }) => {
    const [mobile, setMobile] = useState();

    useEffect(() => {
        function handleResize() {
            setMobile(window.innerWidth);
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const value = useMemo(
        () => {
            return {
                mobile
            }
        }, [mobile]
    );

    return (
        <ContextResponsive.Provider value={value}>
            {children}
        </ContextResponsive.Provider>
    );
}