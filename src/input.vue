<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
        >
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon';
    export default {
        components: {
            icon: Icon,
        },
        name: 'GuluInput',
        props: {
            value: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false,
            },
            error: {
                type: String,
            }
        },
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 14px;
    $box-shadow-color: rgba(0,0,0,0.5);
    $red: #f1453d;
    .wrapper{font-size: $font-size;display: inline-flex;align-items: center;
        > *{margin-right: .5em; &:last-child{margin-right: 0;} }
        > input{
            height: $height;
            border: 1px solid $border-color;border-radius: $border-radius;padding: 0 9px;
            font-size: inherit;
            &:hover{border: 1px solid $border-color-hover;}
            &:focus{box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}
            &[disabled], &[readonly]{border-color: #bbb;color: #ccc;cursor: not-allowed;}
        }
        &.error{border-color: $red;}
        .icon-error{fill: $red;font-size: 20px;}
        .errorMessage{color: $red;}
    }
</style>
