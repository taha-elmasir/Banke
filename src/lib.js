export const scroll = (e) => {
  e.preventDefault();

  if (e.target.hasAttribute("href")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};

export const reveal = (ref, margin) => {
  const show = ([entry], observer) => {
    entry.isIntersecting && ref.current.classList.remove("hidden");
    entry.isIntersecting && observer.unobserve(entry.target);
  };

  const options = {
    root: null,
    threshold: 0.15,
    rootMargin: margin,
  };

  const observer = new IntersectionObserver(show, options);
  observer.observe(ref.current);
};
