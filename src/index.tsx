import { h, render } from 'preact';

const App = () => (
    <h1>Hello from Preact and Typescript!</h1>
);

render(<App />, document.getElementById('root'));