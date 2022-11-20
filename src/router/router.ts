import { routes } from './routeInfo';
import NotFound from '../pages/notfound/notfound';

function Router($root: HTMLDivElement): void {
    this.$root = $root;
    this.render = (): void => {
        const { $root } = this;
        const TargetPage = findMatchedRoute()?.element || NotFound;
        new TargetPage($root);
    };
    this.navigate = (url: string): void => {
        const { render } = this;
        history.pushState(null, '', url);
        render();
    };

    const findMatchedRoute = (): { path: RegExp; element: any } =>
        routes.find((route) => route.path.test(location.pathname));
}

export default Router;