import { createRoot } from 'react-dom/client';
import {
	createBrowserRouter,
	Link,
	Outlet,
	RouterProvider,
} from 'react-router';

import ReactMemoDemo from './pages/react.memo.tsx';
import ReactUseCallbackDemo from './pages/usecallback.demo.tsx';
import ReactUseMemoDemo from './pages/usememo.demo.tsx';

const router = createBrowserRouter([
	{
		path: '',
		element: (
			<div>
				<Link style={{ padding: 5 }} to="/react-memo">
					react-memo
				</Link>
				<Link style={{ padding: 5 }} to="/use-memo">
					use-memo
				</Link>
				<Link style={{ padding: 5 }} to="/use-callback">
					use-callback
				</Link>
			</div>
		),
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
