import React, { useEffect } from 'react';
import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header/Header.jsx';
import Cover from './components/Cover/Cover.jsx';
import Projects from './components/Projects/Projects.jsx';
import About from './components/About/About.jsx';
import Goals from './components/Goals/Goals.jsx';
import MyForm from './components/MyForm/MyForm.jsx';
import Footer from './components/Footer/Footer.jsx';
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
		<ThemeProvider theme={theme}>
			<div className='wrapper'>
				<Header />
				<div className='main'>
					<Cover />
					<Projects />
					<About />
					<Goals />
					<MyForm />
				</div>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
