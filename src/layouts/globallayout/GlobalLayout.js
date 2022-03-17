import React, { Fragment } from "react";
import Header from "../header/Header";
// import Footer from "../../layouts/footer/Footer";
import "./GlobalLayout.css";
import VerticalNavBar from "../../components/verticalnavbar/VerticalNavbar";
import PropTypes from "prop-types";
/**
 * Component for handling global Layout
 *
 * @component
 */
function GlobalLayout(props) {
	return (
		<Fragment>
			<section className="globallayout">
				<Header></Header>
				<main>
					<aside>
						<VerticalNavBar></VerticalNavBar>
						<div className="copyright"><p>	Copyright, SportSee 2020</p></div>
					</aside>
					<section className="content">{props.children}</section>
				</main>
			</section>
		</Fragment>
	);
}

GlobalLayout.propTypes = {
	/**
	 * Html node to display as a child
	 */
  children: PropTypes.node.isRequired,
}

export default GlobalLayout;
