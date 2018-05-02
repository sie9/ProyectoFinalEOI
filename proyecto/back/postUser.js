Vue.component('postUser', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <p>{{ post.text }}</p>
        <button>
          Enviar
        </button>
        <div v-html="post.content"></div>
      </div> `
});