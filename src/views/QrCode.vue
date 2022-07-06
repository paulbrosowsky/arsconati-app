<script setup>
import QRCode from 'qrcode'
import { onMounted } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('qrcode')
  QRCode.toCanvas(
    canvas,
    'https://arsconati.netlify.app/?token=d442c163-e968-4d57-8ae2-d7b5b3fc6f98'
  )
})
</script>
<template>
  <canvas id="qrcode"></canvas>
</template>
