<template>
  <div>
    <nav class="l-breadcrumb is-pc">
      <div class="l-container--middle">
        <ul>
          <li><a href="https://rcms-template-v1.r-cms.jp/">トップ</a></li>
          <li>お問い合わせ</li>
        </ul>
      </div>
    </nav>

    <section class="p-contact l-container--middle l-container--contents">
      <h1 class="c-heading--lv1">お問い合わせ</h1>

      <form class="c-form">
        <p class="c-text">{{ response.details.inquiry_info }}</p>

        <div class="c-form__inner c-table--dl p-contact__table">
          <!--お名前-->
          <dl>
            <dt>{{ response.details.cols[0].title }}<span v-if="response.details.cols[0].required = 2"
                class="c-form-required">（必須）</span></dt>
            <dd>
              <input class="c-form-input" v-model="submitData[response.details.cols[0].key]"
                :name=response.details.cols[0].key type="text">
            </dd>
            <div>確認：{{ submitData.name }}</div>
          </dl>
          <!--Eメールアドレス-->
          <dl>
            <dt>{{ response.details.cols[1].title }}<span v-if="response.details.cols[1].required = 2"
                class="c-form-required">（必須）</span></dt>
            <dd>
              <input class="c-form-input" v-model="submitData[response.details.cols[1].key]" :name=response.details.cols[1].key type="text">
            </dd>
            <div>確認from_mail：{{ submitData.from_mail }}</div>
          </dl>
          <!--ラジオボタン-->
          <dl>
            <dt>{{ response.details.cols[2].title }}</dt>
            <dd>
              <ul class="c-form-toggle__list--inline">
                <li v-for="n in response.details.cols[2].options" :key="n.key">
                  <label><input v-model=submitData[response.details.cols[2].key] type="radio"
                      :name=response.details.cols[2].key :value=n.key class="c-form-toggle__radio">{{ n.default }}{{
                          n.value
                      }}</label>
                </li>
              </ul>
            </dd>
            <div>確認：{{ submitData.ext_01 }}</div>
          </dl>
          <!--セレクトボックス-->
          <dl>
            <dt>{{ response.details.cols[3].title }}</dt>
            <dd>
              <select v-model="submitData[response.details.cols[3].key]" :name=response.details.cols[3].key
                class="c-form-select">
                <option label="選択なし" value="">選択なし</option>
                <option v-for="n in response.details.cols[3].options" :key="n.key" :label=n.value :value=n.key>
                  {{ n.value }}</option>
              </select>
            </dd>
            <div>確認：{{ submitData.ext_02 }}</div>
          </dl>
          <!--チェックボックス-->
          <dl>
            <dt>{{ response.details.cols[4].title }}</dt>
            <dd>
              <ul class="c-form-toggle__list--inline">
                <li v-for="n in response.details.cols[4].options" :key="n.key">
                  <label><input type="checkbox" :id=n.key :value=n.key
                      v-model="submitData[response.details.cols[4].key]"
                      class="c-form-toggle__checkbox">{{ n.value }}</label>
                </li>
              </ul>
            </dd>
            <div>確認：{{ submitData.ext_03 }}</div>
          </dl>
          <!--日付-->
          <dl>
            <dt>{{ response.details.cols[5].title }}</dt>
            <dd>
              <select v-model="y" @change="setYMD(response.details.cols[5].key)"
                :name="response.details.cols[5].key + '_y'" class="c-form-select--inline">
                <option label="選択なし" value="">選択なし</option>
                <option v-for="n in response.details.cols[5].attribute.arrYear" :key="n.key" :label=n :value=n>{{ n }}
                </option>
              </select><label>年</label>
              <select v-model="m" @change="setYMD(response.details.cols[5].key)"
                :name="response.details.cols[5].key + '_m'" class="c-form-select--inline">
                <option label="選択なし" value="">選択なし</option>
                <option label="01" value="01">01</option>
                <option label="02" value="02">02</option>
                <option label="03" value="03">03</option>
                <option label="04" value="04">04</option>
                <option label="05" value="05">05</option>
                <option label="06" value="06">06</option>
                <option label="07" value="07">07</option>
                <option label="08" value="08">08</option>
                <option label="09" value="09">09</option>
                <option label="10" value="10">10</option>
                <option label="11" value="11">11</option>
                <option label="12" value="12">12</option>
              </select><label>月</label>
              <select v-model="d" @change="setYMD(response.details.cols[5].key)"
                :name="response.details.cols[5].key + '_d'" class="c-form-select--inline">
                <option label="選択なし" value="">選択なし</option>
                <option label="01" value="01">01</option>
                <option label="02" value="02">02</option>
                <option label="03" value="03">03</option>
                <option label="04" value="04">04</option>
                <option label="05" value="05">05</option>
                <option label="06" value="06">06</option>
                <option label="07" value="07">07</option>
                <option label="08" value="08">08</option>
                <option label="09" value="09">09</option>
                <option label="10" value="10">10</option>
                <option label="11" value="11">11</option>
                <option label="12" value="12">12</option>
                <option label="13" value="13">13</option>
                <option label="14" value="14">14</option>
                <option label="15" value="15">15</option>
                <option label="16" value="16">16</option>
                <option label="17" value="17">17</option>
                <option label="18" value="18">18</option>
                <option label="19" value="19">19</option>
                <option label="20" value="20">20</option>
                <option label="21" value="21">21</option>
                <option label="22" value="22">22</option>
                <option label="23" value="23">23</option>
                <option label="24" value="24">24</option>
                <option label="25" value="25">25</option>
                <option label="26" value="26">26</option>
                <option label="27" value="27">27</option>
                <option label="28" value="28">28</option>
                <option label="29" value="29">29</option>
                <option label="30" value="30">30</option>
                <option label="31" value="31">31</option>
              </select><label>日</label>
            </dd>
            <div>確認：{{ y }}</div>
            <div>確認：{{ m }}</div>
            <div>確認：{{ d }}</div>
            <div>確認：{{ submitData.ext_04 }}</div>
          </dl>
          <!--画像ファイル-->
          <dl>
            <dt>{{ response.details.cols[6].title }}</dt>
            <dd>
              <p></p>
              <p></p>
              <input type="file" :name=response.details.cols[6].key
                @change="uploadFile($event, response.details.cols[6].key)">
            </dd>
            <div>確認：{{ submitData.ext_05 }}</div>
          </dl>
          <!--メッセージ-->
          <dl>
            <dt>メッセージ</dt>
            <dd>
              <textarea v-model="submitData[response.details.cols[7].key]" class="c-form-input--textarea" rows="4"
                cols="60" :name=response.details.cols[7].key placeholder=""></textarea>
            </dd>
            <div>確認：{{ submitData.body }}</div>
          </dl>
          <!--マトリックス-->
          <dl>
            <dt>{{ response.details.cols[8].title }}</dt>
            <dd>
              <table class="matrix_input">
                <tbody>
                  <tr>
                    <th></th>
                    <th v-for="(n2, i2) in response.details.cols[8].options[0].value" :key="i2">{{ n2 }}</th>
                  </tr>
                  <tr v-for="(n3, i3) in response.details.cols[8].options[1].value" :key="i3">
                    <th>{{ n3 }}</th>
                    <td v-for="(n4, i4) in response.details.cols[8].options[0].value" :key="i4">
                      <input v-model=submitData[response.details.cols[8].key][i3-1] type="radio"
                        :name="response.details.cols[8].key + '[' + i3 + ']'" :value="{
                          ROW: {
                            key: i3
                          },
                          COL: {
                            key: i4
                          }
                        }">
                    </td>
                  </tr>
                  <div>確認：{{ submitData.ext_06 }}</div>
                </tbody>
              </table>

            </dd>
          </dl>
        </div>


        <div class="c-form-policyAgree">
          <div class="c-form-policyAgree__contents">
            <h3 class="c-heading--lv3">個人情報保護方針</h3>
            <p>
              ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            </p>
            <h4 class="c-heading--lv4">１．個人情報に関する個人の尊重</h4>
            <p>
              ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            </p>
            <h4 class="c-heading--lv4">２．個人情報保護体制</h4>
            <p>
              ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            </p>
            <h4 class="c-heading--lv4">３．個人情報の安全管理</h4>
            <p>
              ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            </p>
            <h4 class="c-heading--lv4">４．個人情報に関する法令、国が定める指針及びその他の規範の遵守</h4>
            <p>
              ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            </p>
            <h4 class="c-heading--lv4">５．個人情報の開示・訂正・削除・苦情</h4>
            <p>
              ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            </p>
            <h4 class="c-heading--lv4">６．マネジメントシステムの継続的改善</h4>
            <p>
              ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            </p>
            <p class="c-text--align-right">XXXX年XX月XX日</p>
          </div>
          <p class="c-form-policyAgree__check"><label><input type="checkbox" v-model="checked" name="" value=""
                class="c-form-toggle__checkbox" data-js="privacyAgreeCheck"> 個人情報保護方針に同意する</label></p>
        </div>
        <div class="c-button__outer">
          <button class="c-button" type="submit" id="inquiry_item_button_confirm"
            :class="{ 'c-button--disabled': !checked }" data-js="privacyAgreeSubmit"
            @click.prevent="handleOnSubmit">確認する</button>
        </div>

      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitted: false,
      submitData: {},
      error: null,
      file_id: null,
      y: null,
      m: null,
      d: null,
      checked: null
    }
  },
  async asyncData({ $axios }) {
    return {
      response: await $axios.$get('/rcms-api/1/inquiry/1'),
    };
  },
  created() {
    this.response.details.cols.forEach((object) => {
      if (object.type === 5 || object.type === 10) {
        this.$set(this.submitData, object.key, [])
      }
    })
    //チェックボックスは配列でデータを送るため$setでプロパティ追加
    //this.$set(this.submitData, this.response.details.cols[4].key, [])
    //マトリックスは配列でデータを送るため$setでプロパティ追加
    //this.$set(this.submitData, this.response.details.cols[8].key, [])
  },
  methods: {
    //日付フォーマットのセット
    async setYMD(key) {
      this.$set(this.submitData, key, this.y + '-' + this.m + '-' + this.d)
    },
    //ファイルIDのセット
    async uploadFile(e, key) {
      const fm = new FormData();
      fm.append('file', e.target.files[0]);

      const { file_id } = await this.$axios.$post(`/rcms-api/1/upload`, fm, {
        headers: {
          'Content-Type': 'multipart/form-data', // required to post file as a binary
        },
      });
      this.$set(this.submitData, key, {})
      this.$set(this.submitData[key], 'file_id', file_id)
    },
    async handleOnSubmit() {
      try {
        await this.$axios.$post(
          '/rcms-api/1/inquiry/1',
          { ...this.submitData } // フォームの内容をリクエストボディとして適用
        )
        this.submitted = true
      } catch (e) {
        console.error(e)
        this.error = e.response.data.errors
      }
    }
  }
};
</script>
