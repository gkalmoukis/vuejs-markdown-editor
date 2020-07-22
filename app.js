new Vue({
    el: '#editor',
    data() {
        return {  
            input: '# Hello' ,
        }
    },
    methods:{
        save(){
            console.log(document.getElementById("markdown-content").value)
        }
    },
    filters: {
        marked: marked
    }
})