new Vue({
    el: '#editor',
    data() {
        return {  
            input: '# Hello' ,
        }
    },
    methods:{
        copy(){
            let markdownToCopy = document.querySelector('#markdown-content')
            markdownToCopy.setAttribute('type', 'text')
            markdownToCopy.select()
            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.info('Markdown code was copied ' + msg);
                alert('Markdown code was copied ' + msg);
                
            } catch (err) {
                console.error('Oops, unable to copy: ', err );
                alert('Oops, unable to copy');
            }

            /* unselect the range */
            markdownToCopy.setAttribute('type', 'hidden')
            window.getSelection().removeAllRanges()
            },
    },
    filters: {
        marked: marked
    }
})