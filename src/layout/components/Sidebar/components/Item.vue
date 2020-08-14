<script>
export default {
name: 'MenuItem',
functional: true,
props: {
    icon: {
    type: String,
    default: ''
    },
    title: {
    type: String,
    default: ''
    }
},
render(h, context) {
    const { icon, title } = context.props
    
    const vnodes = []
    if (icon) {
    const elHtml = h('i', {
        attrs: {
        'class': icon
        }
    })
    vnodes.push(elHtml)
    }
    if(context.parent.$parent.$parent.$parent.$parent.$parent.width == '220px' || context.parent.$parent.$parent.$parent.width == '220px'){
        if (title) {
        const elHtml = h('span', {
            attrs: {
            slot: title
            },
        }, title)
        vnodes.push(elHtml)
    }
    }
    
    return vnodes
}
}
</script>
