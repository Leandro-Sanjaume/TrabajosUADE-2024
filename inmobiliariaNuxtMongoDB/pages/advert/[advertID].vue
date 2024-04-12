
<script setup lang="ts">

const advertID = Number(useRoute().params.advertID as string)

const { data: adv, error } = await useFetch('/api/advert', {
    query: { "advID" :advertID }
});


console.log({adv})
</script>

<template>
    <h1>dsaads</h1>
    <h1>{{ adv.description }}</h1>
    <h3 id="advTypeText">{{ adv.type }}</h3>
    <span id="advLocText">{{ adv.location }}</span>
    <span id="advSizeText">{{ adv.size }}</span>
    <h3 id="advPriceText">{{ adv.askingPrice }}</h3>

</template>


