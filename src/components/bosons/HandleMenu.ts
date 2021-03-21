export default function handleMobileMenu() {
  const menu = document.querySelector<HTMLInputElement>(".mobile-menu");
  if (menu) {
    if (menu.style.left == "" || menu.style.left == "100%") {
      menu.style.left = "0";
    } else {
      menu.style.left = "100%";
    }
  }
}
