export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  // {
  //   title: true,
  //   name: 'Categories'
  // },
  {
    name: 'Categories',
    url: '/category/category-listing',
    icon: 'icon-list'
  },
  // {
  //   name: 'Category Details',
  //   url: '/category/category-details',
  //   icon: 'icon-options'
  // },
  // {
  //   title: true,
  //   name: 'Articles'
  // },
  {
    name: 'Articles',
    url: '/article/article-listing',
    icon: 'icon-list'
  },
  // {
  //   title: true,
  //   name: 'Subscriptions'
  // },
  {
    name: 'Subscriptions',
    url: '/subscription/subscription-list',
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
  // {
  //   name: 'Category',
  //   url: '/category',
  //   icon: 'icon-puzzle',
  //   children: [
  //     // {
  //     //   name: 'New Category',
  //     //   url: '/category/new-category',
  //     //   icon: 'icon-cursor'
  //     // },
  //     {
  //       name: 'Category Listing',
  //       url: '/category/category-listing',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Category Details',
  //       url: '/category/category-details',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Article',
  //   url: '/article',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Article Listing',
  //       url: '/article/article-listing',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
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
