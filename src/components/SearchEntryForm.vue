<script setup lang="ts">
import { toRefs } from "vue";

interface Props {
  query: string;
  fromDate: string;
  toDate: string;
  authorList: string[];
}

const props = defineProps<Props>();
const { authorList } = toRefs(props);
</script>

<template>
  <section>
    <h2>検索条件</h2>
    <form>
      <table>
        <tbody>
          <tr>
            <th>クエリ</th>
            <td>
              <input
                type="search"
                name="query"
                size="50"
                tabindex="1"
                accesskey="q"
                title="文字列1 +文字列2
    AND検索。文字列1と文字列2の両方を含む文章を検索する。
文字列1 OR 文字列2
文字列1 文字列2
    OR検索。文字列1または文字列2のどちらか片方を含む文章を検索する。
文字列1 -文字列2
    NOT検索。文字列1は含むが文字列2は含まない文章を検索する。
文字列1 ~文字列2
    文字列1を含む文章を検索する。ただし文章内に文字列2が含まれているとスコアを下げる"
                :value="query"
              />
            </td>
          </tr>
          <tr>
            <th>期間</th>
            <td>
              <input type="date" name="from_date" tabindex="2" accesskey="f" :value="fromDate" /> 〜
              <input type="date" name="to_date" tabindex="3" accesskey="t" :value="toDate" />
            </td>
          </tr>
          <tr>
            <th>対象</th>
            <td>
              <select v-model="authorList" name="author" size="5" tabindex="4" accesskey="a" multiple="true" style="width : 250px;">
                <option value="海晴">海晴</option>
                <option value="霙">霙</option>
                <option value="春風">春風</option>
                <option value="ヒカル">ヒカル</option>
                <option value="蛍">蛍</option>
                <option value="氷柱">氷柱</option>
                <option value="立夏">立夏</option>
                <option value="小雨">小雨</option>
                <option value="麗">麗</option>
                <option value="星花">星花</option>
                <option value="夕凪">夕凪</option>
                <option value="吹雪">吹雪</option>
                <option value="綿雪">綿雪</option>
                <option value="真璃">真璃</option>
                <option value="観月">観月</option>
                <option value="さくら">さくら</option>
                <option value="虹子">虹子</option>
                <option value="青空">青空</option>
                <option value="あさひ">あさひ</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <button type="submit" tabindex="5" accesskey="s">検索</button>
      </p>
    </form>
  </section>
</template>

<style scoped>
</style>
