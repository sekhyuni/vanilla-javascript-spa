import Router from './src/router/router';

function App($root: HTMLDivElement): void {
    const { navigate, render } = new Router($root);

    document.querySelector('.navbar')?.addEventListener('click', function (event): void { // 이벤트 위임
        const target = event.target as HTMLAnchorElement
        if (!(target instanceof HTMLAnchorElement)) {
            return;
        }

        event.preventDefault();

        navigate(target.href);
    });
    window.addEventListener('popstate', render);

    render();
}

export default App;