import Router from './src/router/router';

function App($root) {
    const { navigate, render } = new Router($root);

    document.querySelector('.navbar').addEventListener('click', function (event) { // 이벤트 위임
        const target = event.target.closest('a');
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