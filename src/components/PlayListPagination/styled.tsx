
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';

// Create an interface for the component
export interface ListProps { }

const ListWrapper = styledComponentsTS<ListProps>(styledComponents.div)`
display: flex;
align-items: center;
flex-direction: column;
align-items: center;
`

export { ListWrapper };
