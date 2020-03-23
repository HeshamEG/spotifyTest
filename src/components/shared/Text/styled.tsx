import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';

// Create an interface for the component
export interface TextProps {
  fontsize?: number
  color?: string,
  fixed?: any
}

const NormalText = styledComponentsTS<TextProps>(styledComponents.h1)`
  font-size: ${props => !!props.fontsize?props.fontsize:'10'}px;
  color: ${props => !!props.color?props.color:'black'}px;
`

const FixedText=styledComponentsTS(styledComponents.span)`
position: fixed;
right:2vw;
`
export { NormalText,FixedText };
