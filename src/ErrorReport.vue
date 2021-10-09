<template>
    <router-view
        :content="content"
        :filename="filename"
        :signed-url="signedUrl" />
</template>

<script>
import Bugsnag from '@bugsnag/js';
import BugsnagPluginVue from '@bugsnag/plugin-vue';
import router from './router';

Bugsnag.start({
    apiKey: process.env.VUE_APP_BUGSNAG_SECRET,
    plugins: [new BugsnagPluginVue()],
    enabledReleaseStages: (process.env.VUE_APP_BUGSNAG_RELEASE_STAGES || 'production')
        .split(',')
        .map(value => value.trim())
});

export default {

    router,

    props: {

        filename: {
            type: String,
            required: true
        },

        signedUrl: {
            type: String,
            required: true
        }

    },

    computed: {

        content() {
            return this.getSlotContents();
        }

    },

    created() {
        this.$router.push({name: 'home'});
    },

    methods: {

        getSlotContents() {
            return this.$slots.default ? 
                this.$slots.default
                    .filter(vnode => {
                        return vnode.tag.toLowerCase() === 'textarea';
                    })
                    .reduce((carry, vnode) => {
                        return (
                            carry + vnode.children.map(child => {
                                return child.text;
                            }).join('')
                        );
                    }, '') : null;
        }

    }
    
};
</script>

<style lang="scss">
$blue: #2C5C97;
$yellow: #F6D878;
$green: darken(#6CB996, 20%);

$display5-weight: 300 !default;
$display5-size: 2.85rem !default;

@import "~bootstrap/scss/bootstrap";

.hourglass .hourglass-label {
    font-size: 1.5em;
    margin-top: 1em;
}
</style>
