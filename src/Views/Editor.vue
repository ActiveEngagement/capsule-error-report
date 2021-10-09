<template>
    <capsule-editor
        ref="editor"
        v-model="editor"
        :content="content"
        disable-filename
        :filename="filename">
        <template #success="{ close, isShowing }">
            <slide-deck :active="active">
                <div :key="0">
                    <div class="text-center position-relative">
                        <div v-if="!error && !activity">
                            <animate-css name="zoom" left>
                                <img v-if="isShowing" src="~capsule-editor/src/assets/logo-no-text-1028x1028.png" class="capsule-editor-modal-logo">
                            </animate-css>
                    
                            <h1 class="font-weight-light mb-4">
                                Document Fixed!
                            </h1>

                            <h5 class="font-weight-light mb-4 mx-5">
                                Do you want to automatically send it back to us or download it and manually email it as an attachment?
                            </h5>

                            <div class="mb-5">
                                <btn size="lg" variant="success" class="mr-2" @click="onClickSend">
                                    <font-awesome-icon icon="envelope" /> Send Now
                                </btn>
                                <btn size="lg" variant="success" outline @click="onClickDownload">
                                    <font-awesome-icon icon="download" /> Download
                                </btn>
                            </div>
                        </div>

                        <animate-css name="fade" up leave-active-class="position-absolute w-100 h-100">
                            <div v-if="activity" class="my-5 py-5">
                                <div class="my-5">
                                    <hourglass :label="hourGlassLabel" animate />
                                </div>
                            </div>
                            <http-exception v-else-if="error" :error="error">
                                <div class="text-center">
                                    <btn size="lg" class="mr-2" @click="onClickSend">
                                        <font-awesome-icon icon="redo" /> Try Again
                                    </btn>
                                    <btn size="lg" variant="secondary" @click="onClickCancel(close)">
                                        <font-awesome-icon icon="times-circle" /> Cancel
                                    </btn>
                                </div>
                            </http-exception>
                        </animate-css>
                    </div>
                </div>

                <div :key="1">
                    <animate-css name="fade" leave-active-class="position-absolute w-100 h-100">
                        <div class="text-center position-relative my-5">
                            <font-awesome-icon icon="check-circle" size="6x" class="text-success" />
                            <h1 class="font-weight-light mt-3 mb-0">
                                Thank You!
                            </h1>
                            <h5 class="font-weight-light my-4 mx-5 px-1">
                                Thank you for your assistance in fixing these errors. We have received your document and will process it shortly.
                            </h5>
                            <btn size="lg" @click="onClickClose">
                                <font-awesome-icon icon="window-close" /> Close Window
                            </btn>
                        </div>
                    </animate-css>
                </div>
                
                <div v-if="download" :key="2">
                    <div class="text-center position-relative my-5">
                        <font-awesome-icon :icon="['far', 'file-archive']" size="6x" class="text-secondary" />
                        <h1 class="font-weight-light mt-3 mb-0">
                            File Downloaded!
                        </h1>
                        <h4 class="font-weight-light mt-3 mb-1">
                            {{ download.zipname }}
                        </h4>
                        <h5 class="font-weight-light mb-4">
                            ({{ download.size }})
                        </h5>
                        <div>
                            <btn class="mr-2" size="lg" variant="success" @click="onClickDownloadAgain">
                                <font-awesome-icon icon="download" /> Download Again
                            </btn>
                        </div>
                    </div>
                </div>
            </slide-deck>
        </template>
    </capsule-editor>
</template>

<script>
import AnimateCss from '@vue-interface/animate-css';
import Btn from '@vue-interface/btn';
import { SlideDeck } from '@vue-interface/slide-deck';
import Hourglass from 'vue-hourglass';
import HttpException from '../Components/HttpException';
import { download, revision, zip } from '../Helpers/Functions';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFileArchive } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faDownload, faCheckCircle, faTimesCircle, faWindowClose, faRedo } from '@fortawesome/free-solid-svg-icons';

library.add(
    faCheckCircle,
    faDownload,
    faEnvelope,
    faFileArchive,
    faRedo,
    faTimesCircle,
    faWindowClose
);

export default {
    
    components: {
        AnimateCss,
        CapsuleEditor: () => import(/* webpackChunkName: 'capsule-editor' */'capsule-editor/src/Editor'),
        Btn,
        FontAwesomeIcon,
        Hourglass,
        HttpException,
        SlideDeck,
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
            active: 0,
            activity: false,
            currentContent: this.content,
            download: null,
            editor: null,
            error: null
        };
    },

    watch: {

        editor({ content }) {
            this.currentContent = content;
        }
    },

    methods: {

        formatBytes(bytes) {
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if(bytes == 0) return '0 Byte';
            const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        },

        onClickSend() {
            this.error = null;
            this.activity = true;
            this.hourGlassLabel = 'Sending...';

            revision({
                filename: this.currentFilename,
                revised_html: this.currentContent,
                original_html: this.originalContents,
            }, this.httpRequestOptions).then(() => {
                this.active = 1;
                this.error = null;
                this.activity = false;
            }, e => {
                this.error = e;
                this.activity = false;
            });
        },

        onClickCancel(close) {
            close();
            
            this.active = 0;
            this.error = null;
        },

        onClickDownloadAgain() {
            download(this.download.blob, this.download.zipname);
        },

        async onClickDownload() {
            this.hourGlassLabel = 'Generating...';
            this.activity = true;

            const blob = await zip(this.currentContent, this.filename);

            this.download = {
                blob,
                filename: this.filename,
                size: this.formatBytes(blob.size),
                zipname: this.filename.replace(/\.html/, '.zip'),
            };

            download(blob, this.download.zipname);

            setTimeout(() => {
                this.active = 2;
                this.activity = false;
            }, 1000);
        },

        onClickClose() {
            window.close();
        }

    }

};
</script>

<style lang="scss">
.capsule-editor-modal {
    min-width: 20rem;

    .slide-deck-content {
        overflow: hidden;
    }

    .hourglass-label {
        font-size: 1.4em;
    }
    .hourglass-icon {
        font-size: 3em;
    }
}
</style>
