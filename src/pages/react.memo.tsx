import React from 'react';
import { useState } from 'react';
function Root() {
	// root'a ait bir state
	const [random, setRandom] = useState<number>(0); // render4
	console.log('Root component rendered');
	return (
		<div>
			<h1>Root</h1>
			{/* <Child /> */}
			<MemoizedChild value={random} />
			<p>
				Random number: <strong>{random}</strong>
			</p>
			<button onClick={() => setRandom(Math.random() * 100)}>Generate</button>
		</div>
	);
}
type ChildProps = {
	value?: number;
};
function Child({ value }: ChildProps) {
	console.log('Child component rendered');
	return (
		<div>
			<h1>Child</h1>
			<p>[{value !== undefined ? value : 'No value provided'}]</p>
		</div>
	);
}
// memoize edilmiş referansı döndürdük.
const MemoizedChild = React.memo(Child);

function ReactMemoDemo() {
	return (
		<>
			<h2>React Memo</h2>
			<Root />
		</>
	);
}

export default ReactMemoDemo;
