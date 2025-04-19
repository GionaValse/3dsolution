import React, { forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
	position: relative;
	margin: 24px auto;
	width: 80%;
	min-width: 200px;

	input,
	textarea {
		display: block;
		width: 100%;
		border: none;
		border-bottom: 2px solid var(--color-neutral);
		padding: 6px 0;
		background-color: transparent;
		color: var(--color-on-background);
		outline: none;
		font-size: 14px;
		font-weight: normal;
		line-height: 14px;
		letter-spacing: 0;
	}

    textarea {
        resize: vertical;
        height: 48px;
    }

	label {
		position: absolute;
		top: 0;
		left: 0;
		color: var(--color-neutral);
		transition: all 0.3s ease;
		pointer-events: none;
		font-size: 14px;
		font-weight: normal;
		line-height: 14px;
		letter-spacing: 0;
	}

	.underline {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 2px;
		width: 100%;
		background-color: var(--color-tertiary);
		transform: scaleX(0);
		transition: all 0.3s ease;
	}

	input:focus ~ label,
	input:valid ~ label,
	textarea:focus ~ label,
	textarea:valid ~ label {
		top: -20px;
		font-size: 16px;
		color: var(--color-tertiary);
	}

	input:focus ~ .underline,
	input:valid ~ .underline,
	textarea:focus ~ .underline,
	textarea:valid ~ .underline {
		transform: scaleX(1);
	}

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const EditText = forwardRef(
	({ id, placeholder = "", type = "text", required = false }, ref) => {
		const inputRef = useRef(null);

		useImperativeHandle(ref, () => ({
			getValue: () => inputRef.current.value,
			setValue: (val) => (inputRef.current.value = val),
		}));

		return (
			<InputContainer>
				<input
					ref={inputRef}
					id={"input-" + id}
					name={id}
					type={type}
					required={required}
				/>
				<label id={"label-" + id} htmlFor={"input-" + id}>
					{placeholder}
				</label>
				<div className="underline" />
			</InputContainer>
		);
	}
);

const TextArea = forwardRef(
	({ id, placeholder = "", required = false }, ref) => {
		const textareaRef = useRef(null);

		useImperativeHandle(ref, () => ({
			getValue: () => textareaRef.current.value,
			setValue: (val) => (textareaRef.current.value = val),
		}));

		return (
			<InputContainer>
				<textarea
					ref={textareaRef}
					id={"textarea-" + id}
					name={id}
					required={required}
				/>
				<label id={"label-" + id} htmlFor={"textarea-" + id}>
					{placeholder}
				</label>
				<div className="underline" />
			</InputContainer>
		);
	}
);

export { EditText, TextArea };
