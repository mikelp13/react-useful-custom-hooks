import {useEffect, useState} from "react";

const useHover = (ref) => {
    const [isHovering, setHovering] = useState(false);

    const on = () => setHovering(true);
    const off = () => setHovering(false);

    useEffect(() => {
        if (!ref.current) {
            return;
        }
        const node = ref.current; //div

        node.addEventListener('mouseenter', on)
        node.addEventListener('mousemove', on)
        node.addEventListener('mouseleave', off)

        return function () {
            node.removeEventListener('mouseenter', on)
            node.removeEventListener('mousemove', on)
            node.removeEventListener('mouseleave', off)
        };
        // eslint-disable-next-line
    }, [])

    return isHovering;
};

export default useHover
