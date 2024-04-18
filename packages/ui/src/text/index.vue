<template>
  <div
    ref="textWrapperRef"
    class="inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap align-middle"
  >
    <span v-if="isEmpty(text)">--</span>
    <span v-else-if="!isEmpty(text) && !isAbbreviation">
      <span ref="textRef">{{ text }}</span>
    </span>
    <a-tooltip v-else-if="!isEmpty(text) && isAbbreviation" :title="text">
      {{ text }}
    </a-tooltip>
  </div>
</template>

<script>
export default {
  name: "YsText",
};
</script>

<script setup>
import { ref, onMounted, defineProps, watch } from "vue";

defineProps({
  text: {
    type: [String, Number],
    default: "",
  },
});

const textWrapperRef = ref();
const textRef = ref();
const isAbbreviation = ref(false); // 是否缩略
const isEmpty = (str) => {
  return ["", null, undefined].includes(str);
};

onMounted(() => {
  console.log(textWrapperRef.value, "textWrapperRef.value");
  isAbbreviation.value =
    textRef.value?.offsetWidth > textWrapperRef.value?.offsetWidth;
});
</script>
