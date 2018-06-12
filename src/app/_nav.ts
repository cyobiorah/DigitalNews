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
      {
        name: 'New Category',
        url: '/category/new-category',
        icon: 'icon-cursor',
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
