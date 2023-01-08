<script setup lang="ts">
import PostWriter from './PostWriter.vue';
import { TimelinePost } from "../posts";
import { DateTime } from 'luxon';

const post: TimelinePost = {
    id: "-1",
    title: "title",
    created: DateTime.now()
};

</script>

<template>
    New Post
    <PostWriter :post="post" />
</template>