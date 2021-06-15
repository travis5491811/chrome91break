<template>
  <div class="table-container item-table">
    <!-- Main table element -->
    <b-table
      ref="ecommerce_item_table"
      class="fixed_headers"
      show-empty
      striped
      hover
      small="small"
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
    >
    </b-table>
  </div>
</template>

<style lang="scss">
.item-table .example-class {
  width: 4vw; // worked great for years, stopped working after chrome 91.x
  // width: 150px; // worked great for years, stopped working after chrome 91.x
  // width: 4%; // only thing that seems to work now
}
</style>

<script>
/* eslint-disable */

const makeRecords = () => {
  const data = []
  for (let index = 0; index < 5; index++) {
    data.push({
      Field1: Math.random(),
      Field2: Math.random(),
      Field3: Math.random(),
      Field4: Math.random(),
      Field5: Math.random(),
      Field6: Math.random(),
      Field7: Math.random(),
      Field8: Math.random(),
      Field9: Math.random(),
    })
  }
  return data
}

export default {
  name: "table-example",
  data() {
    return {
      currentPage: 1,
      perPage: 5,
      fields: [
        { key: "Field1" },
        { key: "Field2" },
        { key: "Field3" },
        { key: "Field4" },
        { key: "Field5" },
        { key: "Field6" },
        { key: "Field7", class: "example-class" },
        { key: "Field8" },
        { key: "Field9" },
      ],
      items: makeRecords(),
    };
  },
};
</script>
