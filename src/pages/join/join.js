import styles from "./join.module.css";

function Join($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
        <main class="${styles.joinPage}">
          회원가입 페이지에요.
        </main>
      `;
  };

  this.render();
}

export default Join;