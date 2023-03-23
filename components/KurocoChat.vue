<template>
    <div id="kuroco-chat">
        <div id="kuroco-chat-messagebox">
            <form :class="{ 'is-open': !Drawer }">
                <h1>chat box</h1>
                <p v-if="resultMessage !== null">
                    {{ resultMessage }}
                </p>
                <div v-for="(n, i) in chatMessage" :key="i">
                    {{ n.sender }}/{{ n.text }}
                </div>
                <input v-model="questionEntered" name="question" type="question" placeholder="question">
                <button @click.prevent="submitQ">
                    送信する
                </button>
            </form>
        </div>
        <button @click.prevent='(Drawer = !Drawer)'>
            <p :class="{ 'is-open': Drawer }">chatboxを開く</p>
            <p :class="{ 'is-open': !Drawer }">chatboxを閉じる</p>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            questionEntered: '',
            resultMessage: null,
            Drawer: false,
            chatMessage: [
                {
                    sender: 'ai',
                    text: 'こんにちは、質問をどうぞ'
                }
            ]
        };
    },
    methods: {
        // 質問が送信された場合
        async submitQ({ $axios }) {
            this.chatMessage.push({ sender: 'user', text: this.questionEntered });
            try {
                const payload = {
                    question: this.questionEntered
                };
                // get data
                const response = await this.$axios.$get('/rcms-api/1/chat', { params: { text: payload } });
                this.chatMessage.push({ sender: 'ai', text: response.answer });
            } catch (error) {
                this.resultMessage = error.response;
            }
        }
    }
};
</script>

<style>
#kuroco-chat {
    position: absolute;
    bottom: 30px;
    right: 30px;
}
#kuroco-chat-messagebox {
    border: 2px solid #000000;
    background-color: #fdd;
}

.is-open {
    display: none;
}
</style>
