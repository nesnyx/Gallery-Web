const container = document.querySelector('.animation-scroll','.animation-scroll-2');
  const animation = container.querySelector('sl-animation');
  const box = animation.querySelector('.box');

  
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      
      animation.play = true;
    } else {
      animation.play = false;
      animation.currentTime = 0;
    }
  });
  observer.observe(box);