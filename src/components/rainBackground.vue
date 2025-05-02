<template>
  <canvas ref="canvas" class="rain-canvas"></canvas>
</template>

<script>
export default {
  name: 'RainBackground',
  data() {
    return {
      drops: [],
      canvas: null,
      ctx: null,
      animationId: null,
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
    this.initRain();

    
    this.animateRain = this.animateRain.bind(this);
    this.animateRain();

   
    window.addEventListener('resize', this.resizeCanvas);
  },
  beforeUnmount() {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resizeCanvas);
  },
  methods: {
    resizeCanvas() {
      this.canvas.width = this.canvas.clientWidth;
      this.canvas.height = this.canvas.clientHeight;
    },
    initRain() {
      const dropCount = 150;
      this.drops = [];
      for (let i = 0; i < dropCount; i++) {
        this.drops.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          length: Math.random() * 3 + 3,
          speed: Math.random() * 1 + 1,
          width: 1,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    },
    animateRain() {
      if (!this.ctx || !this.canvas) return;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let drop of this.drops) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${drop.opacity})`; // Roxo
        this.ctx.lineWidth = drop.width;
        this.ctx.moveTo(drop.x, drop.y);
        this.ctx.lineTo(drop.x, drop.y + drop.length);
        this.ctx.stroke();

        drop.y += drop.speed;
        if (drop.y > this.canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * this.canvas.width;
        }
      }
      this.animationId = requestAnimationFrame(this.animateRain);
    }
  }
};
</script>

<style scoped>
.rain-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}
</style>
