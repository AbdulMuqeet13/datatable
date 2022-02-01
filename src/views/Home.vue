<template>
  <div class="home">
    <Datatable tableName="Users" :columns="headList" :dataList="dataList" />
  </div>
</template>

<script>
// @ is an alias to /src
import Datatable from '@/components/Datatable'
import EventService from '@/services/EventService'


export default {
  
  name: 'Home',
  components: {
    Datatable
  },
  data() {
    return {
      headList: [
        { label: 'Name' },
        { label: 'Description' },
        { label: 'Phone' } 
      ],
      dataList: []
    }
  },
  beforeCreate(){
    EventService.getData()
      .then((result) => {
        var value = result.data
        this.dataList= value
        console.log(value)
      }).catch((err) => {
        console.log(err)
      });
  }
}
</script>
