import React from "react";
import ImageGallery from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery/ImageGallery";
import ImageGalleryImage from "gatsby-theme-carbon/src/components/ImageGallery/ImageGalleryImage";
import { useStaticQuery, graphql } from "gatsby";

/* // return (
  //   <div style={{ height: "700px", width: "500px" }}>
  //     <img src={data.allInstaNode.edges[0].node.original} />
  //   </div>

  // ); */

const InstaFeed = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode(sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            id
            mediaType
            original
            preview
            timestamp
            type
            caption
            comments
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      <ImageGallery>
        {data.allInstaNode.edges.map(({ node }, index) => (
          <ImageGalleryImage
            key={index}
            alt={node.caption}
            title={node.caption}
            col={4}>
            <div>
              <img src={node.original} alt={node.caption} />
            </div>
          </ImageGalleryImage>
        ))}
      </ImageGallery>
    </div>
  );
};

export default InstaFeed;
