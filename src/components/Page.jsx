import React from 'react'
import styles from 'styled-components'

function Page (props) {

    return (
        <Div>Page of {props.name} 
            <Span> 1</Span>
            <Span>2</Span>
            <Span>3</Span>
        </Div>
    )
}

export default Page


const Div = styles.div`
    text-align: center    
`;
const Span = styles.span`
    margin-right: 15px;
    &:last-child: {
        margin-right: 0;
    }
`;