<template>
    <div class="l-container--wrap">
        <div v-if="!updateProfileDone">
            <form @submit.prevent="updateProfile">
                <p v-if="error" :style="{ color: 'red' }">
                    {{ error }}
                </p>
                <div>
                    <label>name1</label>
                    <input v-model="user.name1" name="name1" type="text">
                </div>
                <div>
                    <label>name2</label>
                    <input v-model="user.name2" name="name2" type="text">
                </div>
                <div>
                    <label>email</label>
                    <input v-model="user.email" name="email" type="text">
                </div>
                <div>
                    <input type="radio" id="group_id[1]" value='104' v-model.number="user.group_id[0]" />
                    <label for="group_id">通常会員</label>

                    <input type="radio" id="group_id[2]" value='105' v-model.number="user.group_id[0]" />
                    <label for="group_id">プレミアム会員</label>
                </div>

                <button type="submit">更新する</button>
            </form>
        </div>
        <div v-if="updateProfileDone">
            プロフィール更新が完了しました。
        </div>

    </div>
</template>

<script>
export default {
    middleware: 'auth',

    data() {
        return {
            updateProfileDone: false,
            user: {
                name1: "",
                name2: "",
                email: "",
                group_id: [104],
            },
            error: null
        }
    },
    async asyncData({ $axios }) {
        return {
            response: await $axios.$get('/rcms-api/1/member/me'),
        };
    },
    created() {
        this.user.name1 = this.response.details.name1;
        this.user.name2 = this.response.details.name2;
        this.user.email = this.response.details.email;
        if ('105' in this.$auth.user.group_ids) {
            this.user.group_id[0] = 105;
        }

    },
    methods: {
        async updateProfile() {
            try {
                await this.$axios.$post(
                    '/rcms-api/1/member/update',
                    { ...this.user } // フォームの内容をリクエストボディとして適用
                )
                this.updateProfileDone = true
            } catch (e) {
                console.error(e)
                this.error = e.response.data.errors[0].message
            }
        }
    }
};
</script>
