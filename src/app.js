import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
    }
})

//单元测试
import chai from 'chai';
const expect = chai.expect;
// icon
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
        }
    });
    button.$mount('#test');

    let useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings');

    button.$el.remove();
    button.$destroy();
}
// loading
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true,
        }
    });
    button.$mount();

    let useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading');

    button.$el.remove();
    button.$destroy();
}
//iconPosition
// {
//     const Constructor = Vue.extend(Button);
//     const button = new Constructor({
//         propsData: {
//             icon: 'settings',
//         }
//     });
//     button.$mount('#order');
//
//     let svg = button.$el.querySelector('svg');
//     let {order} = window.getComputedStyle(svg);
//     expect(order).to.eq("1");
// }

{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: "right"
        }
    });
    button.$mount('#order');

    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq("2");

    button.$el.remove();
    button.$destroy();
}

//click
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    });
    vm.$mount();
    vm.$on('click', function(){
        expect(1).to.equal(1);
    })

    let button = vm.$el;
    button.click();
}