console.log('ciao')

const app = new Vue({
    el: '#app',
    data: {
        randomMail: [],
        show:false,

    },
    mounted() {
        this.fetchMail(),
        this.visibile()
        },
    methods: {
        fetchMail() {
            
            for (let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        console.log(response.data.response)
                        this.randomMail.push(response.data.response)
                    })
            }
        },
        visibile(){
            setTimeout( () =>{
                this.show=!this.show
            console.log(this.show)
              },  2000)
           
        }

    }
})