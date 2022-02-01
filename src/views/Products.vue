<template>
    <Datatable tableName="Products" :columns="headList" :dataList="dataList" />
</template>

<script>
import Datatable from '@/components/Datatable'
import EventService from '@/services/EventService'

export default {
    name: 'Products',
    components: {
        Datatable
    },
    data() {
        return {
        headList: [
            { label: 'Name' },
            { label: 'Description' },
            { label: 'Quantity' },
            { label: 'Status' },
            { label: 'Location' }, 
        ],
        dataList: []
        }
    },
    beforeCreate(){
        EventService.getProducts()
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

<style>

</style>