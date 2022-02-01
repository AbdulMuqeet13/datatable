<template>
    <Datatable tableName="Notifications" :columns="headList" :dataList="dataList" />
</template>

<script>
import Datatable from '@/components/Datatable'
import EventService from '@/services/EventService'
export default {
    name: 'Notifications',
    components: {
        Datatable
    },
    data() {
        return {
        headList: [
            { label: 'Heading' },
            { label: 'From' },
            { label: 'Description' },
            { label: 'Status' },
        ],
        dataList: []
        }
    },
    beforeCreate(){
        EventService.getNotifications()
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