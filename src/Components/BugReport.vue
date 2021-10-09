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
                    
                    <p>We found some errors in <strong>{{ filename }}</strong>. The following errors need to be fixed before we can send your email:</p>
                    
                    <br>
                    
                    <ol>
                        <li v-for="(error, i) in errors" :key="i">
                            <router-link :to="{name: 'fix'}" v-html="format(error)" />
                        </li>
                    </ol>
                    
                    <br>

                    <h5 class="font-weight-bold">
                        Additional Resources
                    </h5>

                    <ol>
                        <li><a href="http://thecapsule.email/docs/codes">Error Code Glossary</a></li>
                        <li>
                            <router-link :to="{name: 'contact'}">
                                Contact Support
                            </router-link>
                        </li>
                    </ol>
                </notepad>
            </animate-css>

            <animate-css name="fade" delay=".85s">
                <div v-if="mounted" class="m-4 text-center">
                    <btn :to="{name: 'fix'}" size="xl">
                        <font-awesome-icon icon="tools" /> Fix Errors
                    </btn>
                </div>
            </animate-css>
        </div>
    </div>
</template>

<script>
import Btn from '@vue-interface/btn';
import AnimateCss from '@vue-interface/animate-css';
import date from '@vue-interface/date-filter';
import { lint } from 'capsule-lint';
import Notepad from 'vue-notepad';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTools);

export default {
    
    components: {
        AnimateCss,
        Btn,
        FontAwesomeIcon,
        Notepad,
    },

    filters: {
        date
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
            errors: null,
            mounted: false
        };
    },

    mounted() {
        this.errors = lint(this.content);
        this.mounted = true;
    },

    methods: {

        escapeHtml(unsafe) {
            return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        },

        format(error) {
            return `${error.line},${error.col} :: (${error.rule.id}) ${this.escapeHtml(error.message)}`;
        }

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
