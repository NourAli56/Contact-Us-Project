export const settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1285,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 961,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

    ]
};