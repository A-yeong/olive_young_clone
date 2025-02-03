export function setupSlider(
    slidesLengh: number,
    getIndex: () => number,
    setIndex: (index: number) => void
) {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    let isPlaying = true;

    const nextSlide = () => {
        setIndex((getIndex() + 1) % slidesLengh);
    };

    const prevSlide = () => {
        setIndex((getIndex() - 1 + slidesLengh) % slidesLengh);
    };

    const startAutoSlide = () => {
        if(!intervalId) {
            intervalId = setInterval(nextSlide, 50000);
        }
    };

    const stopAutoSlide = () => {
        if(intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    };

    const toggleAutoSlide = () => {
        isPlaying = !isPlaying;
        if(isPlaying) {
            startAutoSlide();
        } else {
            stopAutoSlide();
        }
    };

    return {nextSlide, prevSlide, startAutoSlide, stopAutoSlide, toggleAutoSlide};
}