<template>
    <section>
        <h2>My friends</h2>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
   export default {
  components: { FriendContact },
       data(){
           return {
               friends: [
                   {
                       id: "manuel",
                       name: "Manuel Lorenz",
                       phone: "123 456 789",
                       email: "manuel@localhost.com"
                   },
                   {
                       id: "julie",
                       name: "Julie Jones",
                       phone: "987 654 321",
                       email: "julie@localhost.com"
                   },
               ]
           }
       },
   };
</script>