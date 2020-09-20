<template>
  <div>
    <Nav />

    <div class="container">
      <div class="title1">
        <div class="header">Hello</div>
        <div class="body">Welcome to the IOT Dashboard</div>
        <div class="footer">Last Updated At 12:44</div>
      </div>

      <div class="tile">
        <div class="header">Sensors1</div>
        <div class="body">{{msg}}</div>
        <div class="footer">Last Updated At 12:44</div>
      </div>

      <div class="tile1">
        <div class="header">Current Temperature</div>
        <div class="body">{{msg1}}</div>
        <div class="footer">Last Updated At 12:44</div>
      </div>
    </div>

    <div class="container">
      <div class="title2">
        <div class="header">Temperat Trends</div>
        <div class="body">{{msg1}}</div>
        <div class="footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav/Nav";

export default {
  data: () => {
    return {
      msg: "12",
      msg1: "22",
    };
  },
  components: {
    Nav,
  },
};
</script>

<style scoped>
.column {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: initial;
  flex-direction: column;
}
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: initial;
  flex-direction: row;
}

.tile {
  width: 200px;
  height: 200px;
  margin-right: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(180, 64, 118);
  border-radius: 10px;
  color: white;
}

.tile .body {
  font-size: 40px;
  font-weight: 800;
}

.tile .footer {
  font-size: 12px;
}

.tile1 {
  width: 200px;
  height: 200px;
  margin-right: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(43, 189, 180);
  border-radius: 10px;
  color: white;
}

.tile1 .body {
  font-size: 40px;
  font-weight: 800;
}

.tile1 .footer {
  font-size: 12px;
}

.title1 {
  width: 500px;
  height: 200px;
  margin-right: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(250, 101, 55);
  border-radius: 10px;
  color: white;
}

.title1 .header {
  font-size: 30px;
  font-weight: 500;
  color: rgb(255, 210, 198);
}

.title1 .body {
  font-size: 20px;
  font-weight: 900;
}

.title1 .footer {
  font-size: 12px;
}

.title2 {
  width: 500px;
  height: 200px;
  margin-right: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(251, 167, 46);
  border-radius: 10px;
  color: white;
}

.title2 .body {
  font-size: 40px;
  font-weight: 800;
}

.title2 .footer {
  font-size: 12px;
}
</style>