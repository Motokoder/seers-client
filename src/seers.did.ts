// https://icscan.io/canister/b46ia-3qaaa-aaaap-qaaaq-cai

import type { Principal } from '@dfinity/principal';
export type AccountIdentifier = Array<number>;
export interface Asset { 'encoding' : AssetEncoding, 'content_type' : string };
export interface AssetEncoding {
  'modified' : bigint,
  'certified' : boolean,
  'content_chunks' : Array<Array<number>>,
  'total_length' : bigint,
};
export interface Balance {
  'btc' : bigint,
  'icp' : bigint,
  'seers' : bigint,
  'cycles' : bigint,
};
export interface Bettor { 'id' : string, 'spent' : bigint, 'outcome' : bigint };
export interface BrierScore { 'createdAt' : Time, 'score' : number };
export interface Chunk { 'content' : Array<number>, 'batch_name' : string };
export type CollateralType = { 'btc' : null } |
  { 'icp' : null } |
  { 'seers' : null } |
  { 'cycles' : null };
export interface CommentStable {
  'id' : number,
  'content' : string,
  'modifiedAt' : Time,
  'createdAt' : Time,
  'author' : UserData,
  'likes' : Array<Like>,
};
export interface DepositAddrs {
  'btc' : string,
  'icp' : Subaccount,
  'cycles' : string,
};
export type Error = { 'insufficientBalance' : null } |
  { 'callerIsAnon' : null } |
  { 'missingICPaddress' : null } |
  { 'userAlreadyExist' : null } |
  { 'nothingToRedeem' : null } |
  { 'notLoggedIn' : null } |
  { 'imageMissing' : null } |
  { 'profileNotCreated' : null } |
  { 'invalidIdentifier' : null } |
  { 'parentDoesNotExist' : null } |
  { 'notEnoughBalance' : null } |
  { 'postIsEmpty' : null } |
  { 'optionsMissing' : null } |
  { 'betDoesNotExist' : null } |
  { 'failedTransfer' : string } |
  { 'descriptionMissing' : null } |
  { 'marketNotFound' : null } |
  { 'titleMissing' : null } |
  { 'handleAlreadyTaken' : null } |
  { 'canNotDelete' : null } |
  { 'imageNotFound' : null } |
  { 'alreadyLiked' : null } |
  { 'lowerThanMinAmount' : null } |
  { 'onlyAuthorCanDelete' : null } |
  { 'missingDescription' : null } |
  { 'marketMissing' : null } |
  { 'startDateOld' : null } |
  { 'marketNotOpen' : null } |
  { 'callerIsNotAuthor' : null } |
  { 'onlyAuthorCanEdit' : null } |
  { 'postDoesNotExist' : null } |
  { 'alreadyRetweeted' : null } |
  { 'commentIsEmpty' : null } |
  { 'userDoesNotExist' : null } |
  { 'outcomeMissing' : null } |
  { 'authorOutcomeMissing' : null } |
  { 'endDateOld' : null } |
  { 'cantGetBalance' : null } |
  { 'notEnoughBetAmount' : null } |
  { 'newtonFailed' : null } |
  { 'notEnoughAmount' : null } |
  { 'endDateOlderThanStartDate' : null } |
  { 'wrongNumberOfOutcomes' : null } |
  { 'authorDoesNotExist' : null } |
  { 'cannotBeRedeemed' : null } |
  { 'notEnoughLiquidity' : null };
export interface Followee { 'createdAt' : Time, 'user' : string };
export interface Followee0 { 'userdata' : UserData, 'createdAt' : Time };
export type FolloweeStable = { 'v0' : Followee0 };
export interface Follower { 'createdAt' : Time, 'user' : string };
export interface Follower0 { 'userdata' : UserData, 'createdAt' : Time };
export type FollowerStable = { 'v0' : Follower0 };
export type Forecast = Array<number>;
export type FullPost = [
  StablePost,
  [] | [MarketStable],
  [] | [SimpleMarketStable],
];
export type HeaderField = [string, string];
export interface HistPoint {
  'probabilities' : Array<bigint>,
  'createdAt' : Time,
  'liquidity' : bigint,
};
export interface HttpRequest {
  'url' : string,
  'method' : string,
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
};
export interface HttpResponse {
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
  'streaming_strategy' : [] | [StreamingStrategy],
  'status_code' : number,
};
export interface ICP { 'e8s' : bigint };
export interface InitData {
  'id' : number,
  'collateralType' : CollateralType,
  'description' : string,
  'author' : [] | [UserData],
  'outcomes' : Array<string>,
  'authorChoice' : bigint,
  'authorAmount' : bigint,
};
export interface Like { 'createdAt' : Time, 'author' : UserData };
export type MarketCategory = { 'any' : null } |
  { 'entertainment' : null } |
  { 'self' : null } |
  { 'seers' : null } |
  { 'crypto' : null } |
  { 'business' : null } |
  { 'financial' : null } |
  { 'sports' : null } |
  { 'dfinity' : null } |
  { 'science' : null } |
  { 'politics' : null };
export interface MarketInitData {
  'id' : number,
  'title' : string,
  'probabilities' : Array<bigint>,
  'endDate' : Time,
  'labels' : Array<string>,
  'liquidity' : bigint,
  'collateralType' : CollateralType,
  'description' : string,
  'author' : string,
  'imageUrl' : string,
  'category' : MarketCategory,
  'startDate' : Time,
  'images' : Array<string>,
};
export interface MarketStable {
  'k' : bigint,
  'id' : number,
  'forecasts' : Array<Forecast>,
  'title' : string,
  'histPrices' : Array<HistPoint>,
  'probabilities' : Array<bigint>,
  'endDate' : Time,
  'modifiedAt' : Time,
  'labels' : Array<string>,
  'createdAt' : Time,
  'liquidity' : bigint,
  'reserves' : Array<bigint>,
  'collateralType' : CollateralType,
  'description' : string,
  'volume' : bigint,
  'bettors' : Array<Bettor>,
  'author' : string,
  'state' : MarketState,
  'imageUrl' : string,
  'category' : MarketCategory,
  'providers' : Array<string>,
  'comments' : Array<CommentStable>,
  'totalShares' : bigint,
  'startDate' : Time,
  'images' : Array<string>,
};
export type MarketState = { 'any' : null } |
  { 'resolved' : bigint } |
  { 'closed' : null } |
  { 'pending' : null } |
  { 'invalid' : null } |
  { 'open' : null } |
  { 'approved' : null };
export interface MarketTx {
  'id' : number,
  'fee' : bigint,
  'src' : [] | [bigint],
  'dest' : [] | [bigint],
  'createdAt' : Time,
  'recv' : bigint,
  'sent' : bigint,
  'collateralType' : CollateralType,
  'marketId' : number,
  'price' : bigint,
};
export type Notification = { 'v0' : NotificationType0 };
export interface NotificationPost {
  'id' : number,
  'isRetweet' : [] | [UserData],
  'simpleMarket' : number,
  'content' : string,
  'createdAt' : Time,
  'author' : UserData,
  'market' : number,
  'image' : [] | [string],
  'parent' : [] | [ParentData__1],
  'images' : Array<string>,
};
export type NotificationType0 = { 'reply' : NotificationPost };
export interface ParentData { 'id' : number, 'author' : UserData };
export interface ParentData__1 { 'id' : number, 'author' : UserData };
export interface Payment {
  'to' : string,
  'from' : string,
  'collateralType' : CollateralType,
  'processed' : boolean,
  'amount' : bigint,
};
export interface PostInitData {
  'id' : number,
  'retweet' : [] | [Retweet],
  'isRetweet' : [] | [UserData],
  'simpleMarket' : number,
  'verified' : boolean,
  'content' : string,
  'hashtags' : Array<string>,
  'pdfs' : Array<string>,
  'author' : UserData,
  'market' : number,
  'image' : [] | [string],
  'mentions' : Array<string>,
  'parent' : [] | [ParentData],
  'images' : Array<string>,
};
export interface PostStable {
  'id' : number,
  'retweet' : [] | [Retweet],
  'isRetweet' : [] | [UserData],
  'simpleMarket' : number,
  'deleted' : boolean,
  'content' : string,
  'createdAt' : Time,
  'author' : UserData,
  'likes' : Array<Like>,
  'replies' : Array<number>,
  'market' : number,
  'image' : [] | [string],
  'parent' : [] | [ParentData],
  'retweeters' : Array<UserData>,
};
export interface PostStable0 {
  'id' : number,
  'retweet' : [] | [Retweet],
  'isRetweet' : [] | [UserData],
  'simpleMarket' : number,
  'deleted' : boolean,
  'content' : string,
  'createdAt' : Time,
  'author' : UserData,
  'likes' : Array<Like>,
  'replies' : Array<number>,
  'market' : number,
  'image' : [] | [string],
  'parent' : [] | [ParentData],
  'retweeters' : Array<UserData>,
};
export interface PostStable1 {
  'id' : number,
  'retweet' : [] | [Retweet],
  'isRetweet' : [] | [UserData],
  'simpleMarket' : number,
  'deleted' : boolean,
  'content' : string,
  'createdAt' : Time,
  'author' : UserData,
  'likes' : Array<Like>,
  'replies' : Array<number>,
  'market' : number,
  'image' : [] | [string],
  'parent' : [] | [ParentData],
  'retweeters' : Array<UserData>,
  'images' : Array<string>,
};
export interface PostStable2 {
  'id' : number,
  'retweet' : [] | [Retweet],
  'isRetweet' : [] | [UserData],
  'simpleMarket' : number,
  'deleted' : boolean,
  'content' : string,
  'hashtags' : Array<string>,
  'createdAt' : Time,
  'author' : UserData,
  'likes' : Array<Like>,
  'replies' : Array<number>,
  'market' : number,
  'image' : [] | [string],
  'mentions' : Array<string>,
  'parent' : [] | [ParentData],
  'retweeters' : Array<UserData>,
  'images' : Array<string>,
};
export interface PostStable3 {
  'id' : number,
  'retweet' : [] | [Retweet],
  'isRetweet' : [] | [UserData],
  'simpleMarket' : number,
  'verified' : boolean,
  'deleted' : boolean,
  'content' : string,
  'hashtags' : Array<string>,
  'createdAt' : Time,
  'pdfs' : Array<string>,
  'author' : UserData,
  'likes' : Array<Like>,
  'replies' : Array<number>,
  'market' : number,
  'image' : [] | [string],
  'mentions' : Array<string>,
  'parent' : [] | [ParentData],
  'retweeters' : Array<UserData>,
  'images' : Array<string>,
};
export type Result = { 'ok' : null } |
  { 'err' : Error };
export type Result_1 = { 'ok' : UserStable } |
  { 'err' : Error };
export type Result_10 = { 'ok' : bigint } |
  { 'err' : Error };
export type Result_11 = { 'ok' : CommentStable } |
  { 'err' : Error };
export type Result_2 = { 'ok' : Array<Notification> } |
  { 'err' : Error };
export type Result_3 = { 'ok' : Array<UserStable> } |
  { 'err' : Error };
export type Result_4 = { 'ok' : [UserStable, Array<FullPost>] } |
  { 'err' : Error };
export type Result_5 = { 'ok' : string } |
  { 'err' : Error };
export type Result_6 = { 'ok' : ThreadStable } |
  { 'err' : Error };
export type Result_7 = { 'ok' : StablePost } |
  { 'err' : Error };
export type Result_8 = { 'ok' : SimpleMarketStable } |
  { 'err' : Error };
export type Result_9 = { 'ok' : [UserStable, Array<PostStable>] } |
  { 'err' : Error };
export interface Retweet {
  'id' : number,
  'content' : string,
  'createdAt' : Time,
  'author' : UserData,
  'parent' : [] | [ParentData],
};
export interface SimpleMarketStable {
  'id' : number,
  'matcherResolution' : bigint,
  'matcherChoice' : bigint,
  'matcherAmount' : bigint,
  'modifiedAt' : Time,
  'createdAt' : Time,
  'collateralType' : CollateralType,
  'description' : string,
  'authorResolution' : bigint,
  'author' : [] | [UserData],
  'outcomes' : Array<string>,
  'state' : State,
  'matcher' : [] | [UserData],
  'amount' : bigint,
  'authorChoice' : bigint,
  'authorAmount' : bigint,
};
export type StablePost = { 'v0' : PostStable0 } |
  { 'v1' : PostStable1 } |
  { 'v2' : PostStable2 } |
  { 'v3' : PostStable3 };
export type StableState = { 'v0' : StableState0 } |
  { 'v1' : StableState1 };
export interface StableState0 {
  'payments' : Array<Payment>,
  'bets' : Array<[number, SimpleMarketStable]>,
  'feed' : Array<number>,
  'handles' : Array<[string, string]>,
  'markets' : Array<[number, MarketStable]>,
  'users' : Array<[string, UserStable]>,
  'posts' : Array<[number, PostStable]>,
  'images' : Array<[number, string]>,
};
export interface StableState1 {
  'hashtags' : Array<[string, Array<number>]>,
  'payments' : Array<Payment>,
  'bets' : Array<[number, SimpleMarketStable]>,
  'feed' : Array<number>,
  'handles' : Array<[string, string]>,
  'assets' : Array<[string, Asset]>,
  'markets' : Array<[number, MarketStable]>,
  'users' : Array<[string, UserStable]>,
  'chunks' : Array<[bigint, Chunk]>,
  'posts' : Array<[number, PostStable]>,
  'postsv' : Array<[number, StablePost]>,
  'images' : Array<[number, string]>,
};
export type State = { 'resolved' : bigint } |
  { 'closed' : null } |
  { 'cancelled' : null } |
  { 'redeemed' : bigint } |
  { 'open' : null } |
  { 'matched' : null };
export interface StreamingCallbackHttpResponse {
  'token' : [] | [StreamingCallbackToken],
  'body' : Array<number>,
};
export interface StreamingCallbackToken {
  'key' : string,
  'index' : bigint,
  'content_encoding' : string,
};
export type StreamingStrategy = {
    'Callback' : {
      'token' : StreamingCallbackToken,
      'callback' : [Principal, string],
    }
  };
export type Subaccount = Array<number>;
export interface ThreadStable {
  'main' : FullPost,
  'ancestors' : Array<FullPost>,
  'replies' : Array<FullPost>,
};
export type Time = bigint;
export interface UserData {
  'principal' : string,
  'name' : string,
  'picture' : string,
  'handle' : string,
};
export interface UserInitData {
  'id' : string,
  'age' : bigint,
  'bio' : string,
  'twitter' : string,
  'city' : string,
  'name' : string,
  'cover' : string,
  'website' : string,
  'picture' : string,
  'canister' : string,
  'number' : number,
  'discord' : string,
  'handle' : string,
};
export interface UserMarket {
  'brierScores' : Array<BrierScore>,
  'title' : string,
  'shares' : bigint,
  'modifiedAt' : Time,
  'redeemed' : boolean,
  'labels' : Array<string>,
  'createdAt' : Time,
  'collateralType' : CollateralType,
  'author' : boolean,
  'spent' : bigint,
  'marketId' : number,
  'balances' : Array<bigint>,
};
export type UserStable = { 'v0' : UserStable0 } |
  { 'v1' : UserStable1 } |
  { 'v2' : UserStable2 } |
  { 'v3' : UserStable3 } |
  { 'v4' : UserStable4 };
export interface UserStable0 {
  'id' : string,
  'age' : bigint,
  'bio' : string,
  'txs' : Array<MarketTx>,
  'retweets' : Array<number>,
  'expBalances' : Balance,
  'twitter' : string,
  'lastSeenAt' : Time,
  'modifiedAt' : Time,
  'city' : string,
  'name' : string,
  'createdAt' : Time,
  'cover' : string,
  'markets' : Array<UserMarket>,
  'website' : string,
  'likes' : Array<number>,
  'picture' : string,
  'minusBalances' : Balance,
  'plusBalances' : Balance,
  'canister' : string,
  'number' : number,
  'replies' : Array<number>,
  'discord' : string,
  'handle' : string,
  'comments' : Array<CommentStable>,
  'posts' : Array<number>,
  'followees' : Array<Followee>,
  'followers' : Array<Follower>,
  'depositAddrs' : DepositAddrs,
  'balances' : Balance,
  'depositICPaddr' : string,
};
export interface UserStable1 {
  'id' : string,
  'age' : bigint,
  'bio' : string,
  'txs' : Array<MarketTx>,
  'retweets' : Array<number>,
  'expBalances' : Balance,
  'twitter' : string,
  'lastSeenAt' : Time,
  'modifiedAt' : Time,
  'city' : string,
  'name' : string,
  'createdAt' : Time,
  'cover' : string,
  'markets' : Array<UserMarket>,
  'website' : string,
  'likes' : Array<number>,
  'picture' : string,
  'minusBalances' : Balance,
  'plusBalances' : Balance,
  'canister' : string,
  'number' : number,
  'replies' : Array<number>,
  'discord' : string,
  'handle' : string,
  'comments' : Array<CommentStable>,
  'posts' : Array<number>,
  'followees' : Array<Followee>,
  'followers' : Array<Follower>,
  'depositAddrs' : DepositAddrs,
  'balances' : Balance,
  'depositICPaddr' : string,
};
export interface UserStable2 {
  'id' : string,
  'age' : bigint,
  'bio' : string,
  'txs' : Array<MarketTx>,
  'retweets' : Array<number>,
  'expBalances' : Balance,
  'twitter' : string,
  'lastSeenAt' : Time,
  'modifiedAt' : Time,
  'city' : string,
  'name' : string,
  'createdAt' : Time,
  'cover' : string,
  'markets' : Array<UserMarket>,
  'website' : string,
  'likes' : Array<number>,
  'picture' : string,
  'minusBalances' : Balance,
  'plusBalances' : Balance,
  'canister' : string,
  'number' : number,
  'replies' : Array<number>,
  'discord' : string,
  'handle' : string,
  'lockedBalances' : Balance,
  'comments' : Array<CommentStable>,
  'posts' : Array<number>,
  'followees' : Array<Followee>,
  'followers' : Array<Follower>,
  'depositAddrs' : DepositAddrs,
  'balances' : Balance,
  'depositICPaddr' : string,
};
export interface UserStable3 {
  'id' : string,
  'age' : bigint,
  'bio' : string,
  'txs' : Array<MarketTx>,
  'retweets' : Array<number>,
  'expBalances' : Balance,
  'notifications' : Array<Notification>,
  'twitter' : string,
  'lastSeenAt' : Time,
  'modifiedAt' : Time,
  'city' : string,
  'name' : string,
  'createdAt' : Time,
  'cover' : string,
  'markets' : Array<UserMarket>,
  'website' : string,
  'likes' : Array<number>,
  'picture' : string,
  'minusBalances' : Balance,
  'plusBalances' : Balance,
  'canister' : string,
  'number' : number,
  'replies' : Array<number>,
  'discord' : string,
  'handle' : string,
  'lockedBalances' : Balance,
  'comments' : Array<CommentStable>,
  'posts' : Array<number>,
  'followees' : Array<Followee>,
  'followers' : Array<Follower>,
  'notificationsSeen' : bigint,
  'depositAddrs' : DepositAddrs,
  'balances' : Balance,
  'depositICPaddr' : string,
};
export interface UserStable4 {
  'id' : string,
  'age' : bigint,
  'bio' : string,
  'txs' : Array<MarketTx>,
  'retweets' : Array<number>,
  'expBalances' : Balance,
  'notifications' : Array<Notification>,
  'twitter' : string,
  'lastSeenAt' : Time,
  'modifiedAt' : Time,
  'city' : string,
  'name' : string,
  'createdAt' : Time,
  'cover' : string,
  'markets' : Array<UserMarket>,
  'website' : string,
  'likes' : Array<number>,
  'picture' : string,
  'minusBalances' : Balance,
  'plusBalances' : Balance,
  'canister' : string,
  'number' : number,
  'replies' : Array<number>,
  'discord' : string,
  'handle' : string,
  'lockedBalances' : Balance,
  'comments' : Array<CommentStable>,
  'posts' : Array<number>,
  'followees' : Array<FolloweeStable>,
  'followers' : Array<FollowerStable>,
  'notificationsSeen' : bigint,
  'depositAddrs' : DepositAddrs,
  'balances' : Balance,
  'depositICPaddr' : string,
};
export default interface _SERVICE {
  'accountBalance' : (arg_0: string) => Promise<[] | [ICP]>,
  'addCommentToMarket' : (arg_0: number, arg_1: string) => Promise<Result_11>,
  'buyOutcome' : (
      arg_0: number,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: boolean,
    ) => Promise<Result_10>,
  'callerAccount' : () => Promise<AccountIdentifier>,
  'canisterAccount' : () => Promise<string>,
  'canisterBalance' : () => Promise<ICP>,
  'commit_batch' : (
      arg_0: {
        'batch_name' : string,
        'content_type' : string,
        'chunk_ids' : Array<bigint>,
      },
    ) => Promise<undefined>,
  'createAnonUser' : () => Promise<Result_9>,
  'createBet' : (arg_0: InitData) => Promise<Result_8>,
  'create_chunk' : (arg_0: Chunk) => Promise<{ 'chunk_id' : bigint }>,
  'deleteAllMarkets' : () => Promise<undefined>,
  'deleteAllUsers' : () => Promise<boolean>,
  'deleteBet' : (arg_0: number) => Promise<Result>,
  'deleteMarket' : (arg_0: number) => Promise<undefined>,
  'editPost' : (arg_0: PostInitData, arg_1: [] | [MarketInitData]) => Promise<
      Result
    >,
  'editUser' : (arg_0: UserInitData) => Promise<Result_1>,
  'followUser' : (arg_0: string) => Promise<Result>,
  'getFeed' : () => Promise<
      Array<[StablePost, [] | [MarketStable], [] | [SimpleMarketStable]]>
    >,
  'getHandles' : () => Promise<Array<[string, string]>>,
  'getPayments' : () => Promise<Array<Payment>>,
  'getPaymentsError' : () => Promise<string>,
  'getPost' : (arg_0: number) => Promise<Result_7>,
  'getThread' : (arg_0: number) => Promise<Result_6>,
  'getUserAccount' : (arg_0: string) => Promise<Result_5>,
  'getUserFromPrincipal' : (arg_0: string) => Promise<Result_4>,
  'getUserStable' : (arg_0: string) => Promise<[] | [UserStable]>,
  'getUserWithPosts' : (arg_0: string) => Promise<Result_4>,
  'getUsers' : () => Promise<Array<[string, UserStable]>>,
  'getUsersFromPrincipals' : (arg_0: Array<string>) => Promise<Result_3>,
  'haveNotifications' : () => Promise<boolean>,
  'http_request' : (arg_0: HttpRequest) => Promise<HttpResponse>,
  'http_request_streaming_callback' : (
      arg_0: StreamingCallbackToken,
    ) => Promise<StreamingCallbackHttpResponse>,
  'matchBet' : (arg_0: number) => Promise<Result>,
  'otherAccount' : () => Promise<string>,
  'readAllBets' : () => Promise<Array<SimpleMarketStable>>,
  'readAllMarkets' : (arg_0: MarketCategory, arg_1: MarketState) => Promise<
      Array<MarketStable>
    >,
  'readAllUsers' : () => Promise<Array<UserStable>>,
  'readFIFAMarkets' : () => Promise<Array<MarketStable>>,
  'readMarket' : (arg_0: number) => Promise<[] | [MarketStable]>,
  'readNotifications' : () => Promise<Result_2>,
  'readRankedUsers' : () => Promise<Array<UserStable>>,
  'readStableState' : () => Promise<StableState>,
  'readState' : () => Promise<StableState>,
  'readUserByHandle' : (arg_0: string) => Promise<[] | [UserStable]>,
  'readUserByPrincipal' : (arg_0: string) => Promise<[] | [UserStable]>,
  'redeemBet' : (arg_0: number) => Promise<Result>,
  'refreshUser' : () => Promise<Result_1>,
  'resolveBet' : (arg_0: number, arg_1: bigint) => Promise<Result>,
  'resolveMarket' : (arg_0: number, arg_1: bigint) => Promise<Result>,
  'setAvatar' : (arg_0: string, arg_1: string) => Promise<Result>,
  'setCover' : (arg_0: string, arg_1: string) => Promise<Result>,
  'setHandle' : (arg_0: string, arg_1: string) => Promise<Result>,
  'setIcpBalance' : (arg_0: string, arg_1: bigint) => Promise<Result>,
  'setMarketImage' : (arg_0: number, arg_1: string) => Promise<boolean>,
  'setMarketPost' : (arg_0: number, arg_1: number) => Promise<Result>,
  'setMarketState' : (arg_0: number, arg_1: MarketState) => Promise<boolean>,
  'setMarketTitle' : (arg_0: number, arg_1: string) => Promise<boolean>,
  'setPrincipal' : (arg_0: string, arg_1: string) => Promise<Result>,
  'setTwitter' : (arg_0: string, arg_1: string) => Promise<Result>,
  'setUpdating' : (arg_0: boolean) => Promise<undefined>,
  'submitDelete' : (arg_0: number) => Promise<Result>,
  'submitLike' : (arg_0: number) => Promise<Result>,
  'submitPost' : (
      arg_0: PostInitData,
      arg_1: [] | [MarketInitData],
      arg_2: [] | [InitData],
    ) => Promise<Result>,
  'submitRetweet' : (arg_0: number) => Promise<Result>,
  'transferToCanister' : () => Promise<string>,
  'transferToHandle' : (arg_0: string, arg_1: bigint) => Promise<Result>,
  'transferToIdentifier' : (arg_0: string, arg_1: bigint) => Promise<Result>,
  'unfollowUser' : (arg_0: string) => Promise<Result>,
  'unlockFunds' : (
      arg_0: string,
      arg_1: CollateralType,
      arg_2: bigint,
    ) => Promise<Result>,
  'updateNotifications' : () => Promise<Result>,
};