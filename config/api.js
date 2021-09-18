// const ApiRootUrl = 'http://hwdhy.free.idcfengye.com/api/';
const ApiRootUrl = 'http://127.0.0.1:8080/api/';
module.exports = {
  Random : ApiRootUrl + 'random/random',

  IndexUrl: ApiRootUrl + 'index/index', //首页数据接口2
  CatalogList: ApiRootUrl + 'catalog/index',  //分类目录全部分类数据接口2
  CatalogCurrent: ApiRootUrl + 'catalog/current',  //分类目录当前分类数据接口2

  AuthLoginByWeixin: ApiRootUrl + 'auth/loginByWeixin', //微信登录2

  GoodsCount: ApiRootUrl + 'goods/count',  //统计商品总数2
  GoodsList: ApiRootUrl + 'goods/list',  //获得商品列表2
  GoodsCategory: ApiRootUrl + 'goods/category',  //获得分类数据2
  GoodsDetail: ApiRootUrl + 'goods/detail',  //获得商品的详情2
  GoodsNew: ApiRootUrl + 'goods/new',  //新品2
  GoodsHot: ApiRootUrl + 'goods/hot',  //热门2
  GoodsRelated: ApiRootUrl + 'goods/related',  //商品详情页的关联商品（大家都在看）2

  BrandList: ApiRootUrl + 'brand/list',  //品牌列表2
  BrandDetail: ApiRootUrl + 'brand/detail',  //品牌详情2

  CartList: ApiRootUrl + 'cart/index', //获取购物车的数据2
  CartAdd: ApiRootUrl + 'cart/add', // 添加商品到购物车2
  CartUpdate: ApiRootUrl + 'cart/update', // 更新购物车的商品2
  CartDelete: ApiRootUrl + 'cart/delete', // 删除购物车的商品2
  CartChecked: ApiRootUrl + 'cart/checked', // 选择或取消选择商品2
  CartGoodsCount: ApiRootUrl + 'cart/goodscount', // 获取购物车商品件数2
  CartCheckout: ApiRootUrl + 'cart/checkout', // 下单前信息确认2

  OrderSubmit: ApiRootUrl + 'order/submit', // 提交订单
  PayPrepayId: ApiRootUrl + 'pay/prepay', //获取微信统一下单prepay_id

  CollectList: ApiRootUrl + 'collect/list',  //收藏列表2
  CollectAddOrDelete: ApiRootUrl + 'collect/addordelete',  //添加或取消收藏2

  CommentList: ApiRootUrl + 'comment/list',  //评论列表2
  CommentCount: ApiRootUrl + 'comment/count',  //评论总数2
  CommentPost: ApiRootUrl + 'comment/post',   //发表评论2
 
  TopicList: ApiRootUrl + 'topic/list',  //专题列表2
  TopicDetail: ApiRootUrl + 'topic/detail',  //专题详情2
  TopicRelated: ApiRootUrl + 'topic/related',  //相关专题2

  SearchIndex: ApiRootUrl + 'search/index',  //搜索页面数据2
  SearchHelper: ApiRootUrl + 'search/helper',  //搜索帮助2
  SearchClearHistory: ApiRootUrl + 'search/clearhistory',  //搜索帮助2

  AddressList: ApiRootUrl + 'address/list',  //收货地址列表2
  AddressDetail: ApiRootUrl + 'address/detail',  //收货地址详情2
  AddressSave: ApiRootUrl + 'address/save',  //保存收货地址2
  AddressDelete: ApiRootUrl + 'address/delete',  //删除收货地址2

  RegionList: ApiRootUrl + 'region/list',  //获取区域列表2

  OrderList: ApiRootUrl + 'order/list',  //订单列表2
  OrderDetail: ApiRootUrl + 'order/detail',  //订单详情2
  OrderCancel: ApiRootUrl + 'order/cancel',  //取消订单
  OrderExpress: ApiRootUrl + 'order/express', //物流详情

  FootprintList: ApiRootUrl + 'footprint/list',  //足迹列表2
  FootprintDelete: ApiRootUrl + 'footprint/delete',  //删除足迹2
};