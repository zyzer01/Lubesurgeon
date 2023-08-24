import { lazy } from 'react';

const AdminDashboard = lazy(() => import('../pages/AdminDashboard'));
const AdminUsers = lazy(() => import('../pages/AdminUsers'));
const AdminOrders = lazy(() => import('../pages/AdminOrders'));
const AdminSale = lazy(() => import('../pages/AdminSales'));
const Vehicles = lazy(() => import('../pages/Vehicles'));
const Bookings = lazy(() => import('../pages/Bookings'));
const History = lazy(() => import('../pages/History'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));

const coreRoutes = [
    {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/history',
    title: 'Service History',
    component: History,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/vehicles',
    title: 'Vehicles',
    component: Vehicles,
  },
  {
    path: '/bookings',
    title: 'Bookings',
    component: Bookings,
  },
  {
    path: '/admin',
    title: 'Admin',
    component: AdminDashboard,
  },
  {
    path: '/orders',
    title: 'Orders',
    component: AdminOrders,
  },
  {
    path: '/users',
    title: 'Users',
    component: AdminUsers,
  },
  {
    path: '/sales',
    title: 'Users',
    component: AdminSale
  },
];

const routes = [...coreRoutes];
export default routes;
