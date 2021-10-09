<template>
    <error-report
        filename="test.html"
        signed-url="https://api.thecapsule.test/v1/revisions?expires=1634319009&amp;filename=test.html&amp;team=1&amp;user=1&amp;signature=b276a73af20b1d1e35548d4b61163518ba2f0c01f0f8418baa01f5113c3a6fa2">
        <textarea><div style="margin-top: 5rem;"><p>test</div></textarea>
    </error-report>
</template>

<script>
import ErrorReport from "./ErrorReport";

export default {
    components: {
        ErrorReport
    }
};
</script>
