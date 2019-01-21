<template>
  <div class="form-inputbox">
    <input required :type="inputType"
                    :id="inputName"
                    :value="inputValue"
                    @input="$emit('input', $event.target.value)"
                    :class="{'form-inputbox-emailValid':emailValid}"
    >
    <label for="inputName">{{inputName}}</label>
  </div>
</template>
<script>
export default {
  name: 'LoginForm',
  props: ['inputName', 'inputType', 'inputValue', 'emailValid'],
};
</script>
