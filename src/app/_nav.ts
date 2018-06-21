export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Categories',
    url: '/category/category-listing',
    icon: 'icon-list'
  },
  {
    name: 'Articles',
    url: '/article/article-listing',
    icon: 'icon-list'
  },
  {
    name: 'Subscriptions',
    url: '/subscription/subscription-list',
    icon: 'icon-basket-loaded'
  },
  {
    name: 'Papers',
    url: '/papers/papers-list',
    icon: 'icon-basket-loaded'
  },
  {
    title: true,
    name: 'Users'
  },
  {
    name: 'Users List',
    url: '/users/users-list',
    icon: 'icon-people'
  },
  {
    title: true,
    name: 'Uploads'
  },
  {
    name: 'Upload',
    url: '/upload/upload-list',
    icon: 'icon-cloud-upload'
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
    ]
  },
];
