import mineRoutes from './mine';

export const rawRouteArr = [
    mineRoutes,
];

// 不依赖权限的路由，包括首页、403、404页面
// export const baseRoutes = [
//     {
//         path: '/',
//         name: 'index',
//         /** 组件 可以同步引入, 也可以异步引人 */
//         component: IndexComponent,
//         /** meta信息，除路由基本信息外，其他自定义属性均放置在meta中 */
//         meta: {
//             /** 标题 显示在每个页面的头部 */
//             title: '欢迎',
//             /** 副标题 显示在标题后面, 小字 , 如果不设置标题, 则副标题也不展示 */
//             subtitle: '欢迎使用 gz-admin',
//             permission: true,
//         },
//     },
//     {
//         // 403页面
//         path: '/403',
//         name: '403',
//         meta: {
//             permission: true,
//         },
//         component: resolve => import('@/pages/common/403.vue').then(resolve),
//     },
//     {
//         // 404页面
//         path: '/404',
//         name: '404',
//         meta: {
//             permission: true,
//         },
//         component: resolve => import('@/pages/common/404.vue').then(resolve),
//     },
// ]
