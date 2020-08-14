<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    created() {
    const { params, query } = this.$route
    const { path } = params
    console.log(path)
    this.$router.replace({ path: '/' + path, query })
    },
    render: function(h) {
        return h() 
    }
})
</script>