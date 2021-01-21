import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

/** 'Account' input values */
export type AccountInput = {
  email: Scalars['String'];
  user?: Maybe<AccountUserRelation>;
};

/** Allow manipulating the relationship between the types 'Account' and 'User' using the field 'Account.user'. */
export type AccountUserRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'Album' and 'User' using the field 'Album.author'. */
export type AlbumAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Album' input values */
export type AlbumInput = {
  title: Scalars['String'];
  author?: Maybe<AlbumAuthorRelation>;
  genre: Scalars['String'];
  coverImageUrl?: Maybe<Scalars['String']>;
  totalTracks: Scalars['Int'];
  isPublic: Scalars['Boolean'];
  loveCount: Scalars['Int'];
  likeCount: Scalars['Int'];
};

/** 'Asset' input values */
export type AssetInput = {
  url: Scalars['String'];
  type: Scalars['String'];
};

/** Allow manipulating the relationship between the types 'Collaborator' and 'User' using the field 'Collaborator.author'. */
export type CollaboratorAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'Collaborator' and 'User' using the field 'Collaborator.collaborator'. */
export type CollaboratorCollaboratorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Collaborator' input values */
export type CollaboratorInput = {
  author?: Maybe<CollaboratorAuthorRelation>;
  collaborator?: Maybe<CollaboratorCollaboratorRelation>;
};

/** Allow manipulating the relationship between the types 'Comment' and 'User' using the field 'Comment.author'. */
export type CommentAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Comment' input values */
export type CommentInput = {
  post?: Maybe<CommentPostRelation>;
  author?: Maybe<CommentAuthorRelation>;
  text: Scalars['String'];
  replyCount: Scalars['Int'];
};

/** Allow manipulating the relationship between the types 'Comment' and 'Post' using the field 'Comment.post'. */
export type CommentPostRelation = {
  /** Create a document of type 'Post' and associate it with the current document. */
  create?: Maybe<PostInput>;
  /** Connect a document of type 'Post' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'CommentReply' and 'User' using the field 'CommentReply.author'. */
export type CommentReplyAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'CommentReply' and 'Comment' using the field 'CommentReply.comment'. */
export type CommentReplyCommentRelation = {
  /** Create a document of type 'Comment' and associate it with the current document. */
  create?: Maybe<CommentInput>;
  /** Connect a document of type 'Comment' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'CommentReply' input values */
export type CommentReplyInput = {
  comment?: Maybe<CommentReplyCommentRelation>;
  author?: Maybe<CommentReplyAuthorRelation>;
  text: Scalars['String'];
};


/** Allow manipulating the relationship between the types 'Follower' and 'User' using the field 'Follower.author'. */
export type FollowerAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'Follower' and 'User' using the field 'Follower.follower'. */
export type FollowerFollowerRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Follower' input values */
export type FollowerInput = {
  author?: Maybe<FollowerAuthorRelation>;
  follower?: Maybe<FollowerFollowerRelation>;
};

/** Allow manipulating the relationship between the types 'Following' and 'User' using the field 'Following.author'. */
export type FollowingAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'Following' and 'User' using the field 'Following.following'. */
export type FollowingFollowingRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Following' input values */
export type FollowingInput = {
  author?: Maybe<FollowingAuthorRelation>;
  following?: Maybe<FollowingFollowingRelation>;
};

/** 'Genre' input values */
export type GenreInput = {
  name: Scalars['String'];
};

/** Allow manipulating the relationship between the types 'Image' and 'User' using the field 'Image.author'. */
export type ImageAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Image' input values */
export type ImageInput = {
  title: Scalars['String'];
  author?: Maybe<ImageAuthorRelation>;
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  loveCount: Scalars['Int'];
  likeCount: Scalars['Int'];
  isPublic: Scalars['Boolean'];
  category: Scalars['String'];
};

/** Allow manipulating the relationship between the types 'Like' and 'Album' using the field 'Like.album'. */
export type LikeAlbumRelation = {
  /** Create a document of type 'Album' and associate it with the current document. */
  create?: Maybe<AlbumInput>;
  /** Connect a document of type 'Album' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Album' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Allow manipulating the relationship between the types 'Like' and 'User' using the field 'Like.author'. */
export type LikeAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'Like' and 'Image' using the field 'Like.image'. */
export type LikeImageRelation = {
  /** Create a document of type 'Image' and associate it with the current document. */
  create?: Maybe<ImageInput>;
  /** Connect a document of type 'Image' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Image' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** 'Like' input values */
export type LikeInput = {
  author?: Maybe<LikeAuthorRelation>;
  track?: Maybe<LikeTrackRelation>;
  image?: Maybe<LikeImageRelation>;
  album?: Maybe<LikeAlbumRelation>;
  video?: Maybe<LikeVideoRelation>;
};

/** Allow manipulating the relationship between the types 'Like' and 'Track' using the field 'Like.track'. */
export type LikeTrackRelation = {
  /** Create a document of type 'Track' and associate it with the current document. */
  create?: Maybe<TrackInput>;
  /** Connect a document of type 'Track' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Track' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Allow manipulating the relationship between the types 'Like' and 'Video' using the field 'Like.video'. */
export type LikeVideoRelation = {
  /** Create a document of type 'Video' and associate it with the current document. */
  create?: Maybe<VideoInput>;
  /** Connect a document of type 'Video' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Video' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Allow manipulating the relationship between the types 'Love' and 'Album' using the field 'Love.album'. */
export type LoveAlbumRelation = {
  /** Create a document of type 'Album' and associate it with the current document. */
  create?: Maybe<AlbumInput>;
  /** Connect a document of type 'Album' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Album' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Allow manipulating the relationship between the types 'Love' and 'User' using the field 'Love.author'. */
export type LoveAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'Love' and 'Image' using the field 'Love.image'. */
export type LoveImageRelation = {
  /** Create a document of type 'Image' and associate it with the current document. */
  create?: Maybe<ImageInput>;
  /** Connect a document of type 'Image' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Image' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** 'Love' input values */
export type LoveInput = {
  author?: Maybe<LoveAuthorRelation>;
  track?: Maybe<LoveTrackRelation>;
  image?: Maybe<LoveImageRelation>;
  album?: Maybe<LoveAlbumRelation>;
  video?: Maybe<LoveVideoRelation>;
};

/** Allow manipulating the relationship between the types 'Love' and 'Track' using the field 'Love.track'. */
export type LoveTrackRelation = {
  /** Create a document of type 'Track' and associate it with the current document. */
  create?: Maybe<TrackInput>;
  /** Connect a document of type 'Track' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Track' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Allow manipulating the relationship between the types 'Love' and 'Video' using the field 'Love.video'. */
export type LoveVideoRelation = {
  /** Create a document of type 'Video' and associate it with the current document. */
  create?: Maybe<VideoInput>;
  /** Connect a document of type 'Video' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Video' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Update an existing document in the collection of 'CommentReply' */
  updateCommentReply?: Maybe<CommentReply>;
  /** Delete an existing document in the collection of 'Like' */
  deleteLike?: Maybe<Like>;
  /** Update an existing document in the collection of 'User' */
  updateUser?: Maybe<User>;
  register: Account;
  /** Update an existing document in the collection of 'Collaborator' */
  updateCollaborator?: Maybe<Collaborator>;
  /** Create a new document in the collection of 'Video' */
  createVideo: Video;
  /** Update an existing document in the collection of 'Track' */
  updateTrack?: Maybe<Track>;
  /** Create a new document in the collection of 'User' */
  createUser: User;
  /** Create a new document in the collection of 'Image' */
  createImage: Image;
  /** Delete an existing document in the collection of 'Collaborator' */
  deleteCollaborator?: Maybe<Collaborator>;
  /** Create a new document in the collection of 'Like' */
  createLike: Like;
  /** Update an existing document in the collection of 'Follower' */
  updateFollower?: Maybe<Follower>;
  /** Update an existing document in the collection of 'Comment' */
  updateComment?: Maybe<Comment>;
  /** Update an existing document in the collection of 'Album' */
  updateAlbum?: Maybe<Album>;
  /** Create a new document in the collection of 'Follower' */
  createFollower: Follower;
  /** Create a new document in the collection of 'CommentReply' */
  createCommentReply: CommentReply;
  /** Create a new document in the collection of 'Album' */
  createAlbum: Album;
  /** Delete an existing document in the collection of 'Comment' */
  deleteComment?: Maybe<Comment>;
  /** Delete an existing document in the collection of 'Skill' */
  deleteSkill?: Maybe<Skill>;
  /** Update an existing document in the collection of 'Post' */
  updatePost?: Maybe<Post>;
  /** Update an existing document in the collection of 'Video' */
  updateVideo?: Maybe<Video>;
  /** Delete an existing document in the collection of 'CommentReply' */
  deleteCommentReply?: Maybe<CommentReply>;
  /** Delete an existing document in the collection of 'Follower' */
  deleteFollower?: Maybe<Follower>;
  /** Delete an existing document in the collection of 'Video' */
  deleteVideo?: Maybe<Video>;
  /** Delete an existing document in the collection of 'Image' */
  deleteImage?: Maybe<Image>;
  /** Update an existing document in the collection of 'PendingCollab' */
  updatePendingCollab?: Maybe<PendingCollab>;
  /** Update an existing document in the collection of 'Skill' */
  updateSkill?: Maybe<Skill>;
  /** Delete an existing document in the collection of 'Account' */
  deleteAccount?: Maybe<Account>;
  /** Delete an existing document in the collection of 'Genre' */
  deleteGenre?: Maybe<Genre>;
  /** Create a new document in the collection of 'PendingCollab' */
  createPendingCollab: PendingCollab;
  /** Create a new document in the collection of 'Track' */
  createTrack: Track;
  /** Delete an existing document in the collection of 'Following' */
  deleteFollowing?: Maybe<Following>;
  /** Create a new document in the collection of 'Following' */
  createFollowing: Following;
  /** Delete an existing document in the collection of 'Album' */
  deleteAlbum?: Maybe<Album>;
  /** Update an existing document in the collection of 'Genre' */
  updateGenre?: Maybe<Genre>;
  /** Delete an existing document in the collection of 'PendingCollab' */
  deletePendingCollab?: Maybe<PendingCollab>;
  /** Update an existing document in the collection of 'Account' */
  updateAccount?: Maybe<Account>;
  /** Create a new document in the collection of 'Collaborator' */
  createCollaborator: Collaborator;
  /** Create a new document in the collection of 'Skill' */
  createSkill: Skill;
  /** Create a new document in the collection of 'Comment' */
  createComment: Comment;
  /** Delete an existing document in the collection of 'User' */
  deleteUser?: Maybe<User>;
  /** Delete an existing document in the collection of 'Post' */
  deletePost?: Maybe<Post>;
  /** Update an existing document in the collection of 'Image' */
  updateImage?: Maybe<Image>;
  /** Create a new document in the collection of 'Love' */
  createLove: Love;
  /** Create a new document in the collection of 'Post' */
  createPost: Post;
  /** Create a new document in the collection of 'Account' */
  createAccount: Account;
  login: Scalars['String'];
  /** Create a new document in the collection of 'Genre' */
  createGenre: Genre;
  /** Delete an existing document in the collection of 'Love' */
  deleteLove?: Maybe<Love>;
  /** Update an existing document in the collection of 'Following' */
  updateFollowing?: Maybe<Following>;
  /** Delete an existing document in the collection of 'Track' */
  deleteTrack?: Maybe<Track>;
  /** Update an existing document in the collection of 'Love' */
  updateLove?: Maybe<Love>;
  /** Update an existing document in the collection of 'Like' */
  updateLike?: Maybe<Like>;
};


export type MutationUpdateCommentReplyArgs = {
  id: Scalars['ID'];
  data: CommentReplyInput;
};


export type MutationDeleteLikeArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data: UserInput;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateCollaboratorArgs = {
  id: Scalars['ID'];
  data: CollaboratorInput;
};


export type MutationCreateVideoArgs = {
  data: VideoInput;
};


export type MutationUpdateTrackArgs = {
  id: Scalars['ID'];
  data: TrackInput;
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationCreateImageArgs = {
  data: ImageInput;
};


export type MutationDeleteCollaboratorArgs = {
  id: Scalars['ID'];
};


export type MutationCreateLikeArgs = {
  data: LikeInput;
};


export type MutationUpdateFollowerArgs = {
  id: Scalars['ID'];
  data: FollowerInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  data: CommentInput;
};


export type MutationUpdateAlbumArgs = {
  id: Scalars['ID'];
  data: AlbumInput;
};


export type MutationCreateFollowerArgs = {
  data: FollowerInput;
};


export type MutationCreateCommentReplyArgs = {
  data: CommentReplyInput;
};


export type MutationCreateAlbumArgs = {
  data: AlbumInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSkillArgs = {
  id: Scalars['ID'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  data: PostInput;
};


export type MutationUpdateVideoArgs = {
  id: Scalars['ID'];
  data: VideoInput;
};


export type MutationDeleteCommentReplyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFollowerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVideoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteImageArgs = {
  id: Scalars['ID'];
};


export type MutationUpdatePendingCollabArgs = {
  id: Scalars['ID'];
  data: PendingCollabInput;
};


export type MutationUpdateSkillArgs = {
  id: Scalars['ID'];
  data: SkillInput;
};


export type MutationDeleteAccountArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGenreArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePendingCollabArgs = {
  data: PendingCollabInput;
};


export type MutationCreateTrackArgs = {
  data: TrackInput;
};


export type MutationDeleteFollowingArgs = {
  id: Scalars['ID'];
};


export type MutationCreateFollowingArgs = {
  data: FollowingInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateGenreArgs = {
  id: Scalars['ID'];
  data: GenreInput;
};


export type MutationDeletePendingCollabArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateAccountArgs = {
  id: Scalars['ID'];
  data: AccountInput;
};


export type MutationCreateCollaboratorArgs = {
  data: CollaboratorInput;
};


export type MutationCreateSkillArgs = {
  data: SkillInput;
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateImageArgs = {
  id: Scalars['ID'];
  data: ImageInput;
};


export type MutationCreateLoveArgs = {
  data: LoveInput;
};


export type MutationCreatePostArgs = {
  data: PostInput;
};


export type MutationCreateAccountArgs = {
  data: AccountInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateGenreArgs = {
  data: GenreInput;
};


export type MutationDeleteLoveArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateFollowingArgs = {
  id: Scalars['ID'];
  data: FollowingInput;
};


export type MutationDeleteTrackArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateLoveArgs = {
  id: Scalars['ID'];
  data: LoveInput;
};


export type MutationUpdateLikeArgs = {
  id: Scalars['ID'];
  data: LikeInput;
};

/** Allow manipulating the relationship between the types 'PendingCollab' and 'User' using the field 'PendingCollab.author'. */
export type PendingCollabAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'PendingCollab' input values */
export type PendingCollabInput = {
  author?: Maybe<PendingCollabAuthorRelation>;
  pendingCollab?: Maybe<PendingCollabPendingCollabRelation>;
};

/** Allow manipulating the relationship between the types 'PendingCollab' and 'User' using the field 'PendingCollab.pendingCollab'. */
export type PendingCollabPendingCollabRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'Post' and 'User' using the field 'Post.author'. */
export type PostAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Post' input values */
export type PostInput = {
  lookingFor: Array<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  commentCount: Scalars['Int'];
  author?: Maybe<PostAuthorRelation>;
  asset?: Maybe<Array<AssetInput>>;
  imageUrl?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
  audioUrl?: Maybe<Scalars['String']>;
};

/** 'Skill' input values */
export type SkillInput = {
  name: Scalars['String'];
};


/** Allow manipulating the relationship between the types 'Track' and 'Album' using the field 'Track.album'. */
export type TrackAlbumRelation = {
  /** Create a document of type 'Album' and associate it with the current document. */
  create?: Maybe<AlbumInput>;
  /** Connect a document of type 'Album' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Album' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Allow manipulating the relationship between the types 'Track' and 'User' using the field 'Track.author'. */
export type TrackAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Track' input values */
export type TrackInput = {
  title: Scalars['String'];
  author?: Maybe<TrackAuthorRelation>;
  album?: Maybe<TrackAlbumRelation>;
  artistName: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  duration: Scalars['Int'];
  audioUrl: Scalars['String'];
  isPublic: Scalars['Boolean'];
  genre: Scalars['String'];
  loveCount: Scalars['Int'];
  likeCount: Scalars['Int'];
};

/** 'User' input values */
export type UserInput = {
  email: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  businessEmail?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  skills: Array<Scalars['String']>;
  genres?: Maybe<Array<Scalars['String']>>;
  tag?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  inspiration?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['String']>;
  coverPhoto?: Maybe<Scalars['String']>;
  collaboratorCount: Scalars['Int'];
  followerCount: Scalars['Int'];
  followingCount: Scalars['Int'];
};

/** Allow manipulating the relationship between the types 'Video' and 'User' using the field 'Video.author'. */
export type VideoAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Video' input values */
export type VideoInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  author?: Maybe<VideoAuthorRelation>;
  category: Scalars['String'];
  videoUrl: Scalars['String'];
  isPublic: Scalars['Boolean'];
  loveCount: Scalars['Int'];
  likeCount: Scalars['Int'];
};

export type Account = {
  __typename?: 'Account';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  email: Scalars['String'];
  user: User;
};

export type Album = {
  __typename?: 'Album';
  author: User;
  genre: Scalars['String'];
  totalTracks: Scalars['Int'];
  /** The document's ID. */
  _id: Scalars['ID'];
  coverImageUrl?: Maybe<Scalars['String']>;
  isPublic: Scalars['Boolean'];
  loveCount: Scalars['Int'];
  title: Scalars['String'];
  likeCount: Scalars['Int'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** The pagination object for elements of type 'Album'. */
export type AlbumPage = {
  __typename?: 'AlbumPage';
  /** The elements of type 'Album' in this page. */
  data: Array<Maybe<Album>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Asset = {
  __typename?: 'Asset';
  url: Scalars['String'];
  type: Scalars['String'];
};

export type Collaborator = {
  __typename?: 'Collaborator';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  author: User;
  collaborator: User;
};

export type Comment = {
  __typename?: 'Comment';
  post: Post;
  author: User;
  /** The document's ID. */
  _id: Scalars['ID'];
  replyCount: Scalars['Int'];
  text: Scalars['String'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

export type CommentReply = {
  __typename?: 'CommentReply';
  author: User;
  /** The document's ID. */
  _id: Scalars['ID'];
  text: Scalars['String'];
  comment: Comment;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

export type Follower = {
  __typename?: 'Follower';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  author: User;
  follower: User;
};

export type Following = {
  __typename?: 'Following';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  author: User;
  following: User;
};

export type Genre = {
  __typename?: 'Genre';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  name: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  author: User;
  description: Scalars['String'];
  /** The document's ID. */
  _id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  category: Scalars['String'];
  loveCount: Scalars['Int'];
  title: Scalars['String'];
  imageUrl: Scalars['String'];
  likeCount: Scalars['Int'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** The pagination object for elements of type 'Image'. */
export type ImagePage = {
  __typename?: 'ImagePage';
  /** The elements of type 'Image' in this page. */
  data: Array<Maybe<Image>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Like = {
  __typename?: 'Like';
  author: User;
  image?: Maybe<Image>;
  /** The document's ID. */
  _id: Scalars['ID'];
  track?: Maybe<Track>;
  video?: Maybe<Video>;
  album?: Maybe<Album>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

export type Love = {
  __typename?: 'Love';
  author: User;
  image?: Maybe<Image>;
  /** The document's ID. */
  _id: Scalars['ID'];
  track?: Maybe<Track>;
  video?: Maybe<Video>;
  album?: Maybe<Album>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

export type PendingCollab = {
  __typename?: 'PendingCollab';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  author: User;
  pendingCollab: User;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  videoUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** The document's ID. */
  _id: Scalars['ID'];
  lookingFor: Array<Scalars['String']>;
  audioUrl?: Maybe<Scalars['String']>;
  commentCount: Scalars['Int'];
  asset?: Maybe<Array<Asset>>;
  imageUrl?: Maybe<Scalars['String']>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** The pagination object for elements of type 'Post'. */
export type PostPage = {
  __typename?: 'PostPage';
  /** The elements of type 'Post' in this page. */
  data: Array<Maybe<Post>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Find a document from the collection of 'Collaborator' by its id. */
  findCollaboratorByID?: Maybe<Collaborator>;
  allVideos: VideoPage;
  /** Find a document from the collection of 'Follower' by its id. */
  findFollowerByID?: Maybe<Follower>;
  /** Find a document from the collection of 'Image' by its id. */
  findImageByID?: Maybe<Image>;
  allAlbums: AlbumPage;
  /** Find a document from the collection of 'Love' by its id. */
  findLoveByID?: Maybe<Love>;
  /** Find a document from the collection of 'Post' by its id. */
  findPostByID?: Maybe<Post>;
  allUsers: UserPage;
  /** Find a document from the collection of 'Album' by its id. */
  findAlbumByID?: Maybe<Album>;
  /** Find a document from the collection of 'User' by its id. */
  findUserByID?: Maybe<User>;
  allTracks: TrackPage;
  /** Find a document from the collection of 'Skill' by its id. */
  findSkillByID?: Maybe<Skill>;
  /** Find a document from the collection of 'Like' by its id. */
  findLikeByID?: Maybe<Like>;
  /** Find a document from the collection of 'Following' by its id. */
  findFollowingByID?: Maybe<Following>;
  allAccountsByEmail: Account;
  /** Find a document from the collection of 'Track' by its id. */
  findTrackByID?: Maybe<Track>;
  /** Find a document from the collection of 'Video' by its id. */
  findVideoByID?: Maybe<Video>;
  allPosts: PostPage;
  allImages: ImagePage;
  /** Find a document from the collection of 'Comment' by its id. */
  findCommentByID?: Maybe<Comment>;
  /** Find a document from the collection of 'PendingCollab' by its id. */
  findPendingCollabByID?: Maybe<PendingCollab>;
  /** Find a document from the collection of 'Genre' by its id. */
  findGenreByID?: Maybe<Genre>;
  /** Find a document from the collection of 'Account' by its id. */
  findAccountByID?: Maybe<Account>;
  /** Find a document from the collection of 'CommentReply' by its id. */
  findCommentReplyByID?: Maybe<CommentReply>;
};


export type QueryFindCollaboratorByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAllVideosArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindFollowerByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindImageByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAllAlbumsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindLoveByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindPostByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAllUsersArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindAlbumByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAllTracksArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindSkillByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindLikeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindFollowingByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAllAccountsByEmailArgs = {
  email: Scalars['String'];
};


export type QueryFindTrackByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindVideoByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAllPostsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryAllImagesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindCommentByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindPendingCollabByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindGenreByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindAccountByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindCommentReplyByIdArgs = {
  id: Scalars['ID'];
};

export type Skill = {
  __typename?: 'Skill';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  name: Scalars['String'];
};

export type Track = {
  __typename?: 'Track';
  duration: Scalars['Int'];
  author: User;
  genre: Scalars['String'];
  /** The document's ID. */
  _id: Scalars['ID'];
  audioUrl: Scalars['String'];
  artistName: Scalars['String'];
  isPublic: Scalars['Boolean'];
  album?: Maybe<Album>;
  loveCount: Scalars['Int'];
  title: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  likeCount: Scalars['Int'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** The pagination object for elements of type 'Track'. */
export type TrackPage = {
  __typename?: 'TrackPage';
  /** The elements of type 'Track' in this page. */
  data: Array<Maybe<Track>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  displayName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  dob?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['String']>;
  /** The document's ID. */
  _id: Scalars['ID'];
  bio?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  followerCount: Scalars['Int'];
  genres?: Maybe<Array<Scalars['String']>>;
  followingCount: Scalars['Int'];
  skills: Array<Scalars['String']>;
  coverPhoto?: Maybe<Scalars['String']>;
  collaboratorCount: Scalars['Int'];
  businessEmail?: Maybe<Scalars['String']>;
  inspiration?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** The pagination object for elements of type 'User'. */
export type UserPage = {
  __typename?: 'UserPage';
  /** The elements of type 'User' in this page. */
  data: Array<Maybe<User>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Video = {
  __typename?: 'Video';
  author: User;
  videoUrl: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /** The document's ID. */
  _id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  category: Scalars['String'];
  loveCount: Scalars['Int'];
  title: Scalars['String'];
  likeCount: Scalars['Int'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** The pagination object for elements of type 'Video'. */
export type VideoPage = {
  __typename?: 'VideoPage';
  /** The elements of type 'Video' in this page. */
  data: Array<Maybe<Video>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};


export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'Account' }
    & Pick<Account, '_id' | 'email'>
  ) }
);


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!) {
  register(email: $email, password: $password) {
    _id
    email
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};