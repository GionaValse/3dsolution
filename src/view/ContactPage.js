import styled from "styled-components";
import { EditText, TextArea } from "../component/form/InputComponents";
import { useEffect, useRef, useState } from "react";
import { sendEmail } from "../api/EmailSenderApi";
import MaterialSymbol from "../component/MaterialSymbol";

const ContactPageContainer = styled.div`
	h2 {
		-webkit-user-select: none;
		user-select: none;
	}

	article {
		margin-top: 48px;
	}
`;

const SubmitStatus = styled.div`
	position: relative;
    display: ${(params) => params.show ? 'flex' : 'none'};
	justify-content: flex-start;
    align-items: center;
    gap: 12px;
    width: 80%;
    min-width: 200px;
	padding: 6px 12px;
    margin: 12px auto;
	border-radius: 3px;
    background: var(--color-${(params) => params.success ? 'success' : 'error'}-container);
    color: var(--color-on-${(params) => params.success ? 'success' : 'error'}-container);
`;

export default function ContactPage() {
	const [showSubmitStatus, setShowSubmitStatus] = useState(false);
	const [submitStatus, setSubmitStatus] = useState({
		success: false,
		message: "",
	});

	const submitRef = useRef(null);

	useEffect(() => {
		document.title = "Contattaci - 3D Solution";
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();
		submitRef.current.disabled = true;
		
		const form = event.target;
		const result = await sendEmail("template_5tqsajn", form);

		if (result.success) {
			form.reset();
		}

		setSubmitStatus({
			success: result.success,
			message: result.message,
		});

		setShowSubmitStatus(true);
		setTimeout(() => {
			setShowSubmitStatus(false);
		}, 5000);

		submitRef.current.disabled = false;
	}

	return (
		<ContactPageContainer>
			<h2>Contattaci</h2>
			<article>
				<p>
					Siamo pronti a dare vita alle vostre idee 3D! Compilate il
					modulo di contatto qui sotto con nome, cognome, email e una
					descrizione accurata del vostro progetto. Vi forniremo un
					preventivo personalizzato e risponderemo a tutte le vostre
					domande nel minor tempo possibile.
				</p>
			</article>
			<form onSubmit={handleSubmit}>
				<EditText
					id="name"
					placeholder="Nome e Cognome"
					required={true}
				/>
				<EditText
					id="email"
					placeholder="Email"
					type="email"
					required={true}
				/>
				<TextArea
					id="message"
					placeholder="Descrizione"
					required={true}
				/>
				<SubmitStatus
					show={showSubmitStatus}
					success={submitStatus.success}
				>
					<MaterialSymbol
						fill={true}
						symbol={submitStatus.success ? "check" : "error"}
					/>
					<span>{submitStatus.message}</span>
				</SubmitStatus>
				<button ref={submitRef} type="submit">
					Invia
				</button>
			</form>
		</ContactPageContainer>
	);
}
