<template>
    <div class="col" :class="colClass"
        :style="colStyle"
    >
        <div style="border: 1px solid green">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default{
        name: 'GuluCol',
        props: {
            span: [Number, String],
            offset: {
                type: [Number, String],
            }
        },
        data(){
            return {
                gutter: 0,

            }
        },
        computed: {
            colClass(){
                let {span, offset} = this;
                return [`col-${span}`, offset && `offset-${offset}`]
            },
            colStyle(){
                return {
                    paddingLeft: this.gutter/2 + 'px',
                    paddingRight: this.gutter/2 + 'px',
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col{
        height: 100px;
        /*background: grey;*/
        width: 50%;
        /*border: 1px solid red;*/
        padding: 0 10px;
        $class: col-;

        @for $n from 1 through 24{
            &.#{$class}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        $class: offset-;

        @for $n from 1 through 24{
            &.#{$class}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }

    }
</style>
