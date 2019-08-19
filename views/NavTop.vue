<template>
<i-navbar variant="dark">
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'home' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
        </i-nav>
        <i-nav>
            <i-input placeholder="Type something.." class="_margin-right-1" />
            <i-button variant="primary">Search</i-button>
        </i-nav>
    </i-navbar-items>
</i-navbar>
</template>

<script>
module.exports = {
    name: 'NavTop'
}
</script>