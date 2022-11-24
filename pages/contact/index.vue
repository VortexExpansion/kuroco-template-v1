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


      <a name="inquiry1"></a>
      <form class="c-form" name="inquiry_form" action="https://rcms-template-v1.r-cms.jp/contact/MODE=CONFIRM#inquiry1"
        method="POST" enctype="multipart/form-data" role="form">
        <input type="hidden" name="MODE" value="CONFIRM">
        <input type="hidden" name="id" value="1">
        <input type="hidden" name="DG_CODE" id="DG_CODE1" value="b8b05916ec304f934309d635b76fa462">
        <input type="hidden" name="inquiry_bn_id" value="">
        <input type="hidden" name="from_id" value="1">
        <input type="hidden" name="from_module" value="inquiry">
        <input type="hidden" name="from_uri" value="/contact/">

        <p class="c-text">フォームにお問い合わせ内容をご入力いただき、「個人情報の取扱いについて」に同意いただける方は、画面下の【同意する】欄にチェックをし［確認］ボタンをクリックしてください。</p>

        <div class="c-form__inner c-table--dl p-contact__table">
          <dl>
            <dt>お名前<span class="c-form-required">（必須）</span></dt>
            <dd>
              <input class="c-form-input" type="text" name="name" value="" placeholder="">

            </dd>
          </dl>
          <dl>
            <dt>Eメールアドレス<span class="c-form-required">（必須）</span></dt>
            <dd>
              <input class="c-form-input" type="text" name="from_mail" value="" placeholder="">

            </dd>
          </dl>
          <dl>
            <dt>Eメールアドレス（確認用）<span class="c-form-required">（必須）</span></dt>
            <dd>
              <input class="c-form-input" type="text" name="from_mail2" value="">
            </dd>
          </dl>
          <dl>
            <dt>ラジオボタン</dt>
            <dd>
              <ul class="c-form-toggle__list--inline">
                <li><label><input type="radio" name="ext_01" value="1" class="c-form-toggle__radio">りんご</label></li>
                <li><label><input type="radio" name="ext_01" value="2" class="c-form-toggle__radio">もも</label></li>
                <li><label><input type="radio" name="ext_01" value="3" class="c-form-toggle__radio">蜜柑</label></li>
              </ul>

            </dd>
          </dl>
          <dl>
            <dt>セレクトボックス</dt>
            <dd>
              <select name="ext_02" class="c-form-select">
                <option label="選択なし" value="">選択なし</option>
                <option label="りんご" value="1">りんご</option>
                <option label="もも" value="2">もも</option>
                <option label="蜜柑" value="3">蜜柑</option>
              </select>

            </dd>
          </dl>
          <dl>
            <dt>チェックボックス</dt>
            <dd>
              <ul class="c-form-toggle__list--inline">
                <li><label><input type="checkbox" name="ext_03[]" value="1" class="c-form-toggle__checkbox">りんご</label>
                </li>
                <li><label><input type="checkbox" name="ext_03[]" value="2" class="c-form-toggle__checkbox">もも</label>
                </li>
                <li><label><input type="checkbox" name="ext_03[]" value="3" class="c-form-toggle__checkbox">みかん</label>
                </li>
              </ul>

            </dd>
          </dl>
          <dl>
            <dt>日付</dt>
            <dd>
              <select name="ext_04_y" class="c-form-select--inline">
                <option label="選択なし" value="">選択なし</option>
                <option label="2023" value="2023">2023</option>
                <option label="2022" value="2022">2022</option>
                <option label="2021" value="2021">2021</option>
                <option label="2020" value="2020">2020</option>
                <option label="2019" value="2019">2019</option>
                <option label="2018" value="2018">2018</option>
                <option label="2017" value="2017">2017</option>
                <option label="2016" value="2016">2016</option>
                <option label="2015" value="2015">2015</option>
                <option label="2014" value="2014">2014</option>
                <option label="2013" value="2013">2013</option>
                <option label="2012" value="2012">2012</option>
                <option label="2011" value="2011">2011</option>
                <option label="2010" value="2010">2010</option>
                <option label="2009" value="2009">2009</option>
                <option label="2008" value="2008">2008</option>
                <option label="2007" value="2007">2007</option>
                <option label="2006" value="2006">2006</option>
                <option label="2005" value="2005">2005</option>
                <option label="2004" value="2004">2004</option>
                <option label="2003" value="2003">2003</option>
                <option label="2002" value="2002">2002</option>
                <option label="2001" value="2001">2001</option>
                <option label="2000" value="2000">2000</option>
                <option label="1999" value="1999">1999</option>
                <option label="1998" value="1998">1998</option>
                <option label="1997" value="1997">1997</option>
                <option label="1996" value="1996">1996</option>
                <option label="1995" value="1995">1995</option>
                <option label="1994" value="1994">1994</option>
                <option label="1993" value="1993">1993</option>
                <option label="1992" value="1992">1992</option>
                <option label="1991" value="1991">1991</option>
                <option label="1990" value="1990">1990</option>
                <option label="1989" value="1989">1989</option>
                <option label="1988" value="1988">1988</option>
                <option label="1987" value="1987">1987</option>
                <option label="1986" value="1986">1986</option>
                <option label="1985" value="1985">1985</option>
                <option label="1984" value="1984">1984</option>
                <option label="1983" value="1983">1983</option>
                <option label="1982" value="1982">1982</option>
                <option label="1981" value="1981">1981</option>
                <option label="1980" value="1980">1980</option>
                <option label="1979" value="1979">1979</option>
                <option label="1978" value="1978">1978</option>
                <option label="1977" value="1977">1977</option>
                <option label="1976" value="1976">1976</option>
                <option label="1975" value="1975">1975</option>
                <option label="1974" value="1974">1974</option>
                <option label="1973" value="1973">1973</option>
                <option label="1972" value="1972">1972</option>
                <option label="1971" value="1971">1971</option>
                <option label="1970" value="1970">1970</option>
                <option label="1969" value="1969">1969</option>
                <option label="1968" value="1968">1968</option>
                <option label="1967" value="1967">1967</option>
                <option label="1966" value="1966">1966</option>
                <option label="1965" value="1965">1965</option>
                <option label="1964" value="1964">1964</option>
                <option label="1963" value="1963">1963</option>
                <option label="1962" value="1962">1962</option>
                <option label="1961" value="1961">1961</option>
                <option label="1960" value="1960">1960</option>
                <option label="1959" value="1959">1959</option>
                <option label="1958" value="1958">1958</option>
                <option label="1957" value="1957">1957</option>
                <option label="1956" value="1956">1956</option>
                <option label="1955" value="1955">1955</option>
                <option label="1954" value="1954">1954</option>
                <option label="1953" value="1953">1953</option>
                <option label="1952" value="1952">1952</option>
                <option label="1951" value="1951">1951</option>
                <option label="1950" value="1950">1950</option>
                <option label="1949" value="1949">1949</option>
                <option label="1948" value="1948">1948</option>
                <option label="1947" value="1947">1947</option>
                <option label="1946" value="1946">1946</option>
                <option label="1945" value="1945">1945</option>
                <option label="1944" value="1944">1944</option>
                <option label="1943" value="1943">1943</option>
                <option label="1942" value="1942">1942</option>
                <option label="1941" value="1941">1941</option>
                <option label="1940" value="1940">1940</option>
                <option label="1939" value="1939">1939</option>
                <option label="1938" value="1938">1938</option>
                <option label="1937" value="1937">1937</option>
                <option label="1936" value="1936">1936</option>
                <option label="1935" value="1935">1935</option>
                <option label="1934" value="1934">1934</option>
                <option label="1933" value="1933">1933</option>
                <option label="1932" value="1932">1932</option>
                <option label="1931" value="1931">1931</option>
                <option label="1930" value="1930">1930</option>
                <option label="1929" value="1929">1929</option>
                <option label="1928" value="1928">1928</option>
                <option label="1927" value="1927">1927</option>
                <option label="1926" value="1926">1926</option>
                <option label="1925" value="1925">1925</option>
                <option label="1924" value="1924">1924</option>
                <option label="1923" value="1923">1923</option>
                <option label="1922" value="1922">1922</option>
                <option label="1921" value="1921">1921</option>
                <option label="1920" value="1920">1920</option>
                <option label="1919" value="1919">1919</option>
                <option label="1918" value="1918">1918</option>
                <option label="1917" value="1917">1917</option>
                <option label="1916" value="1916">1916</option>
                <option label="1915" value="1915">1915</option>
                <option label="1914" value="1914">1914</option>
                <option label="1913" value="1913">1913</option>
                <option label="1912" value="1912">1912</option>
                <option label="1911" value="1911">1911</option>
                <option label="1910" value="1910">1910</option>
                <option label="1909" value="1909">1909</option>
                <option label="1908" value="1908">1908</option>
                <option label="1907" value="1907">1907</option>
                <option label="1906" value="1906">1906</option>
                <option label="1905" value="1905">1905</option>
                <option label="1904" value="1904">1904</option>
                <option label="1903" value="1903">1903</option>
                <option label="1902" value="1902">1902</option>
                <option label="1901" value="1901">1901</option>
                <option label="1900" value="1900">1900</option>
              </select><label>年</label><select name="ext_04_m" class="c-form-select--inline">
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
              </select><label>月</label><select name="ext_04_d" class="c-form-select--inline">
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
          <dl>
            <dt>画像ファイル</dt>
            <dd>
              <p></p>
              <p></p>
              <input type="file" name="ext_05">
              <label><input type="checkbox" value="1" name="ext_05_del">削除</label>

            </dd>
          </dl>
          <dl>
            <dt>メッセージ</dt>
            <dd>
              <textarea class="c-form-input--textarea" rows="4" cols="60" name="body" placeholder=""></textarea>

            </dd>
          </dl>
          <dl>
            <dt>今日色々</dt>
            <dd>
              <table class="matrix_input">
                <tbody>
                  <tr>
                    <th></th>
                    <th>良い</th>
                    <th>普通</th>
                    <th>悪い</th>
                  </tr>
                  <tr>
                    <th>今日の調子</th>
                    <td>
                      <input type="radio" name="ext_07[1]" value="良い">
                    </td>
                    <td>
                      <input type="radio" name="ext_07[1]" value="普通">
                    </td>
                    <td>
                      <input type="radio" name="ext_07[1]" value="悪い">
                    </td>
                  </tr>
                  <tr>
                    <th>今日の運勢</th>
                    <td>
                      <input type="radio" name="ext_07[2]" value="良い">
                    </td>
                    <td>
                      <input type="radio" name="ext_07[2]" value="普通">
                    </td>
                    <td>
                      <input type="radio" name="ext_07[2]" value="悪い">
                    </td>
                  </tr>
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
          <p class="c-form-policyAgree__check"><label><input type="checkbox" name="" value=""
                class="c-form-toggle__checkbox" data-js="privacyAgreeCheck"> 個人情報保護方針に同意する</label></p>
        </div>
        <div class="c-button__outer">
          <button class="c-button--disabled" type="submit" id="inquiry_item_button_confirm"
            data-js="privacyAgreeSubmit">確認する</button>
        </div>

      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
