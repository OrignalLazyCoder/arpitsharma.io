/* arpitsharma.io — 1997 edition interactive bits */
(function () {
  function $(id) { return document.getElementById(id); }
  var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- retro SFX engine (square-wave blips, user-gesture only) ---- */
  var AC = window.AudioContext || window.webkitAudioContext;
  var actx = null;
  var sfxOn = true;
  try { sfxOn = localStorage.getItem("sfx") !== "off"; } catch (e) {}
  function beep(freq, dur, type, gain) {
    if (!sfxOn || !AC) return;
    try {
      actx = actx || new AC();
      if (actx.state === "suspended") actx.resume();
      var o = actx.createOscillator(), g = actx.createGain();
      o.type = type || "square";
      o.frequency.value = freq;
      g.gain.setValueAtTime(gain || 0.04, actx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
      o.connect(g);
      g.connect(actx.destination);
      o.start();
      o.stop(actx.currentTime + dur);
    } catch (e) {}
  }
  var sfxBtn = $("sfxBtn");
  function paintSfxBtn() { if (sfxBtn) sfxBtn.textContent = sfxOn ? "🔊 SFX: ON" : "🔇 SFX: OFF"; }
  if (sfxBtn) {
    sfxBtn.addEventListener("click", function () {
      sfxOn = !sfxOn;
      try { localStorage.setItem("sfx", sfxOn ? "on" : "off"); } catch (e) {}
      paintSfxBtn();
      if (sfxOn) beep(880, 0.07);
    });
    paintSfxBtn();
  }
  /* every click makes a noise, like the old days */
  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    if (e.target.closest(".btn95")) beep(660, 0.05);          /* chunky Win95 button */
    else if (e.target.closest("a")) beep(880, 0.035);          /* link chirp */
    else beep(1100, 0.02, "square", 0.02);                     /* soft tick anywhere */
  });
  /* scroll ratchet: tiny pitch-jittered ticks while the page moves */
  var lastScrollBlip = 0;
  window.addEventListener("scroll", function () {
    var t = Date.now();
    if (t - lastScrollBlip < 110) return;
    lastScrollBlip = t;
    beep(1500 + Math.random() * 300, 0.015, "square", 0.015);
  }, { passive: true });

  /* ---- star confetti bursts ---- */
  function burstAt(x, y) {
    if (reducedMotion) return;
    var glyphs = ["★", "✦", "●", "▲", "■"];
    var cols = ["#ff0", "#0ff", "#f0f", "#3f3", "#f60"];
    for (var i = 0; i < 24; i++) {
      var p = document.createElement("span");
      p.className = "confetti";
      p.textContent = glyphs[i % glyphs.length];
      p.style.color = cols[i % cols.length];
      p.style.left = x + "px";
      p.style.top = y + "px";
      var ang = Math.random() * Math.PI * 2, v = 40 + Math.random() * 90;
      p.style.setProperty("--dx", Math.cos(ang) * v + "px");
      p.style.setProperty("--dy", (Math.sin(ang) * v - 45) + "px");
      document.body.appendChild(p);
      (function (el) { setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 1000); })(p);
    }
  }
  /* the 88x31 badges pop when clicked, as awards should */
  document.addEventListener("click", function (e) {
    if (e.target && e.target.closest && e.target.closest(".badge")) {
      burstAt(e.clientX, e.clientY);
      beep(988, 0.08);
    }
  });

  /* LIGHTS ON / OFF (dark mode is the default) */
  var lightsBtn = $("lightsBtn");
  function paintLightsBtn() {
    if (!lightsBtn) return;
    var light = document.documentElement.classList.contains("light");
    lightsBtn.textContent = light ? "☾ LIGHTS OFF" : "☀ LIGHTS ON";
  }
  if (lightsBtn) {
    lightsBtn.addEventListener("click", function () {
      var root = document.documentElement;
      root.classList.toggle("light");
      try {
        localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
      } catch (e) {}
      paintLightsBtn();
    });
    paintLightsBtn();
  }

  /* date box, Apple-1997 style */
  var datebox = $("datebox");
  if (datebox) {
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var now = new Date();
    datebox.innerHTML = "<b>" + months[now.getMonth()] + "</b> " + now.getDate() + " · " + now.getFullYear();
  }

  /* odometer hit counter */
  var counter = $("counter");
  if (counter) {
    var hits = 42128;
    try {
      var n = parseInt(localStorage.getItem("hits") || "0", 10) + 1;
      localStorage.setItem("hits", String(n));
      hits += n;
    } catch (e) { hits += 1; }
    var digits = String(hits);
    while (digits.length < 6) digits = "0" + digits;
    counter.innerHTML = digits.replace(/\d/g, function (d) { return "<span>" + d + "</span>"; });
  }

  /* live server uptime since the summer of '97 (zero reboots) */
  var uptimeEl = $("uptime");
  if (uptimeEl) {
    var t0 = Date.UTC(1997, 6, 14);
    var pp = function (n) { return (n < 10 ? "0" : "") + n; };
    var tickUptime = function () {
      var s = Math.floor((Date.now() - t0) / 1000);
      var d = Math.floor(s / 86400); s -= d * 86400;
      var h = Math.floor(s / 3600); s -= h * 3600;
      var m = Math.floor(s / 60); s -= m * 60;
      uptimeEl.textContent = d + " days " + pp(h) + ":" + pp(m) + ":" + pp(s);
    };
    tickUptime();
    setInterval(tickUptime, 1000);
  }

  /* Netscape-style status bar: dial-up boot, then link targets on hover */
  var statusText = $("statusText");
  if (statusText) {
    var bootMsgs = ["Connecting at 28.8 kbps…", "CONNECT 28800/ARQ/V42BIS", "Loading 47 animated GIFs…", "Reticulating splines…", "Document: Done"];
    var bi = 0;
    var bootTimer = setInterval(function () {
      statusText.textContent = bootMsgs[bi++];
      if (bi >= bootMsgs.length) clearInterval(bootTimer);
    }, 550);
    document.addEventListener("mouseover", function (e) {
      var a = e.target && e.target.closest ? e.target.closest("a") : null;
      statusText.textContent = a && a.href ? a.href : "Document: Done";
    });
  }

  /* FIND IT — scroll to the first section mentioning the query */
  var findForm = $("findForm");
  if (findForm) {
    findForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = ($("findInput").value || "").trim().toLowerCase();
      if (!q) return;
      var blocks = document.querySelectorAll("main section, main article");
      for (var i = 0; i < blocks.length; i++) {
        if (blocks[i].textContent.toLowerCase().indexOf(q) !== -1) {
          blocks[i].scrollIntoView({ behavior: "smooth", block: "start" });
          blocks[i].classList.remove("flash");
          void blocks[i].offsetWidth;
          blocks[i].classList.add("flash");
          return;
        }
      }
      alert('404 — "' + q + '" not found on this homepage!');
    });
  }

  /* Arpit Sites Worldwide */
  var goBtn = $("goBtn"), siteSelect = $("siteSelect");
  if (goBtn && siteSelect) {
    goBtn.addEventListener("click", function () {
      if (siteSelect.value) window.open(siteSelect.value, "_blank", "noopener");
    });
  }

  /* share */
  var shareBtn = $("shareBtn");
  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      var url = location.href;
      var data = { title: "Arpit Sharma", text: "Arpit Sharma, Full-Stack & Distributed-Systems Engineer", url: url };
      if (navigator.share) {
        navigator.share(data).catch(function () {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function () {
          var t = shareBtn.textContent;
          shareBtn.textContent = "LINK COPIED!";
          setTimeout(function () { shareBtn.textContent = t; }, 1500);
        }).catch(function () {});
      }
    });
  }

  /* ============ THE ARCADE ============ */

  /* SNAKE '97 */
  var canvas = $("snakeCanvas");
  var snakeAlive = false;
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var CELL = 16, COLS = canvas.width / CELL, ROWS = canvas.height / CELL;
    var snake, dir, nextDir, food, score = 0, snakeTimer = null;
    var snakeHi = 0;
    try { snakeHi = parseInt(localStorage.getItem("snakeHi") || "0", 10) || 0; } catch (e) {}
    var scoreEl = $("snakeScore"), hiEl = $("snakeHi"), startBtn = $("snakeStart");

    var pad4 = function (n) { n = String(n); while (n.length < 4) n = "0" + n; return n; };
    var hud = function () {
      if (scoreEl) scoreEl.textContent = "SCORE " + pad4(score);
      if (hiEl) hiEl.textContent = "HI " + pad4(snakeHi);
    };
    var splash = function (line1, line2) {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = "center";
      ctx.fillStyle = "#33ff66";
      ctx.font = "28px 'VT323', monospace";
      ctx.fillText(line1, canvas.width / 2, canvas.height / 2 - 8);
      ctx.fillStyle = "#ffe066";
      ctx.font = "18px 'VT323', monospace";
      ctx.fillText(line2, canvas.width / 2, canvas.height / 2 + 20);
    };
    var placeFood = function () {
      for (;;) {
        var f = { x: (Math.random() * COLS) | 0, y: (Math.random() * ROWS) | 0 };
        var clash = false;
        for (var i = 0; i < snake.length; i++) {
          if (snake[i].x === f.x && snake[i].y === f.y) { clash = true; break; }
        }
        if (!clash) return f;
      }
    };
    var drawGame = function () {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#e03a3e";
      ctx.fillRect(food.x * CELL + 2, food.y * CELL + 2, CELL - 4, CELL - 4);
      for (var i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "#b7fdb7" : "#33ff66";
        ctx.fillRect(snake[i].x * CELL + 1, snake[i].y * CELL + 1, CELL - 2, CELL - 2);
      }
    };
    var tick = function () {
      dir = nextDir;
      var head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
      var dead = head.x < 0 || head.y < 0 || head.x >= COLS || head.y >= ROWS;
      for (var i = 0; !dead && i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) dead = true;
      }
      if (dead) {
        snakeAlive = false;
        clearInterval(snakeTimer);
        beep(147, 0.3, "sawtooth");
        if (score > snakeHi) {
          snakeHi = score;
          try { localStorage.setItem("snakeHi", String(snakeHi)); } catch (e) {}
          var rect = canvas.getBoundingClientRect();
          burstAt(rect.left + rect.width / 2, rect.top + rect.height / 2);
        }
        hud();
        splash("GAME OVER", "SCORE " + pad4(score) + " · INSERT COIN");
        if (startBtn) startBtn.textContent = "▶ PLAY AGAIN";
        return;
      }
      snake.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        score += 10;
        hud();
        beep(880, 0.05);
        food = placeFood();
        clearInterval(snakeTimer);
        snakeTimer = setInterval(tick, Math.max(60, 140 - score));
      } else {
        snake.pop();
      }
      drawGame();
    };
    var startSnake = function () {
      snake = [{ x: 5, y: 7 }, { x: 4, y: 7 }, { x: 3, y: 7 }];
      dir = nextDir = { x: 1, y: 0 };
      score = 0;
      snakeAlive = true;
      hud();
      food = placeFood();
      drawGame();
      clearInterval(snakeTimer);
      snakeTimer = setInterval(tick, 140);
      if (startBtn) { startBtn.textContent = "▶ RESTART"; startBtn.blur(); }
    };
    var setDir = function (name) {
      var d = { up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } }[name];
      if (!d || !snakeAlive) return;
      if (d.x === -dir.x && d.y === -dir.y) return; /* no 180s */
      nextDir = d;
    };

    if (startBtn) startBtn.addEventListener("click", startSnake);
    document.addEventListener("keydown", function (e) {
      var map = {
        ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right",
        w: "up", s: "down", a: "left", d: "right", W: "up", S: "down", A: "left", D: "right"
      };
      var name = map[e.key];
      if (!name || !snakeAlive) return;
      if (e.key.indexOf("Arrow") === 0) e.preventDefault();
      setDir(name);
    });
    var pads = document.querySelectorAll(".dpad [data-dir]");
    for (var p = 0; p < pads.length; p++) {
      pads[p].addEventListener("click", function () { setDir(this.getAttribute("data-dir")); });
    }

    hud();
    splash("SNAKE '97", "INSERT COIN TO PLAY");
  }

  /* BREAKOUT '97 */
  var bcan = $("breakCanvas");
  var breakRun = false;
  if (bcan && bcan.getContext) {
    var bctx = bcan.getContext("2d");
    var BW = bcan.width, BH = bcan.height;
    var BROWS = 4, BCOLS = 8, BRW = 38, BRH = 12, BRTOP = 28, BRGAP = 2;
    var bLeft = (BW - BCOLS * (BRW + BRGAP) + BRGAP) / 2;
    var padX = BW / 2, ball, bricks, bScore = 0, bLives = 0, bRaf = null;
    var bHi = 0;
    try { bHi = parseInt(localStorage.getItem("breakHi") || "0", 10) || 0; } catch (e) {}
    var bScoreEl = $("breakScore"), bHiEl = $("breakHi"), bLivesEl = $("breakLives"), bStartBtn = $("breakStart");
    var rowColors = ["#e03a3e", "#f5821f", "#ffe066", "#33ff66"];

    var bPad4 = function (n) { n = String(n); while (n.length < 4) n = "0" + n; return n; };
    var bHud = function () {
      if (bScoreEl) bScoreEl.textContent = "SCORE " + bPad4(bScore);
      if (bHiEl) bHiEl.textContent = "HI " + bPad4(bHi);
      if (bLivesEl) {
        var hearts = "";
        for (var i = 0; i < bLives; i++) hearts += "♥";
        bLivesEl.textContent = hearts || "—";
      }
    };
    var bSplash = function (line1, line2) {
      bctx.fillStyle = "#000";
      bctx.fillRect(0, 0, BW, BH);
      bctx.textAlign = "center";
      bctx.fillStyle = "#33ff66";
      bctx.font = "28px 'VT323', monospace";
      bctx.fillText(line1, BW / 2, BH / 2 - 8);
      bctx.fillStyle = "#ffe066";
      bctx.font = "18px 'VT323', monospace";
      bctx.fillText(line2, BW / 2, BH / 2 + 20);
    };
    var bSaveHi = function () {
      if (bScore > bHi) {
        bHi = bScore;
        try { localStorage.setItem("breakHi", String(bHi)); } catch (e) {}
      }
    };
    var resetBall = function () {
      ball = { x: BW / 2, y: BH - 40, dx: 2.4 * (Math.random() < 0.5 ? 1 : -1), dy: -2.6, r: 4 };
    };
    var bDraw = function () {
      bctx.fillStyle = "#000";
      bctx.fillRect(0, 0, BW, BH);
      for (var r = 0; r < BROWS; r++) {
        for (var c = 0; c < BCOLS; c++) {
          if (!bricks[r][c]) continue;
          bctx.fillStyle = rowColors[r];
          bctx.fillRect(bLeft + c * (BRW + BRGAP), BRTOP + r * (BRH + BRGAP), BRW, BRH);
        }
      }
      bctx.fillStyle = "#b7fdb7";
      bctx.fillRect(padX - 28, BH - 14, 56, 8);
      bctx.fillStyle = "#fff";
      bctx.fillRect(ball.x - ball.r, ball.y - ball.r, ball.r * 2, ball.r * 2);
    };
    var bStep = function () {
      if (!breakRun) return;
      ball.x += ball.dx;
      ball.y += ball.dy;
      if (ball.x < ball.r || ball.x > BW - ball.r) { ball.dx = -ball.dx; beep(392, 0.04); }
      if (ball.y < ball.r) { ball.dy = Math.abs(ball.dy); beep(392, 0.04); }
      /* paddle */
      if (ball.dy > 0 && ball.y >= BH - 14 - ball.r && ball.y <= BH - 4 && ball.x > padX - 32 && ball.x < padX + 32) {
        ball.dy = -Math.abs(ball.dy);
        ball.dx = ((ball.x - padX) / 28) * 3;
        beep(494, 0.05);
      }
      /* bricks */
      var col = Math.floor((ball.x - bLeft) / (BRW + BRGAP));
      var row = Math.floor((ball.y - BRTOP) / (BRH + BRGAP));
      if (row >= 0 && row < BROWS && col >= 0 && col < BCOLS && bricks[row][col]) {
        bricks[row][col] = 0;
        ball.dy = -ball.dy;
        bScore += 10;
        bHud();
        beep(700 + row * 60, 0.05);
        var left = 0;
        for (var r = 0; r < BROWS; r++) for (var c = 0; c < BCOLS; c++) left += bricks[r][c];
        if (!left) {
          breakRun = false;
          bSaveHi();
          bHud();
          bSplash("YOU WIN!", "WALL FREED · SCORE " + bPad4(bScore));
          var rect = bcan.getBoundingClientRect();
          burstAt(rect.left + rect.width / 2, rect.top + rect.height / 2);
          if (bStartBtn) bStartBtn.textContent = "▶ PLAY AGAIN";
          return;
        }
      }
      /* floor */
      if (ball.y > BH + ball.r) {
        bLives--;
        bHud();
        beep(147, 0.25, "sawtooth");
        if (bLives <= 0) {
          breakRun = false;
          bSaveHi();
          bHud();
          bSplash("GAME OVER", "SCORE " + bPad4(bScore) + " · INSERT COIN");
          if (bStartBtn) bStartBtn.textContent = "▶ PLAY AGAIN";
          return;
        }
        resetBall();
      }
      bDraw();
      bRaf = requestAnimationFrame(bStep);
    };
    var startBreakout = function () {
      bricks = [];
      for (var r = 0; r < BROWS; r++) {
        bricks[r] = [];
        for (var c = 0; c < BCOLS; c++) bricks[r][c] = 1;
      }
      bScore = 0;
      bLives = 3;
      padX = BW / 2;
      resetBall();
      bHud();
      breakRun = true;
      if (bStartBtn) { bStartBtn.textContent = "▶ RESTART"; bStartBtn.blur(); }
      cancelAnimationFrame(bRaf);
      bDraw();
      bRaf = requestAnimationFrame(bStep);
    };

    if (bStartBtn) bStartBtn.addEventListener("click", startBreakout);
    bcan.addEventListener("mousemove", function (e) {
      var rect = bcan.getBoundingClientRect();
      padX = ((e.clientX - rect.left) / rect.width) * BW;
    });
    bcan.addEventListener("touchmove", function (e) {
      if (!breakRun) return;
      e.preventDefault();
      var rect = bcan.getBoundingClientRect();
      padX = ((e.touches[0].clientX - rect.left) / rect.width) * BW;
    }, { passive: false });
    document.addEventListener("keydown", function (e) {
      if (!breakRun) return;
      if (e.key === "ArrowLeft") { e.preventDefault(); padX = Math.max(28, padX - 26); }
      if (e.key === "ArrowRight") { e.preventDefault(); padX = Math.min(BW - 28, padX + 26); }
    });

    bHud();
    bSplash("BREAKOUT '97", "INSERT COIN TO PLAY");
  }

  /* THE DEV ORACLE */
  var oracleBtn = $("oracleBtn"), oracleOut = $("oracleOut");
  if (oracleBtn && oracleOut) {
    var fortunes = [
      "It works on my machine. Ship the machine.",
      "The bug is in the layer you least respect.",
      "Have you tried turning it off and on again?",
      "Reply hazy. Check the logs again.",
      "Your future holds a merge conflict.",
      "404: fortune not found.",
      "You will refactor this. Twice.",
      "The cache was never invalidated.",
      "Outlook good. Friday prod deploy: outlook bad.",
      "Signs point to DNS. It is always DNS.",
      "It is not a race condition. It is a race condition.",
      "Trust the borrow checker.",
      "That TODO is old enough to attend school.",
      "Concentrate and grep again."
    ];
    var typingTimer = null;
    oracleBtn.addEventListener("click", function () {
      var f = "» " + fortunes[(Math.random() * fortunes.length) | 0];
      clearInterval(typingTimer);
      var i = 0;
      oracleOut.textContent = "";
      typingTimer = setInterval(function () {
        oracleOut.textContent = f.slice(0, ++i);
        if (i >= f.length) clearInterval(typingTimer);
      }, 22);
    });
  }

  /* KONAMI CODE → PARTY MODE */
  var konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  var kpos = 0;
  document.addEventListener("keydown", function (e) {
    var k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    kpos = (k === konami[kpos]) ? kpos + 1 : (k === konami[0] ? 1 : 0);
    if (kpos === konami.length) {
      kpos = 0;
      var on = document.documentElement.classList.toggle("party");
      if (on) {
        burstAt(window.innerWidth / 2, window.innerHeight / 2);
        beep(523, 0.08); beep(659, 0.08); beep(784, 0.12);
      }
      if (statusText) statusText.textContent = on ? "★★★ PARTY MODE ENABLED ★★★" : "Party over. Document: Done";
    }
  });

  /* CLIPPIT.EXE — it looks like you're trying to hire an engineer */
  var clippy = $("clippy");
  if (clippy) {
    var clippySeen = false;
    try { clippySeen = sessionStorage.getItem("clippySeen") === "1"; } catch (e) {}
    if (!clippySeen) {
      setTimeout(function () {
        clippy.hidden = false;
        try { sessionStorage.setItem("clippySeen", "1"); } catch (e) {}
      }, 12000);
    }
    clippy.addEventListener("click", function (e) {
      if (e.target && e.target.closest && e.target.closest(".clippy-btns")) clippy.hidden = true;
    });
  }

  /* WINNER.EXE — the classic scam, minus the scam */
  var winner = $("winner");
  if (winner) {
    var winnerSeen = false;
    try { winnerSeen = sessionStorage.getItem("winnerSeen") === "1"; } catch (e) {}
    if (!winnerSeen) {
      setTimeout(function () {
        winner.hidden = false;
        beep(988, 0.09);
        try { sessionStorage.setItem("winnerSeen", "1"); } catch (e) {}
      }, 35000);
    }
    var winnerClose = $("winnerClose"), winnerClaim = $("winnerClaim"), winnerBody = $("winnerBody");
    if (winnerClose) winnerClose.addEventListener("click", function () { winner.hidden = true; });
    if (winnerClaim) winnerClaim.addEventListener("click", function () {
      var rect = winner.getBoundingClientRect();
      burstAt(rect.left + rect.width / 2, rect.top);
      winnerBody.innerHTML = "<p><b>Your prize:</b> one (1) merge conflict.<br />It has been applied to main. Congratulations.</p>";
      setTimeout(function () { winner.hidden = true; }, 3200);
    });
  }

  /* idle screensaver: ARPIT.EXE bounces like it's 1997, and pitches like it's a career fair */
  var saver = null, saverRaf = null, saverSlideTimer = null, idleTimer = null;
  var SAVER_SLIDES = [
    { t: "ARPIT_SHARMA.EXE", s: "Full-Stack & Distributed-Systems Engineer · 7 years shipping" },
    { t: "EXPERIENCE.LOG", s: "Motorola Solutions · ex-Engineering Manager @ Angara · mavQ · 25+ products" },
    { t: "STACK.SYS", s: "Rust · Go · TypeScript · Java · Python · React · Node · Kafka" },
    { t: "SCALE.DAT", s: "2M+ req/sec at the edge · 10B events/day · 320M reads/sec · 99.9% uptime" },
    { t: "CLOUD.CFG", s: "AWS · GCP · Azure · Kubernetes · Terraform · ArgoCD" },
    { t: "SECURITY.BIN", s: "Zero-trust · mTLS · HIPAA · SOC 2 · OWASP Top 10" },
    { t: "BUSINESS.BAT", s: "Presales engineering · client demos · conversion 12% → 18%" },
    { t: "SIDE_QUESTS.DIR", s: "Built an OS in Rust · wrote an interpreter for fun · made a game where you ARE the ball", fun: true },
    { t: "COWORKER.INI", s: "Ships fast · reviews kindly · debugs calmly · explains kernels with genuine enthusiasm", fun: true },
    { t: "VIBES.WAV", s: "Will defend the marquee tag in code review · actually fun on incident calls", fun: true }
  ];
  function stopSaver() {
    if (!saver) return;
    cancelAnimationFrame(saverRaf);
    clearInterval(saverSlideTimer);
    if (saver.parentNode) saver.parentNode.removeChild(saver);
    saver = null;
  }
  function startSaver() {
    if (saver || document.hidden || reducedMotion) return;
    saver = document.createElement("div");
    saver.className = "saver";
    saver.innerHTML =
      '<div class="saver-logo"><span class="pixel-logo big"></span>' +
      '<div class="saver-card"><span class="saver-title"></span><span class="saver-sub"></span></div></div>' +
      '<p class="saver-hint">ARPIT.EXE screensaver · now playing: the arpit show · hit any key to return</p>';
    document.body.appendChild(saver);
    var el = saver.firstChild;
    var titleEl = saver.querySelector(".saver-title");
    var subEl = saver.querySelector(".saver-sub");
    var si = 0;
    var showSlide = function () {
      var s = SAVER_SLIDES[si % SAVER_SLIDES.length];
      si++;
      titleEl.textContent = s.t;
      subEl.textContent = s.s;
      el.classList.toggle("fun", !!s.fun);
    };
    showSlide();
    saverSlideTimer = setInterval(showSlide, 4000);
    var x = 40, y = 40, dx = 2.2, dy = 1.7;
    var loop = function () {
      var w = window.innerWidth - el.offsetWidth, h = window.innerHeight - el.offsetHeight;
      x += dx; y += dy;
      if (x <= 0 || x >= w) { dx = -dx; x = Math.max(0, Math.min(x, w)); }
      if (y <= 0 || y >= h) { dy = -dy; y = Math.max(0, Math.min(y, h)); }
      el.style.transform = "translate(" + x + "px," + y + "px)";
      saverRaf = requestAnimationFrame(loop);
    };
    loop();
  }
  function resetIdle() {
    if (saver) stopSaver();
    clearTimeout(idleTimer);
    idleTimer = setTimeout(startSaver, 45000);
  }
  var idleEvents = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"];
  for (var ie = 0; ie < idleEvents.length; ie++) {
    document.addEventListener(idleEvents[ie], resetIdle, { passive: true });
  }
  resetIdle();
  /* console crowd can summon it directly */
  window.__screensaver = startSaver;

  /* the name does a wave on hover */
  var me = document.querySelector("h1 .me");
  if (me) {
    var txt = me.textContent, html = "";
    for (var ci = 0; ci < txt.length; ci++) {
      html += txt[ci] === " " ? " " : '<span style="--i:' + ci + '">' + txt[ci] + "</span>";
    }
    me.innerHTML = html;
  }

  /* sparkle cursor trail (desktop pointers only) */
  if (!reducedMotion && window.matchMedia && window.matchMedia("(pointer: fine)").matches) {
    var lastSpark = 0;
    var sparkGlyphs = ["✦", "✧", "★", "·"];
    var sparkColors = ["#ff0", "#0ff", "#f0f", "#3f3"];
    document.addEventListener("mousemove", function (e) {
      var t = Date.now();
      if (t - lastSpark < 60) return;
      lastSpark = t;
      var s = document.createElement("span");
      s.className = "spark";
      s.textContent = sparkGlyphs[(Math.random() * sparkGlyphs.length) | 0];
      s.style.color = sparkColors[(Math.random() * sparkColors.length) | 0];
      s.style.left = (e.clientX + 8) + "px";
      s.style.top = (e.clientY + 8) + "px";
      document.body.appendChild(s);
      setTimeout(function () { if (s.parentNode) s.parentNode.removeChild(s); }, 850);
    });
  }

  /* the logo spins if you click it, obviously */
  var logo = document.querySelector(".pixel-logo");
  if (logo) {
    logo.title = "click me";
    logo.addEventListener("click", function () {
      logo.classList.remove("spin");
      void logo.offsetWidth;
      logo.classList.add("spin");
    });
  }

  /* for the curious: view-source crowd gets a banner */
  try {
    console.log(
      "%c" +
      " █████╗ ██████╗ ██████╗ ██╗████████╗\n" +
      "██╔══██╗██╔══██╗██╔══██╗██║╚══██╔══╝\n" +
      "███████║██████╔╝██████╔╝██║   ██║\n" +
      "██╔══██║██╔══██╗██╔═══╝ ██║   ██║\n" +
      "██║  ██║██║  ██║██║     ██║   ██║\n" +
      "╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝   ╚═╝",
      "color:#33ff66;background:#000;font-family:monospace;line-height:1.2"
    );
    console.log("You opened DevTools. 10 GEEK POINTS.\nSay hi: hello@arpitsharma.io — and yes, the Konami code works out there.\nBonus: call __screensaver() to start the show without waiting 45 seconds.");
  } catch (e) {}

  /* respect reduced motion: park the marquees */
  if (reducedMotion) {
    var mqs = document.querySelectorAll("marquee");
    for (var j = 0; j < mqs.length; j++) {
      try { mqs[j].stop(); } catch (e) {}
    }
  }
})();
