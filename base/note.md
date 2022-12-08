0. cdn 引入 vue 组件 '<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>'
1. {{}} 双大括号中只能传递文本信息
2. v-html 是 html 信息
3. v-bind: 绑定值, 可简写为 :
4. 三元表达式：\
   a. {{ number+1 }}\
   b.{{ ok ? 'YES' : 'NO'}}\
   c.{{ message.split('').reverse().join('') }}
5. 动态属性: v-bind:[attributename]='url'
6. v-on: 事件绑定
7. v-if/v-else: 条件渲染
8. v-show: 不显示，但只是隐藏，即 display：none
9. v-for:
10. @click: 点击触发事件 .left/.right/.middle
11. 按键修饰：如 @keyup.enter='submit' 在按下 enter 时调用 submit 函数\
    .exact 按键监听精确控制
12. v-model: 双向绑定,表单数据绑定
