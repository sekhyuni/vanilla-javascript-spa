import styles from './join.module.css';

function Join($root: HTMLDivElement): void {
  this.$root = $root;

  this.render = (): void => {
    this.$root.innerHTML = `
        <main class="${styles.joinPage}">
          회원가입 페이지에요.
        </main>
      `;
  };

  this.render();
}

export default Join;