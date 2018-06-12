export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Category',
    url: '/category',
    icon: 'icon-puzzle',
    children: [
      // {
      //   name: 'New Category',
      //   url: '/category/new-category',
      //   icon: 'icon-cursor'
      // },
      {
        name: 'Category Listing',
        url: '/category/category-listing',
        icon: 'icon-cursor'
      },
      {
        name: 'Category Details',
        url: '/category/category-details',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Article',
    url: '/article',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Article Listing',
        url: '/article/article-listing',
        icon: 'icon-cursor'
      }
    ]
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
