import fetch from '@/config/fetch'

var host = "http://localhost:8080"

/**
 * 登陆
 */

// export const login = data => fetch('/admin/login', data, 'POST');
export const login = data => fetch(host+'/login?username='+data.username+"&password="+data.password, {}, 'POST');

/**
 * 退出
 */

export const signout = () => fetch('/admin/signout');

/**
 * 获取用户信息
 */

export const getAdminInfo = () => fetch('/admin/info');

/**
 * 获取权限信息
 */

export const admin = data => fetch(host+'/roleUser/selectOne?id='+data.user_id);

/**
 * api请求量
 */

export const apiCount = date => fetch('/statis/api/' + date + '/count');

/**
 * 所有api请求量
 */

export const apiAllCount = () => fetch('/statis/api/count');


/**
 * 所有api请求信息
 */

export const apiAllRecord = () => fetch('/statis/api/all');

/**
 * 用户注册量
 */

export const userCount = date => fetch('/statis/user/' + date + '/count');

/**
 * 某一天订单数量
 */

export const orderCount = date => fetch('/statis/order/' + date + '/count');


/**
 * 某一天管理员注册量
 */

export const adminDayCount = date => fetch('/statis/admin/' + date + '/count');

/**
 * 管理员列表
 */

// export const adminList = data => fetch('/admin/all', data);
export const adminList = () => fetch(host+'/roleUser/selectAll');

/**
 * 管理员数量
 */

// export const adminCount = () => fetch('/admin/count');
export const adminCount = () => fetch(host+'/role/countName');

/**
 * 获取定位城市
 */

export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});

/**
 * 添加商铺
 */

export const addShop = data => fetch('/shopping/addShop', data, 'POST');

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => fetch('/v1/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});

/**
 * 获取当前店铺食品种类
 */

export const getCategory = restaurant_id => fetch('/shopping/getcategory/' + restaurant_id);

/**
 * 添加食品种类
 */

export const addCategory = data => fetch('/shopping/addcategory', data, 'POST');


/**
 * 添加食品
 */

export const addFood = data => fetch('/shopping/addfood', data, 'POST');


/**
 * category 种类列表
 */

export const foodCategory = (latitude, longitude) => fetch('/shopping/v2/restaurant/category');

/**
 * 获取餐馆列表
 */

export const getResturants = data => fetch('/shopping/restaurants', data);

/**
 * 获取餐馆详细信息
 */

export const getResturantDetail = restaurant_id => fetch('/shopping/restaurant/' + restaurant_id);

/**
 * 获取餐馆数量
 */

export const getResturantsCount = () => fetch('/shopping/restaurants/count');

/**
 * 更新餐馆信息
 */

export const updateResturant = data => fetch('/shopping/updateshop', data, 'POST');

/**
 * 删除餐馆
 */

export const deleteResturant = restaurant_id => fetch('/shopping/restaurant/' + restaurant_id, {}, 'DELETE');

/**
 * 获取食品列表
 */

export const getFoods = data => fetch('/shopping/v2/foods', data);

/**
 * 获取食品数量
 */

export const getFoodsCount = data => fetch('/shopping/v2/foods/count', data);


/**
 * 获取menu列表
 */

export const getMenu = data => fetch('/shopping/v2/menu', data);

/**
 * 获取menu详情
 */

export const getMenuById = category_id => fetch('/shopping/v2/menu/' + category_id);

/**
 * 更新食品信息
 */

export const updateFood = data => fetch('/shopping/v2/updatefood', data, 'POST');

/**
 * 删除食品
 */

export const deleteFood = food_id => fetch('/shopping/v2/food/' + food_id, {}, 'DELETE');

/**
 * 获取用户列表
 */

// export const getUserList = data => fetch('/v1/users/list', data);
export const getUserList = () => fetch(host+'/user/selectAll');

/**
 * 获取用户数量
 */

// export const getUserCount = data => fetch('/v1/users/count', data);
export const getUserCount = () => fetch(host+'/user/count');

/**
 * 获取订单列表
 */

// export const getOrderList = data => fetch('/bos/orders', data);
export const getOrderList = () => fetch(host+'/order/selectAll');

/**
 * 获取订单数量
 */

// export const getOrderCount = data => fetch('/bos/orders/count', data);
export const getOrderCount = () => fetch(host+'/order/count');

/**
 * 获取用户信息
 */

export const getUserInfo = user_id => fetch('/v1/user/' + user_id);

/**
 * 获取地址信息
 */

export const getAddressById = address_id => fetch('/v1/addresse/' + address_id);

/**
 * 获取用户分布信息
 */

export const getUserCity = () => fetch('/v1/user/city/count');
