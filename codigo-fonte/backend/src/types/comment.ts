export interface Comment {
    id: string;
    userId: string;
    postId: string;
    content: string;
    createTime: Date;
    deleteTime?: Date;
}

export interface FormattedComment {
    id: string;
    author: string;
    userId: string;
    postId: string;
    content: string;
    createTime: Date;
    deleteTime?: Date;
}
