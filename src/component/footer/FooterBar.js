import styled from "styled-components";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

const FooterBarContainer = styled.footer`
	position: relative;
	padding: 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
	background: linear-gradient(180deg, #05050c, var(--color-background));
	-webkit-user-select: none;
	user-select: none;
`;

const LogoContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;

	img {
		width: 36px;
		height: 36px;
		object-fit: contain;
	}

	span {
		font-size: 16px;
		line-height: 36px;
		font-weight: bold;
		letter-spacing: 0;
		color: rgba(from var(--color-on-background) r g b / 70%);
	}
`;

const SocialContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 24px;

	a {
		text-decoration: none;
		color: var(--color-on-background);
		transition: 0.3s;
	}

	a:hover {
		color: var(--color-tertiary);
	}

	i {
		font-size: 24px;
		font-weight: normal;
		line-height: 24px;
		letter-spacing: 0;
	}
`;

const RightContainer = styled.p`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function FooterBar() {
	return (
		<FooterBarContainer>
			<LogoContainer>
				<img src={logo} alt="Logo 3d solution" />
				<span>3D Solution</span>
			</LogoContainer>
			<SocialContainer>
				<Link to="https://www.instagram.com/3d_solution_ch?igsh=ZTB2d2Zia2xpM2F4">
					<i class="fi fi-brands-instagram"></i>
				</Link>
				<Link to="mailto:info@3dsolution.ch">
					<i class="fi fi-rr-envelope"></i>
				</Link>
			</SocialContainer>
			<RightContainer>©{new Date().getFullYear()} - 3D Solution - Tutti diritti riservati</RightContainer>
		</FooterBarContainer>
	);
}
