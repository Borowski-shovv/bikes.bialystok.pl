const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
// const navLinks = document.querySelectorAll('.navigation a');

// navLinks.forEach((link, index) => {
//   link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
// });

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
});

var myFullpage = new fullpage('#fullpage', {
  anchors: ['start', 'oferta', 'cennik', 'kontakt'],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Start', 'Oferta', 'Cennik', 'Kontakt'],
  menu: '#menu',
  responsiveWidth: 1100,
  onLeave: function (origin, destination, direction) {
    var loadedSection = this;
    if (origin.index == 0) {
      $('#menu').addClass('attached');
    }

    if (destination.index == 0) {
      $('#menu').removeClass('attached');
    }

    // const section = destination.item;
    // const title = section.querySelector('h1');
    // const tl = new TimelineMax({ delay: 0.5 });
    // const description = document.querySelector('.text');
    // const motoImg = document.querySelector('.r1-wrapper');
    // tl.fromTo(
    //   [title, description, motoImg],
    //   0.5,
    //   { y: '50', opacity: 0 },
    //   { y: 0, opacity: 1 }
    // );
  },
});
