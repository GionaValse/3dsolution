import styled from "styled-components";
import logo from "../../logo.svg";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";

const HeaderBarContainer = styled.header`
	position: sticky;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 80px;
	padding: 12px 24px;
	background: var(--color-background);
	box-shadow: 0 3px 6px var(--color-shadow);
	z-index: 24;
`;

const LogoContent = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: var(--color-on-background);
    -webkit-user-select: none;
    user-select: none;

    img {
        width: 36px;
        height: 36px;
        object-fit: contain;
    }

    h1 {
        color: rgba(from var(--color-on-background) r g b / 70%);
    }

	@media screen and (max-width: 768px) {
		h1 {
			display: none;
		}
	}
`;

export default function HeaderBar() {
	return (
		<HeaderBarContainer>
			<LogoContent to="/">
				<img src={logo} alt="Logo 3d solution" />
				<h1>3D solution</h1>
			</LogoContent>
			<NavigationBar />
		</HeaderBarContainer>
	);
}
