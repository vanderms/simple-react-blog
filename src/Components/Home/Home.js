import classes from './Home.module.css';
import { useState } from 'react';
import { PostPreview } from '../Utilities/Utilities';


function Home(){

  const [posts, setPosts] = useState([
    {title: "My new website", body: "Lorem ipsum...", author: "Henry VIII", id: 1},
    {title: "Welcome party!", body: "Lorem ipsum...", author: "Charles V", id: 2},
    {title: "Web dev top tips", body: "Lorem ipsum...", author: "Francis I", id: 3},
  ]);

  return (
    <div className="section-container">
      {posts.map(post => <PostPreview
        key = {post.id}
        title = {post.title}
        body = {post.body}
        author = {post.author}
      ></PostPreview>
      )}     
    </div>
  );
}

export default Home;