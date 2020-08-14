export default {
    computed: {
    device() {
        return 'desktop'
    }
    },
    mounted() {
    this.fixBugIniOS()
    },
    methods: {
    fixBugIniOS() {
        const $subMenu = this.$refs.subMenu
        if ($subMenu) {
        const handleMouseleave = $subMenu.handleMouseleave
        $subMenu.handleMouseleave = (e) => {
            if (this.device === 'mobile') {
            return
            }
            handleMouseleave(e)
        }
        }
    }
    }
}
