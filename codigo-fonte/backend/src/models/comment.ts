import mongoose, { Document, Schema } from 'mongoose';

interface Comment extends Document {
    id: string;
    userId: string;
    postId: string;
    content: string;
    createTime: Date;
    deleteTime?: Date;
}

const CommentSchema = new Schema<Comment>({
    userId: { type: String, required: true },
    postId: { type: String, required: true },
    content: { type: String, required: true },
    createTime: { type: Date, required: true },
    deleteTime: { type: Date },
});

const CommentModel = mongoose.model<Comment>('Comment', CommentSchema);

export default CommentModel;
