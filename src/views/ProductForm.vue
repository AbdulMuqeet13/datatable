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
                label="Quantity"
                v-model="dataList.quantity"
                type="text"
                v-if="dataList"
            />
            <BaseInput 
                v-if="!dataList"
                label="Quantity"
                type="tel"
                v-model="list.quantity"
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
        <div class="base-input">
            <BaseInput 
                label="Location"
                v-model="dataList.location"
                type="text"
                v-if="dataList"
            />
            <BaseInput 
                v-if="!dataList"
                label="Location"
                type="tel"
                v-model="list.location"
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
    name: 'ProductForm',
    components: {
        BaseInput
    },
    beforeCreate(){
        if (this.$route.params.id) {
            EventService.editProduct(parseInt(this.$route.params.id))
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
                EventService.updateProducts(this.dataList, this.dataList.id)
                .then(() => {
                    this.$router.push({name: 'Products'})
                }).catch((err) => {
                    console.log(err)
                });
            }
            else{
                EventService.postProduct(this.list)
                .then(() => {
                    this.$router.push({name: 'Products'})
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