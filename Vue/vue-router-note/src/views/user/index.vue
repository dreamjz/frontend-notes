<template>
  <div class="user">
    <h2>Welcome! User: {{ $route.params.id }}</h2>
    <router-view />
    <router-view name="profile" />
    <router-view name="post" />
  </div>
</template>

<script>
export default {
  beforeRouteUpdate(to, from, next) {
    console.log('from: ', from.fullPath)
    console.log('to', to.fullPath)
    next()
  }
}
</script>
