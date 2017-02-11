var CommentBox = React.createClass({

  render: function() {
    return (
	<div className="CommentBox">
	  <h1>Comments</h1>
	  <CommentList />
	  <CommentForm />
	</div>
    );
  }
});

var CommentList = React.createClass({

  render: function() {
    return (
	<div className="CommentList">
	  <Comment author="Pete Hunt">This is one comment</Comment>
	  <Comment author="Jordan Walke">This is *another* comment</Comment>
	</div>
    );
  }
});

var CommentForm = React.createClass({

  render: function() {
    return (
	<div className="CommentForm">
	  Hello, world! I am a CommentForm.
	</div>
    );
  }
});

var Comment = React.createClass({

  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
	<div className="Comment">
	  <h2 className="commnetAuthor">
	    {this.props.author}
	  </h2>
	  <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
	</div>
    );
  }
});

