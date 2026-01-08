<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Om Joshi | Portfolio</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background-color: #0f172a;
      color: #e5e7eb;
      line-height: 1.6;
    }

    .container {
      max-width: 900px;
      margin: auto;
      padding: 20px;
    }

    h1, h2 {
      color: #38bdf8;
    }

    a {
      color: #38bdf8;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .badges img {
      margin: 4px 4px 4px 0;
      vertical-align: middle;
    }

    /* Typing animation */
    #typing {
      border-right: 2px solid #38bdf8;
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
      font-weight: bold;
      color: #38bdf8;
      font-size: 18px;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>👋 Om Joshi | Portfolio</h1>
    <p>Hi! I am <strong>Om Joshi</strong>, a BE IT student passionate about technology, programming, and building real-world engineering projects.</p>

    <!-- Typing Animation Highlights -->
    <h2>🔹 Highlights</h2>
    <p id="typing"></p>

    <!-- Skills -->
    <h2>🔹 Skills</h2>
    <div class="badges">
      <img src="https://img.shields.io/badge/C++-white?style=flat&logo=c%2B%2B&logoColor=00599C" alt="C++">
      <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python">
      <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" alt="Git">
      <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub">
      <img src="https://img.shields.io/badge/Arduino-00979D?style=flat&logo=arduino&logoColor=white" alt="Arduino">
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
    </div>

    <!-- Projects -->
    <h2>🔹 Projects</h2>
    <h3><a href="https://github.com/omjoshi-2307/WALL-E-Autonomous-Obstacle-Avoiding-Robot" target="_blank">WALL-E – Autonomous Obstacle Avoiding Robot</a></h3>
    <ul>
      <li>Designed and developed an obstacle-avoiding robot using sensors and a microcontroller.</li>
      <li>Implemented both hardware and software logic for autonomous navigation.</li>
    </ul>

    <!-- Contact -->
    <h2>🔹 Contact</h2>
    <ul>
      <li>✉️ Email: <a href="mailto:omjoshi2307@gmail.com">omjoshi2307@gmail.com</a></li>
      <li>💼 LinkedIn: <a href="https://www.linkedin.com/in/om-joshi" target="_blank">linkedin.com/in/om-joshi</a></li>
      <li>🐙 GitHub: <a href="https://github.com/omjoshi-2307" target="_blank">github.com/omjoshi-2307</a></li>
      <li>📸 Instagram: <a href="https://www.instagram.com/0m.a.joshi/?hl=en" target="_blank">@0m.a.joshi</a></li>
      <li>🐦 X (Twitter): <a href="https://x.com/omjoshi_2307" target="_blank">@omjoshi_2307</a></li>
      <li>🎓 Credly: <a href="https://www.credly.com/users/om-joshi2623/edit#credly" target="_blank">Certifications</a></li>
    </ul>

    <!-- Live Portfolio -->
    <h2>🔹 Live Portfolio</h2>
    <p><a href="https://omjoshi-2307.github.io/Om-Joshi-Portfolio/" target="_blank">View Online</a></p>

    <footer>
      <p>⚡ “Building, learning, and growing every day in the world of technology.”</p>
    </footer>
  </div>

  <!-- Typing animation script -->
  <script>
    const text = "🚀 Open to Internships | 💻 BE IT Student | 🤖 Robotics & Web Projects | 📚 Learning DSA & Python";
    let i = 0;
    const speed = 100; // milliseconds per character

    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
  </script>
</body>
</html>