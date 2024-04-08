const { createApp } = Vue

createApp({
    data() {
        return {
            emails: []
        }
    },
    methods: {
        fetchEmails() {
            for (let i = 0; i < 10; i++) {
                //effettuiamo una chiamata di tipo GET all'url:
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                        // console.log(res.data.response);
                        const email = res.data.response
                        this.emails.push(email)
                    })
            }
            this.emails= [];
        }
    },
    // created() {
    //     this.fetchEmails()
    // }
}).mount('#app')



