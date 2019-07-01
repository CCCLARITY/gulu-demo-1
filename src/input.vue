<template>
    <div class="wrapper">
        <input type="text">
    </div>
</template>

<script>
    export default {
        name: 'GuluInput'
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    .wrapper{
        > input{
            height: $height;
            border: 1px solid $border-color;
            &:hover{
                border: 1px solid $border-color-hover;
            }
        }
    }
</style>
