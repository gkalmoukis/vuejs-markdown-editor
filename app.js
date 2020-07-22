

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
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Markdown code was copied ${msg}.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                

                
            } catch (err) {
                console.error('Oops, unable to copy: ', err );
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Oops, unable to copy: '+err,
                    showConfirmButton: false,
                    timer: 1500
                });
               
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