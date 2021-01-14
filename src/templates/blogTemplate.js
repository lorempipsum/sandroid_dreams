import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';

import styles from './blogTemplate.module.css';

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const {markdownRemark} = data; // data.markdownRemark holds your post data
    const {
        frontmatter,
        html,
    } = markdownRemark;

    // TODO do I want to enable dates for blog posts again sometime?
    const showDate = false;
    return (
        <Layout>
            <div className="blog-post-container">
                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    {showDate &&
                    <div className={styles.date}>
                        {frontmatter.date}
                    </div>}
                    <div
                        className={styles.divider}
                    ></div>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{
                            __html: html,
                        }}
                    />
                </div>
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(
            frontmatter: {
                slug: { eq: $slug }
            }
        ) {
            html
            frontmatter {
                date(
                    formatString: "MMMM DD, YYYY"
                )
                slug
                title
            }
        }
    }
`;
