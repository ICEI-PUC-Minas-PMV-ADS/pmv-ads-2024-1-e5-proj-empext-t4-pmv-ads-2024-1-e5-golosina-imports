import mongoose, { Document, Schema } from 'mongoose';

interface User extends Document {
    id: string;
    name: string;
    email: string;
    password: string;
    admin?: boolean;
    deletionTime?: Date;
}

const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean },
    deletionTime: { type: Date }
});

const UserModel = mongoose.model<User>('User', UserSchema);

export default UserModel;
