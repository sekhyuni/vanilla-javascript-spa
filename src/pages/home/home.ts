import styles from './home.module.css';

function Home($root: HTMLDivElement): void {
  this.$root = $root;

  this.render = (): void => {
    this.$root.innerHTML = `
        <main class="${styles.homePage}">
          메인 페이지에요.
        </main>
      `;
  };

  this.render();
}

export default Home;