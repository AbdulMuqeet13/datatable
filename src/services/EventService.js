import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getData() {
    return apiClient.get('/dataList')
  },
  postData(data){
    return apiClient.post('/dataList', data)
  },
  updateData(data, id){
    return apiClient.put('/dataList/'+id, data)
  },
  editData(id){
    return apiClient.get('/dataList/'+id)
  },


  
  delete(id, tableName){
    return apiClient.delete('/'+ tableName + '/'+id)
  },


  getProducts(){
    return apiClient.get('/Products')
  },
  postProduct(product){
    return apiClient.post('/Products', product)
  },
  editProduct(id){
    return apiClient.get('/Products/'+id)
  },
  updateProducts(product, id){
    return apiClient.put('/Products/'+id, product)
  },


  getNotifications(){
    return apiClient.get('/Notifications')
  },
  postNotification(notification){
    return apiClient.post('/Notifications', notification)
  },
  editNotification(id){
    return apiClient.get('/Notifications/'+id)
  },
  updateNotifications(notification, id){
    return apiClient.put('/Notifications/'+id, notification)
  }
}
