export default ({ IDL }) => {
  const ICP = IDL.Record({ 'e8s' : IDL.Nat64 });
  const Time = IDL.Int;
  const UserData = IDL.Record({
    'principal' : IDL.Text,
    'name' : IDL.Text,
    'picture' : IDL.Text,
    'handle' : IDL.Text,
  });
  const Like = IDL.Record({ 'createdAt' : Time, 'author' : UserData });
  const CommentStable = IDL.Record({
    'id' : IDL.Nat32,
    'content' : IDL.Text,
    'modifiedAt' : Time,
    'createdAt' : Time,
    'author' : UserData,
    'likes' : IDL.Vec(Like),
  });
  const Error = IDL.Variant({
    'insufficientBalance' : IDL.Null,
    'callerIsAnon' : IDL.Null,
    'missingICPaddress' : IDL.Null,
    'userAlreadyExist' : IDL.Null,
    'nothingToRedeem' : IDL.Null,
    'notLoggedIn' : IDL.Null,
    'imageMissing' : IDL.Null,
    'profileNotCreated' : IDL.Null,
    'invalidIdentifier' : IDL.Null,
    'parentDoesNotExist' : IDL.Null,
    'notEnoughBalance' : IDL.Null,
    'postIsEmpty' : IDL.Null,
    'optionsMissing' : IDL.Null,
    'betDoesNotExist' : IDL.Null,
    'failedTransfer' : IDL.Text,
    'descriptionMissing' : IDL.Null,
    'marketNotFound' : IDL.Null,
    'titleMissing' : IDL.Null,
    'handleAlreadyTaken' : IDL.Null,
    'canNotDelete' : IDL.Null,
    'imageNotFound' : IDL.Null,
    'alreadyLiked' : IDL.Null,
    'lowerThanMinAmount' : IDL.Null,
    'onlyAuthorCanDelete' : IDL.Null,
    'missingDescription' : IDL.Null,
    'marketMissing' : IDL.Null,
    'startDateOld' : IDL.Null,
    'marketNotOpen' : IDL.Null,
    'callerIsNotAuthor' : IDL.Null,
    'onlyAuthorCanEdit' : IDL.Null,
    'postDoesNotExist' : IDL.Null,
    'alreadyRetweeted' : IDL.Null,
    'commentIsEmpty' : IDL.Null,
    'userDoesNotExist' : IDL.Null,
    'outcomeMissing' : IDL.Null,
    'authorOutcomeMissing' : IDL.Null,
    'endDateOld' : IDL.Null,
    'cantGetBalance' : IDL.Null,
    'notEnoughBetAmount' : IDL.Null,
    'newtonFailed' : IDL.Null,
    'notEnoughAmount' : IDL.Null,
    'endDateOlderThanStartDate' : IDL.Null,
    'wrongNumberOfOutcomes' : IDL.Null,
    'authorDoesNotExist' : IDL.Null,
    'cannotBeRedeemed' : IDL.Null,
    'notEnoughLiquidity' : IDL.Null,
  });
  const Result_11 = IDL.Variant({ 'ok' : CommentStable, 'err' : Error });
  const Result_10 = IDL.Variant({ 'ok' : IDL.Nat64, 'err' : Error });
  const AccountIdentifier = IDL.Vec(IDL.Nat8);
  const CollateralType = IDL.Variant({
    'btc' : IDL.Null,
    'icp' : IDL.Null,
    'seers' : IDL.Null,
    'cycles' : IDL.Null,
  });
  const MarketTx = IDL.Record({
    'id' : IDL.Nat32,
    'fee' : IDL.Nat64,
    'src' : IDL.Opt(IDL.Nat),
    'dest' : IDL.Opt(IDL.Nat),
    'createdAt' : Time,
    'recv' : IDL.Nat64,
    'sent' : IDL.Nat64,
    'collateralType' : CollateralType,
    'marketId' : IDL.Nat32,
    'price' : IDL.Nat64,
  });
  const Balance = IDL.Record({
    'btc' : IDL.Nat64,
    'icp' : IDL.Nat64,
    'seers' : IDL.Nat64,
    'cycles' : IDL.Nat64,
  });
  const BrierScore = IDL.Record({ 'createdAt' : Time, 'score' : IDL.Float64 });
  const UserMarket = IDL.Record({
    'brierScores' : IDL.Vec(BrierScore),
    'title' : IDL.Text,
    'shares' : IDL.Nat64,
    'modifiedAt' : Time,
    'redeemed' : IDL.Bool,
    'labels' : IDL.Vec(IDL.Text),
    'createdAt' : Time,
    'collateralType' : CollateralType,
    'author' : IDL.Bool,
    'spent' : IDL.Nat64,
    'marketId' : IDL.Nat32,
    'balances' : IDL.Vec(IDL.Nat64),
  });
  const Followee = IDL.Record({ 'createdAt' : Time, 'user' : IDL.Text });
  const Follower = IDL.Record({ 'createdAt' : Time, 'user' : IDL.Text });
  const Subaccount = IDL.Vec(IDL.Nat8);
  const DepositAddrs = IDL.Record({
    'btc' : IDL.Text,
    'icp' : Subaccount,
    'cycles' : IDL.Text,
  });
  const UserStable0 = IDL.Record({
    'id' : IDL.Text,
    'age' : IDL.Nat,
    'bio' : IDL.Text,
    'txs' : IDL.Vec(MarketTx),
    'retweets' : IDL.Vec(IDL.Nat32),
    'expBalances' : Balance,
    'twitter' : IDL.Text,
    'lastSeenAt' : Time,
    'modifiedAt' : Time,
    'city' : IDL.Text,
    'name' : IDL.Text,
    'createdAt' : Time,
    'cover' : IDL.Text,
    'markets' : IDL.Vec(UserMarket),
    'website' : IDL.Text,
    'likes' : IDL.Vec(IDL.Nat32),
    'picture' : IDL.Text,
    'minusBalances' : Balance,
    'plusBalances' : Balance,
    'canister' : IDL.Text,
    'number' : IDL.Nat32,
    'replies' : IDL.Vec(IDL.Nat32),
    'discord' : IDL.Text,
    'handle' : IDL.Text,
    'comments' : IDL.Vec(CommentStable),
    'posts' : IDL.Vec(IDL.Nat32),
    'followees' : IDL.Vec(Followee),
    'followers' : IDL.Vec(Follower),
    'depositAddrs' : DepositAddrs,
    'balances' : Balance,
    'depositICPaddr' : IDL.Text,
  });
  const UserStable1 = IDL.Record({
    'id' : IDL.Text,
    'age' : IDL.Nat,
    'bio' : IDL.Text,
    'txs' : IDL.Vec(MarketTx),
    'retweets' : IDL.Vec(IDL.Nat32),
    'expBalances' : Balance,
    'twitter' : IDL.Text,
    'lastSeenAt' : Time,
    'modifiedAt' : Time,
    'city' : IDL.Text,
    'name' : IDL.Text,
    'createdAt' : Time,
    'cover' : IDL.Text,
    'markets' : IDL.Vec(UserMarket),
    'website' : IDL.Text,
    'likes' : IDL.Vec(IDL.Nat32),
    'picture' : IDL.Text,
    'minusBalances' : Balance,
    'plusBalances' : Balance,
    'canister' : IDL.Text,
    'number' : IDL.Nat32,
    'replies' : IDL.Vec(IDL.Nat32),
    'discord' : IDL.Text,
    'handle' : IDL.Text,
    'comments' : IDL.Vec(CommentStable),
    'posts' : IDL.Vec(IDL.Nat32),
    'followees' : IDL.Vec(Followee),
    'followers' : IDL.Vec(Follower),
    'depositAddrs' : DepositAddrs,
    'balances' : Balance,
    'depositICPaddr' : IDL.Text,
  });
  const UserStable2 = IDL.Record({
    'id' : IDL.Text,
    'age' : IDL.Nat,
    'bio' : IDL.Text,
    'txs' : IDL.Vec(MarketTx),
    'retweets' : IDL.Vec(IDL.Nat32),
    'expBalances' : Balance,
    'twitter' : IDL.Text,
    'lastSeenAt' : Time,
    'modifiedAt' : Time,
    'city' : IDL.Text,
    'name' : IDL.Text,
    'createdAt' : Time,
    'cover' : IDL.Text,
    'markets' : IDL.Vec(UserMarket),
    'website' : IDL.Text,
    'likes' : IDL.Vec(IDL.Nat32),
    'picture' : IDL.Text,
    'minusBalances' : Balance,
    'plusBalances' : Balance,
    'canister' : IDL.Text,
    'number' : IDL.Nat32,
    'replies' : IDL.Vec(IDL.Nat32),
    'discord' : IDL.Text,
    'handle' : IDL.Text,
    'lockedBalances' : Balance,
    'comments' : IDL.Vec(CommentStable),
    'posts' : IDL.Vec(IDL.Nat32),
    'followees' : IDL.Vec(Followee),
    'followers' : IDL.Vec(Follower),
    'depositAddrs' : DepositAddrs,
    'balances' : Balance,
    'depositICPaddr' : IDL.Text,
  });
  const ParentData__1 = IDL.Record({ 'id' : IDL.Nat32, 'author' : UserData });
  const NotificationPost = IDL.Record({
    'id' : IDL.Nat32,
    'isRetweet' : IDL.Opt(UserData),
    'simpleMarket' : IDL.Nat32,
    'content' : IDL.Text,
    'createdAt' : Time,
    'author' : UserData,
    'market' : IDL.Nat32,
    'image' : IDL.Opt(IDL.Text),
    'parent' : IDL.Opt(ParentData__1),
    'images' : IDL.Vec(IDL.Text),
  });
  const NotificationType0 = IDL.Variant({ 'reply' : NotificationPost });
  const Notification = IDL.Variant({ 'v0' : NotificationType0 });
  const UserStable3 = IDL.Record({
    'id' : IDL.Text,
    'age' : IDL.Nat,
    'bio' : IDL.Text,
    'txs' : IDL.Vec(MarketTx),
    'retweets' : IDL.Vec(IDL.Nat32),
    'expBalances' : Balance,
    'notifications' : IDL.Vec(Notification),
    'twitter' : IDL.Text,
    'lastSeenAt' : Time,
    'modifiedAt' : Time,
    'city' : IDL.Text,
    'name' : IDL.Text,
    'createdAt' : Time,
    'cover' : IDL.Text,
    'markets' : IDL.Vec(UserMarket),
    'website' : IDL.Text,
    'likes' : IDL.Vec(IDL.Nat32),
    'picture' : IDL.Text,
    'minusBalances' : Balance,
    'plusBalances' : Balance,
    'canister' : IDL.Text,
    'number' : IDL.Nat32,
    'replies' : IDL.Vec(IDL.Nat32),
    'discord' : IDL.Text,
    'handle' : IDL.Text,
    'lockedBalances' : Balance,
    'comments' : IDL.Vec(CommentStable),
    'posts' : IDL.Vec(IDL.Nat32),
    'followees' : IDL.Vec(Followee),
    'followers' : IDL.Vec(Follower),
    'notificationsSeen' : IDL.Nat,
    'depositAddrs' : DepositAddrs,
    'balances' : Balance,
    'depositICPaddr' : IDL.Text,
  });
  const Followee0 = IDL.Record({ 'userdata' : UserData, 'createdAt' : Time });
  const FolloweeStable = IDL.Variant({ 'v0' : Followee0 });
  const Follower0 = IDL.Record({ 'userdata' : UserData, 'createdAt' : Time });
  const FollowerStable = IDL.Variant({ 'v0' : Follower0 });
  const UserStable4 = IDL.Record({
    'id' : IDL.Text,
    'age' : IDL.Nat,
    'bio' : IDL.Text,
    'txs' : IDL.Vec(MarketTx),
    'retweets' : IDL.Vec(IDL.Nat32),
    'expBalances' : Balance,
    'notifications' : IDL.Vec(Notification),
    'twitter' : IDL.Text,
    'lastSeenAt' : Time,
    'modifiedAt' : Time,
    'city' : IDL.Text,
    'name' : IDL.Text,
    'createdAt' : Time,
    'cover' : IDL.Text,
    'markets' : IDL.Vec(UserMarket),
    'website' : IDL.Text,
    'likes' : IDL.Vec(IDL.Nat32),
    'picture' : IDL.Text,
    'minusBalances' : Balance,
    'plusBalances' : Balance,
    'canister' : IDL.Text,
    'number' : IDL.Nat32,
    'replies' : IDL.Vec(IDL.Nat32),
    'discord' : IDL.Text,
    'handle' : IDL.Text,
    'lockedBalances' : Balance,
    'comments' : IDL.Vec(CommentStable),
    'posts' : IDL.Vec(IDL.Nat32),
    'followees' : IDL.Vec(FolloweeStable),
    'followers' : IDL.Vec(FollowerStable),
    'notificationsSeen' : IDL.Nat,
    'depositAddrs' : DepositAddrs,
    'balances' : Balance,
    'depositICPaddr' : IDL.Text,
  });
  const UserStable = IDL.Variant({
    'v0' : UserStable0,
    'v1' : UserStable1,
    'v2' : UserStable2,
    'v3' : UserStable3,
    'v4' : UserStable4,
  });
  const ParentData = IDL.Record({ 'id' : IDL.Nat32, 'author' : UserData });
  const Retweet = IDL.Record({
    'id' : IDL.Nat32,
    'content' : IDL.Text,
    'createdAt' : Time,
    'author' : UserData,
    'parent' : IDL.Opt(ParentData),
  });
  const PostStable = IDL.Record({
    'id' : IDL.Nat32,
    'retweet' : IDL.Opt(Retweet),
    'isRetweet' : IDL.Opt(UserData),
    'simpleMarket' : IDL.Nat32,
    'deleted' : IDL.Bool,
    'content' : IDL.Text,
    'createdAt' : Time,
    'author' : UserData,
    'likes' : IDL.Vec(Like),
    'replies' : IDL.Vec(IDL.Nat32),
    'market' : IDL.Nat32,
    'image' : IDL.Opt(IDL.Text),
    'parent' : IDL.Opt(ParentData),
    'retweeters' : IDL.Vec(UserData),
  });
  const Result_9 = IDL.Variant({
    'ok' : IDL.Tuple(UserStable, IDL.Vec(PostStable)),
    'err' : Error,
  });
  const InitData = IDL.Record({
    'id' : IDL.Nat32,
    'collateralType' : CollateralType,
    'description' : IDL.Text,
    'author' : IDL.Opt(UserData),
    'outcomes' : IDL.Vec(IDL.Text),
    'authorChoice' : IDL.Nat,
    'authorAmount' : IDL.Nat64,
  });
  const State = IDL.Variant({
    'resolved' : IDL.Nat,
    'closed' : IDL.Null,
    'cancelled' : IDL.Null,
    'redeemed' : IDL.Nat,
    'open' : IDL.Null,
    'matched' : IDL.Null,
  });
  const SimpleMarketStable = IDL.Record({
    'id' : IDL.Nat32,
    'matcherResolution' : IDL.Nat,
    'matcherChoice' : IDL.Nat,
    'matcherAmount' : IDL.Nat64,
    'modifiedAt' : Time,
    'createdAt' : Time,
    'collateralType' : CollateralType,
    'description' : IDL.Text,
    'authorResolution' : IDL.Nat,
    'author' : IDL.Opt(UserData),
    'outcomes' : IDL.Vec(IDL.Text),
    'state' : State,
    'matcher' : IDL.Opt(UserData),
    'amount' : IDL.Nat64,
    'authorChoice' : IDL.Nat,
    'authorAmount' : IDL.Nat64,
  });
  const Result_8 = IDL.Variant({ 'ok' : SimpleMarketStable, 'err' : Error });
  const Chunk = IDL.Record({
    'content' : IDL.Vec(IDL.Nat8),
    'batch_name' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : Error });
  const PostInitData = IDL.Record({
    'id' : IDL.Nat32,
    'retweet' : IDL.Opt(Retweet),
    'isRetweet' : IDL.Opt(UserData),
    'simpleMarket' : IDL.Nat32,
    'verified' : IDL.Bool,
    'content' : IDL.Text,
    'hashtags' : IDL.Vec(IDL.Text),
    'pdfs' : IDL.Vec(IDL.Text),
    'author' : UserData,
    'market' : IDL.Nat32,
    'image' : IDL.Opt(IDL.Text),
    'mentions' : IDL.Vec(IDL.Text),
    'parent' : IDL.Opt(ParentData),
    'images' : IDL.Vec(IDL.Text),
  });
  const MarketCategory = IDL.Variant({
    'any' : IDL.Null,
    'entertainment' : IDL.Null,
    'self' : IDL.Null,
    'seers' : IDL.Null,
    'crypto' : IDL.Null,
    'business' : IDL.Null,
    'financial' : IDL.Null,
    'sports' : IDL.Null,
    'dfinity' : IDL.Null,
    'science' : IDL.Null,
    'politics' : IDL.Null,
  });
  const MarketInitData = IDL.Record({
    'id' : IDL.Nat32,
    'title' : IDL.Text,
    'probabilities' : IDL.Vec(IDL.Nat),
    'endDate' : Time,
    'labels' : IDL.Vec(IDL.Text),
    'liquidity' : IDL.Nat,
    'collateralType' : CollateralType,
    'description' : IDL.Text,
    'author' : IDL.Text,
    'imageUrl' : IDL.Text,
    'category' : MarketCategory,
    'startDate' : Time,
    'images' : IDL.Vec(IDL.Text),
  });
  const UserInitData = IDL.Record({
    'id' : IDL.Text,
    'age' : IDL.Nat,
    'bio' : IDL.Text,
    'twitter' : IDL.Text,
    'city' : IDL.Text,
    'name' : IDL.Text,
    'cover' : IDL.Text,
    'website' : IDL.Text,
    'picture' : IDL.Text,
    'canister' : IDL.Text,
    'number' : IDL.Nat32,
    'discord' : IDL.Text,
    'handle' : IDL.Text,
  });
  const Result_1 = IDL.Variant({ 'ok' : UserStable, 'err' : Error });
  const PostStable0 = IDL.Record({
    'id' : IDL.Nat32,
    'retweet' : IDL.Opt(Retweet),
    'isRetweet' : IDL.Opt(UserData),
    'simpleMarket' : IDL.Nat32,
    'deleted' : IDL.Bool,
    'content' : IDL.Text,
    'createdAt' : Time,
    'author' : UserData,
    'likes' : IDL.Vec(Like),
    'replies' : IDL.Vec(IDL.Nat32),
    'market' : IDL.Nat32,
    'image' : IDL.Opt(IDL.Text),
    'parent' : IDL.Opt(ParentData),
    'retweeters' : IDL.Vec(UserData),
  });
  const PostStable1 = IDL.Record({
    'id' : IDL.Nat32,
    'retweet' : IDL.Opt(Retweet),
    'isRetweet' : IDL.Opt(UserData),
    'simpleMarket' : IDL.Nat32,
    'deleted' : IDL.Bool,
    'content' : IDL.Text,
    'createdAt' : Time,
    'author' : UserData,
    'likes' : IDL.Vec(Like),
    'replies' : IDL.Vec(IDL.Nat32),
    'market' : IDL.Nat32,
    'image' : IDL.Opt(IDL.Text),
    'parent' : IDL.Opt(ParentData),
    'retweeters' : IDL.Vec(UserData),
    'images' : IDL.Vec(IDL.Text),
  });
  const PostStable2 = IDL.Record({
    'id' : IDL.Nat32,
    'retweet' : IDL.Opt(Retweet),
    'isRetweet' : IDL.Opt(UserData),
    'simpleMarket' : IDL.Nat32,
    'deleted' : IDL.Bool,
    'content' : IDL.Text,
    'hashtags' : IDL.Vec(IDL.Text),
    'createdAt' : Time,
    'author' : UserData,
    'likes' : IDL.Vec(Like),
    'replies' : IDL.Vec(IDL.Nat32),
    'market' : IDL.Nat32,
    'image' : IDL.Opt(IDL.Text),
    'mentions' : IDL.Vec(IDL.Text),
    'parent' : IDL.Opt(ParentData),
    'retweeters' : IDL.Vec(UserData),
    'images' : IDL.Vec(IDL.Text),
  });
  const PostStable3 = IDL.Record({
    'id' : IDL.Nat32,
    'retweet' : IDL.Opt(Retweet),
    'isRetweet' : IDL.Opt(UserData),
    'simpleMarket' : IDL.Nat32,
    'verified' : IDL.Bool,
    'deleted' : IDL.Bool,
    'content' : IDL.Text,
    'hashtags' : IDL.Vec(IDL.Text),
    'createdAt' : Time,
    'pdfs' : IDL.Vec(IDL.Text),
    'author' : UserData,
    'likes' : IDL.Vec(Like),
    'replies' : IDL.Vec(IDL.Nat32),
    'market' : IDL.Nat32,
    'image' : IDL.Opt(IDL.Text),
    'mentions' : IDL.Vec(IDL.Text),
    'parent' : IDL.Opt(ParentData),
    'retweeters' : IDL.Vec(UserData),
    'images' : IDL.Vec(IDL.Text),
  });
  const StablePost = IDL.Variant({
    'v0' : PostStable0,
    'v1' : PostStable1,
    'v2' : PostStable2,
    'v3' : PostStable3,
  });
  const Forecast = IDL.Vec(IDL.Float64);
  const HistPoint = IDL.Record({
    'probabilities' : IDL.Vec(IDL.Nat),
    'createdAt' : Time,
    'liquidity' : IDL.Nat,
  });
  const Bettor = IDL.Record({
    'id' : IDL.Text,
    'spent' : IDL.Nat64,
    'outcome' : IDL.Nat,
  });
  const MarketState = IDL.Variant({
    'any' : IDL.Null,
    'resolved' : IDL.Nat,
    'closed' : IDL.Null,
    'pending' : IDL.Null,
    'invalid' : IDL.Null,
    'open' : IDL.Null,
    'approved' : IDL.Null,
  });
  const MarketStable = IDL.Record({
    'k' : IDL.Nat,
    'id' : IDL.Nat32,
    'forecasts' : IDL.Vec(Forecast),
    'title' : IDL.Text,
    'histPrices' : IDL.Vec(HistPoint),
    'probabilities' : IDL.Vec(IDL.Nat),
    'endDate' : Time,
    'modifiedAt' : Time,
    'labels' : IDL.Vec(IDL.Text),
    'createdAt' : Time,
    'liquidity' : IDL.Nat,
    'reserves' : IDL.Vec(IDL.Nat),
    'collateralType' : CollateralType,
    'description' : IDL.Text,
    'volume' : IDL.Nat,
    'bettors' : IDL.Vec(Bettor),
    'author' : IDL.Text,
    'state' : MarketState,
    'imageUrl' : IDL.Text,
    'category' : MarketCategory,
    'providers' : IDL.Vec(IDL.Text),
    'comments' : IDL.Vec(CommentStable),
    'totalShares' : IDL.Nat,
    'startDate' : Time,
    'images' : IDL.Vec(IDL.Text),
  });
  const Payment = IDL.Record({
    'to' : IDL.Text,
    'from' : IDL.Text,
    'collateralType' : CollateralType,
    'processed' : IDL.Bool,
    'amount' : IDL.Nat64,
  });
  const Result_7 = IDL.Variant({ 'ok' : StablePost, 'err' : Error });
  const FullPost = IDL.Tuple(
    StablePost,
    IDL.Opt(MarketStable),
    IDL.Opt(SimpleMarketStable),
  );
  const ThreadStable = IDL.Record({
    'main' : FullPost,
    'ancestors' : IDL.Vec(FullPost),
    'replies' : IDL.Vec(FullPost),
  });
  const Result_6 = IDL.Variant({ 'ok' : ThreadStable, 'err' : Error });
  const Result_5 = IDL.Variant({ 'ok' : IDL.Text, 'err' : Error });
  const Result_4 = IDL.Variant({
    'ok' : IDL.Tuple(UserStable, IDL.Vec(FullPost)),
    'err' : Error,
  });
  const Result_3 = IDL.Variant({ 'ok' : IDL.Vec(UserStable), 'err' : Error });
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const HttpRequest = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
  });
  const StreamingCallbackToken = IDL.Record({
    'key' : IDL.Text,
    'index' : IDL.Nat,
    'content_encoding' : IDL.Text,
  });
  const StreamingStrategy = IDL.Variant({
    'Callback' : IDL.Record({
      'token' : StreamingCallbackToken,
      'callback' : IDL.Func([], [], []),
    }),
  });
  const HttpResponse = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'streaming_strategy' : IDL.Opt(StreamingStrategy),
    'status_code' : IDL.Nat16,
  });
  const StreamingCallbackHttpResponse = IDL.Record({
    'token' : IDL.Opt(StreamingCallbackToken),
    'body' : IDL.Vec(IDL.Nat8),
  });
  const Result_2 = IDL.Variant({ 'ok' : IDL.Vec(Notification), 'err' : Error });
  const StableState0 = IDL.Record({
    'payments' : IDL.Vec(Payment),
    'bets' : IDL.Vec(IDL.Tuple(IDL.Nat32, SimpleMarketStable)),
    'feed' : IDL.Vec(IDL.Nat32),
    'handles' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
    'markets' : IDL.Vec(IDL.Tuple(IDL.Nat32, MarketStable)),
    'users' : IDL.Vec(IDL.Tuple(IDL.Text, UserStable)),
    'posts' : IDL.Vec(IDL.Tuple(IDL.Nat32, PostStable)),
    'images' : IDL.Vec(IDL.Tuple(IDL.Nat32, IDL.Text)),
  });
  const AssetEncoding = IDL.Record({
    'modified' : IDL.Int,
    'certified' : IDL.Bool,
    'content_chunks' : IDL.Vec(IDL.Vec(IDL.Nat8)),
    'total_length' : IDL.Nat,
  });
  const Asset = IDL.Record({
    'encoding' : AssetEncoding,
    'content_type' : IDL.Text,
  });
  const StableState1 = IDL.Record({
    'hashtags' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Vec(IDL.Nat32))),
    'payments' : IDL.Vec(Payment),
    'bets' : IDL.Vec(IDL.Tuple(IDL.Nat32, SimpleMarketStable)),
    'feed' : IDL.Vec(IDL.Nat32),
    'handles' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
    'assets' : IDL.Vec(IDL.Tuple(IDL.Text, Asset)),
    'markets' : IDL.Vec(IDL.Tuple(IDL.Nat32, MarketStable)),
    'users' : IDL.Vec(IDL.Tuple(IDL.Text, UserStable)),
    'chunks' : IDL.Vec(IDL.Tuple(IDL.Nat, Chunk)),
    'posts' : IDL.Vec(IDL.Tuple(IDL.Nat32, PostStable)),
    'postsv' : IDL.Vec(IDL.Tuple(IDL.Nat32, StablePost)),
    'images' : IDL.Vec(IDL.Tuple(IDL.Nat32, IDL.Text)),
  });
  const StableState = IDL.Variant({ 'v0' : StableState0, 'v1' : StableState1 });
  return IDL.Service({
    'accountBalance' : IDL.Func([IDL.Text], [IDL.Opt(ICP)], []),
    'addCommentToMarket' : IDL.Func([IDL.Nat32, IDL.Text], [Result_11], []),
    'buyOutcome' : IDL.Func(
        [IDL.Nat32, IDL.Nat64, IDL.Nat, IDL.Bool],
        [Result_10],
        [],
      ),
    'callerAccount' : IDL.Func([], [AccountIdentifier], []),
    'canisterAccount' : IDL.Func([], [IDL.Text], ['query']),
    'canisterBalance' : IDL.Func([], [ICP], []),
    'commit_batch' : IDL.Func(
        [
          IDL.Record({
            'batch_name' : IDL.Text,
            'content_type' : IDL.Text,
            'chunk_ids' : IDL.Vec(IDL.Nat),
          }),
        ],
        [],
        [],
      ),
    'createAnonUser' : IDL.Func([], [Result_9], []),
    'createBet' : IDL.Func([InitData], [Result_8], []),
    'create_chunk' : IDL.Func(
        [Chunk],
        [IDL.Record({ 'chunk_id' : IDL.Nat })],
        [],
      ),
    'deleteAllMarkets' : IDL.Func([], [], []),
    'deleteAllUsers' : IDL.Func([], [IDL.Bool], []),
    'deleteBet' : IDL.Func([IDL.Nat32], [Result], []),
    'deleteMarket' : IDL.Func([IDL.Nat32], [], []),
    'editPost' : IDL.Func(
        [PostInitData, IDL.Opt(MarketInitData)],
        [Result],
        [],
      ),
    'editUser' : IDL.Func([UserInitData], [Result_1], []),
    'followUser' : IDL.Func([IDL.Text], [Result], []),
    'getFeed' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Tuple(
              StablePost,
              IDL.Opt(MarketStable),
              IDL.Opt(SimpleMarketStable),
            )
          ),
        ],
        ['query'],
      ),
    'getHandles' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        ['query'],
      ),
    'getPayments' : IDL.Func([], [IDL.Vec(Payment)], ['query']),
    'getPaymentsError' : IDL.Func([], [IDL.Text], ['query']),
    'getPost' : IDL.Func([IDL.Nat32], [Result_7], ['query']),
    'getThread' : IDL.Func([IDL.Nat32], [Result_6], ['query']),
    'getUserAccount' : IDL.Func([IDL.Text], [Result_5], []),
    'getUserFromPrincipal' : IDL.Func([IDL.Text], [Result_4], ['query']),
    'getUserStable' : IDL.Func([IDL.Text], [IDL.Opt(UserStable)], ['query']),
    'getUserWithPosts' : IDL.Func([IDL.Text], [Result_4], ['query']),
    'getUsers' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, UserStable))],
        ['query'],
      ),
    'getUsersFromPrincipals' : IDL.Func(
        [IDL.Vec(IDL.Text)],
        [Result_3],
        ['query'],
      ),
    'haveNotifications' : IDL.Func([], [IDL.Bool], ['query']),
    'http_request' : IDL.Func([HttpRequest], [HttpResponse], ['query']),
    'http_request_streaming_callback' : IDL.Func(
        [StreamingCallbackToken],
        [StreamingCallbackHttpResponse],
        ['query'],
      ),
    'matchBet' : IDL.Func([IDL.Nat32], [Result], []),
    'otherAccount' : IDL.Func([], [IDL.Text], ['query']),
    'readAllBets' : IDL.Func([], [IDL.Vec(SimpleMarketStable)], ['query']),
    'readAllMarkets' : IDL.Func(
        [MarketCategory, MarketState],
        [IDL.Vec(MarketStable)],
        ['query'],
      ),
    'readAllUsers' : IDL.Func([], [IDL.Vec(UserStable)], ['query']),
    'readFIFAMarkets' : IDL.Func([], [IDL.Vec(MarketStable)], ['query']),
    'readMarket' : IDL.Func([IDL.Nat32], [IDL.Opt(MarketStable)], ['query']),
    'readNotifications' : IDL.Func([], [Result_2], ['query']),
    'readRankedUsers' : IDL.Func([], [IDL.Vec(UserStable)], ['query']),
    'readStableState' : IDL.Func([], [StableState], ['query']),
    'readState' : IDL.Func([], [StableState], ['query']),
    'readUserByHandle' : IDL.Func([IDL.Text], [IDL.Opt(UserStable)], ['query']),
    'readUserByPrincipal' : IDL.Func(
        [IDL.Text],
        [IDL.Opt(UserStable)],
        ['query'],
      ),
    'redeemBet' : IDL.Func([IDL.Nat32], [Result], []),
    'refreshUser' : IDL.Func([], [Result_1], []),
    'resolveBet' : IDL.Func([IDL.Nat32, IDL.Nat], [Result], []),
    'resolveMarket' : IDL.Func([IDL.Nat32, IDL.Nat], [Result], []),
    'setAvatar' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
    'setCover' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
    'setHandle' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
    'setIcpBalance' : IDL.Func([IDL.Text, IDL.Nat64], [Result], []),
    'setMarketImage' : IDL.Func([IDL.Nat32, IDL.Text], [IDL.Bool], []),
    'setMarketPost' : IDL.Func([IDL.Nat32, IDL.Nat32], [Result], []),
    'setMarketState' : IDL.Func([IDL.Nat32, MarketState], [IDL.Bool], []),
    'setMarketTitle' : IDL.Func([IDL.Nat32, IDL.Text], [IDL.Bool], []),
    'setPrincipal' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
    'setTwitter' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
    'setUpdating' : IDL.Func([IDL.Bool], [], ['oneway']),
    'submitDelete' : IDL.Func([IDL.Nat32], [Result], []),
    'submitLike' : IDL.Func([IDL.Nat32], [Result], []),
    'submitPost' : IDL.Func(
        [PostInitData, IDL.Opt(MarketInitData), IDL.Opt(InitData)],
        [Result],
        [],
      ),
    'submitRetweet' : IDL.Func([IDL.Nat32], [Result], []),
    'transferToCanister' : IDL.Func([], [IDL.Text], []),
    'transferToHandle' : IDL.Func([IDL.Text, IDL.Nat64], [Result], []),
    'transferToIdentifier' : IDL.Func([IDL.Text, IDL.Nat64], [Result], []),
    'unfollowUser' : IDL.Func([IDL.Text], [Result], []),
    'unlockFunds' : IDL.Func(
        [IDL.Text, CollateralType, IDL.Nat64],
        [Result],
        [],
      ),
    'updateNotifications' : IDL.Func([], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };