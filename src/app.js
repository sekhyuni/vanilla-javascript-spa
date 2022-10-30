import { navigate } from "./utils/navigate";
import { BASE_URL } from "./router/routeInfo";
import Router from "./router/router";

function App($container) {
    this.$container = $container;

    const init = () => {
        document.querySelector('.navbar').addEventListener('click', function (event) {
            const target = event.target.closest('a');
            if (!(target instanceof HTMLAnchorElement)) {
                return;
            }

            event.preventDefault();
            const targetURL = event.target.href.replace(BASE_URL, '');
            navigate(targetURL);
        });

        new Router($container);
    };

    init();
}

export default App;