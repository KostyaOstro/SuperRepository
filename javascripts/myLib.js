  function rColor(s) {
      var seed = Math.round(Math.random() * 4);
      var color = [];
      color[0] = ["#571845", "#900c3e", "#c70039", "#ff5733", "#ffc300"];
      color[1] = ["#96ceb4", "#ffeead", "#ff6f69", "#ffcc5c", "#88d8b0"];
      color[2] = ["#173f5f", "#20639b", "#3caea3", "#f6d55c", "#ed553b"];
      color[3] = ["#999", "#777", "#555", "#333", "#111"];
      color[4] = ["#ffa239", "#c8e6c9", "#81c784", "#4caf50", "#ffe789"];
      color[5] = ["#428", "#6ca2ea", "#b5d33d", "#fed23f", "#eb7d5b"];
      var rgb = color[s][seed];
      return rgb;
  };

  function random(minR, maxR) {
      var r = minR + (maxR - minR) * Math.random();
      return r
  };

  function rSeed(value) {
      var seed = Math.round(Math.random() * value);
      return seed
  };