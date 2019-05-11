import { h, render } from 'preact';
import './styles.scss';

const App = () => (
    <h1>Hello from Preact and Typescript!</h1>
);

render(<App />, document.getElementById('root'));