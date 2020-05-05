<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <a href="">Need an account?</a>
          </p>

          <ul class="error-messages">
            <li>That email is already taken</li>
          </ul>

          <form @submit.prevent="signinHandler">
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text"
                v-model="user.username" placeholder="Your Name">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password"
                v-model="user.password" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" type="submit">
              Sign in
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signinHandler() {
      const api = `${process.env.VUE_APP_APIPATH}/login`;
      const vm = this;
      vm.$http.post(api, vm.user).then((res) => {
        console.log(res);
        if (res.data.islogin) {
          vm.$router.push('/');
        }
      });
    },
  },
};
</script>
