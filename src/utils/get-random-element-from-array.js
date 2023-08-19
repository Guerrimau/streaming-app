
export const getRandomItemFromArray = (array) => {
    if (array.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    return randomElement;
}