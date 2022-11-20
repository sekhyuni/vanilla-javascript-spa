import styles from "./join.module.css";

function Join($root) {
  this.$root = $root;

  this.render = () => {
    this.$root.innerHTML = `
        <main class="${styles.joinPage}">
          회원가입 페이지에요.
        </main>
      `;
  };

  this.render();
}

export default Join;