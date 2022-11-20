import Home from '../pages/home/home';
import Join from '../pages/join/join';

export const BASE_URL = 'http://localhost:8080';

export const routes = [
    { path: /^\/$/, element: Home },
    { path: /^\/join$/, element: Join },
];