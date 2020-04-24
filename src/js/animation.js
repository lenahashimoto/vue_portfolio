function titleAnimation() {
    window.onload = () => {
    const animationClass = document.querySelectorAll('.title-animation');
    animationClass.classList.toggle('inview');
  };
}

export { titleAnimation }