export type IconName =
  | "plus"
  | "error"
  | "out"
  | "right"
  | "left"
  | "down"
  | "up"
  | "gap"
  | "padding"
  | "sandwich-bar"
  | "play"
  | "ok"
  | "info"
  | "metric"
  | "eye_splash"
  | "eye"
  | "warn"
  | "json"
  | "md";

export type Icons = {
  [K in IconName]: string[];
};
// TODO: add new icons
export const icons: Icons = {
  plus: [
    "M74.9807 437.019C-25.0042 337.034 -25.0042 174.966 74.9807 74.9807C174.966 -25.0042 337.034 -25.0042 437.019 74.9807C537.004 174.966 537.004 337.034 437.019 437.019C337.034 537.004 174.966 537.004 74.9807 437.019ZM164.854 279.405L231.393 279.335L231.958 346.51C232.029 359.733 242.777 370.481 255.364 369.915C269.223 370.481 279.971 359.733 278.769 346.51L279.335 280.607L345.873 279.405C359.733 279.971 370.481 269.223 369.279 256C370.481 242.777 359.733 232.029 345.873 232.595L279.335 231.393L278.769 165.49C279.971 152.267 269.223 141.519 255.364 142.085C242.777 141.519 232.029 152.267 231.958 165.49L231.393 232.665L164.854 232.595C152.267 232.029 141.519 242.777 141.449 256C141.519 269.223 152.267 279.971 164.854 279.405Z",
  ],
  error: [
    "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256ZM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1Z",
  ],
  out: [
    "M504.914 273.35L334.239 444.025C319 459.264 292.586 448.596 292.586 426.754V329.225H154.42C140.909 329.225 130.038 318.355 130.038 304.843V207.315C130.038 193.803 140.909 182.932 154.42 182.932H292.586V85.4038C292.586 63.663 318.898 52.8942 334.239 68.1331L504.914 238.808C514.362 248.358 514.362 263.8 504.914 273.35ZM195.057 438.945V398.308C195.057 391.603 189.571 386.117 182.866 386.117H97.5286C79.5468 386.117 65.0191 371.589 65.0191 353.608V158.55C65.0191 140.568 79.5468 126.041 97.5286 126.041H182.866C189.571 126.041 195.057 120.555 195.057 113.85V73.2127C195.057 66.5076 189.571 61.0216 182.866 61.0216H97.5286C43.6847 61.0216 0 104.706 0 158.55V353.608C0 407.451 43.6847 451.136 97.5286 451.136H182.866C189.571 451.136 195.057 445.65 195.057 438.945Z",
  ],
  right: [
    "M247.4 2.14846C244.68 -0.672786 240.315 -0.785052 237.381 2.22521L211.976 28.2906L211.939 28.3279C208.785 31.5302 208.812 36.978 212.099 40.1782L212.113 40.1918L384.92 209.103H7.42551C3.75355 209.103 0 212.207 0 217.241V254.759C0 259.793 3.75355 262.897 7.42551 262.897H384.92L212.172 431.75C212.167 431.755 212.162 431.76 212.157 431.765C208.904 434.982 208.878 440.531 212.012 443.747L237.418 469.813L237.455 469.852C240.176 472.673 244.541 472.785 247.475 469.775L469.659 241.816L469.696 241.778C472.727 238.701 472.834 233.324 469.621 230.028L247.439 2.18879L247.4 2.14846Z",
  ],
  left: [
    "M224.6 469.852C227.32 472.673 231.685 472.785 234.619 469.775L260.024 443.709L260.061 443.672C263.215 440.47 263.188 435.022 259.901 431.822L259.887 431.808L87.0805 262.897H464.574C468.246 262.897 472 259.793 472 254.759V217.241C472 212.207 468.246 209.103 464.574 209.103H87.0805L259.828 40.2499C259.833 40.2449 259.838 40.2398 259.843 40.2348C263.096 37.0176 263.122 31.4691 259.988 28.2531L234.582 2.18694L234.545 2.14846C231.824 -0.672797 227.459 -0.785041 224.525 2.22521L2.34132 230.184L2.30378 230.222C-0.727162 233.299 -0.833607 238.676 2.37864 241.972L224.561 469.811L224.6 469.852Z",
  ],
  down: [
    "M469.852 247.4C472.673 244.68 472.785 240.315 469.775 237.381L443.709 211.976L443.672 211.939C440.47 208.785 435.022 208.812 431.822 212.099L431.808 212.113L262.897 384.92V7.42554C262.897 3.75358 259.793 3.05176e-05 254.759 3.05176e-05L217.241 3.05176e-05C212.207 3.05176e-05 209.103 3.75358 209.103 7.42554V384.92L40.2499 212.172C40.2449 212.167 40.2398 212.162 40.2348 212.157C37.0176 208.904 31.4691 208.878 28.2531 212.012L2.18694 237.418L2.14846 237.455C-0.672797 240.176 -0.785041 244.541 2.22521 247.475L230.184 469.659L230.222 469.696C233.299 472.727 238.676 472.834 241.972 469.621L469.811 247.439L469.852 247.4Z",
  ],
  up: [
    "M2.14846 224.6C-0.672786 227.32 -0.785052 231.685 2.22521 234.619L28.2906 260.024L28.3279 260.061C31.5302 263.215 36.978 263.188 40.1782 259.901L40.1918 259.887L209.103 87.0805V464.575C209.103 468.246 212.207 472 217.241 472H254.759C259.793 472 262.897 468.246 262.897 464.575V87.0805L431.75 259.828C431.755 259.833 431.76 259.838 431.765 259.843C434.982 263.096 440.531 263.122 443.747 259.988L469.813 234.582L469.852 234.545C472.673 231.824 472.785 227.459 469.775 224.525L241.816 2.34134L241.778 2.3038C238.701 -0.727146 233.324 -0.833592 230.028 2.37866L2.18879 224.561L2.14846 224.6Z",
  ],
  gap: [
    "M50 3.8147e-06L1.52588e-05 0L0 140L211 140V332H0V472H50V382H422V472H472V332H261V140L472 140V4.19617e-05L422 3.8147e-05V90L50 90L50 3.8147e-06Z",
  ],
  padding: [
    "M471 41H41V471H471V41ZM0 0V512H512V0H0Z",
    "M342 170H170V342H342V170ZM130 130V382H382V130H130Z",
  ],
  "sandwich-bar": [
    "M0 73.5833C0 53.3825 16.3771 37 36.5714 37H475.429C495.657 37 512 53.3825 512 73.5833C512 93.8185 495.657 110.167 475.429 110.167H36.5714C16.3771 110.167 0 93.8185 0 73.5833ZM0 256.5C0 236.265 16.3771 219.917 36.5714 219.917H475.429C495.657 219.917 512 236.265 512 256.5C512 276.735 495.657 293.083 475.429 293.083H36.5714C16.3771 293.083 0 276.735 0 256.5ZM475.429 476H36.5714C16.3771 476 0 459.652 0 439.417C0 419.181 16.3771 402.833 36.5714 402.833H475.429C495.657 402.833 512 419.181 512 439.417C512 459.652 495.657 476 475.429 476Z",
  ],

  play: [
    "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256ZM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168Z",
  ],

  ok: [
    "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z",
  ],

  info: [
    "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z",
  ],

  warn: [
    "M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z",
  ],

  metric: [
    "M304 16.58C304 7.555 310.1 0 320 0C443.7 0 544 100.3 544 224C544 233 536.4 240 527.4 240H304V16.58zM32 272C32 150.7 122.1 50.34 238.1 34.25C248.2 32.99 256 40.36 256 49.61V288L412.5 444.5C419.2 451.2 418.7 462.2 411 467.7C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zM558.4 288C567.6 288 575 295.8 573.8 305C566.1 360.9 539.1 410.6 499.9 447.3C493.9 452.1 484.5 452.5 478.7 446.7L320 288H558.4z",
  ],

  eye_splash: [
    "M120.323 125.925C155.694 98.4333 201.045 77.4996 255.498 77.4996C320.011 77.4996 371.669 106.856 409.275 141.727C446.642 176.311 471.633 217.031 483.45 246.196C486.084 252.491 486.084 259.504 483.45 265.799C472.751 291.538 451.273 327.795 419.655 360.148L503.65 425.81C511.954 432.344 513.471 444.377 506.924 452.664C500.376 460.952 488.32 462.466 480.016 455.931L7.34223 86.1775C-0.987004 79.6591 -2.44733 67.6423 4.08143 59.3278C10.611 51.0149 22.6513 49.5575 30.987 56.0734L120.323 125.925ZM178.13 171.131L250.228 227.55C253.581 220.776 255.498 213.126 255.498 204.281C255.498 195.834 252.384 187.228 248.791 179.817C251.026 179.578 253.262 178.781 255.498 178.781C297.815 178.781 332.147 213.047 332.147 255.281C332.147 266.915 329.832 277.274 325.041 286.677L356.579 310.742C365.442 294.486 370.472 275.84 370.472 255.281C370.472 192.647 318.973 140.532 255.498 140.532C225.716 140.532 198.49 152.564 178.13 171.131ZM255.498 434.496C190.984 434.496 139.326 405.171 101.72 370.268C64.3693 334.967 39.3944 294.247 27.5138 265.799C24.8949 259.504 24.8949 252.491 27.5138 246.196C35.1308 227.948 48.1372 204.361 66.3415 180.694L141.641 239.901C140.923 245.16 140.524 250.499 140.524 255.281C140.524 319.349 192.022 370.746 255.498 370.746C270.428 370.746 284.72 367.878 297.815 362.698L356.26 408.598C327.277 424.216 293.663 434.496 255.498 434.496Z",
  ],
  eye: [
    "M249.301 179.605C251.538 179.366 253.774 179.286 256.01 179.286C298.338 179.286 332.68 212.928 332.68 256C332.68 298.353 298.338 332.714 256.01 332.714C212.963 332.714 179.34 298.353 179.34 256C179.34 253.762 179.42 251.525 179.66 249.288C187.087 252.883 195.712 256 204.897 256C233.089 256 256.01 233.066 256.01 204.857C256.01 195.667 252.895 187.037 249.301 179.605ZM409.829 141.408C447.206 176.089 472.203 216.924 484.023 246.171C486.659 252.484 486.659 259.516 484.023 265.829C472.203 294.357 447.206 335.192 409.829 370.592C372.213 405.593 320.541 435 256.01 435C191.479 435 139.807 405.593 102.207 370.592C64.8302 335.192 39.8486 294.357 27.9656 265.829C25.3448 259.516 25.3448 252.484 27.9656 246.171C39.8486 216.924 64.8302 176.089 102.207 141.408C139.807 106.439 191.479 77 256.01 77C320.541 77 372.213 106.439 409.829 141.408ZM256.01 140.929C192.518 140.929 141.005 192.471 141.005 256C141.005 319.529 192.518 371.071 256.01 371.071C319.502 371.071 371.015 319.529 371.015 256C371.015 192.471 319.502 140.929 256.01 140.929Z",
  ],
  json: [],
  md: [],
};