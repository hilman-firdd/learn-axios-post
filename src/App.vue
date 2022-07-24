<template>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <!-- <router-link to="/about" class="nav-item nav-link">About</router-link> -->
            <router-link to="/detail" class="nav-item nav-link">Detail</router-link>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
</template>

<script>
export default{
  name: 'app'
}
</script>