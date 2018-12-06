import React, { Component } from 'react';
import { PostModel } from '../model/PostModel';

interface Props {
    posts: PostModel[]
}

interface State { }

class AllPost extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

    }
    render() {
        const { posts } = this.props;
        return (
            <div>
                <h1 className="post_heading">All Posts</h1>
                {posts.map((post) => (
                    <div className="all-post">
                        <h2>{post.title}</h2>
                        <span>{post.message}</span>
                    </div>
                ))}
            </div>
        )
    }
}

export default AllPost;