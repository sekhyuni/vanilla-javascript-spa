import styles from "./notfound.module.css";

function NotFound($root) {
  this.$root = $root;

  this.render = () => {
    this.$root.innerHTML = `
        <main class="${styles.notfoundPage}">
          알 수 없는 페이지에요.
        </main>
      `;
  };

  this.render();
}

export default NotFound;