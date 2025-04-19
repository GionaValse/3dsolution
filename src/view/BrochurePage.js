import { useEffect } from "react";
import styled from "styled-components";

const BrochurePageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	iframe {
		width: 100%;
		height: 550px;
		border: none;
		border-radius: 6px;
	}
`;

export default function BrochurePage() {
	useEffect(() => {
		document.title = "Brochure - 3D Solution";
	}, []);

	return (
		<BrochurePageContainer>
			<iframe src="./pdf/brochure.pdf" title="3d solution brochure" />
		</BrochurePageContainer>
	);
}
