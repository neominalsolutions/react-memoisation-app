/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';

function Root() {
	const [boy, setBoy] = React.useState<number>(1); // render4
	const [kilo, setKilo] = React.useState<number>(1); // render4

	//Not: setSelectIndex değpişimlerinden dolayı render tetikleniyor.
	// Bu nedenle useMemo kullanımı burada mantıklı değil.
	// calculateVKI bir daha hesaplanıyor.

	// VKI boy veya kilo değiştiğinde yeniden hesaplanması gerekiyor.
	// Yani yeniden render almak için sadece boy ve kilo state değişmeli.

	const [, setSelectIndex] = React.useState<number>(0); // 0 VKI, 1 Yağ Oranı

	// const calculateVKI = () => {
	// 	console.log('calculateVKI called');
	// 	return boy / (kilo * kilo);
	// };

	const calculateVKI = () => {
		console.log('calculateVKI called');

		const index = kilo / (boy * boy);

		console.log('VKI hesaplandı:', index);

		if (isNaN(index)) return 0;

		return index.toFixed(2); // 2 ondalık basamakla göster
	};

	// boy ve kilo değişene kadar calculateVKI değeri değişmeyecek. memoization yapıldı.
	const VKI = useMemo(() => calculateVKI(), [boy, kilo]);
	// const VKI = calculateVKI(); // eski versiyon

	return (
		<>
			<label>VKI</label>
			<input type="checkbox" onChange={() => setSelectIndex(0)} />

			<label>Yağ Oranı</label>
			<input type="checkbox" onChange={() => setSelectIndex(1)} />

			<hr></hr>

			<input
				type="text"
				placeholder="Boy"
				defaultValue={boy}
				onChange={(e: any) => setBoy(Number(e.target?.value || 0))}
			/>
			<br></br>
			<input
				type="text"
				placeholder="Kilo"
				defaultValue={kilo}
				onChange={(e: any) => setKilo(Number(e.target?.value || 0))}
			/>

			<p>
				VKI: <strong>{VKI}</strong>
			</p>
		</>
	);
}

function ReactUseMemoDemo() {
	return (
		<>
			<h2> React UseMemoDemo</h2>

			<Root />
		</>
	);
}

export default ReactUseMemoDemo;
