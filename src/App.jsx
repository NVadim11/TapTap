import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header/Header.jsx';
import Cover from './components/Cover/Cover.jsx';
import Projects from './components/Projects/Projects.jsx';
import About from './components/About/About.jsx';
import Goals from './components/Goals/Goals.jsx';
import MyForm from './components/MyForm/MyForm.jsx';
import Footer from './components/Footer/Footer.jsx';
import Policy from './components/Policy/Policy.jsx'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const theme = createTheme({
	typography: {
		fontFamily: '"FMTS", "Roboto", "Helvetica", "Arial", sans-serif',
	},
});

function App() {
	useEffect(() => {
		AOS.init({
			duration: 2000,
			easing: 'ease-in-out',
			once: true,
		});
	}, []);

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<div className='wrapper'>
					<Header />
					<div className='main'>
						<Routes>
							<Route
								path='/'
								element={
									<>
										<Cover />
										<Projects />
										<About />
										<Goals />
										<MyForm />
									</>
								}
							/>
							<Route path='/policy' element={<Policy />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</ThemeProvider>
		</Router>
	);
}

export default App;
