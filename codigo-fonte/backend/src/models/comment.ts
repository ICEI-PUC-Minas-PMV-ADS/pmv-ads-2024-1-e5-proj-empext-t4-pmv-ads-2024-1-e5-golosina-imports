import mongoose, { Document, Schema } from 'mongoose';

interface Comment extends Document {
    id: string;
    user_id: string;
    post_id: string;
    content: string;
    create_time: Date;
    delete_time?: Date;
}

const CommentSchema = new Schema<Comment>({
    user_id: { type: String, required: true },
    post_id: { type: String, required: true },
    content: { type: String, required: true },
    create_time: { type: Date, required: true },
    delete_time: { type: Date },
});

const UserModel = mongoose.model<Comment>('Comment', CommentSchema);

export default UserModel;
