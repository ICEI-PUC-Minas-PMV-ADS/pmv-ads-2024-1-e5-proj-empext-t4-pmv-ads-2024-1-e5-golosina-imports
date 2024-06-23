import mongoose, { Document, Schema } from 'mongoose';

interface Feedback extends Document {
    id: string;
    personName: string;
    content: string;
    createTime: Date;
}

const FeedbackSchema = new Schema<Feedback>({
    personName: { type: String, required: true },
    content: { type: String, required: true },
    createTime: { type: Date, required: true },
});

const FeedbackModel = mongoose.model<Feedback>('Feedback', FeedbackSchema);

export default FeedbackModel;
