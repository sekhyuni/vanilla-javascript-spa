import styles from "./notfound.module.css";

function NotFound($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
        <main class="${styles.notfoundPage}">
          알 수 없는 페이지에요.
        </main>
      `;
  };

  this.render();
}

export default NotFound;