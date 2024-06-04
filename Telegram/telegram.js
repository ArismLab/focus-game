const app = window.Telegram.WebApp;
const { Alert } = require('vue-tg');

<script lang="ts" setup>
  
  <template>
    <Alert message="Hello!" />
  </template>

</script>
// Call as soon as your page is ready for the user to see
app.ready();

alert("---- ver:" + app.version + app.platform + "   " + app.isClosingConfirmationEnabled);
