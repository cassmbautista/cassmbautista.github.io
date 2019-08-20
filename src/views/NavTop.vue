<template>
<i-navbar variant="dark">
    <i-navbar-brand :to="{ name: 'home' }">Garber Athena</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'gallery' }">Gallery</i-nav-item>
            <i-nav-item :to="{ name: 'contact' }">Conact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>
</template>

<script>
module.exports = {
    name: 'NavTop'
}
</script>