/* Academic portfolio — bilingual switch and accessible navigation */
(function () {
  "use strict";

  const zh = {
    skip: "跳转到正文",
    navAbout: "关于",
    navResearch: "研究方向",
    navPublications: "论文",
    navProjects: "项目",
    navExperience: "经历",
    navContact: "联系",

    heroEyebrow: "西安交通大学 · 计算机科学与技术直博生",
    heroStatement: "探索多模态 AI 如何理解世界，以及如何让它更可靠。",
    heroDescription: "我的研究聚焦人体中心视觉理解、视觉语言与视频模型的可迁移对抗攻击，以及多模态模型后训练。现为西安交通大学计算机科学与技术专业直博生，导师为庞善民教授。",
    tagUnderstanding: "多模态理解与交互",
    tagSafety: "AI 安全与对抗鲁棒性",
    tagTraining: "SFT / GRPO 后训练",
    ctaPapers: "查看代表论文",
    ctaConnect: "联系我",
    heroGraduation: "预计 2027 年博士毕业",
    portraitCaption: "多模态人工智能研究者",
    stripFocus: "研究领域",
    stripVenues: "代表性发表",
    stripMethods: "训练方法",

    researchKicker: "研究方向",
    researchTitle: "研究方向",
    researchIntro: "从视觉理解、安全可靠性和模型适配三个互补视角研究多模态智能。",
    research1Title: "人体中心多模态理解",
    research1Desc: "研究图像与视频中的人类行为、视觉证据及时间动态；构建可定位多模态大模型推理薄弱环节的评测基准。",
    research2Title: "多模态安全与对抗鲁棒性",
    research2Desc: "研究 VLM、视频 MLLM 和视觉语言动作模型中的迁移攻击、物理对抗贴片、越狱攻防与鲁棒性评测。",
    research3Title: "高效后训练与能力评测",
    research3Desc: "通过 QLoRA、监督微调与 GRPO 适配多模态模型，设计定向训练数据、奖励机制及安全—效用联合评估。",

    publicationsKicker: "论文成果",
    publicationsTitle: "代表性论文",
    publicationsIntro: "精选已发表的多模态安全、对抗迁移及高效生成研究成果。",
    firstAuthor: "第一作者",
    coFirstAuthor: "共同第一作者",
    paperPhysDesc: "面向自动驾驶多模态大模型，设计可物理部署的对抗贴片，并评估其跨模型迁移鲁棒性。",
    paperCCDPDesc: "面向 VLA 模型提出通用对抗贴片，以指令条件下的控制相关表征漂移作为攻击目标。",
    paperAdvDesc: "结合扩散模型、自适应梯度估计与空间引导，生成高效、自然且具有目标迁移能力的对抗样本。",
    paperPersonalDesc: "研究个性化扩散模型的模型选择、量化与高效推理服务。",
    paperRDDADesc: "通过对抗式自动数据增强，提升主动图像保护方法抵御 DeepFake 操作的稳健性。",
    ongoingLabel: "在投研究",
    ongoingDesc: "目前在投研究包括 ChainCog-Bench、KSTF-Attack、OmniSafeBench-MM 和 DTBBA。这些工作与已正式发表的论文明确区分。",

    projectsKicker: "研究项目",
    projectsTitle: "代表性研究项目",
    projectsIntro: "从细粒度人体行为认知基准，到对抗鲁棒性评估与多模态模型后训练。",
    projectBenchmark: "评测基准",
    projectAttack: "对抗攻击研究",
    projectEvaluation: "安全能力评测",
    projectPostTrain: "模型后训练",
    projectChainDesc: "构建从原子视觉线索到行为语义、时序动态及人格评估的四级认知链，用于诊断多模态大模型的视觉理解能力。",
    metricVideos: "段视频",
    metricQuestions: "道问题",
    metricModels: "个模型",
    underReview: "在投",
    projectKSTFDesc: "面向未知帧采样策略的视频 MLLM，采用关键帧驱动的迁移攻击，结合时间转移对齐与频率感知梯度优化。",
    projectOmniDesc: "统一多模态越狱攻击与防御评测框架，涵盖多类攻击模式、防御策略、风险领域和多模态模型。",
    metricAttacks: "类攻击",
    metricDefenses: "类防御",
    projectSkillTitle: "多模态 Skill 安全审计",
    projectSkillDesc: "研究跨 Skill 文件、代码和图像隐藏的恶意指令检测，设计分级判定机制，以及 QLoRA / SFT / GRPO 后训练方案。",
    researchProject: "研究项目",

    experienceKicker: "学术背景",
    experienceTitle: "研究与实习经历",
    experienceIntro: "在高校、研究院和企业中开展多模态研究，连接基础问题与可扩展的研究工程系统。",
    internshipsTitle: "研究实习",
    present: "至今",
    roleAnt: "研究实习生 · 多模态理解与交互",
    descAnt: "参与人体中心 MLLM 能力评测、ChainCog-Bench 构建，以及面向薄弱能力的 Qwen3-VL 后训练。",
    locationBeijing: "中国·北京",
    roleBrane: "研究实习生 · 多模态大模型安全",
    descBrane: "参与 OmniSafeBench-MM 攻防评测工具链、统一模型评测接口与多模态 Agent Skill 安全审计。",
    locationShanghai: "中国·上海",
    roleAStar: "研究实习生 · 多模态模型安全",
    descAStar: "提出 PhysPatch，研究面向自动驾驶多模态模型的可物理实现、跨模型可迁移对抗贴片。",
    locationSingapore: "新加坡",
    educationTitle: "教育背景",
    expected: "（预计）",
    eduPhdTitle: "计算机科学与技术 · 博士（直博）",
    eduPhdSchool: "西安交通大学",
    eduAdvisor: "导师：庞善民教授",
    eduBachelorTitle: "软件工程 · 工学学士",
    eduBachelorSchool: "西安交通大学",
    honorsTitle: "代表性荣誉",
    honorsDescription: "学业一等奖学金 · 优秀研究生 · 全国大学生数学建模竞赛国家三等奖",

    contactKicker: "联系方式",
    contactTitle: "期待交流",
    contactDescription: "欢迎交流多模态研究、学术合作，以及 2027 届算法研究与工程岗位机会。",
    footerNote: "因研究、探索与开放合作而建。",
    backToTop: "返回顶部 ↑"
  };

  const elements = Array.from(document.querySelectorAll("[data-i18n]"));
  const originalText = new Map(elements.map(function (element) {
    return [element, element.textContent];
  }));

  const buttons = Array.from(document.querySelectorAll("[data-set-lang]"));
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("site-nav");
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const navigationLinks = navigation ? Array.from(navigation.querySelectorAll('a[href^="#"]')) : [];

  function setLanguage(language, persist) {
    const selected = language === "zh" ? "zh" : "en";
    elements.forEach(function (element) {
      const key = element.getAttribute("data-i18n");
      const translated = selected === "zh" ? zh[key] : undefined;
      element.textContent = translated !== undefined ? translated : originalText.get(element);
    });
    document.documentElement.lang = selected === "zh" ? "zh-CN" : "en";
    document.title = selected === "zh"
      ? "郭淇（Qi Guo）｜多模态人工智能研究"
      : "Qi Guo (郭淇) — Multimodal AI Research";
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", selected === "zh"
        ? "郭淇，西安交通大学计算机直博生，研究多模态理解与交互、AI 安全、对抗鲁棒性与 SFT/GRPO 后训练。"
        : "Qi Guo is a Ph.D. student at Xi'an Jiaotong University researching multimodal AI understanding, model safety, adversarial robustness, and post-training.");
    }
    if (navigation) navigation.setAttribute("aria-label", selected === "zh" ? "主导航" : "Primary navigation");
    if (menuButton) menuButton.setAttribute("aria-label", selected === "zh" ? "打开导航菜单" : "Open navigation menu");
    const langGroup = document.querySelector(".language-switch");
    if (langGroup) langGroup.setAttribute("aria-label", selected === "zh" ? "网站语言" : "Website language");
    const portrait = document.querySelector(".portrait-frame img");
    if (portrait) portrait.alt = selected === "zh" ? "郭淇的个人照片" : "Portrait of Qi Guo";
    buttons.forEach(function (button) {
      const active = button.getAttribute("data-set-lang") === selected;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (persist) {
      try { window.localStorage.setItem("qi-guo-language", selected); } catch (error) { /* Storage may be unavailable. */ }
      try {
        const url = new URL(window.location.href);
        if (url.searchParams.has("lang")) {
          url.searchParams.set("lang", selected);
          window.history.replaceState(null, "", url.pathname + url.search + url.hash);
        }
      } catch (error) { /* URL rewriting is optional. */ }
    }
  }

  let initial = "en";
  try {
    const fromUrl = new URL(window.location.href).searchParams.get("lang");
    if (fromUrl === "en" || fromUrl === "zh") initial = fromUrl;
    else if (window.localStorage.getItem("qi-guo-language") === "zh") initial = "zh";
  } catch (error) { /* Default to English. */ }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-set-lang"), true);
    });
  });
  setLanguage(initial, false);

  function closeMenu() {
    if (!menuButton || !navigation) return;
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      navigation.classList.toggle("is-open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
      menuButton.setAttribute("aria-label",
        open
          ? (document.documentElement.lang === "zh-CN" ? "关闭导航菜单" : "Close navigation menu")
          : (document.documentElement.lang === "zh-CN" ? "打开导航菜单" : "Open navigation menu"));
    });
    navigationLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
    document.addEventListener("click", function (event) {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 880) closeMenu();
    });
  }

  if ("IntersectionObserver" in window && navigationLinks.length) {
    const sections = navigationLinks
      .map(function (link) { return document.querySelector(link.getAttribute("href")); })
      .filter(Boolean);
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navigationLinks.forEach(function (link) {
          const isCurrent = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("is-current", isCurrent);
          if (isCurrent) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-22% 0px -65% 0px", threshold: 0 });
    sections.forEach(function (section) { observer.observe(section); });
  }
})();
