<script setup lang="ts">
import type { SearchResultEntry } from "@/api/@types"
import datetimeFormat from '@/functions/datetimeFormat'

interface Props {
  entry: SearchResultEntry;
}

defineProps<Props>();
</script>

<template>
  <h3>
    <a :href="entry.url">{{ datetimeFormat(entry.date, "YYYY/MM/DD (ddd)") }} {{ entry.title }}</a>
    <span class="small">
      {{ entry.authors.join('/') }}
      (スコア: {{ entry.score }})
    </span>
  </h3>
  <p class="head">
    {{ entry.url }}
  </p>
  <p class="text">
    {{ entry.text }}
  </p>
</template>

<style scoped>
p.head
{
	font-size : 80%;
	margin : 0px 0px 0px 25px;
	color : #006400;
}
p.text
{
	margin : 12px 0px 12px 25px;
	padding : 2px 2px 2px 2px;
	background-color : #eeeeee;
}
p.foot
{
	font-size : 80%;
	margin : 0px 0px 0px 25px;
	text-align : right;
}
</style>
