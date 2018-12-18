let ready = false;

if (ready != true) {
  $(".loading-overlay").css({
    visibility: "hidden",
    opacity: "0",
    transition: "all .5s ease .2s"
  });
}

$(document).ready(function() {
  ready = true;

  /*----------- new timelines -----------*/

  /*----------- Letterings -----------*/

  $(".display-1").lettering();
  $(".display-1")
    .next()
    .lettering();
  $("h3").lettering();

  /*----------- Constants -----------*/
  const headerDisplay = $(".header_display");
  const headerSibling = $(".header_display").next();
  const iphone = $(".iphone");
  const h3 = $("h3");
  const h3Span = $("h3>span");
  // eslint-disable-next-line
  const sectionOfferCard = $(".section-offer>.container>.row>.col-xl-6");
  const gridItem = $(".section-grid>.grid>.item");
  const headerCar = $(
    ".section-car>.container>.row>.col-xl-6>.wrapper>.display-1"
  );
  // controller
  const controller = new ScrollMagic.Controller();
  // header on load

  const tl = new TimelineLite();

  tl.staggerFromTo(
    $(".header_display")[0].children,
    0.2,
    {autoAlpha: 0, delay: 2, ease: Power1.ease},
    {autoAlpha: 1},
    0.05
  );
  tl.add("stagger", "+=0.3");
  tl.fromTo(
    iphone,
    1,
    {autoAlpha: 0, ease: Power4.ease},
    {autoAlpha: 1, ease: Power3.ease},
    "stagger"
  );
  tl.fromTo(
    headerSibling[0],
    0.4,
    {autoAlpha: 0, ease: Power4.ease},
    {autoAlpha: 1, ease: Power3.ease},
    "stagger"
  );

  // h3 animation

  h3.each(function(i, item) {
    const tlSec = new TimelineLite();

    tlSec.staggerFromTo(
      $(this)[0].children,
      0.4,
      {autoAlpha: 0, ease: Power1.ease},
      {autoAlpha: 1},
      0.05
    );

    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: false
      // duration: "100%"
    })
      .setTween(tlSec)

      .addTo(controller);
  });

  // section offer animation

  const tlThird = new TimelineLite();

  tlThird.staggerFromTo(
    sectionOfferCard,
    0.4,
    {autoAlpha: 0},
    {autoAlpha: 1},
    0.5
  );

  new ScrollMagic.Scene({
    triggerElement: $(".section-offer")[0],
    triggerHook: 0.6,
    reverse: false
    // duration: "100%"
  })
    .setTween(tlThird)

    .addTo(controller);

  // Grid animation

  const tlFourth = new TimelineLite();

  tlFourth.staggerFromTo(
    gridItem,
    1.5,
    {autoAlpha: 0, ease: Power3.ease},
    {autoAlpha: 1, ease: Power3.ease},
    0.16
  );

  new ScrollMagic.Scene({
    triggerElement: $(".section-grid")[0],
    triggerHook: 0.8
    // reverse: false
    // duration: "100%"
  })
    .setTween(tlFourth)

    .addTo(controller);

  // Section Car animation

  const tlFifth = new TimelineLite();

  tlFifth.staggerFromTo(
    headerCar[0].children,
    0.2,
    {autoAlpha: 0, ease: Power1.ease},
    {autoAlpha: 1},
    0.05
  );
  tlFifth.add("stage", "-=2");
  tlFifth.fromTo(
    headerCar.next(),
    0.4,
    {autoAlpha: 0, ease: Power3.ease},
    {autoAlpha: 1},
    "stage"
  );
  tlFifth.fromTo(
    headerCar.next().next(),
    0.4,
    {autoAlpha: 0, ease: Power3.ease},
    {autoAlpha: 1},
    "stage"
  );

  new ScrollMagic.Scene({
    triggerElement: $(".section-car")[0],
    triggerHook: 1,
    reverse: false
  })
    .setTween(tlFifth)

    .addTo(controller);
});
