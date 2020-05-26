
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  
  routes: [
    {
      path: '/auth',
      component: '../layouts/Auth/index',
      routes: [
        {
          path: '/auth/login',
          component: './Auth/Login'
        },
        {
          path: '/auth/register',
          component: './Auth/Register'
        },
      ]
    },
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: './'
        },
        {
          path: '/report',
          component: './Report'
        },
        {
          path: '/task',
          component: './Task'
        },
        {
          path: '/templates',
          component: './Templates'
        },
        {
          path: '/staff',
          component: './Staff'
        },
        {
          path: '/staff',
          component: './Staff'
        },
        {
          path: '/fleet',
          routes: [
            {
              path: '/fleet/drivers',
              component: './Fleet/Drivers'
            },
            {
              path: '/fleet/vehicles',
              component: './Fleet/Vehicles'
            },
          ]
        },
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'manager_app',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
