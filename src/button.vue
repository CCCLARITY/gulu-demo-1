<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <!--<svg v-if="icon" class="icon">-->
            <!--<use :xlink:href="`#i-${icon}`"></use>-->
        <!--</svg>-->
        <g-icon v-if="icon" :name="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>

</template>

<script>
    export default {
        // props: ['icon', 'iconPosition']         //接口，需要输入一个icon
        props: {                            //props 有两种写法，这种是对象
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value){
                    return !(value !== 'left' && value !== 'right');
                    // return value === 'left' || value === 'right';
                }
            }
        }
    }
</script>

<style lang="scss">
    .g-button{
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;         /*按钮的宽度width*/
        border-radius: var(--border-radius);
        background: var(--button-bg);
        border: 1px solid var(--border-color);
        display: inline-flex;
        vertical-align: top;
        justify-content: center;
        align-items: center;
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }

        > .icon{
            order: 1;
            margin-right: .3em;
        }

        > .content{
            order: 2;
        }

        &.icon-right{
            > .icon{
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
            > .content{
                order: 1;
            }
        }
    }
</style>