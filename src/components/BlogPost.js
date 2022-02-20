import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() { 
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment  numberOfComment={1} commentText="I agree with this statement. - Angela Merkel" />
      <Comment  numberOfComment={2} commentText="A universal truth. - Noam Chomsky" />
      <Comment  numberOfComment={3} commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}

export default BlogPost;
