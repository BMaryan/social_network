import React from "react";
import { AccountType, CommentType, FirebaseType, HistoryType, PostType, ReplyType } from "../../../../types/types";
import { photoConstant } from "../../../../core/constants/constants";
import styles from "./Comments.module.scss";
import styleDes from "../Post.module.scss";
import Comment from "./Comment/Comment";

interface CommentsPropsType {
  accounts: Array<FirebaseType<AccountType>>;
  account: AccountType | null;
  currentAccount: FirebaseType<AccountType> | undefined;
  post: FirebaseType<PostType> | undefined;
  comments: Array<FirebaseType<CommentType>>;
  replies: Array<FirebaseType<ReplyType>>;
  modal: boolean;
  history: HistoryType;
  isPathOfPost: boolean;
  replyOfComment: CommentType | null;
  answerComment: CommentType | null;
  toggleDrawer: (value: boolean) => void;
  setReplyOfComment: (value: CommentType | null) => void;
  setAnswerComment: (value: CommentType | null) => void;
  deleteCommentThunk: (comment: CommentType) => void;
  updateCommentThunk: (comment: CommentType) => void;
}

const Comments = (props: CommentsPropsType) => {
  const [more, setMore] = React.useState(false);
  const areComments: Array<FirebaseType<CommentType>> = props?.comments?.filter((comment: FirebaseType<CommentType>) => (comment?.data()?.postId === props?.post?.id ? comment : undefined));

  // destructuring props comment
  const destPropsComment = { accounts: props.accounts, account: props.account, currentAccount: props.currentAccount, replies: props.replies, post: props.post, modal: props.modal, replyOfComment: props.replyOfComment, answerComment: props.answerComment, setAnswerComment: props.setAnswerComment, setReplyOfComment: props.setReplyOfComment, deleteCommentThunk: props.deleteCommentThunk, updateCommentThunk: props.updateCommentThunk };

  return (
    <div className={styles.wrapper_comments}>
      {areComments?.length > 0 ? (
        <div className={styles.comments}>
          {props.modal && <div className={styleDes.wrapper_description}>{props?.post?.data()?.description ? <div className={styleDes.description}>{props?.post?.data()?.description?.length <= 100 ? props?.post?.data()?.description : !false ? props?.post?.data()?.description : props?.post?.data()?.description?.slice(0, 100) + " ..."}</div> : undefined}</div>}

          {areComments && props.modal ? areComments?.map((comment: FirebaseType<CommentType>) => (comment?.data()?.postId === props?.post?.id ? <Comment key={comment.id} {...destPropsComment} comment={comment} /> : undefined)) : undefined}

          {areComments && !props.modal ? areComments?.map((comment: FirebaseType<CommentType>) => (comment?.data()?.postId === props?.post?.id ? <Comment key={comment.id} {...destPropsComment} comment={comment} /> : undefined)).splice(!props.isPathOfPost ? -1 : 0) : undefined}

          {areComments.length > 1 && !props.modal && !props.isPathOfPost ? (
            <button
              className={styles.button_more}
              onClick={(e: React.MouseEvent<HTMLButtonElement> & React.ChangeEvent<HTMLButtonElement>) => {
                setMore(!more);
                props.toggleDrawer(true);
                e.target.hidden = true;
                props.history.push(`${photoConstant.path}/${props?.post?.id}`);
              }}>
              {areComments.length === 2 ? `Review comment: ${areComments.length - 1}` : `Review all comments: ${areComments.length - 1}`}
            </button>
          ) : undefined}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Comments;
