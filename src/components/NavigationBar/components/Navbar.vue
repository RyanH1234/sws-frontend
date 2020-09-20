<template>
  <nav>
    <div><h2>Company</h2></div>
    <div class="menu-item"><a href="#">Home</a></div>
    <div class="menu-item"><a href="#">About</a></div>
    <Dropdown title="Gallery" :items="services" />
    <div class="menu-item"><a href="#">Contact</a></div>
    <Dropdown title="Others" :items="others" />
  </nav>
</template>

<script>
import Dropdown from './Dropdown';

export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data () {
    return {
      services: [
        {
          title: '2019',
          link: '#'
        },
        {
          title: '2018',
          link:'#'
        },
        {
          title: '2017',
          link: '#'
        }
      ],
      others: [
        {
          title: '2019',
          link: '#'
        },
        {
          title: '2018',
          link:'#'
        },
        {
          title: '2017',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style>
nav {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>