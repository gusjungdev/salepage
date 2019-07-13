//Custom tag
Vue.component('kong',{
    data:function(){
        return{
            count:0
        }
    },
    template:'<button v-on:click="count++">count : {{count}}</button>'

}); 
Vue.component('post',{
    props:['title']
    template:'<h3>{{title}}</h3>'

}); 
new Vue({
    el:"#vue-app"
})