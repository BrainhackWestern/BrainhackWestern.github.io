import { Component, useEffect } from "react";
import useScreenSize from "../../services/screen-size/use";

export const Responsive = () => {
    const { actions: { setLargeScreen } } = useScreenSize();

    const handleResize = () => {
        setLargeScreen(window.innerWidth >= 992 ? true : false)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize);

        return function cleanup() {
            window.removeEventListener('resize', handleResize);
        }
    })

    return <></>
}