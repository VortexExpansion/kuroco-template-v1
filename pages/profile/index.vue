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
        <NuxtLink to="/profile/edit">会員情報を更新する</NuxtLink>

        <div v-if="!('105' in this.$auth.user.group_ids)">
            <button type="button" @click="(Popup = true)">プレミアム会員にアップデートする</button>
            <div v-if="Popup">
                <div>プレミアム会員にアップデートします。<br>よろしいですか？</div>
                <button type="button" @click="updateStatus('1')">はい。</button>
                <button type="button" @click="(Popup = false)">やっぱりやめる。</button>
            </div>
        </div>
        <div v-if="('105' in this.$auth.user.group_ids)">
            <button type="button" @click="(Popup = true)">通常会員にもどる</button>
            <div v-if="Popup">
                <div>通常会員にもどります<br>よろしいですか？</div>
                <button type="button" @click="updateStatus('2')">はい。</button>
                <button type="button" @click="(Popup = false)">やっぱりやめる。</button>
            </div>
        </div>
        <div v-if="groupUpdate">
            申請を受け付けました。メールをご確認ください。
        </div>

        <NuxtLink to="/delete">退会はこちら</NuxtLink>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    data() {
        return {
            error: null,
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
            try {
                const formresponse = await this.$axios.$post(
                    '/rcms-api/1/inquiry/3',
                    {
                        "name": this.response.details.name1 + ' ' + this.response.details.name2,
                        "email": this.response.details.email,
                        "ext_01": status
                    }
                )
                this.error = null;
                this.Popup = false;
                this.groupUpdate = true;
            } catch (e) {
                console.error(e)
                this.error = e.response.data.errors
            }
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
