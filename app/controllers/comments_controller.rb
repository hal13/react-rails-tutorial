class CommentsController < ApplicationController
  def index
    @data = Comment.all
  end
end
