import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import MaterialSymbol from "../MaterialSymbol";

const NavigationBarContainer = styled.nav`
	position: relative;
`;

const NavigationRouteContainer = styled.div`
	display: flex;
	gap: 12px;
	transition: 0.3s;

	@media screen and (max-width: 400px) {
		position: absolute;
		flex-direction: column;
		gap: 2px;
		top: 125%;
		right: 0;
		width: 150px;
		max-height: ${(params) => params.isopen ? '124px' : '0px'};
		background: var(--color-surface-container-high);
		border-radius: 6px;
		overflow: hidden;
		z-index: 1;
	}
`;

const NavigationRouteContent = styled(Link)`
	display: flex;
	align-items: center;
	width: 150px;
	height: 36px;
	padding: 8px 16px;
	border-radius: 18px;
	border: 1px solid var(--color-outline);
	text-decoration: none;
	color: var(
		${(params) =>
			params.active ? "--color-on-secondary" : "--color-on-background"}
	);
	background: ${(params) =>
		params.active ? "var(--color-secondary)" : "transparent"};
	transition: 0.3s;

	&:hover {
		background: var(--color-surface-container-highest);
	}

	span:nth-child(2) {
		font-size: 16px;
		line-height: 24px;
		font-weight: ${(params) => (params.active ? "bold" : "normal")};
		letter-spacing: 0;
		margin: 0 auto;
	}

	@media screen and (max-width: 768px) {
		width: 64px;
		justify-content: center;

		span:nth-child(2) {
			display: none;
		}
	}

	@media screen and (max-width: 400px) {
		width: 100%;
		justify-content: flex-start;
		border: none;
		border-radius: 2px;

		span:nth-child(2) {
			display: block;
		}
	}
`;

const HamburgerButton = styled.div`
	display: none;
	width: 24px;
	height: 24px;
	margin: auto 0;

	#hamburger-checkbox {
		display: none;
	}

	.toggle {
		position: relative;
		width: 24px;
		height: 24px;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 6px;
		transition-duration: 0.3s;
	}

	.bars {
		width: 100%;
		height: 4px;
		background-color: var(--color-primary);
		border-radius: 4px;
	}

	#bar2 {
		transition-duration: 0.8s;
	}

	#bar1,
	#bar3 {
		width: 70%;
	}

	#hamburger-checkbox:checked + .toggle .bars {
		position: absolute;
		transition-duration: 0.5s;
	}

	#hamburger-checkbox:checked + .toggle #bar2 {
		transform: scaleX(0);
		transition-duration: 0.5s;
	}

	#hamburger-checkbox:checked + .toggle #bar1 {
		width: 100%;
		transform: rotate(45deg);
		transition-duration: 0.5s;
	}

	#hamburger-checkbox:checked + .toggle #bar3 {
		width: 100%;
		transform: rotate(-45deg);
		transition-duration: 0.5s;
	}

	#hamburger-checkbox:checked + .toggle {
		transition-duration: 0.5s;
		transform: rotate(180deg);
	}

	@media screen and (max-width: 400px) {
		display: block;
	}
`;

export default function NavigationBar() {
	const location = useLocation();
	const [currentPage, setCurrentPage] = useState("/");
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		console.log(location.pathname);
		setCurrentPage(location.pathname);
	}, [location.pathname]);

	const handleOnCheckChange = (e) => setIsOpen(e.target.checked);

	return (
		<NavigationBarContainer>
			<HamburgerButton>
				<div>
					<input type="checkbox" id="hamburger-checkbox" onChange={handleOnCheckChange} />
					<label htmlFor="hamburger-checkbox" className="toggle">
						<div className="bars" id="bar1" />
						<div className="bars" id="bar2" />
						<div className="bars" id="bar3" />
					</label>
				</div>
			</HamburgerButton>
			<NavigationRouteContainer isopen={isOpen}>
				<NavigationRouteContent to="/" active={currentPage === "/"}>
					<MaterialSymbol symbol="home" fill={currentPage === "/"} />
					<span>Home</span>
				</NavigationRouteContent>
				<NavigationRouteContent
					to="/contatti"
					active={currentPage === "/contatti"}
				>
					<MaterialSymbol
						symbol="alternate_email"
						fill={currentPage === "/contatti"}
					/>
					<span>Contatti</span>
				</NavigationRouteContent>
				<NavigationRouteContent
					to="/brochure"
					active={currentPage === "/brochure"}
				>
					<MaterialSymbol
						symbol="description"
						fill={currentPage === "/brochure"}
					/>
					<span>Brochure</span>
				</NavigationRouteContent>
			</NavigationRouteContainer>
		</NavigationBarContainer>
	);
}
