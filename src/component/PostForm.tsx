import React, { Component } from 'react';

interface PostFormState {
    title: string,
    message: string
}

interface PostFormProps {
    onAdd: (title: string, message: string) => void
}

class PostForm extends Component<PostFormProps, PostFormState> {
    constructor(props: PostFormProps) {
        super(props);
        this.state = {
            title: '',
            message: ''
        }
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.onAdd(this.state.title, this.state.message);
        this.setState({
            title: '',
            message: ''
        })
    }
    handleOnChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            title: e.target.value
        })
    }

    handleOnChangeMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({
            message: e.target.value
        })
    }

    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <input required type="text" onChange={(e) => this.handleOnChangeTitle(e)}
                        placeholder="Enter Post Title" /><br /><br />
                    <textarea required onChange={(e) => this.handleOnChangeMessage(e)} placeholder="Enter Post" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

export default PostForm;