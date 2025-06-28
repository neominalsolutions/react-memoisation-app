import React, { useCallback } from 'react';

// Not: Eğer bir child component içerisinde bir function prop varsa ve bu function prop her renderda yeni bir referans alır, bu child component her renderda yeniden render edilir.

function Root() {
	const [randomNumber, setRandomNumber] = React.useState(0);
	console.log('Root component rendered');

	const onItemClick = useCallback(() => {
		console.log('Item clicked');
	}, []);

	return (
		<>
			<MemoizedChild
				// onItemClick={() => console.log('Item clicked')}
				// onItemClick={useCallback(() => console.log('Item clicked'), [])}
				onItemClick={onItemClick}
			/>
			<button
				onClick={() => {
					setRandomNumber(Math.random());
					console.log('Random Number:', randomNumber);
				}}
			>
				Generate Random Number
			</button>
		</>
	);
}

// Not:Child Component içinde bir function propsu Root componentten referans verecek ise bu durumda useCallback hook kullanarak gereksiz renderları önleyebiliriz.

type ChildProps = {
	onItemClick?: () => void;
};
function Child({ onItemClick }: ChildProps) {
	console.log('Child component rendered');
	return (
		<>
			<button onClick={onItemClick}>Click Me</button>
		</>
	);
}

const MemoizedChild = React.memo(Child);

function ReactUseCallbackDemo() {
	return (
		<>
			<h2> React UseCallbackDemo</h2>
			<div>
				<Root />
			</div>
		</>
	);
}

export default ReactUseCallbackDemo;
