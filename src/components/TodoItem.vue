<template>
  <div class="todo-item">
    <input
      type="checkbox"
      :checked="todo.complete"
      @change="changeTodoStatus(todo.id)"
    >
    <div class="todo-item__title">{{ todo.title }}</div>
    <button @click="removeTodo(todo.id)">X</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from "vuex";

export default defineComponent({
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      require: true
    }
  },
  setup(props: any) {
    const store = useStore();

    function removeTodo(id: number) {
      store.commit('removeTodo', id);
    }

    function changeTodoStatus(id: number) {
      store.commit('editTodo', {
          id: id,
          complete: !props.todo.complete,
          title: props.todo.title
      });
    }

    return {
        changeTodoStatus,
        removeTodo
    }
  }
});
</script>

<style>
.todo-item {
  max-width: 300px;
  margin: 6px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
