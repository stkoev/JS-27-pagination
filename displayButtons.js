const displayButtons = (container, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${
      activeIndex === pageIndex && "active-btn"
    }" data-index="${pageIndex}">${pageIndex + 1}</button>`;
  });
  const next = '<button class="next-btn">next</button>';
  const prev = '<button class="prev-btn">prev</button>';
  container.innerHTML = [prev, ...btns, next].join("");
};

export default displayButtons;
