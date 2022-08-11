export default class customGlide {
  constructor(slide) {
    this.slide = document.querySelector(slide);
  }

  glideStart() {
    const gt = this.slide.dataset.glide;

    new Glide(this.slide, {
      autoplay: gt === 1 ? 5000 : gt === 2 ? 8000 : '',
      type: 'carousel',
      hoverPause: true,
      startAt: 0,
      perView: 3,
      breakpoints:
        gt === 1
          ? {
              768: {
                perView: 2,
              },
              425: {
                perView: 1,
              },
            }
          : gt == 2
          ? {
              1280: {
                perView: 2,
              },
              896: {
                perView: 1,
              },
            }
          : {},
    }).mount();
  }

  static renderBullets() {
    let bullets = 0;
    document.querySelectorAll('.glide__slide').forEach(() => {
      const bullet = document.createElement('button');
      bullet.className = 'glide__bullet';
      bullet.setAttribute('data-glide-dir', `=${bullets}`);

      document.querySelector('.glide__bullets').appendChild(bullet);
      bullets += 1;
    });
  }

  init() {
    if (this.slide) {
      this.glideStart();
    }
  }
}
