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
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Markdown code was copied',
                    showConfirmButton: false,
                    timer: 1500
                })
            } catch (err) {
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