new Vue({
    el: '#editor',
    data() {
        return {  
            input: '# Hello' ,
        }
    },
    methods:{
        copy(){

            console.log(document.getElementById("markdown-content").value)
            
            let testingCodeToCopy = document.querySelector('#markdown-content')
            testingCodeToCopy.setAttribute('type', 'text')
            testingCodeToCopy.select()
            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                alert('Testing code was copied ' + msg);
            } catch (err) {
                alert('Oops, unable to copy');
            }

            /* unselect the range */
            testingCodeToCopy.setAttribute('type', 'hidden')
            window.getSelection().removeAllRanges()
            },
    },
    filters: {
        marked: marked
    }
})