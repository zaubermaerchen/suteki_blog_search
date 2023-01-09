<script setup lang="ts">
import Pager from "@/components/SearchResultPager.vue"

interface Props {
	totalResults: number;
  displayedResults: number;
  offset: number;
  limit: number;
}

defineProps<Props>();
</script>

<template>
  <section>
    <h2>
      検索結果
      <span class="small">
        {{ totalResults }}件中{{ offset + 1 }}～{{ offset + displayedResults }}件表示
      </span>
    </h2>

    <slot />
  </section>

  <section v-if="totalResults > 0">
    <Pager :total="totalResults" :offset="offset" :limit="limit" />
  </section>
</template>
