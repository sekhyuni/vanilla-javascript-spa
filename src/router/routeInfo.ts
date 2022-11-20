import Home from '../pages/home/home';
import Join from '../pages/join/join';

export const BASE_URL: string = 'http://localhost:8080';

export const routes: { path: RegExp; element: any }[] = [
    { path: /^\/$/, element: Home },
    { path: /^\/join$/, element: Join },
];