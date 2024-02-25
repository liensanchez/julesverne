<script>
export default {
  props: {
    valueOne: String,
    valueTwo: String,
  },
}
</script>

<template>
  <div class="input-container">
    <div class="double-content">
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 21.5V19.5C20 18.4391 19.5786 17.4217 18.8284 16.6716C18.0783 15.9214 17.0609 15.5 16 15.5H8C6.93913 15.5 5.92172 15.9214 5.17157 16.6716C4.42143 17.4217 4 18.4391 4 19.5V21.5"
          stroke="#FFCA42"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z"
          stroke="#FFCA42"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <input :value="valueOne" @input="$emit('update:valueOne', $event.target.value)" placeholder="Name" />
    </div>

    <div class="double-content">
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4.5H20C21.1 4.5 22 5.4 22 6.5V18.5C22 19.6 21.1 20.5 20 20.5H4C2.9 20.5 2 19.6 2 18.5V6.5C2 5.4 2.9 4.5 4 4.5Z"
          stroke="#FFCA42"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 6.5L12 13.5L2 6.5"
          stroke="#FFCA42"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <input :value="valueTwo" @input="$emit('update:valueTwo', $event.target.value)" placeholder="Email" />
    </div>
  </div>
</template>

<style lang="scss">
.input-container {
  display: flex;
  gap: 20px;

  .double-content {
    display: flex;
    align-items: center;
    background: #ffffff;
    width: 100%;
    border: solid 1px #dce1e9;

    svg {
      padding: 10px;
    }

    input {
      border: none;
      width: 100%;
      height: 100%;
      outline: none;
      font-family: "Inter", sans-serif;
      font-size: 19px;
      color: #969aa0;
      font-weight: 500px;
    }
  }
}
</style>
