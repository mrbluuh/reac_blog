import React, { Component } from 'react';
import Comment from './Comment/Comment';
import CommentForm from './CommentForm/CommentForm';
import { IconButton } from 'react-toolbox/lib/button';

class Comments extends Component {
  state = {
    comments: [],
    commentsCount: 1,
    showForm: false,
  };


    createComment = (comment) => {
      const commentItem = (
        <Comment
          key={this.state.commentsCount}
          { ...comment }
        />
      );
      const comments = this.state.comments.concat(commentItem);
      this.setState({
        comments,
        commentsCount: this.state.commentsCount + 1,
      });
    };
    handleShowForm = () => {
      this.setState({showForm: true})
    }
    handleCloseForm = () => {
      this.setState({showForm: false})
    }
    render() {
      return (
        <div>
          {this.state.comments}
          <IconButton
            icon="add"
            onClick={this.handleShowForm}
          />
          <CommentForm
            active={this.state.showForm}
            createComment={this.createComment}
            closeForm={this.handleCloseForm}
          />
        </div>
      );
    }
}

export default Comments;
