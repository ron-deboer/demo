// test component
const TestComponent = {
  data() {
    return {
      message: 'My name is: '
    };
    },
    props: {name: String},  
    emits: {},
    methods: {
        sayHello() {
            alert('Hello !!');
        },
    },
    styles: [`.container {background: #fcf;}`],
    template: `
    <div class="container">
        <h2>
            <button @click="this.sayHello">
                Hello! {{ message }} {{ name }}
            </button>
        </h2>
    </div>`
};

const tc = Vue.defineCustomElement(TestComponent);

customElements.define('test-component', tc);