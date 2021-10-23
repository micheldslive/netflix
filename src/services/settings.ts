export const settings = {
  slidesToShow: 5,
  slidesToScroll: 5,
  swipeToSlide: true,
  focusOnSelect: false,

  responsive: [
    {
      breakpoint: 1180, // aqui define até que largura será as configs abaixo
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 799, // aqui define até que largura será as configs abaixo
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 499, // aqui define até que largura será as configs abaixo
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
