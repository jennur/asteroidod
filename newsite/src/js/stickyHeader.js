export default function stickyHeader() {
  const header = document.querySelector(".header-wrapper");
  console.log(header);

  let sticky = header.offsetTop + 200;

  window.onscroll = () => {
    window.pageYOffset > sticky
      ? header.classList.add("header--sticky")
      : header.classList.remove("header--sticky");
  };
}
