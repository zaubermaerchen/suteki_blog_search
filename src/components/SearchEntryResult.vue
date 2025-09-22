<script setup lang="ts">
import type { SearchResultEntry } from "@/api/@types";
import SearchResult from "@/components/SearchResult.vue";
import Entry from "@/components/EntrySummary.vue";

interface Props {
  entryList: SearchResultEntry[];
  total: number;
  offset: number;
  limit: number;
}

defineProps<Props>();
</script>

<template>
  <SearchResult :total-results="total" :displayed-results="entryList.length" :offset="offset" :limit="limit">
    <ul>
      <li v-for="entry in entryList" :key="entry.id">
        <Entry :entry="entry" />
      </li>
    </ul>
  </SearchResult>
</template>

<style scoped>
ul {
	margin: 12px 0px;
  padding: 0;
}
ul > li {
	list-style-type : none;
	list-style-position : outside;
	margin-left : 0;
}
</style>
