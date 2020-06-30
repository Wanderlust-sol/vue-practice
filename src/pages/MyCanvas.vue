<template>
  <div>
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="green" stroke-width="3" fill="yellow" />
    </svg>
    <svg width="400" height="110">
      <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
    </svg>
    <svg width="500" height="180">
      <rect
        x="50"
        y="20"
        rx="20"
        ry="10"
        width="150"
        height="150"
        style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9"
      />
      <ellipse cx="310" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
    </svg>
    <svg height="150" width="500">
      <ellipse cx="240" cy="100" rx="220" ry="30" style="fill:purple" />
      <ellipse cx="220" cy="70" rx="190" ry="20" style="fill:lime" />
      <ellipse cx="210" cy="45" rx="170" ry="15" style="fill:yellow" />
    </svg>
    <svg height="100" width="500">
      <ellipse cx="240" cy="50" rx="220" ry="30" style="fill:yellow" />
      <ellipse cx="220" cy="50" rx="180" ry="20" style="fill:white" />
    </svg>
    <svg height="150" width="500">
      <line x1="0" y1="0" x2="100" y2="150" style="stroke:rgb(255,0,0);stroke-width:2" />
    </svg>
    <svg height="250" width="500">
      <polygon
        points="100,0 250,100 160,210 30,140 150,200"
        style="fill:lime; stroke:purple;stroke-width:1"
      />
    </svg>
    <svg height="180" width="500">
      <polyline
        points="0,40 40,40 40,80 80,80 80,120 120,120 120,160"
        style="fill:white;stroke:red;stroke-width:4"
      />
    </svg>
    <svg height="210" width="400">
      <path d="M0 100 L100 10 L225 200 Z" fill="red" stroke="blue" />
    </svg>
    <svg height="60" width="200">
      <text x="0" y="15" fill="red" transform="rotate(30 20,40)">I love SVG</text>
    </svg>
    <svg height="90" width="200">
      <text x="10" y="20" style="fill:red;">
        Several lines:
        <tspan x="10" y="45">First line.</tspan>
        <tspan x="10" y="70">Second line.</tspan>
      </text>
    </svg>
    <svg height="30" width="200">
      <a xlink:href="https://www.w3schools.com/graphics/" target="_blank">
        <text x="0" y="15" fill="red">I love SVG!</text>
      </a>
    </svg>
    <svg height="80" width="300">
      <g fill="none" stroke="black" stroke-width="6">
        <path stroke-linecap="butt" d="M5 20 l215 0" />
        <path stroke-linecap="round" d="M5 40 l215 0" />
        <path stroke-linecap="square" d="M5 60 l215 0" />
      </g>
    </svg>
    <svg height="80" width="300">
      <g fill="none" stroke="black" stroke-width="4">
        <path stroke-dasharray="5 5" d="M5 20 l215 0" />
        <path stroke-dasharray="10 10" d="M5 40 l215 0" />
        <path stroke-dasharray="20 10 5 5 5 10" d="M5 60 l215 0" />
      </g>
    </svg>
    <svg height="200" width="200">
      <defs>
        <filter id="f1" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
        </filter>
      </defs>
      <rect
        x="0"
        width="90"
        height="90"
        stroke="green"
        stroke-width="3"
        fill="yellow"
        filter="url(#f1)"
      />
    </svg>
    <svg height="140" width="140">
      <defs>
        <filter id="f2" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f2)" />
    </svg>
    <svg height="140" width="140">
      <defs>
        <filter id="f3" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f3)" />
    </svg>
    <svg height="140" width="140">
      <defs>
        <filter id="f4" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
          <feColorMatrix
            result="matrixOut"
            in="offOut"
            type="matrix"
            values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
          />
          <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f4)" />
    </svg>
    <svg height="150" width="400">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:rgb(255,255,600);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>