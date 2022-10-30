import styles from "./home.module.css";

function Home($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
        <main class="${styles.homePage}">
          메인 페이지에요.
        </main>
      `;
  };

  this.render();
}

export default Home;