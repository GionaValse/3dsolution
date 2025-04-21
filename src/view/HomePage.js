import { useEffect } from "react";
import styled from "styled-components";

const HomePageContainer = styled.div``;

const DynamicTitleContainer = styled.h2`
	-webkit-user-select: none;
	user-select: none;
`;

const DynamicTitleSwitch = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 48px;
	overflow: hidden;

	span {
		font-size: 36px;
		letter-spacing: 2px;
		text-shadow: -1px -1px 0 var(--color-tertiary),
			1px -1px 0 var(--color-tertiary), -1px 1px 0 var(--color-tertiary),
			1px 1px 0 var(--color-tertiary);
		color: var(--color-background);
		animation: wordspin infinite 4s;

		@keyframes wordspin {
			10% {
				-webkit-transform: translateY(-102%);
				transform: translateY(-102%);
			}

			25% {
				-webkit-transform: translateY(-100%);
				transform: translateY(-100%);
			}

			35% {
				-webkit-transform: translateY(-202%);
				transform: translateY(-202%);
			}

			50% {
				-webkit-transform: translateY(-200%);
				transform: translateY(-200%);
			}

			60% {
				-webkit-transform: translateY(-302%);
				transform: translateY(-302%);
			}

			75% {
				-webkit-transform: translateY(-300%);
				transform: translateY(-300%);
			}

			85% {
				-webkit-transform: translateY(-402%);
				transform: translateY(-402%);
			}

			100% {
				-webkit-transform: translateY(-400%);
				transform: translateY(-400%);
			}
		}
	}
`;

const IntroArticle = styled.article`
	margin-top: 48px;
`;

const ExplainContainer = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 48px;
	width: 100%;
	margin: 80px 0 0;
`;

const ExplainContent = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: ${(params) => (params.reverse ? "wrap-reverse" : "wrap")};
	gap: 12px;

	div {
		display: flex;
		flex-direction: column;
		flex: 1 1 300px;
		min-width: 300px;
	}

	div img {
		width: 75%;
		min-width: 300px;
		height: auto;
		object-fit: contain;
		border-radius: 6px;
		margin: 0 auto;
	}
`;

export default function HomePage() {
	useEffect(() => {
		document.title = "3D Solution";
	}, []);

	/*
	 * Le immagini sono da inserire in una cartella "images" all'interno della cartella "public"
	 * per inserirle nel progetto. <img src="/images/...." alt="..." />
	 * */

	return (
		<HomePageContainer>
			<DynamicTitleContainer>
				3D Solution
				<DynamicTitleSwitch>
					<span>modella</span>
					<span>colora</span>
					<span>assembla</span>
					<span>stampa</span>
					<span>modella</span>
				</DynamicTitleSwitch>
			</DynamicTitleContainer>
			<IntroArticle>
				<h3>Benvenuto in 3D Solution!</h3>
				<p>
					Il punto di incontro tra creatività e tecnologia, dove le
					idee prendono forma attraverso la stampa 3D. Siamo un gruppo
					di giovani appassionati che trasformano concetti in oggetti
					unici, spaziando da portachiavi personalizzati a lampade di
					design, targhette distintive, quadretti artistici e molto
					altro. Vi invitiamo a scoprire il nostro mondo e le nostre
					creazioni. Questo sito è la nostra vetrina digitale, dove
					potrete approfondire il nostro lavoro, sfogliare la nostra
					brochure e contattarci per dare vita ai vostri progetti
					personalizzati. Che siate alla ricerca di un regalo speciale
					o di un oggetto su misura, siamo qui per trasformare le
					vostre idee in realtà tridimensionale.
				</p>
			</IntroArticle>
			<ExplainContainer>
				<ExplainContent>
					<div>
						<h4>Stampa 3D</h4>
						<p>
							Diamo forma ai tuoi progetti, dal prototipo al
							prodotto finito. Con la stampa 3D trasformiamo file
							digitali in oggetti reali, funzionali e
							personalizzati. Che si tratti di un componente
							tecnico, un gadget su misura o un pezzo unico, lo
							realizziamo con precisione, attenzione ai dettagli
							ed utilizzando materiali di qualità sviluppati per
							ogni esigenza. Perché ogni stampa è una soluzione su
							misura, pensata per chi cerca innovazione, velocità
							e libertà creativa.
						</p>
					</div>
					<div>
						<img src="/images/lorem.jpeg" alt="stampa 3d immagine" />
					</div>
				</ExplainContent>
				<ExplainContent reverse={true}>
					<div>
						<img
							src="https://media.sketchfab.com/models/f74eeba8cd9b4e9ea7fcef5b44f74cc0/thumbnails/314e218c58974b629cfa599ef0dfe90c/5d5bf82897a84d59a66425b724485a58.jpeg"
							alt="modellazione immagine"
						/>
					</div>
					<div>
						<h4>Modellazione</h4>
						<p>
							Creiamo modelli 3D personalizzati partendo da un
							disegno, un'idea o anche solo una descrizione. Ogni
							progetto è studiato nei minimi dettagli per essere
							funzionale, stampabile e fedele alla tua visione.
							Che si tratti di prototipi, pezzi tecnici o oggetti
							di design, trasformiamo il concetto in un file 3D
							pronto per essere realizzato. Nessun limite alla
							creatività, solo soluzioni su misura.
						</p>
					</div>
				</ExplainContent>
				<ExplainContent>
					<div>
						<h4>Scansione 3D</h4>
						<p>
							Con la scansione 3D trasformiamo oggetti fisici in
							modelli digitali ad alta precisione. Perfetta per
							ricreare pezzi esistenti, restaurare oggetti,
							progettare modifiche o archiviare forme complesse in
							digitale. Ogni dettaglio viene rilevato con cura,
							per garantirti un modello fedele, pronto per essere
							modificato, riprodotto o stampato. Dal reale al
							virtuale, senza margine d'errore.
						</p>
					</div>
					<div>
						<img
							src="https://media.sketchfab.com/models/12974fdc58514ba4b6ef7ee7462c93b0/thumbnails/97d1601c474e42bd879dffc7385a310b/2c5e251f908647cca7c91aeb1d66b2a4.jpeg"
							alt="scansione 3d immagine"
						/>
					</div>
				</ExplainContent>
			</ExplainContainer>
		</HomePageContainer>
	);
}
