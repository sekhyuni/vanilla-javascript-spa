import { routes } from './routeInfo';
import NotFound from '../pages/notfound/notfound';

function Router($root) {
    this.$root = $root;
    this.render = () => {
        const { $root } = this;
        const TargetPage = findMatchedRoute()?.element || NotFound;
        new TargetPage($root);
    };
    this.navigate = (url) => {
        const { render } = this;
        history.pushState(null, '', url);
        render();
    };

    const findMatchedRoute = () =>
        routes.find((route) => route.path.test(location.pathname));
}

export default Router;