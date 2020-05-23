<template>
  <div>
     this is layout
     <sidebar />
     <navbar />
     <app-main />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
import Sidebar from './components/Sidebar'
export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Sidebar
  }
}
</script>
<style lang="stylus" scoped>
</style>
