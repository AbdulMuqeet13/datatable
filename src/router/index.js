import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import InputForm from '@/views/InputForm'
import Products from '@/views/Products'
import ProductForm from '@/views/ProductForm'
import Notifications from '@/views/Notifications'
import NotificationForm from '@/views/NotificationForm'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-user',
    name: 'AddUsers',
    component: InputForm
  },
  {
    path: '/edit/:id',
    name: 'EditUsers',
    component: InputForm,
    props: true
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/add-product',
    name: 'AddProducts',
    component: ProductForm
  },
  {
    path: '/edit/:id',
    name: 'EditProducts',
    component: ProductForm,
    props: true
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/add-notification',
    name: 'AddNotifications',
    component: NotificationForm
  },
  {
    path: '/edit/:id',
    name: 'EditNotifications',
    component: NotificationForm,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
