<template>
    <div class="l-container--wrap">
        <div v-if="!signupDone">
            <form @submit.prevent="signup">
                <p v-if="error" :style="{ color: 'red' }">
                    {{ error }}
                </p>

                <div>
                    <label>name1</label>
                    <input v-model="user.name1" name="name1" type="text" placeholder="name1">
                </div>
                <div>
                    <label>name2</label>
                    <input v-model="user.name2" name="name2" type="text" placeholder="name2">
                </div>
                <div>
                    <label>email</label>
                    <input v-model="user.email" name="email" type="email" placeholder="email">
                </div>
                <div>
                    <label>login_pwd</label>
                    <input v-model="user.login_pwd" name="login_pwd" type="password" placeholder="login_pwd">
                </div>

                <div>
                    <button type="submit">
                        サインアップ
                    </button>
                </div>
            </form>
        </div>
        <div v-if="signupDone">
            新規登録が完了しました。
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            signupDone: false,

            user: {},
            error: null
        }
    },
    methods: {
        async signup () {
            try {
                // 新規会員登録のリクエスト
                await this.$axios.$post(
                    '/rcms-api/1/member/register',
                    { ...this.user } // フォームの内容をリクエストボディとして適用
                )

                this.signupDone = true
            } catch (e) {
                console.error(e)
                this.error = 'エラーが発生しました。'
            }
        }
    }
}
</script>

<style>

</style>