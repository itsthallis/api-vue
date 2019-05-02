
const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

// Registro global
Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div>
            <h4>{{ post.title }}</h4>
            <div v-html="post.content"></div>
        </div>
        `
});

Vue.component('todos', {
    data() {
        return {
            listaTodos: []
        }
    },
      template: `
      <ul>
        <li v-for="todo in listaTodos">
            {{ todo.title }}
        </li>
      </ul>  
      `
});


Vue.component('completed-todos', {
    template: `
    <div class="row">
        <div class="col-md-3 mt-4" v-for="todo in todos" :key="todos.id">
            <div class="card">
                <div class="card-body">
                    <h5>{{ todo.id }}</h5>
                    <p class="card-text">{{ todo.title }}</p>
                </div>
            </div>
        </div>
    </div>
    `,
    computed: {
        completedTodo() {
            return this.todos.filter(function(u) {
              return u.completed
          })
        }
    },
    data() {
        return {
            todos: []
        }
    },
    methods: {
        async get_data() {
            const res = await API.get('todos')
            this.todos = res.data
        }
    },
    mounted() {
        this.get_data()
    }
})


// Registro local
var componenteLocal = {
    template: `
      <h1>Componente local</h1> 
      `
};


// Instância Vue
new Vue ({
    el: '#app',
    components: {
        'componente-local' : componenteLocal        
    },
    data: {
        titulo: 'Exibindo lista:',
        listaTodos: [],
        posts: [
            { id: 1, title: 'post 1' },
            { id: 2, title: 'post 2' },
            { id: 3, title: 'post 3' }
        ]
    }
})
  
  