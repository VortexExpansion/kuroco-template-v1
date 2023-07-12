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

      <template v-if="submitted">
        <div class="c-text c-text--align-center">
          <div v-html="thanksText"></div>
        </div>
        <div class="c-button__outer">
          <NuxtLink to="/" class="c-button--return icon-arrow-left">TOPページ</NuxtLink>
        </div>
      </template>

      <div v-if="error" class="error">
        <p v-for="(err, idx) in error" :key="idx">
          {{ err }}
        </p>
      </div>

      <form v-if="!submitted" class="c-form">
        <p class="c-text">{{ response.details.inquiry_info }}</p>

        <div class="c-form__inner c-table--dl p-contact__table">
          <template v-for="n in response.details.cols">
            <!--テキスト-->
            <dl v-if="n.type === 1" :key="n.key">
              <dt>{{ n.title }}<span v-if="n.required === 2" class="c-form-required">（必須）</span></dt>
              <dd>
                <input class="c-form-input" v-model="submitData[n.key]" :name=n.key type="text">
              </dd>
            </dl>
            <!--テキストエリア-->
            <dl v-if="n.type === 2" :key="n.key">
              <dt>{{ n.title }}<span v-if="n.required === 2" class="c-form-required">（必須）</span></dt>
              <dd>
                <textarea v-model="submitData[n.key]" class="c-form-input--textarea" rows="4" cols="60" :name=n.key
                  placeholder=""></textarea>
              </dd>
            </dl>
            <!--ラジオボタン-->
            <dl v-if="n.type === 3" :key="n.key">
              <dt>{{ n.title }}<span v-if="n.required === 2" class="c-form-required">（必須）</span></dt>
              <dd>
                <ul class="c-form-toggle__list--inline">
                  <li v-for="option in n.options" :key="option.key">
                    <label>
                      <input v-model=submitData[n.key] type="radio" :name=n.key :value=option.key
                        class="c-form-toggle__radio">
                      {{ option.value }}
                    </label>
                  </li>
                </ul>
              </dd>
            </dl>
            <!--セレクトボックス-->
            <dl v-if="n.type === 4" :key="n.key">
              <dt>{{ n.title }}<span v-if="n.required === 2" class="c-form-required">（必須）</span></dt>
              <dd>
                <select v-model="submitData[n.key]" :name=n.key class="c-form-select">
                  <option label="選択なし" value="">選択なし</option>
                  <option v-for="option in n.options" :key="option.key" :label=option.value :value=option.key>
                    {{ option.value }}</option>
                </select>
              </dd>
            </dl>
            <!--チェックボックス-->
            <dl v-if="n.type === 5" :key="n.key">
              <dt>{{ n.title }}<span v-if="n.required === 2" class="c-form-required">（必須）</span></dt>
              <dd>
                <ul class="c-form-toggle__list--inline">
                  <li v-for="option in n.options" :key="option.key">
                    <label><input type="checkbox" :id=option.key :value=option.key v-model="submitData[n.key]"
                        class="c-form-toggle__checkbox">{{ option.value
                        }}</label>
                  </li>
                </ul>
              </dd>
            </dl>
            <!--日付-->
            <dl v-if="n.type === 6" :key="n.key">
              <dt>{{ n.title }}<span v-if="n.required === 2" class="c-form-required">（必須）</span></dt>
              <dd>
                <select v-model="y" @change="setYMD(n.key)" :name="n.key + '_y'" class="c-form-select--inline">
                  <option label="選択なし" value="">選択なし</option>
                  <option v-for="option in n.attribute.arrYear" :key="option.key" :label=option :value=option>{{ option
                  }}</option>
                </select><label>年</label>
                <select v-model="m" @change="setYMD(n.key)" :name="n.key + '_m'" class="c-form-select--inline">
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
                <select v-model="d" @change="setYMD(n.key)" :name="n.key + '_d'" class="c-form-select--inline">
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
            </dl>
            <!--画像ファイル-->
            <dl v-if="n.type === 7" :key="n.key">
              <dt>{{ n.title }}<span v-if="n.required === 2" class="c-form-required">（必須）</span></dt>
              <dd>
                <p></p>
                <p></p>
                <input type="file" :name=n.key @change="uploadFile($event, n.key)">
              </dd>
            </dl>
            <!--マトリックス(単一選択)-->
            <dl v-if="n.type === 10 && n.attribute.selection_type === 'single'" :key="n.key">
              <dt>{{ n.title }}<span v-if="n.required === 2" class="c-form-required">（必須）</span></dt>
              <dd>
                <table class="matrix_input">
                  <tbody>
                    <tr>
                      <th></th>
                      <th v-for="(options_col, i_col) in n.options[0].value" :key="i_col">{{ options_col }}</th>
                    </tr>
                    <tr v-for="(options_row, i_row) in n.options[1].value" :key="i_row">
                      <th>{{ options_row }}</th>
                      <td v-for="(options_col, i_col) in n.options[0].value" :key="i_col">
                        <input v-model=submitData[n.key][i_row-1] type="radio" :name="n.key + '[' + i_row + ']'" :value="{
                          ROW: {
                            key: i_row
                          },
                          COL: {
                            key: i_col
                          }
                        }">
                      </td>
                    </tr>
                  </tbody>
                </table>
              </dd>
            </dl>
            <!--マトリックス(複数選択)-->
            <dl v-if="n.type === 10 && n.attribute.selection_type === 'multiple'" :key="n.key">
              <dt>{{ n.title }}<span v-if="n.required === 2" class="c-form-required">（必須）</span></dt>
              <dd>
                <table class="matrix_input">
                  <tbody>
                    <tr>
                      <th></th>
                      <th v-for="(options_col, i_col) in n.options[0].value" :key="i_col">{{ options_col }}</th>
                    </tr>
                    <tr v-for="(options_row, i_row) in n.options[1].value" :key="i_row">
                      <th>{{ options_row }}</th>
                      <td v-for="(options_col, i_col) in n.options[0].value" :key="i_col">
                        <input type="checkbox" :id=i_col v-model="submitData[n.key][i_row-1].COL" :value="{
                          key: i_col
                        }" class="c-form-toggle__checkbox">
                      </td>
                    </tr>
                  </tbody>
                </table>
              </dd>
            </dl>
          </template>
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
      checked: null,
      thanksText: null,
    }
  },
  async asyncData({ $axios }) {
    return {
      response: await $axios.$get('/rcms-api/1/inquiry/1'),
    };
  },
  created() {
    //配列形式が必要なタイプは事前に宣言
    Object.keys(this.response.details.cols).forEach((key) => {
      let object = this.response.details.cols[key];

      //複数選択チェックボックスとマトリックスは配列形式でセット
      if (object.type === 5 || object.type === 10) {
        this.$set(this.submitData, object.key, []);
      }

      //マトリックスの複数選択チェックボックスは列の数だけオブジェクトを追加し、"COL"は配列形式でセット
      if (object.type === 10 && object.attribute.selection_type === 'multiple') {
        Object.keys(object.options[1].value).forEach((key) => {
          this.submitData[object.key].push(
            {
              "ROW": {
                "key": key
              },
              "COL": []
            }
          );
        })
      }

    })
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
        const formresponse = await this.$axios.$post(
          '/rcms-api/1/inquiry/1',
          { ...this.submitData } // フォームの内容をリクエストボディとして適用
        )
        this.error = null;
        this.submitted = true;
        this.thanksText = formresponse.messages[0];
      } catch (e) {
        console.error(e)
        this.error = e.response.data.errors
      }
    }
  }
};
</script>
