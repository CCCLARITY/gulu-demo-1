<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        name: 'GuluRow',
        props: {
            gutter: {
                type: [Number, String],
            }
        },
        created() {
        },
        mounted(){
            this.$children.forEach((vm)=>{
                vm.gutter = this.gutter;
            });
        },
        computed: {
            rowStyle (){
                return {marginLeft: -this.gutter/2+'px', marginRight: -this.gutter/2 + 'px'}
            }
        }
    }
</script>

<style lang="scss" scoped>
    .row{
        display: flex;
        margin: 0 -10px;
    }
</style>
