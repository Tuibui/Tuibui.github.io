/*
 * PORTFOLIO DATA FILE
 * -------------------
 * This is the only file you need to edit to change the site content.
 *
 * Bilingual text: any text field can be a plain string (same in both
 * languages) or { en: "...", th: "..." }.
 *
 * GitHub Pages cannot list folders, so every file you drop into
 * media/images, media/videos or source must also be listed here.
 * Paths are relative to the site root, e.g. "media/images/foo/shot.png".
 */
window.PORTFOLIO = {
  owner: {
    // TODO: replace the th value with your name in Thai script
    name: { en: "Metasit Sodsup", th: "Metasit Sodsup" },

    // Put your photo at media/images/profile.jpg and change this path
    photo: "media/images/profile.jpg",

    // Home page headline (line2 optional) and intro paragraphs
    hero: {
      line1: { en: "About Me", th: "เกี่ยวกับฉัน" },
      line2: "",   // optional second line
      intro: {
        en: [
          "I am a recent Mechatronics Engineering graduate from KOSEN-KMITL, " +
          "seeking a position as a Robotics Software Engineer.",
          "Over five years of study I have built several projects that bring together " +
          "mechanical design, electronics and programming. You can explore them in the Projects menu."
        ],
        th: [
          "สำเร็จการศึกษาสาขาวิศวกรรมเมคคาทรอนิกส์จาก KOSEN-KMITL " +
          "และกำลังมองหางานในตำแหน่ง Robotics Software Engineer",
          "ตลอด 5 ปีของการศึกษา ได้ทำโปรเจกต์หลายชิ้นที่ผสานงานออกแบบเครื่องกล " +
          "งานไฟฟ้า และการเขียนโปรแกรมเข้าด้วยกัน ดูผลงานทั้งหมดได้ที่เมนู ผลงาน"
        ]
      },
      // Short facts shown under the intro (2-4 rows look best)
      facts: [
        { label: { en: "Education", th: "การศึกษา" },
          value: { en: "KOSEN-KMITL, Mechatronics", th: "KOSEN-KMITL เมคคาทรอนิกส์" } },
        { label: { en: "Skills", th: "ทักษะ" },
          value: "C++, Python, ROS 2, MoveIt 2, Gazebo, OpenCV, SolidWorks, KiCad, Linux (Ubuntu)" },
        { label: { en: "Seeking", th: "ตำแหน่งที่สนใจ" },
          value: "Robotics Software Engineer" }
      ],
      buttons: []   // e.g. { label: "GitHub", url: "https://github.com/Tuibui" }
    },

    // Icons in the top right. icon = any Font Awesome 6 class (fontawesome.com/icons)
    // TODO: fill in your real links
    socials: [
      { label: "GitHub",   icon: "fa-brands fa-github",      url: "https://github.com/Tuibui" },
      { label: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/yourname" },
      { label: "Email",    icon: "fa-solid fa-envelope",     url: "mailto:you@example.com" }
    ]
  },

  // Newest first. Each block is one project; separate blocks with a comma.
  projects: [
    {
      id: "sunscope-3d",
      title: "SunScope 3D",
      year: "2026",
      role: {
        en: "Backend developer: 3D roof model pipeline, solar and ROI calculations",
        th: "นักพัฒนาฝั่ง Backend: แปลงโมเดลหลังคา 3 มิติ และระบบคำนวณพลังงานและความคุ้มค่า"
      },
      status: { en: "Special Prize, 4th of 17 teams", th: "รางวัลพิเศษ อันดับ 4 จาก 17 ทีม" },
      stack: ["Python", "pvlib", "Flask", "CesiumJS", "Google 3D Tiles"],
      cover: "media/images/sunscope-3d/photo-01.jpg",
      summary: {
        en: "Rooftop solar ROI platform on photorealistic 3D maps. I built the backend: 3D roof models and all solar and ROI calculations.",
        th: "แพลตฟอร์มคำนวณความคุ้มค่าโซลาร์รูฟท็อปบนแผนที่ 3 มิติ รับผิดชอบฝั่ง Backend ทั้งการสร้างโมเดลหลังคา 3 มิติและการคำนวณทั้งหมด"
      },
      description: {
        en: [
          "SunScope 3D is a web platform for estimating the return on investment of rooftop solar panels. " +
          "The user finds their building on Google Photorealistic 3D Tiles, marks the roof on the 3D map " +
          "and places solar panels on it.",
          "I was responsible for the backend. I built the step that takes the roof geometry captured from " +
          "the Cesium 3D map and converts it into a clean local 3D model of the roof, so panels can be " +
          "placed and analysed on real roof surfaces.",
          "I also wrote all of the calculations in Python. Using pvlib, the system fetches solar data for " +
          "the building's location, models how much electricity the panels will produce, and turns that into " +
          "annual savings, the payback period and the long-term return on investment.",
          "We presented SunScope 3D at the 17th NAPROCK International Programming Contest (ProCon 2026) " +
          "in Hanoi, Vietnam, and received a Special Prize, ranking 4th out of 17 teams."
        ],
        th: [
          "SunScope 3D เป็นแพลตฟอร์มเว็บสำหรับประเมินความคุ้มค่าการลงทุนติดตั้งแผงโซลาร์บนหลังคา " +
          "ผู้ใช้ค้นหาอาคารของตนบน Google Photorealistic 3D Tiles กำหนดหลังคาบนแผนที่ 3 มิติ แล้ววางแผงโซลาร์",
          "รับผิดชอบงานฝั่ง Backend โดยพัฒนาขั้นตอนที่นำข้อมูลรูปทรงหลังคาจากแผนที่ 3 มิติของ Cesium " +
          "มาแปลงเป็นโมเดลหลังคา 3 มิติแบบ local เพื่อให้วางและวิเคราะห์แผงโซลาร์บนพื้นผิวหลังคาจริงได้",
          "และเขียนส่วนการคำนวณทั้งหมดด้วย Python โดยใช้ pvlib ดึงข้อมูลแสงอาทิตย์ตามตำแหน่งของอาคาร " +
          "คำนวณพลังงานไฟฟ้าที่แผงผลิตได้ แล้วแปลงเป็นค่าไฟที่ประหยัดได้ต่อปี ระยะเวลาคืนทุน และผลตอบแทนการลงทุนระยะยาว",
          "ทีมได้นำเสนอ SunScope 3D ในการแข่งขัน 17th NAPROCK International Programming Contest " +
          "(ProCon 2026) ที่กรุงฮานอย ประเทศเวียดนาม และได้รับรางวัลพิเศษ (Special Prize) อันดับที่ 4 จาก 17 ทีม"
        ]
      },
      repo: "https://github.com/Tuibui/solar_roi",
      demo: "",

      images: [
        { src: "media/images/sunscope-3d/photo-01.jpg",
          caption: { en: "Special Prize award at NAPROCK ProCon 2026, Hanoi", th: "รับรางวัลพิเศษที่ NAPROCK ProCon 2026 ฮานอย" } },
        { src: "media/images/sunscope-3d/photo-02.jpg",
          caption: { en: "Drawing roof faces on Google Photorealistic 3D Tiles", th: "วาดหน้าหลังคาบน Google Photorealistic 3D Tiles" } },
        { src: "media/images/sunscope-3d/photo-03.jpg",
          caption: { en: "Generated 3D roof model with placed solar panels", th: "โมเดลหลังคา 3 มิติที่สร้างขึ้นพร้อมแผงโซลาร์" } },
        { src: "media/images/sunscope-3d/photo-04.jpg",
          caption: { en: "Poster and live demo at the contest booth", th: "โปสเตอร์และการสาธิตที่บูธการแข่งขัน" } }
      ],
      videos: [],
      source: []
    },

    {
      id: "remote-button-presser",
      title: { en: "Remote Button Pressing Machine", th: "เครื่องกดปุ่มรีโมตอัตโนมัติ" },
      year: "2025",
      role: { en: "Freelance designer and builder (Fastwork)", th: "ฟรีแลนซ์ ออกแบบและสร้างเครื่อง (Fastwork)" },
      status: { en: "Completed, paid 10,000 THB", th: "ส่งมอบแล้ว ได้รับค่าจ้าง 10,000 บาท" },
      stack: ["Cam Mechanism", "Spring Return", "Aluminum Extrusion"],
      cover: "media/images/remote-button-presser/photo-01.jpg",
      summary: {
        en: "Freelance machine that presses remote-control buttons in a set sequence, using a camshaft and spring return.",
        th: "งานฟรีแลนซ์: เครื่องกดปุ่มรีโมตตามลำดับที่กำหนด ด้วยกลไกแคมและสปริงดีดกลับ"
      },
      description: {
        en: [
          "A freelance job taken through the Fastwork platform. The client needed a machine that " +
          "presses the buttons of a remote control automatically in a set sequence, so the same " +
          "button pattern can be repeated reliably without pressing by hand.",
          "I designed the machine around a camshaft. One motor turns a single shaft carrying a row " +
          "of cams, one for each button. Each cam is mounted at a different angle, so as the shaft " +
          "rotates the cams reach their peak one after another and press their buttons in order. " +
          "The sequence and timing come from the cam angles and the shaft speed.",
          "Each presser is returned by a spring, so it lifts off its button as soon as the cam lobe " +
          "passes. This gives a clean press and release for every button without a separate " +
          "actuator for each one, which keeps the machine simple and low-cost.",
          "The frame is built from aluminum extrusion, with custom holders for the shaft and pressers " +
          "and a control box with a start switch on top. I handled the job end to end, from concept " +
          "and mechanical design to assembly and testing."
        ],
        th: [
          "งานฟรีแลนซ์ที่รับผ่านแพลตฟอร์ม Fastwork ลูกค้าต้องการเครื่องที่กดปุ่มรีโมตได้เองอัตโนมัติ " +
          "ตามลำดับที่กำหนด เพื่อให้กดรูปแบบปุ่มเดิมซ้ำได้อย่างแม่นยำโดยไม่ต้องใช้คนกด",
          "ออกแบบเครื่องโดยใช้เพลาลูกเบี้ยว (camshaft) มอเตอร์ตัวเดียวหมุนเพลาที่มีลูกเบี้ยวเรียงกัน " +
          "หนึ่งตัวต่อหนึ่งปุ่ม ลูกเบี้ยวแต่ละตัวติดตั้งในมุมที่ต่างกัน เมื่อเพลาหมุน ลูกเบี้ยวจะดันปุ่ม " +
          "ทีละปุ่มตามลำดับ ลำดับและจังหวะการกดกำหนดได้จากมุมของลูกเบี้ยวและความเร็วรอบของเพลา",
          "ตัวกดแต่ละตัวมีสปริงดีดกลับ เมื่อสันลูกเบี้ยวหมุนผ่านไป ตัวกดจะยกออกจากปุ่มทันที " +
          "ทำให้กดและปล่อยปุ่มได้ชัดเจนโดยไม่ต้องใช้ตัวขับแยกสำหรับแต่ละปุ่ม เครื่องจึงเรียบง่ายและต้นทุนต่ำ",
          "โครงเครื่องทำจากอะลูมิเนียมโปรไฟล์ มีตัวยึดเพลาและตัวกดที่ออกแบบเอง และกล่องควบคุม " +
          "พร้อมสวิตช์เริ่มทำงานด้านบน รับผิดชอบงานทั้งหมดตั้งแต่แนวคิด การออกแบบเครื่องกล " +
          "จนถึงการประกอบและทดสอบ"
        ]
      },
      repo: "",
      demo: "",

      images: [
        { src: "media/images/remote-button-presser/photo-01.jpg",
          caption: { en: "The finished machine: camshaft and button pressers", th: "เครื่องที่สร้างเสร็จ: เพลาลูกเบี้ยวและชุดตัวกดปุ่ม" } },
        { src: "media/images/remote-button-presser/photo-02.jpg",
          caption: { en: "Development and testing setup", th: "ระหว่างพัฒนาและทดสอบเครื่อง" } }
      ],
      videos: [
        { src: "media/videos/remote-button-presser.mp4",
          poster: "media/images/remote-button-presser/photo-01.jpg",
          caption: { en: "The machine running the button sequence", th: "เครื่องกำลังกดปุ่มตามลำดับ" } }
      ],
      source: []
    },

    {
      id: "cansat-rocket-2025",
      title: { en: "Thailand CANSAT-ROCKET Competition 2025", th: "การแข่งขัน Thailand CANSAT-ROCKET 2025" },
      year: "2025",
      role: {
        en: "Team leader; CanSat, rocket and mission mechanics design",
        th: "หัวหน้าทีม, ออกแบบ CanSat จรวด และกลไกภารกิจ"
      },
      status: { en: "Honorable Mention", th: "รางวัลชมเชย" },
      stack: ["CAD", "Flight Simulation", "CFD"],
      cover: "media/images/cansat-rocket-2025/photo-01.jpg",
      summary: {
        en: "Top 32 of 103 teams and an Honorable Mention award for our CanSat and rocket design.",
        th: "ติด 32 ทีมแรกจาก 103 ทีม และได้รับรางวัลชมเชยจากการออกแบบ CanSat และจรวด"
      },
      description: {
        en: [
          "In 2025 I invited several members of our robotics team to join the Thailand CANSAT-ROCKET Competition.",
          "As team leader, I was responsible for the design of the CanSat, the rocket and the mission mechanics.",
          "Our design and concept ranked in the top 32 out of 103 teams and received an Honorable Mention " +
          "award in the selection round."
        ],
        th: [
          "ในปี 2025 ได้ชวนสมาชิกจากทีมหุ่นยนต์หลายคนมาร่วมแข่งขัน Thailand CANSAT-ROCKET Competition",
          "ในฐานะหัวหน้าทีม รับผิดชอบการออกแบบ CanSat จรวด และกลไกสำหรับภารกิจ",
          "แบบและแนวคิดของทีมติดอันดับ 32 ทีมแรกจากทั้งหมด 103 ทีม และได้รับรางวัลชมเชยในรอบคัดเลือก"
        ]
      },
      repo: "",
      demo: "",

      images: [
        { src: "media/images/cansat-rocket-2025/photo-01.jpg",
          caption: { en: "CanSat 3D CAD model", th: "แบบจำลอง 3 มิติของ CanSat" } },
        { src: "media/images/cansat-rocket-2025/photo-02.jpg",
          caption: { en: "Rocket flight simulation and internal layout", th: "การจำลองการบินและการจัดวางภายในจรวด" } },
        { src: "media/images/cansat-rocket-2025/photo-03.jpg",
          caption: { en: "Airflow simulation of the parachute", th: "การจำลองการไหลของอากาศรอบร่มชูชีพ" } },
        { src: "media/images/cansat-rocket-2025/photo-04.jpg",
          caption: { en: "Honorable Mention certificate", th: "เกียรติบัตรรางวัลชมเชย" } }
      ],
      videos: [],
      source: []
    },

    {
      id: "tpa-robot-2024",
      title: { en: "TPA Robot Competition 2024", th: "การแข่งขัน TPA Robot 2024" },
      year: "2024",
      role: { en: "Team leader, mechanical design", th: "หัวหน้าทีม, ออกแบบเครื่องกล" },
      status: { en: "Passed selection round", th: "ผ่านรอบคัดเลือก" },
      stack: ["Mechanical Design"],
      cover: "media/images/tpa-robot-2024/photo-01.jpg",
      summary: {
        en: "Robot competition entry that passed the selection round. Team leader and mechanical designer.",
        th: "ผ่านรอบคัดเลือกการแข่งขันหุ่นยนต์ ในบทบาทหัวหน้าทีมและผู้ออกแบบเครื่องกล"
      },
      description: {
        en: [
          "In 2024 our robotics team took part in the TPA Robot Competition. " +
          "I led the team and was responsible for the robot's mechanical design.",
          "We passed the selection round by demonstrating the robot's movement and basic tasks."
        ],
        th: [
          "ในปี 2024 ทีมหุ่นยนต์ได้เข้าร่วมการแข่งขัน TPA Robot Competition " +
          "โดยรับหน้าที่หัวหน้าทีม และรับผิดชอบงานออกแบบเครื่องกลของหุ่นยนต์",
          "ทีมผ่านรอบคัดเลือกด้วยการสาธิตการเคลื่อนที่และการทำภารกิจพื้นฐานของหุ่นยนต์"
        ]
      },
      repo: "",
      demo: "",

      images: [
        { src: "media/images/tpa-robot-2024/photo-01.jpg",
          caption: { en: "The team with the robot", th: "ทีมกับหุ่นยนต์" } },
        { src: "media/images/tpa-robot-2024/photo-02.jpg",
          caption: { en: "Robot frame, drives and control box", th: "โครงหุ่นยนต์ ชุดขับเคลื่อน และกล่องควบคุม" } },
        { src: "media/images/tpa-robot-2024/photo-03.jpg",
          caption: { en: "Match at TPA Robot 2024", th: "การแข่งขันในสนาม TPA Robot 2024" } }
      ],
      videos: [],
      source: []
    },

    {
      id: "kosen-robocon-2023",
      title: "KOSEN ROBOCON 2023",
      year: "2023",
      role: { en: "Team leader, mechanical design", th: "หัวหน้าทีม, ออกแบบเครื่องกล" },
      status: { en: "Completed", th: "เสร็จสิ้น" },
      stack: ["Mechanical Design"],
      cover: "media/images/kosen-robocon-2023/photo-01.jpg",
      summary: {
        en: "Online robot competition with Sendai KOSEN. Team leader and mechanical designer.",
        th: "การแข่งขันหุ่นยนต์ออนไลน์ร่วมกับ Sendai KOSEN ในบทบาทหัวหน้าทีมและผู้ออกแบบเครื่องกล"
      },
      description: {
        en: [
          "In 2023 I formed a team to take part in KOSEN ROBOCON, an online competition held " +
          "together with Sendai KOSEN. I led the team and was responsible for the robot's mechanical design.",
          "During the event we exchanged many ideas and discussed design approaches with the Sendai KOSEN team.",
          "Our robot achieved the event objectives, and we built a strong relationship with " +
          "the Sendai KOSEN robotics team."
        ],
        th: [
          "ในปี 2023 ได้รวมทีมเข้าร่วมการแข่งขัน KOSEN ROBOCON ซึ่งเป็นการแข่งขันออนไลน์ร่วมกับ " +
          "Sendai KOSEN โดยรับหน้าที่หัวหน้าทีม และรับผิดชอบงานออกแบบเครื่องกลของหุ่นยนต์",
          "ระหว่างการแข่งขัน ทีมได้แลกเปลี่ยนความคิดและพูดคุยเรื่องการออกแบบกับทีมจาก Sendai KOSEN อย่างใกล้ชิด",
          "สุดท้ายหุ่นยนต์ของทีมทำภารกิจได้ตามเป้าหมายของการแข่งขัน " +
          "และยังได้สร้างความสัมพันธ์ที่ดีกับทีมหุ่นยนต์ของ Sendai KOSEN"
        ]
      },
      repo: "",
      demo: "",

      images: [
        { src: "media/images/kosen-robocon-2023/photo-01.jpg",
          caption: { en: "The finished robot", th: "หุ่นยนต์ที่สร้างเสร็จ" } },
        { src: "media/images/kosen-robocon-2023/photo-02.jpg",
          caption: { en: "Assembling the tracked drive", th: "ประกอบชุดขับเคลื่อนแบบตีนตะขาบ" } },
        { src: "media/images/kosen-robocon-2023/photo-03.jpg",
          caption: { en: "Robot during build and wiring", th: "หุ่นยนต์ระหว่างการสร้างและเดินสายไฟ" } },
        { src: "media/images/kosen-robocon-2023/photo-04.jpg",
          caption: { en: "Operating the robot on the field", th: "บังคับหุ่นยนต์ในสนาม" } },
        { src: "media/images/kosen-robocon-2023/photo-05.jpg",
          caption: { en: "Participants with their certificates", th: "ผู้เข้าร่วมพร้อมเกียรติบัตร" } },
        { src: "media/images/kosen-robocon-2023/photo-06.jpg",
          caption: { en: "Certificate of participation", th: "เกียรติบัตรการเข้าร่วมการแข่งขัน" } }
      ],
      videos: [
        { src: "media/videos/kosen-robocon-2023.mp4",
          poster: "media/images/kosen-robocon-2023/video-poster.jpg",
          caption: { en: "Robot run on the competition field", th: "หุ่นยนต์ทำงานในสนามแข่งขัน" } }
      ],
      source: []
    },

    {
      id: "indoor-flying-robot-2022",     // used in the URL: project.html?id=indoor-flying-robot-2022
      title: { en: "Indoor Flying Robot Contest 2022", th: "การแข่งขันหุ่นยนต์บินในอาคาร 2022" },
      year: "2022",
      role: { en: "Team assistant, 2D laser cutting", th: "ผู้ช่วยทีม, งานตัดเลเซอร์ 2 มิติ" },
      status: { en: "Completed", th: "เสร็จสิ้น" },
      stack: ["2D Laser Cutting"],
      cover: "media/images/indoor-flying-robot-2022/photo-01.jpg",   // card image; defaults to first image
      summary: {
        en: "18th All Japan Student Indoor Flying Robot Contest, online session for Thai KOSEN.",
        th: "การแข่งขัน 18th All Japan Student Indoor Flying Robot Contest รอบออนไลน์สำหรับ KOSEN ประเทศไทย"
      },
      description: {
        en: [
          "In 2022 I took part in the 18th All Japan Student Indoor Flying Robot Contest, " +
          "joining through the online session for Thai KOSEN students.",
          "I served as team assistant and was responsible for 2D laser cutting of the aircraft parts."
        ],
        th: [
          "ในปี 2022 ได้เข้าร่วมการแข่งขัน 18th All Japan Student Indoor Flying Robot Contest " +
          "ในรอบออนไลน์สำหรับนักศึกษา KOSEN ประเทศไทย",
          "รับหน้าที่ผู้ช่วยทีม และรับผิดชอบงานตัดชิ้นส่วนเครื่องบินด้วยเครื่องตัดเลเซอร์ 2 มิติ"
        ]
      },
      repo: "",                            // optional link, e.g. GitHub
      demo: "",                            // optional link

      // Images: png, jpg, gif, svg, webp
      images: [
        { src: "media/images/indoor-flying-robot-2022/photo-01.jpg",
          caption: { en: "The finished aircraft", th: "เครื่องบินที่สร้างเสร็จ" } },
        { src: "media/images/indoor-flying-robot-2022/photo-02.jpg",
          caption: { en: "2D laser cutting the frame parts", th: "ตัดชิ้นส่วนโครงด้วยเลเซอร์ 2 มิติ" } },
        { src: "media/images/indoor-flying-robot-2022/photo-03.jpg",
          caption: { en: "The team with the aircraft", th: "ทีมกับเครื่องบิน" } },
        { src: "media/images/indoor-flying-robot-2022/photo-04.jpg",
          caption: { en: "Assembling the aircraft", th: "ประกอบเครื่องบิน" } },
        { src: "media/images/indoor-flying-robot-2022/photo-05.jpg",
          caption: { en: "Assembly and wiring", th: "ประกอบและเดินสายไฟ" } },
        { src: "media/images/indoor-flying-robot-2022/photo-06.jpg",
          caption: { en: "Test flight", th: "ทดสอบการบิน" } }
      ],

      // Videos: local mp4/webm in media/videos, or { embed: "https://www.youtube.com/embed/VIDEO_ID" }
      videos: [],

      // Source files in source/<project>/, e.g. { path: "source/my-project/main.cpp" }
      source: []
    }

    // Copy the block above to add more projects. Remember the comma between them.
  ]
};
