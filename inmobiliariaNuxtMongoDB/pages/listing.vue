<script setup lang="ts">
import { onMounted } from 'vue';

const { data: advList, error } = await useFetch('/api/advertListing');


//onMounted(() => {
//
//})
</script>


<template>

    <div v-for="adv in advList">
        <div>
            <div id="carrouselContainer">

            </div>
            <div id="cardContent">
                <h3 id="advTypeText">{{ adv.type }}</h3>
                <span id="advLocText">{{ adv.location }}</span>
                <span id="advSizeText">{{ adv.size }}</span>
                <h3 id="advPriceText">{{ adv.askingPrice }}</h3>
                <button id="advButton" @click="navigateTo(`/advert/${adv.id}`)" >Ver Mas</button>
            </div>

        </div>
    </div>
</template>