<template>
    <error-report
        expires-at="2020-10-18T16:31:43-06:00"
        filename="test.html"
        signed-url="https://api.thecapsule.test/v1/revisions?expires=1634596303&amp;filename=test.html&amp;team=1&amp;user=1&amp;signature=ecc8de06e775cd590301b2eebf27b7e9ee63b0e01d51bc192d1b13dd14aa42cd">
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
