<template>
    <div class="datatable">
        <router-link :to="{name: 'Add'+tableName}"><button class="add-new" type="button"> Add New {{ tableName }} </button></router-link>
    <table>
        <tr>
            <th v-for="(column, index) in columns" :key="index" >{{ column.label }}</th>
            <th>Actions</th>
        </tr>
        <tr v-for="(data, index) in list" :key="index">
            <td v-for="(head, index) in columns" :key="index">{{ data[head.label.toString().toLowerCase()] }}</td>
            <td>
                <router-link :to="{name: 'Edit'+tableName, params: { id:data.id } }" ><i class="fas fa-pencil-alt"></i></router-link>
                <i @click="deleteRow(data.id)" class="fas fa-trash"></i>
            </td>
        </tr>
    </table>
    </div>
</template>

<script>
import EventService from '@/services/EventService'

export default {
    name: 'Datatable',
    props: {
        columns: {
            type: Array,
            required: true
        },
        dataList: {
            type: Array,
            required: true
        },
        tableName: {
            type: String,
            required: true
        }
    },
    computed: {
        list(){
            var list= this.dataList
            return list
        }
    },
    methods: {
        deleteRow(id){
            
            EventService.delete(id,this.tableName)
             .then(() => {
                 this.list.forEach(element => {
                     if (element.id === id) {
                        //  console.log(this.list.indexOf(element))
                        this.list.splice(this.list.indexOf(element)) 

                     }
                 });
                 
             }).catch((err) => {
                 console.log(err)
             });
        },
        abs(){
            this.list.forEach(data => {
                this.columns.forEach(col => {
                    console.log(data[col.label])
                });
            });
        }
    }

}
</script>

<style>
.fa-pencil-alt{
    color:blue
}
.fa-trash{
    color: crimson;
    margin-left: 20px;
}
.fas{
    cursor: pointer;
}
.datatable{
    width: 100%;
}
.add-new{
    margin-left: 80%;
    background: #222;
    border-radius: 10px;
    color: #fff;
    padding: 10px;
    cursor: pointer;
}
table{
    width: 80%;
    margin: 70px auto;
    text-align: start;

}
th{
    text-align: start;
    height: 30px;
}
td{
    height: 40px;
}
tr{
    border: 1px solid #222;
}
</style>