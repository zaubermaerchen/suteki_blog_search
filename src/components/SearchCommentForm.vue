<script setup lang="ts">
interface Props {
  query: string;
  name: string;
  fromDate: string;
  toDate: string;
}

defineProps<Props>();
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
            <th>名前</th>
            <td>
              <input
                type="search"
                name="name"
                size="50"
                tabindex="2"
                accesskey="n"
                title="文字列1 +文字列2
    AND検索。文字列1と文字列2の両方を含む文章を検索する。
文字列1 OR 文字列2
文字列1 文字列2
    OR検索。文字列1または文字列2のどちらか片方を含む文章を検索する。
文字列1 -文字列2
    NOT検索。文字列1は含むが文字列2は含まない文章を検索する。
文字列1 ~文字列2
    文字列1を含む文章を検索する。ただし文章内に文字列2が含まれているとスコアを下げる"
                :value="name"
              />
            </td>
          </tr>
          <tr>
            <th>期間</th>
            <td>
              <input type="date" name="from_date" tabindex="3" accesskey="f" :value="fromDate" /> 〜
              <input type="date" name="to_date" tabindex="4" accesskey="t" :value="toDate" />
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
