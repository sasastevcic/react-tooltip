import './App.css';
import { StyledButton } from './App.styles';
import Tooltip from './Tooltip';
import { TooltipType } from './Tooltip/Tooltip.data';

function App() {
	return (
		<div className="App" style={{ backgroundImage: 'url("/background.jpg")' }}>
			<Tooltip text="Small text">
				<StyledButton $buttonTheme={TooltipType.Default}>Default</StyledButton>
			</Tooltip>
			<div style={{ height: 20 }}></div>
			<Tooltip
				type={TooltipType.Success}
				placement="left-end"
				text="Some loong content Some loong content Some loong content Some
								loong content Some loong content Some loong content Some loong
								content Some loong content Some loong content Some loong content"
			>
				<StyledButton $buttonTheme={TooltipType.Success}>Success</StyledButton>
			</Tooltip>
			<div style={{ height: 20 }}></div>
			<Tooltip
				type={TooltipType.Error}
				placement="right"
				text="Some error message"
			>
				<StyledButton $buttonTheme={TooltipType.Error}>Error</StyledButton>
			</Tooltip>
		</div>
	);
}

export default App;
