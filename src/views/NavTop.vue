<template>
<i-navbar variant="dark">
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'home' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'gallery' }">Gallery</i-nav-item>
            <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>
</template>

<script>
module.exports = {
    name: 'NavTop'
}
</script>