import { MOCKED_CONTENT_RESPONSE } from "../assets/content";


const getHomePageContent = () => {
    setTimeout(() => {
        return MOCKED_CONTENT_RESPONSE;
    }, 500);
}

export const Api = {
    getHomePageContent
}