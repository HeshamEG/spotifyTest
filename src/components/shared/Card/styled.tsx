
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';

// Create an interface for the component
export interface CardProps { }

const CardWrapper = styledComponentsTS<CardProps>(styledComponents.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border: 1px dotted;
    width: 63vw;
    margin-bottom: 2vh;
    border-radius: 12px;
    padding: 0.5rem
`

const NextImg = styledComponentsTS(styledComponents.img)`
  width:3rem;
  cursor: pointer;
  transition-property: width;
  transition-delay: 1s;
  transition: all 0.1s ease-in-out;
  &:hover{
  width:8rem;
  }

`


export { CardWrapper,NextImg };
