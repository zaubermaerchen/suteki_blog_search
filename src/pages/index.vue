<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import aspida from "@aspida/fetch";
import api from "@/api/$api";
import { SearchEntryResponse } from "@/api/@types";
import { queryValueToString } from "@/functions/queryValue";
import SearchForm from "@/components/SearchEntryForm.vue";
import SearchResult from "@/components/SearchEntryResult.vue";

const route = useRoute();

const query = computed(() => queryValueToString(route.query.query) ?? '');
const authorList = computed(() => {
  const authorList = Array.isArray(route.query.author) ? route.query.author : [route.query.author];
  return authorList.flatMap(value => value ? value.toString() : []);
});
const fromDate = computed(() => queryValueToString(route.query.from_date) ?? "2007-12-24");
const toDate = computed(() => queryValueToString(route.query.to_date) ?? "2012-03-31");
const offset = computed(() => Math.max(parseInt(queryValueToString(route.query.offset) ?? "0"), 0));
const limit = computed(() => Math.max(parseInt(queryValueToString(route.query.limit) ?? "20"), 1));

const response = ref<SearchEntryResponse | null>(null);
const search = async () => {
  if (!query.value) {
    return;
  }

  response.value = null;
  try {
    const client = api(aspida(fetch, { baseURL: import.meta.env.VITE_API_SERVER_URL }));
    const res = await client.entry.search.get({
      query: {
        query: query.value,
        from_date: fromDate.value,
        to_date: toDate.value,
        authors: authorList.value,
        limit: limit.value,
        offset: offset.value,
      }
    })
    if (res.status === 200) {
      response.value = res.body;
    }
  } catch(error) {
    console.log(error);
  }
}
onMounted(search);
watch([query, fromDate, toDate, offset, limit], search);
</script>

<template>
  <SearchForm
    :query="query"
    :from-date="fromDate"
    :to-date="toDate"
    :author-list="authorList"
  />
  <SearchResult
    v-if="response"
    :entry-list="response?.results ?? []"
    :total="response?.count ?? 0"
    :offset="offset"
    :limit="limit"
  />
</template>
