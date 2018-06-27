<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
}

.app {
  height: 100%;
}

input:not([type]):focus:not([readonly]),
input[type="text"]:not(.browser-default):focus:not([readonly]),
input[type="password"]:not(.browser-default):focus:not([readonly]),
input[type="email"]:not(.browser-default):focus:not([readonly]),
input[type="url"]:not(.browser-default):focus:not([readonly]),
input[type="time"]:not(.browser-default):focus:not([readonly]),
input[type="date"]:not(.browser-default):focus:not([readonly]),
input[type="datetime"]:not(.browser-default):focus:not([readonly]),
input[type="datetime-local"]:not(.browser-default):focus:not([readonly]),
input[type="tel"]:not(.browser-default):focus:not([readonly]),
input[type="number"]:not(.browser-default):focus:not([readonly]),
input[type="search"]:not(.browser-default):focus:not([readonly]),
textarea.materialize-textarea:focus:not([readonly]) {
  border-bottom: 1px solid orange;
  -webkit-box-shadow: 0 1px 0 0 orange;
  box-shadow: 0 1px 0 0 orange;
}

input.valid:not([type]),
input.valid:not([type]):focus,
input[type="text"].valid:not(.browser-default),
input[type="text"].valid:not(.browser-default):focus,
input[type="password"].valid:not(.browser-default),
input[type="password"].valid:not(.browser-default):focus,
input[type="email"].valid:not(.browser-default),
input[type="email"].valid:not(.browser-default):focus,
input[type="url"].valid:not(.browser-default),
input[type="url"].valid:not(.browser-default):focus,
input[type="time"].valid:not(.browser-default),
input[type="time"].valid:not(.browser-default):focus,
input[type="date"].valid:not(.browser-default),
input[type="date"].valid:not(.browser-default):focus,
input[type="datetime"].valid:not(.browser-default),
input[type="datetime"].valid:not(.browser-default):focus,
input[type="datetime-local"].valid:not(.browser-default),
input[type="datetime-local"].valid:not(.browser-default):focus,
input[type="tel"].valid:not(.browser-default),
input[type="tel"].valid:not(.browser-default):focus,
input[type="number"].valid:not(.browser-default),
input[type="number"].valid:not(.browser-default):focus,
input[type="search"].valid:not(.browser-default),
input[type="search"].valid:not(.browser-default):focus,
textarea.materialize-textarea.valid,
textarea.materialize-textarea.valid:focus,
.select-wrapper.valid > input.select-dropdown {
  border-bottom: 1px solid orange;
  -webkit-box-shadow: 0 1px 0 0 orange;
  box-shadow: 0 1px 0 0 orange;
  color: orange;
}

input:not([type]):focus:not([readonly]) + label,
input[type="text"]:not(.browser-default):focus:not([readonly]) + label,
input[type="password"]:not(.browser-default):focus:not([readonly]) + label,
input[type="email"]:not(.browser-default):focus:not([readonly]) + label,
input[type="url"]:not(.browser-default):focus:not([readonly]) + label,
input[type="time"]:not(.browser-default):focus:not([readonly]) + label,
input[type="date"]:not(.browser-default):focus:not([readonly]) + label,
input[type="datetime"]:not(.browser-default):focus:not([readonly]) + label,
input[type="datetime-local"]:not(.browser-default):focus:not([readonly])
  + label,
input[type="tel"]:not(.browser-default):focus:not([readonly]) + label,
input[type="number"]:not(.browser-default):focus:not([readonly]) + label,
input[type="search"]:not(.browser-default):focus:not([readonly]) + label,
textarea.materialize-textarea:focus:not([readonly]) + label {
  color: orange;
}

</style>
