const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok;
    });

    describe('props', ()=>{
        it('接收 value.', () => {
            const Constructor = Vue.extend(Input);
            const vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.value).to.equal('1234');
            vm.$destroy()
        });
        it('接收 disabled.', () => {
            const Constructor = Vue.extend(Input);
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.disabled).to.equal(true);
            vm.$destroy()
        });
        it('接收 readonly.', () => {
            const Constructor = Vue.extend(Input);
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input');
            console.log(inputElement.outerHTML)
            expect(inputElement.readOnly).to.equal(true);
            vm.$destroy()
        });
        it('接收 error.', () => {
            const Constructor = Vue.extend(Input);
            const vm = new Constructor({
                propsData: {
                    error: '你错了'
                }
            }).$mount();
            const useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error');
            const errorMessage = vm.$el.querySelector('.errorMessage');
            expect(errorMessage.innerText).to.equal('你错了');
            vm.$destroy()
        });
    });

    describe('事件', ()=>{
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(()=>{
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件', ()=>{
            ['change', 'input', 'focus', 'blur'].forEach((eventName)=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName, callback)

                //触发input的change事件
                let event = new Event(eventName);
                let inputElement = vm.$el.querySelector('input');
                inputElement.dispatchEvent(event)

                expect(callback).to.have.been.calledWith(event);
            })

        })
        // it('支持 input 事件', ()=>{
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('input', callback)
        //
        //     //触发input的change事件
        //     let event = new Event('input');
        //     let inputElement = vm.$el.querySelector('input');
        //     inputElement.dispatchEvent(event)
        //
        //     expect(callback).to.have.been.calledWith(event);
        // })
        // it('支持 focus 事件', ()=>{
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('focus', callback)
        //
        //     //触发input的change事件
        //     let event = new Event('focus');
        //     let inputElement = vm.$el.querySelector('input');
        //     inputElement.dispatchEvent(event)
        //
        //     expect(callback).to.have.been.calledWith(event);
        // })
        // it('支持 blur 事件', ()=>{
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('blur', callback)
        //
        //     //触发input的change事件
        //     let event = new Event('blur');
        //     let inputElement = vm.$el.querySelector('input');
        //     inputElement.dispatchEvent(event)
        //
        //     expect(callback).to.have.been.calledWith(event);
        // })
    })

})
