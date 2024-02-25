<script>
export default {
  props: {
    valueText: String,
  },
}
</script>

<template>
  <div class="text-content">
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.541 4.33301H3.83268C3.32435 4.33301 2.83684 4.53494 2.47739 4.89439C2.11795 5.25383 1.91602 5.74134 1.91602 6.24967V19.6663C1.91602 20.1747 2.11795 20.6622 2.47739 21.0216C2.83684 21.3811 3.32435 21.583 3.83268 21.583H17.2493C17.7577 21.583 18.2452 21.3811 18.6046 21.0216C18.9641 20.6622 19.166 20.1747 19.166 19.6663V12.958"
        stroke="#FFCA42"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.7285 2.89621C18.1098 2.51496 18.6268 2.30078 19.166 2.30078C19.7052 2.30078 20.2223 2.51496 20.6035 2.89621C20.9848 3.27746 21.1989 3.79455 21.1989 4.33371C21.1989 4.87288 20.9848 5.38996 20.6035 5.77121L11.4993 14.8754L7.66602 15.8337L8.62435 12.0004L17.7285 2.89621Z"
        stroke="#FFCA42"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <textarea placeholder="Message" :value="valueText" @input="$emit('update:valueText', $event.target.value)"/>
  </div>
</template>

<style lang="scss">
.text-content {
  display: flex;
  background: #ffffff;
  width: 100%;
  border: solid 1px #dce1e9;
  min-height: 150px;

  svg {
    padding: 10px;
  }

  textarea {
    padding-top: 10px;
    border: none;
    outline: none;
    width: 100%;

    font-family: "Inter", sans-serif;
    font-size: 19px;
    color: #969aa0;
    font-weight: 500px;
  }
}
</style>
