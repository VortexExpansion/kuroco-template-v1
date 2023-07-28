<template>
  <div class="l-container">
    <UiNavLink :subject="subject" />
    <section>
      <UiPagetitle :subject="subject" />
      <div class="l-container--small l-container--contents">
        <template v-if="submitted">
          <p v-html="thanksText"></p>
          <NuxtLink to="/" class="c-button">トップページ</NuxtLink>
        </template>
        <template v-else>
          <div class="c-form-group">
            <p class="c-text">{{ response.details.inquiry_info }}</p>
            <p class="c-text--small">
              <span class="c-form-label__required">*</span>は必須項目です。
            </p>
          </div>
          <UiAlertError v-if="error" :error="error" />
          <form class="c-form">

            <div
              v-for="n in response.details.cols"
              :key="n.key"
              class="c-form-group"
            >
              <label :for="n.key" class="c-form-label">{{ n.title }}</label>
              <span v-if="n.required === 2" class="c-form-label__required"
                >*</span
              >
              <!-- テキスト -->
              <template v-if="n.type === 1">
                <input
                  class="c-form-input"
                  v-model="submitData[n.key]"
                  :name="n.key"
                  :id="n.key"
                  type="text"
                />
              </template>
              <!--テキストエリア-->
              <template v-if="n.type === 2">
                <textarea
                  v-model="submitData[n.key]"
                  class="c-form-input"
                  rows="4"
                  cols="60"
                  :name="n.key"
                  :id="n.key"
                  placeholder=""
                ></textarea>
              </template>
              <!--ラジオボタン-->
              <template v-if="n.type === 3">
                <ul class="c-form-toggle__list--inline">
                  <li v-for="option in n.options" :key="option.key">
                    <label>
                      <input
                        v-model="submitData[n.key]"
                        type="radio"
                        :name="n.key"
                        :value="option.key"
                        class="c-form-toggle__radio"
                      />
                      {{ option.value }}
                    </label>
                  </li>
                </ul>
              </template>
              <!--セレクトボックス-->
              <template v-if="n.type === 4">
                <select
                  v-model="submitData[n.key]"
                  :name="n.key"
                  :id="n.key"
                  class="c-form-input"
                >
                  <option label="選択なし" value="">選択なし</option>
                  <option
                    v-for="option in n.options"
                    :key="option.key"
                    :label="option.value"
                    :value="option.key"
                  >
                    {{ option.value }}
                  </option>
                </select>
              </template>
              <!--チェックボックス-->
              <template v-if="n.type === 5">
                <ul class="c-form-toggle__list--inline">
                  <li v-for="option in n.options" :key="option.key">
                    <label
                      ><input
                        type="checkbox"
                        :id="option.key"
                        :value="option.key"
                        v-model="submitData[n.key]"
                        class="c-form-toggle__checkbox"
                      />{{ option.value }}</label
                    >
                  </li>
                </ul>
              </template>
              <!--日付-->
              <template v-if="n.type === 6">
                <div class="u-display-flex u-display-flex-align-items-center">
                  <select
                    v-model="y"
                    @change="setYMD(n.key)"
                    :name="n.key + '_y'"
                    :id="n.key + '_y'"
                    class="c-form-input"
                  >
                    <option label="選択なし" value="">選択なし</option>
                    <option
                      v-for="option in n.attribute.arrYear"
                      :key="option.key"
                      :label="option"
                      :value="option"
                    >
                      {{ option }}
                    </option></select
                  ><label :for="n.key + '_y'" class="u-pa-10">年</label>

                  <select
                    v-model="m"
                    @change="setYMD(n.key)"
                    :name="n.key + '_m'"
                    class="c-form-input"
                  >
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
                    <option label="12" value="12">12</option></select
                  ><label :for="n.key + '_m'" class="u-pa-10">月</label>
                  <select
                    v-model="d"
                    @change="setYMD(n.key)"
                    :name="n.key + '_d'"
                    class="c-form-input"
                  >
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
                    <option label="31" value="31">31</option></select
                  ><label :for="n.key + '_d'" class="u-pa-10">日</label>
                </div>
              </template>
              <!--画像ファイル-->
              <template v-if="n.type === 7">
                <p></p>
                <p></p>
                <input
                  type="file"
                  :name="n.key"
                  :id="n.key"
                  @change="uploadFile($event, n.key)"
                />
              </template>
              <!--マトリックス(単一選択)-->
              <template
                v-if="n.type === 10 && n.attribute.selection_type === 'single'"
              >
                <table class="matrix_input">
                  <tbody>
                    <tr>
                      <th></th>
                      <th
                        v-for="(options_col, i_col) in n.options[0].value"
                        :key="i_col"
                      >
                        {{ options_col }}
                      </th>
                    </tr>
                    <tr
                      v-for="(options_row, i_row) in n.options[1].value"
                      :key="i_row"
                    >
                      <th>{{ options_row }}</th>
                      <td
                        v-for="(options_col, i_col) in n.options[0].value"
                        :key="i_col"
                      >
                        <input
                          v-model="submitData[n.key][i_row - 1]"
                          type="radio"
                          :name="n.key + '[' + i_row + ']'"
                          :value="{
                            ROW: {
                              key: i_row,
                            },
                            COL: {
                              key: i_col,
                            },
                          }"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </template>
              <!--マトリックス(複数選択)-->
              <template
                v-if="
                  n.type === 10 && n.attribute.selection_type === 'multiple'
                "
              >
                <table class="matrix_input">
                  <tbody>
                    <tr>
                      <th></th>
                      <th
                        v-for="(options_col, i_col) in n.options[0].value"
                        :key="i_col"
                      >
                        {{ options_col }}
                      </th>
                    </tr>
                    <tr
                      v-for="(options_row, i_row) in n.options[1].value"
                      :key="i_row"
                    >
                      <th>{{ options_row }}</th>
                      <td
                        v-for="(options_col, i_col) in n.options[0].value"
                        :key="i_col"
                      >
                        <input
                          type="checkbox"
                          :id="i_col"
                          v-model="submitData[n.key][i_row - 1].COL"
                          :value="{
                            key: i_col,
                          }"
                          class="c-form-toggle__checkbox"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                <h4 class="c-heading--lv4">
                  ４．個人情報に関する法令、国が定める指針及びその他の規範の遵守
                </h4>
                <p>
                  ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
                </p>
                <h4 class="c-heading--lv4">
                  ５．個人情報の開示・訂正・削除・苦情
                </h4>
                <p>
                  ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
                </p>
                <h4 class="c-heading--lv4">
                  ６．マネジメントシステムの継続的改善
                </h4>
                <p>
                  ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
                </p>
                <p class="c-text--align-right">XXXX年XX月XX日</p>
              </div>
              <p class="c-form-policyAgree__check">
                <label
                  ><input
                    type="checkbox"
                    v-model="checked"
                    name=""
                    value=""
                    class="c-form-toggle__checkbox"
                    data-js="privacyAgreeCheck"
                  />
                  個人情報保護方針に同意する</label
                >
              </p>
            </div>
            <button
              class="c-button u-width-100"
              type="submit"
              id="inquiry_item_button_confirm"
              :class="{ 'c-button--disabled': !checked }"
              data-js="privacyAgreeSubmit"
              @click.prevent="handleOnSubmit"
            >
              確認する
            </button>
          </form>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import AlertError from '../../components/ui/AlertError.vue';
export default {
  components: { AlertError },
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
      subject: "お問い合わせ",
    };
  },
  async asyncData({ $axios }) {
    return {
      response: await $axios.$get("/rcms-api/1/inquiry/1"),
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
      if (
        object.type === 10 &&
        object.attribute.selection_type === "multiple"
      ) {
        Object.keys(object.options[1].value).forEach((key) => {
          this.submitData[object.key].push({
            ROW: {
              key: key,
            },
            COL: [],
          });
        });
      }
    });
  },
  methods: {
    //日付フォーマットのセット
    async setYMD(key) {
      this.$set(this.submitData, key, this.y + "-" + this.m + "-" + this.d);
    },
    //ファイルIDのセット
    async uploadFile(e, key) {
      const fm = new FormData();
      fm.append("file", e.target.files[0]);

      const { file_id } = await this.$axios.$post(`/rcms-api/1/upload`, fm, {
        headers: {
          "Content-Type": "multipart/form-data", // required to post file as a binary
        },
      });
      this.$set(this.submitData, key, {});
      this.$set(this.submitData[key], "file_id", file_id);
    },
    async handleOnSubmit() {
      try {
        const formresponse = await this.$axios.$post(
          "/rcms-api/1/inquiry/1",
          { ...this.submitData } // フォームの内容をリクエストボディとして適用
        );
        this.error = null;
        this.submitted = true;
        this.thanksText = formresponse.messages[0];
      } catch (e) {
        console.error(e);
        this.error = e.response.data.errors;
      }
    },
  },
};
</script>
