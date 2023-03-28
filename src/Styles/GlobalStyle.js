import { createGlobalStyle } from "styled-components";

const UniversalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration:none;
}
.active{
    color: #FA4A0C;
}
`;

export default UniversalStyle;