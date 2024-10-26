const observer = new IntersectionObserver((item) => {
   item.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add('animation');
      }
   });
});

const targets = document.querySelectorAll('.anim-item');
targets.forEach((target) => observer.observe(target));
