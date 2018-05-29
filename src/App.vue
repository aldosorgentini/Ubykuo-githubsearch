<template>
  <div id="app">
    
    <top-nav inline-template>
      <div class="container-fluid">
        <div class="row header-vacio">
          <form class="form-inline">
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search">
            <i class="fa fa-search" aria-hidden="true"></i>
          </form>
        </div>
      </div>
    </top-nav>
    <result inline-template>
      <div>
      </div>
    </result>
    <footer-contact inline-template>
      <div> </div>
    </footer-contact>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header-vacio {
  text-align: center;
  vertical-align: 50%;
  height: 40vh;
  background: #2828ac;
  color: #f1ecbd;

}
.header-vacio h1 {
  -webkit-text-shadow: 0px 10px 24px -7px rgba(0,0,0,0.75);
  -moz-text-shadow: 0px 10px 24px -7px rgba(0,0,0,0.75);
  text-shadow: 0px 10px 24px -7px rgba(0,0,0,0.75);
}
</style>
