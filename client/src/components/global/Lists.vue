<script>
export default {
  props: {
    ordererList: Array,
    unordererList: Array,
  },
};
</script>

<template>
  <div class="list-content">
    <div>
      <ul
        class="unordered-list"
        v-for="(listItem, index) in unordererList"
        :key="index"
      >
        <li>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
              fill="#FFCA42"
            />
          </svg>
          {{ listItem }}
        </li>
      </ul>
    </div>

    <div>
      <ol>
        <li v-for="(listItem, index) in ordererList" :key="index">
          {{ listItem }}
        </li>
      </ol>
    </div>
  </div>
</template>

<style lang="scss">
.list-content {
  display: flex;
  flex-direction: column;
  gap: 50px;

  ul {
    list-style-type: none;
  }

  ol {
    margin-left: 20px;
  }

  li {
    font-family: "Inter", sans-serif;
    font-size: 19px;
    color: #1b3764;
    font-weight: 200;
  }
}
</style>
