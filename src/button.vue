<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')" >
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading " name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
	export default {
		// props:['icon','iconPosition']
		props: {
			icon: {},
			loading: {
				type: Boolean,
				default: false
			},
			iconPosition: {
				type: String,
				default: 'left',
				validator(value) {
					return value !== 'left' && value !== 'right' ? false : true;
				}
			}
		}
	}
</script>
<style lang="scss">
    @keyframes iLoading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }

    }

    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 .9em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-background);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-background);
        }

        &:focus {
            outline: none;
        }

        > .content {
            order: 2;
        }

        > .icon {
            order: 1;
            margin-right: .2em;
        }

        &.icon-right {
            > .content {
                order: 1;
            }

            > .icon {
                order: 2;
                margin-left: .2em;
                margin-right: 0;
            }
        }

        .loading {
            animation: iLoading 3s infinite linear;
        }


    }

</style>