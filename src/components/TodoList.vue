
<template>
  <div class="todo-list">
    <TodoItem
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
    >
    </TodoItem>
    <input v-model="title">
    <button @click="addTodo">Add</button>
    <pre>
    {{ todoList }}
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from "vuex";
import TodoItem from './TodoItem.vue';

export default defineComponent({
    name: "TodoList",
    components: {
        TodoItem
    },
    setup() {
        const store = useStore();
        const todoList = computed(
            () => store.state.todoList
        );

        const id = computed(
            () => store.state.todoList.length
        );
        const complete = ref(true);
        const title = ref('');

        function addTodo() {
            store.commit('createTodo', {
                id: id.value,
                complete: complete.value,
                title: title.value
            });
        }

        return {
            title,
            todoList,
            addTodo
        }
    }
})
</script>

<style>

</style>
