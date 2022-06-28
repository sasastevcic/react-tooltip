import './App.css';
import Tooltip from './Tooltip';

function App() {
	return (
		<div className="App">
			<Tooltip
				placement="right-end"
				text="Some loong content Some loong content Some loong content Some
								loong content Some loong content Some loong content Some loong
								content Some loong content Some loong content Some loong content"
			>
				<button>Hover me!</button>
			</Tooltip>
			<div style={{ height: 20 }}></div>
			<Tooltip placement="right" text="Small text">
				<button>Hover me!</button>
			</Tooltip>
		</div>
	);
}

export default App;
