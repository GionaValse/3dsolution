import styled from "styled-components";

const MaterialSymbolContent = styled.span`
	font-family: "Material Symbols Rounded";
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	font-variation-settings: "FILL" ${(params) => (params.fill ? "1" : "0")},
		"wght" 400, "GRAD" 0, "opsz" 24;
    font-size: ${(params) => params.size}px;
    font-weight: normal;
    line-height: ${(params) => params.size}px;
    letter-spacing: 0;
`;

export default function MaterialSymbol({symbol, fill = true, size = 24}) {
    return <MaterialSymbolContent fill={fill} size={size}>{symbol}</MaterialSymbolContent>
}
