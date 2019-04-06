export default function stickyHeader() {
  const header = document.querySelector(".header-wrapper");

  let sticky = header.offsetTop;
  window.onscroll = () => {
    window.pageYOffset >= sticky
      ? header.classList.add("header--sticky")
      : header.classList.remove("header--sticky");
  };
}
