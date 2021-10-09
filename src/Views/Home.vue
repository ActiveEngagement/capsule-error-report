<template>
    <div class="container">
        <div class="bug-report mt-5">
            <header class="bug-report-logo">
                <animate-css name="zoom" in left>
                    <img v-if="mounted" src="~capsule-editor/src/assets/logo-no-text-1028x1028.png" class="img-fluid bug-report-logo-mark">
                </animate-css>
                <animate-css name="fade" delay=".5s">
                    <img v-if="mounted" src="../assets/capsule-logo-text.svg" class="img-fluid bug-report-logo-text">
                </animate-css>
            </header>
            
            <router-view
                v-if="mounted"
                :content="content"
                :filename="filename"
                :signed-url="signedUrl" />
        </div>
    </div>
</template>

<script>
import AnimateCss from '@vue-interface/animate-css';

export default {
    
    name: 'Home',

    components: {
        AnimateCss
    },

    props: {

        content: {
            type: String,
            required: true
        },

        filename: {
            type: String,
            required: true
        },

        signedUrl: {
            type: String,
            required: true
        }

    },

    data() {
        return {
            mounted: false
        };
    },

    mounted() {
        this.mounted = true;
    }
    
};
</script>
