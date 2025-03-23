function aspectRatioCalculator(width: number, height: number) {
    return width / height;
}

export function imageFit(width: number, height: number) {
    const aspectRatio = aspectRatioCalculator(width, height);

    if (aspectRatio > 1) {
        return "cover";
    } else {
        return "contain";
    }
}

export function capitalizeFirstLetter(text?: string) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
}
