import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
    date: { type: Date, default: Date.now },
    content: String,
    // comments: [{ body: String, date: Date }],
    // likes: Number,
    author: String
  });

const Post = mongoose.model('Post', postSchema );

export default Post;