import { useEffect, useState } from "react";
import PlaceholderImg from "../assets/images/image-placeholder.jpg";

export const useImage = (sourceUrl) => {
    const [image, setImage] = useState(sourceUrl);

    const handleImageError = () => {
        setImage(PlaceholderImg);
    }

    useEffect(() => {
        if (sourceUrl) {
            setImage(sourceUrl);
        }
    }, [sourceUrl]);

    return { image, handleImageError };
}