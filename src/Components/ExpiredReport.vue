<template>
    <div class="container">
        <div class="bug-report mt-5">
            <animate-css name="fade" delay=".6666s">
                <notepad v-if="mounted" class="mt-5">
                    <template #header>
                        <div class="d-flex justify-content-center">
                            <div class="text-center">
                                <img src="../assets/capsule-bug-report.png" class="img-fluid img-header">
                            </div>
                        </div>
                    </template>
                    
                    <br>
                    This error report has expired. Please contact the person
                    that sent this report to you if you would like to fix the
                    original document.
                </notepad>
            </animate-css>
        </div>
    </div>
</template>

<script>
import AnimateCss from '@vue-interface/animate-css';
import { lint } from 'capsule-lint';
import Notepad from 'vue-notepad';

export default {
    
    components: {
        AnimateCss,
        Notepad,
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

<style lang="scss">
.bug-report {
    // display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    
    .btn-xl {
        padding: .75rem 2rem;
        font-size: 1.5rem;
    }

    .bug-report-logo {
        display: flex;
        flex-direction: column;
        
        .bug-report-logo-text {
            height: 3rem;
            margin-top: 2rem;
            animation-delay: 1000ms;
        }

        .bug-report-logo-mark {
            width: 8rem;
            margin: 0 auto;
        }
    }

    .jumbo-icon + h1 {
        margin-top: 2rem;
    }

    .display-5 {
        font-size: 2.5rem;
        font-weight: 300;
        line-height: 1.2;
    }

    .bug-report-text {
        font-size: 20px;
    }

    .bug-report-errors {
        font-size: 18px;
        margin-bottom: 0;
        padding-left: 1em;
    }

    .bug-report-list,
    .bug-report-fixed {
        max-width: 525px;
        margin-bottom: 4rem;
    }

    .notepad {
        margin: 0 auto;
        max-width: 50rem;

        .img-header {
            max-height: 8rem;
        }
    }
}
</style>
