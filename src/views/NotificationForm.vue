<template>
    <form @submit.prevent="submitData">
        <div class="base-input">
            <BaseInput 
                label="Heading"
                v-model="list.heading"
                type="text"
                v-if="!dataList"
            />
            <BaseInput 
                label="Heading"
                v-model="dataList.heading"
                type="text"
                v-if="dataList"
            />
        </div>
        <div class="base-input">
            <BaseInput 
                label="From"
                v-model="dataList.from"
                type="text"
                v-if="dataList"
            />
            <BaseInput 
                v-if="!dataList"
                label="From"
                type="text"
                v-model="list.from"
            />
        </div>
        <div class="base-input">
            <BaseInput 
                label="Description"
                v-model="dataList.description"
                type="text"
                v-if="dataList"
            />
            <BaseInput 
                v-if="!dataList"
                label="Description"
                type="text"
                v-model="list.description"
            />
        </div>
        <div class="base-input">
            <BaseInput 
                label="Status"
                v-model="dataList.status"
                type="text"
                v-if="dataList"
            />
            <BaseInput 
                v-if="!dataList"
                label="Status"
                type="tel"
                v-model="list.status"
            />
        </div>
        <button type="submit">Save Data</button>
        <!-- {{ list }} -->
    </form>
</template>

<script>
import BaseInput from '@/components/BaseInput'
import EventService from '@/services/EventService'

export default {
    name: 'NotificationForm',
    components: {
        BaseInput
    },
    beforeCreate(){
        if (this.$route.params.id) {
            EventService.editNotification(parseInt(this.$route.params.id))
                .then((result) => {
                      this.dataList=result.data
                }).catch((err) => {
                    console.log(err)
                });
        }
    },
    data(){
        return{
            list: {
                name: '',
                description: '',
                phone: ''
            },
            dataList: null
        }
    },
    methods: {
        submitData(){
            if (this.dataList) {
                EventService.updateNotifications(this.dataList, this.dataList.id)
                .then(() => {
                    this.$router.push({name: 'Notifications'})
                }).catch((err) => {
                    console.log(err)
                });
            }
            else{
                EventService.postNotification(this.list)
                .then(() => {
                    this.$router.push({name: 'Notifications'})
                }).catch((err) => {
                    console.log(err)
                });
            }
            
        }
    }
    
}
</script>

<style>

</style>