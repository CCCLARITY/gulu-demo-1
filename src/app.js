import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi',
    },
    methods:{
        inputChange (e) {
            // console.log(e.target.value)
        }
    }
});

// import chai from 'chai';
// import spies from 'chai-spies';
//
// chai.use(spies);
// const expect = chai.expect;
//
// //单元测试
//
// try {
//     //测试icon的名称是否正确
//     {
//         const Constructor = Vue.extend(Button);
//         const button = new Constructor({
//             propsData: {
//                 icon: 'settings',
//             }
//         });
//         button.$mount();
//         let useElement = button.$el.querySelector('use');
//         let href = useElement.getAttribute('xlink:href');
//         expect(href).to.eq('#i-settings');
//         button.$el.remove();        //每一个单元测试结束后要把组建销毁，否则会占用内存
//         button.$destroy();
//     }
//     //测试loading参数
//     {
//         const Constructor = Vue.extend(Button);
//         const button = new Constructor({
//             propsData: {
//                 icon: 'settings',
//                 loading: true
//             }
//         });
//         button.$mount();
//         let useElement = button.$el.querySelector('use');
//         let href = useElement.getAttribute('xlink:href');
//         expect(href).to.eq('#i-loading');
//         button.$el.remove();
//         button.$destroy();
//     }
//     //测试默认情况下icon的位置
//     {
//         const div = document.createElement('div');
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button);
//         const button = new Constructor({
//             propsData: {
//                 icon: 'settings'
//             }
//         });
//         button.$mount(div);
//         let svg = button.$el.querySelector('svg');
//         let {order} = window.getComputedStyle(svg);
//         expect(order).to.eq('1');
//         button.$el.remove();
//         button.$destroy();
//     }
//     //测试添加了icon-position之后icon的位置
//     {
//         const div = document.createElement('div');
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button);
//         const button = new Constructor({
//             propsData: {
//                 icon: 'settings',
//                 iconPosition: 'right'
//             }
//         });
//         button.$mount(div);
//         let svg = button.$el.querySelector('svg');
//         let {order} = window.getComputedStyle(svg);
//         expect(order).to.eq('2');
//         button.$el.remove();
//         button.$destroy();
//     }
//
//     //测试button的click事件
//     {
//         const Constructor = Vue.extend(Button);
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//             }
//         });
//         vm.$mount();
//         let spy = chai.spy(function () {
//         });
//         vm.$on('click', spy);       //点击按钮的时候调用间谍监听的函数，期待这个函数被执行
//         //希望这个函数被执行
//         let button = vm.$el;
//         button.click();
//         expect(spy).to.have.been.called();
//     }
// } catch(error){
//     window.errors = [error];
// } finally {
//     window.errors && window.errors.forEach((error)=>{
//         console.error(error.message);
//     });
// }

