<script setup lang="ts">
import { computed } from "vue";
import { useRoute, type RouteLocationRaw } from "vue-router";

interface Props {
  total: number;
  offset: number;
  limit: number;
}

const props = defineProps<Props>();
const route = useRoute();

const currentPage = computed(() => Math.ceil(props.offset / props.limit) + 1);
const maxPage = computed(() => Math.ceil(props.total / props.limit));

const getRouteLocation = (page: number): RouteLocationRaw => {
  const offset = (page - 1) * props.limit;
  const query = Object.assign({}, route.query, {offset: offset.toString()});

  return {
    path: route.path,
    query: query,
  };
};
</script>

<template>
  <ul>
    <li v-if="currentPage !== 1"><RouterLink :to="getRouteLocation(1)">&lt;</RouterLink></li>
    <li v-for="page in maxPage" :key="page">
      <RouterLink :to="getRouteLocation(page)" :class="{'active': currentPage === page}">{{ page }}</RouterLink>
    </li>
    <li v-if="currentPage !== maxPage"><RouterLink :to="getRouteLocation(maxPage)">&gt;</RouterLink></li>
  </ul>
</template>

<style scoped>
ul {
    text-align: center;
    margin: 12px 0px;
}
li {
    list-style-position: outside;
    list-style-type: none;
    display: inline;
    margin: 0px;
    padding: 2px;
}
li > a.active {
	color : #ff8080;
  font-weight: bold;
}
</style>
