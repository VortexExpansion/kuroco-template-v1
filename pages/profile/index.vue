<template>
    <div class="l-container--wrap">
        <div>
            <ul>
                <li>
                    <div>お名前</div>
                    <div>{{ response.details.name1 }}</div>
                    <div>{{ response.details.name2 }}</div>
                </li>
                <li>
                    <div>メールアドレス</div>
                    <div>{{ response.details.email }}</div>
                </li>
                <li>
                    <div>会員ステータス</div>
                    <div>{{ userStatus }}</div>
                </li>
            </ul>
        </div>
        <nuxt-link to="/profile/edit">会員情報を更新する</nuxt-link>

        <div v-if="!('105' in this.$auth.user.group_ids)">
            <button type="button" @click="(Popup = true)">プレミアム会員にアップデートする</button>
            <div v-if="Popup">
                <div>プレミアム会員にアップデートします。<br>よろしいですか？</div>
                <button type="button" @click="updateStatus(105)">はい。</button>
                <button type="button" @click="(Popup = false)">やっぱりやめる。</button>
            </div>
        </div>
        <div v-if="('105' in this.$auth.user.group_ids)">
            <button type="button" @click="(Popup = true)">通常会員にもどる</button>
            <div v-if="Popup">
                <div>通常会員にもどります<br>よろしいですか？</div>
                <button type="button" @click="updateStatus(104)">はい。</button>
                <button type="button" @click="(Popup = false)">やっぱりやめる。</button>
            </div>
        </div>
        <div v-if="groupUpdate">
            会員情報の更新が完了しました。
        </div>

        <nuxt-link to="/delete">退会はこちら</nuxt-link>
    </div>
</template>

<script>
export default {
    middleware: 'auth',

    data() {
        return {
            Popup: false,
            groupUpdate: false,
        };
    },
    async asyncData({ $axios }) {
        return {
            response: await $axios.$get('/rcms-api/1/member/me'),
        };
    },
    methods: {
        async updateStatus(status) {
            await this.$axios.$post('/rcms-api/1/member/update', { "group_id": [status] })
            this.$auth.fetchUser();
            this.Popup = false;
            this.groupUpdate = true;
        }
    },
    computed: {
        userStatus() {
            if ('105' in this.$auth.user.group_ids) {
                return this.$auth.user.group_ids['105']
            }
            else {
                return this.$auth.user.group_ids['104']
            }
        }
    }
};
</script>
