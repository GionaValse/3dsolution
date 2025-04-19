import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import HeaderBar from './component/header/HeaderBar';
import FooterBar from './component/footer/FooterBar';
import HomePage from './view/HomePage';
import ContactPage from './view/ContactPage';
import BrochurePage from './view/BrochurePage';
import NotFoundPage from './view/NotFoundPage';

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutComponent />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "contatti",
				element: <ContactPage />,
			},
			{
				path: "brochure",
				element: <BrochurePage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);

function LayoutComponent() {
	return (
		<>
			<HeaderBar />
			<main>
				<Outlet />
			</main>
			<FooterBar />
		</>
	);
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
