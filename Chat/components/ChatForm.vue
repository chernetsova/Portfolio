<template>
    <v-flex xs12>
        <v-text-field label="Введите сообщение" outlined v-model="text" @keydown.enter="send"></v-text-field>
    </v-flex>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        send() {
            this.$socket.emit('createMessage', {
                text: this.text,
                id: this.$store.state.user.id
            }, data => {
                if (typeof data === 'string') {
                    console.error(data)
                }
                else {
                    this.text = ""
                }
            })
        }
    }
}
</script>