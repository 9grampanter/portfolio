<template>
  <main class="md:ml-24 contentWidth flex flex-col mt-10">
    <div class="bg-white flex simple-box-shadow p-4 flex-col w-3/5 mx-auto rounded-lg xl:w-1/3 mx:mx-auto">
      <h1 class="text-xl">Få kontakt med mig!</h1>
      <form class="mt-6" @submit.prevent="sendEmail">
        <div class="w-full flex flex-col justify-between">

          <div class="flex flex-row justify-between mb-10">
            <div class="flex flex-col w-5/12">
              <label for="from_name">Namn</label>
              <input v-model="from_name" type="text" name="from_name" placeholder="John Doe" class="pl-2 py-0.5 border rounded border-gray-500">
            </div>
              
            <div class="flex flex-col w-5/12">
              <label for="email">Email</label>
              <input v-model="email" type="text" name="email" placeholder="example@mail.com" class="pl-2 py-0.5 border rounded border-gray-500">
            </div>

          </div>

          <label for="subject">Ämne</label>
          <input v-model="subject" type="text" name="subject" class="pl-2 py-0.5 border rounded border-gray-500 mb-4">

          <label for="message">Meddelande</label>
          <textarea v-model="message" class="resize-none pl-2 py-0.5 border rounded border-gray-500" name="message" rows="6" cols="30"></textarea>

          <div class="justify-center flex w-full mt-8">
            <button type="submit" class="w-2/4 py-0.5 border rounded border-gray-500">Skicka</button>
          </div>
        
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import emailjs from 'emailjs-com';
import Vue from 'vue'
import VueConfetti from 'vue-confetti'

Vue.use(VueConfetti)


export default {
  data() {
    return {
      from_name: "",
      email: "",
      subject: "",
      message: "",
    }
  },
  methods: {
    myStop() {
      this.$confetti.stop();  
    },
    sendEmail(e) {
      try {
        emailjs.sendForm('service_49mwd09', 'template_u2s7vqm', e.target,
        'user_nBZ6w24fA5fMFPiCzCli8', {
          from_name: this.from_name,
          email: this.email,
          subject: this.subject,
          message: this.message
        })

        this.$confetti.start({
          particlesPerFrame: 3,
          windSpeedMax: 3,
          defaultDropRate: 20
        });
        setTimeout(() => {  
          this.myStop()
        }, 2000);

      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.from_name = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    }
    
  }
}
</script>

<style>

</style>