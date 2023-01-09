<template>
  <nav>
    <ul>
      <li><RouterLink :to="{name: 'Index'}" active-class="active">日記検索</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
nav > ul {
	font-size : 80%;
	padding : 2px 4px 2px 4px;
	color : #ffffff;
	background-color : #4169e1;
	text-align : right;
	margin : 0px;
}
nav > ul > li {
	list-style-type: none;
	display : inline;
	margin : 0px;
	padding : 2px 2px 2px 2px;
}
nav > ul > li > a {
	text-decoration : none;
	font-weight : bold;
	color : #ffffff;
}
nav > ul > li > a.active {
	color : #ff8080;
}
nav > ul > li > a:hover {
	background-color : #8080ff;
}
</style>
