import React from 'react';
import GridComponent from './GridComponent';
import Blog from './blog.js';
import styled from 'styled-components';

const BlogWrapper = styled.div`
    margin-bottom: 20px;
`;

function Home() {
    return (
        <div>
            <BlogWrapper>
                <Blog />
            </BlogWrapper>
            <GridComponent />
        </div>
    );

}

export default Home;