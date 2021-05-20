import React from 'react'
import styled from 'styled-components'
function Image({source}) {
    return (
        <Container>
            <img src={source} alt="" />
        </Container>
    )
}

export default Image;

const Container = styled.div`
margin-right:10px;
    >img {
        width:100%;
        height:100%;
        object-fit:cover;
    }
    
`;