import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {
                id: 1,
                title: "todo item a",
                completed: false
            },
            {
                id: 2,
                title: "todo item b",
                completed: false
            },
        ]
    },

    getters: {


    },

    mutations: {
        NEW_TODO(state, todoItem) {
          //  Vue.set(vm.items, indexOfItem, newValue)

           // Vue.set(state.todos, state.todos.length+1, {
           //     title: todoItem,
         //       completed: false,
         //   });

            state.todos = [
                ...state.todos, {
                    id: state.todos.length+1,
                    title: todoItem,
                    completed: false,
                }
            ]

            // state.todos.push({
            //     title: todoItem,
            //     completed: false,
            // })
        },
        DELETE_OLD_TODO(state, todoItem) {
          //  state.todo = state.todo.fiter(x=> x.title !== todoItem.title)
            const index = state.todos.indexOf(todoItem);
           // Vue.delete()
            state.todos.splice(index, 1);
        },
        TOGGLE_STATUS(state, todoItem){
            todoItem.completed = !todoItem.completed
        }

    },

    actions: {
        addNewTodo({commit}, todoItem){
            commit('NEW_TODO', todoItem)
        },
        deleteOldTodo({commit}, todoItem){
            commit('DELETE_OLD_TODO', todoItem)
        },
        toggleStatus({commit}, todoItem){
            commit('TOGGLE_STATUS', todoItem)
        }

    }
})