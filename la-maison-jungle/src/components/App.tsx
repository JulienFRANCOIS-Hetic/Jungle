import React from "react";
import Banner from "./Banner.tsx";
import logo from '../img/leaf+1.png'
import Cart from "./Cart.tsx";
import ShoppingList from "./ShoppingList.tsx";
import Footer from "./Footer.tsx";
import '../assets/Layout.css'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart />
				<ShoppingList />
			</div>
			<Footer />
		</div>
	)
}

export default App;
