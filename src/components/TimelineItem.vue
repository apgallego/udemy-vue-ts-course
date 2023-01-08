<script setup lang="ts">
import { TimelinePost } from '../posts';

defineProps<{
//we usually make an instance of the props in my current NTT Data project
    post: TimelinePost
}>();
</script>

<template>
    <a class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
        <a>{{ post.title }}</a>
        <div>{{ post.created.toFormat("d MMM") }}</div>
    </a>
</template>