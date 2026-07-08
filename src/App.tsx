import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import accessDenied from './assets/access_denied.svg';
import addCircle from './assets/add-circle.svg';
import bagReco from './assets/bag_reco.svg';
import bikerBag from './assets/biker_bag.svg';
import block from './assets/block.svg';
import boxClosed from './assets/box-closed.svg';
import box from './assets/box.svg';
import cancelled from './assets/cancelled.svg';
import carton from './assets/carton.svg';
import cash from './assets/cash.svg';
import checkCircleOutline from './assets/check_circle_outline.svg';
import checked from './assets/checked.svg';
import close from './assets/close.svg';
import csvFile from './assets/csv-file.svg';
import deleteIcon from './assets/delete.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const assets = [
		{ name: 'Access Denied', src: accessDenied },
		{ name: 'Add Circle', src: addCircle },
		{ name: 'Bag Reco', src: bagReco },
		{ name: 'Biker Bag', src: bikerBag },
		{ name: 'Block', src: block },
		{ name: 'Box Closed', src: boxClosed },
		{ name: 'Box', src: box },
		{ name: 'Cancelled', src: cancelled },
		{ name: 'Carton', src: carton },
		{ name: 'Cash', src: cash },
		{ name: 'Check Circle Outline', src: checkCircleOutline },
		{ name: 'Checked', src: checked },
		{ name: 'Close', src: close },
		{ name: 'CSV File', src: csvFile },
		{ name: 'Delete', src: deleteIcon },
		{ name: 'React', src: reactLogo },
		{ name: 'Vite', src: viteLogo },
	];

	return (
		<>
			<h1>Welcome to the App!</h1>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>

			<div className="assets-container">
				<h1>Asset Gallery</h1>
				<div className="assets-grid">
					{assets.map(asset => (
						<div key={asset.name} className="asset-item">
							<img src={asset.src} alt={asset.name} />
							<p>{asset.name}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
