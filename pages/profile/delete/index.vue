<template>
    <div class="l-container--wrap">
        <div v-if="!deleteDone">
                <div>メンバー情報を完全に削除します。よろしいですか。</div>

                <button type="submit"><nuxt-link to="/profile/">戻る</nuxt-link></button>
                <button @click.prevent="deleteProfile">削除する</button>    
        </div>
        <div v-if="deleteDone">
            プロフィールの削除が完了しました。
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth',

    data() {
        return {
            deleteDone: false,
            error: null
        }
    },
    async asyncData({ $axios }) {
        return {
            response: await $axios.$get('/rcms-api/1/member/me'),
        };
    },
    methods: {
        async deleteProfile() {
            try {
                await this.$axios.$post('/rcms-api/1/member/delete',{})
                this.deleteDone = true
                this.$auth.logout()
            } catch (e) {
                console.error(e)
                this.error = e.response.data.errors[0].message
            }
        }
    }
};
</script>
