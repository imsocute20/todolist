<template>
  <div id="app">
    <MenuBar />
    <ItemList />
    <MemoEditor v-if="$store.state.isShow" />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuBar from '@/components/MenuBar.vue'
import ItemList from './components/ItemList.vue'
import MemoEditor from './components/MemoEditor.vue'
export default {
  name: 'Home',
  components: {
    MenuBar,
    ItemList,
    MemoEditor
  }
}
</script>