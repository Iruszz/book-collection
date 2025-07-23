<template>
    <nav>
        <router-link :to="{name: 'books.overview'}">Books Overview</router-link> |
        <router-link :to="{name: 'books.create'}">Crate new Book</router-link> |
        <router-link :to="{name: 'author.overview'}">Author Overview</router-link>
    </nav>
    <router-view></router-view>
</template>