import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/home.tsx';

// import ReactMemoDemo from './pages/react.memo.tsx';
// import ReactUseCallbackDemo from './pages/usecallback.demo.tsx';
// import ReactUseMemoDemo from './pages/usememo.demo.tsx';

const ReactMemoDemo = React.lazy(() => import('./pages/react.memo.tsx'));
const ReactUseMemoDemo = React.lazy(() => import('./pages/usememo.demo.tsx'));
const ReactUseCallbackDemo = React.lazy(
	() => import('./pages/usecallback.demo.tsx')
);

// import şeklimizi değiştirerek kodları farklı js dosyalarına ayırdık.
// code splitting tekniği
// react lazy ile dinamik import yaparak kodları parçalara ayırabiliriz.

const router = createBrowserRouter([
	{
		index: true,
		Component: HomePage,
	},
	{
		path: 'react-memo',
		Component: ReactMemoDemo,
	},
	{
		path: 'use-memo',
		Component: ReactUseMemoDemo,
	},
	{
		path: 'use-callback',
		Component: ReactUseCallbackDemo,
	},
]);

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);
