import { useEffect } from "react";
import styled from "styled-components";

const NotFoundPageContainer = styled.div``;

export default function NotFoundPage() {
	useEffect(() => {
		document.title = "404 - 3D Solution";
	}, []);

	return <NotFoundPageContainer></NotFoundPageContainer>;
}
