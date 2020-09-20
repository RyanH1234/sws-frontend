<template>
  <div class="dash-container">
    <div class="tiles">
      <div class="tile1">
        <div class="header">Hello</div>
        <div class="body">Welcome to the IOT Dashboard</div>
        <div class="footer">Last Updated At 12:44</div>
      </div>

      <div class="tile2">
        <div class="header">Sensors1</div>
        <div class="body">{{msg}}</div>
        <div class="footer">Last Updated At 12:44</div>
      </div>

      <div class="tile3">
        <div class="header">Current Temperature</div>
        <div class="body">{{msg1}}</div>
        <div class="footer">Last Updated At 12:44</div>
      </div>

      <div class="tile4">
        <div class="header">Temperat Trends</div>
        <div class="body">{{msg1}}</div>
        <div class="footer"></div>
      </div>
    </div>

    <div class="graph">
      Graph goes here..
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      msg: "12",
      msg1: "22",
    };
  },
};
</script>

<style scoped>
.dash-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.tiles {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.tile1 {
  width: 50%;
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

.tile1 .header {
  font-size: 30px;
  font-weight: 500;
  color: rgb(255, 210, 198);
}

.tile1 .body {
  font-size: 20px;
  font-weight: 900;
}

.tile1 .footer {
  font-size: 12px;
}

.tile2 {
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

.tile2 .body {
  font-size: 40px;
  font-weight: 800;
}

.tile2 .footer {
  font-size: 12px;
}

.tile3 {
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

.tile3 .body {
  font-size: 40px;
  font-weight: 800;
}

.tile3 .footer {
  font-size: 12px;
}

.tile4 {
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

.tile4 .body {
  font-size: 40px;
  font-weight: 800;
}

.tile4 .footer {
  font-size: 12px;
}

.graph {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
}

@media only screen and (max-width: 800px) {
  .tiles {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .tile1,
  .tile2,
  .tile3,
  .tile4 {
    width: 100%;
  }

  .graph {
    height: 400px;
  }
}
</style>