export const roleEnum = {
  Customer: 0,
  Staff: 2,
  Admin: 3
}

export const routes = [
  {
    title: 'Overview',
    path: '/admin',
    exactly: true,
    permissions: [roleEnum.Staff, roleEnum.Admin]

  },
  {
    title: 'Card Management',
    path: '/admin/book',
    subMenu: [
      {
        title: 'Thêm thẻ mới',
        path: '/admin/book/add',
      },
      {
        title: 'Order Management',
        path: '/admin/author',
      },
    ],
    permissions: [roleEnum.Staff, roleEnum.Admin]
  },
  {
    title: 'Order Management',
    path: '/admin/order',
    permissions: [roleEnum.Staff, roleEnum.Admin]
  },
  {
    title: 'Discount code',
    path: '/admin/voucher',
    permissions: [roleEnum.Staff, roleEnum.Admin]
  },
  {
    title: 'Client',
    path: '/admin/customer',
    permissions: [roleEnum.Staff, roleEnum.Admin]
  },
  {
    title: 'Nhân viên',
    path: '/admin/staff',
    permissions: [roleEnum.Admin]
  },
];