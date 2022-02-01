<template>
    <form @submit.prevent="submitData">
        <div class="base-input">
            <BaseInput 
                label="Name"
                v-model="list.name"
                type="text"
                v-if="!dataList"
            />
            <BaseInput 
                label="Name"
                v-model="dataList.name"
                type="text"
                v-if="dataList"
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
                label="Phone"
                v-model="dataList.phone"
                type="text"
                v-if="dataList"
            />
            <BaseInput 
                v-if="!dataList"
                label="Phone"
                type="tel"
                v-model="list.phone"
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
    name: 'InputForm',
    components: {
        BaseInput
    },
    beforeCreate(){
        if (this.$route.params.id) {
            EventService.editData(parseInt(this.$route.params.id))
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
                EventService.updateData(this.dataList, this.dataList.id)
                .then(() => {
                    this.$router.push({name: 'Home'})
                }).catch((err) => {
                    console.log(err)
                });
            }
            else{
                EventService.postData(this.list)
                .then(() => {
                    this.$router.push({name: 'Home'})
                }).catch((err) => {
                    console.log(err)
                });
            }
            
        }
    }
    
}
</script>

<style>
.base-input{
    display: flex;
    text-align: start;
    width: 50%;
    margin: 30px auto;
    flex-direction: column;
}
button{
    background: #222;
    color: #fff;
    padding: 10px 25px;
    border-radius: 10px;
    cursor: pointer;
}
</style>