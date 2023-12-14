const { createApp } = Vue;

createApp({

  data() {

    return {
      itemsList: 10,
      mails: []
    }

  },

  methods: {

  },

  mounted() {
  
    for (let i = 0; i < this.itemsList; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((risposta) => {
          // console.log(risposta.data.response)
          this.mails.push(risposta.data.response)
        })
    }

  }

}).mount('#app')
