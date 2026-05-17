const art = (title, artist, year, note) => ({ title, artist, year, note });

const deities = [
  d(1, "zeus", "Zeus", "宙斯", "Ζεύς", "奥林匹斯核心", ["天空", "雷霆", "王权"], ["霹雳", "鹰", "橡树"], "ZOO-s", "Zeus", art("Jupiter and Thetis", "Jean-Auguste-Dominique Ingres", "1811", "新古典主义油画，把宙斯表现为坐在神座上的绝对权威，是英语艺术史里很常见的 Zeus/Jupiter 形象。"), "众神之王，掌管天空与雷霆。他推翻克洛诺斯后分配世界，成为奥林匹斯秩序的中心。"),
  d(2, "hera", "Hera", "赫拉", "Ἥρα", "奥林匹斯核心", ["婚姻", "王后", "家庭"], ["孔雀", "王冠", "石榴"], "HEER-uh", "Hera", art("The Birth of the Milky Way", "Peter Paul Rubens", "约 1636-1638", "鲁本斯用巴洛克式动态描绘赫拉与银河起源，画面常被用于理解 Hera/Juno 的母性与王后身份。"), "宙斯的妻子与神后，守护婚姻和合法家庭。她在许多故事里捍卫神后尊严，也常惩罚宙斯的情人和私生子。"),
  d(3, "poseidon", "Poseidon", "波塞冬", "Ποσειδῶν", "奥林匹斯核心", ["海洋", "地震", "马"], ["三叉戟", "海马", "海豚"], "puh-SY-dun", "Poseidon", art("The Triumph of Neptune", "Nicolas Poussin", "约 1634", "普桑以古典构图表现 Neptune/Poseidon 的海上凯旋，三叉戟和海神随从强化了主流海神形象。"), "海洋的统治者，脾气如风暴般强烈。他与雅典娜争夺雅典、惩罚冒犯者，也是许多英雄航海故事背后的力量。"),
  d(4, "demeter", "Demeter", "德墨忒耳", "Δημήτηρ", "奥林匹斯核心", ["农业", "谷物", "母亲"], ["麦穗", "火炬", "丰饶角"], "dih-MEE-ter", "Demeter", art("Ceres", "Jean-Antoine Watteau", "约 1715", "英语艺术语境常以 Roman Ceres 对应 Demeter，麦穗和成熟谷物是她最稳定的视觉标志。"), "谷物与农耕女神，珀耳塞福涅的母亲。女儿被带到冥界后，她的悲伤让大地停止生长，形成四季神话。"),
  d(5, "athena", "Athena", "雅典娜", "Ἀθηνᾶ", "奥林匹斯核心", ["智慧", "战略", "工艺"], ["猫头鹰", "橄榄树", "盾牌"], "uh-THEE-nuh", "Athena", art("Pallas and the Centaur", "Sandro Botticelli", "约 1482", "波提切利把 Athena/Pallas 画成冷静克制的理性力量，常被解读为智慧压制野性冲动。"), "智慧和战略之神，从宙斯头中全副武装诞生。她偏爱聪明、节制和技艺，常帮助奥德修斯、珀尔修斯等英雄。"),
  d(6, "apollo", "Apollo", "阿波罗", "Ἀπόλλων", "奥林匹斯核心", ["太阳", "音乐", "预言"], ["里拉琴", "月桂", "弓"], "uh-POL-oh", "Apollo", art("Apollo and Daphne", "Gian Lorenzo Bernini", "1622-1625", "虽然是雕塑而非油画，但贝尼尼的作品几乎定义了 Apollo 追逐 Daphne 的经典视觉瞬间。"), "光明、音乐、医术和预言之神，德尔斐神谕与他密切相关。他既能带来秩序与和谐，也能以瘟疫之箭惩罚傲慢。"),
  d(7, "artemis", "Artemis", "阿耳忒弥斯", "Ἄρτεμις", "奥林匹斯核心", ["月亮", "狩猎", "少女"], ["弓箭", "鹿", "新月"], "AR-tuh-miss", "Artemis", art("Diana and Actaeon", "Titian", "1556-1559", "提香以 Diana/Artemis 沐浴被窥见的场景表现她对贞洁和边界的严厉守护。"), "狩猎与月亮女神，阿波罗的孪生姐姐。她保护少女和野生动物，也会严厉惩罚侵犯她神圣空间的人。"),
  d(8, "ares", "Ares", "阿瑞斯", "Ἄρης", "奥林匹斯核心", ["战争", "暴烈", "勇武"], ["头盔", "长矛", "战车"], "AIR-eez", "Ares", art("Mars", "Diego Velázquez", "约 1638", "委拉斯开兹把 Mars/Ares 画成疲惫而沉思的战神，让战争不只显得光荣，也带着荒凉。"), "战争中冲动和血性的化身，与雅典娜的战略智慧形成对照。他常代表战场的混乱、怒气和直接冲突。"),
  d(9, "aphrodite", "Aphrodite", "阿佛洛狄忒", "Ἀφροδίτη", "奥林匹斯核心", ["爱欲", "美", "魅力"], ["贝壳", "鸽子", "玫瑰"], "AF-ruh-DY-tee", "Aphrodite", art("The Birth of Venus", "Sandro Botticelli", "约 1485", "这幅蛋彩画不是油画，却是英语世界里 Venus/Aphrodite 最经典的视觉图像之一。"), "爱与美的女神，从海沫中诞生。她能激发欲望、迷恋和嫉妒，特洛伊战争的导火索也与她有关。"),
  d(10, "hephaestus", "Hephaestus", "赫淮斯托斯", "Ἥφαιστος", "奥林匹斯核心", ["火", "锻造", "工匠"], ["铁砧", "锤子", "火焰"], "hih-FES-tus", "Hephaestus", art("The Forge of Vulcan", "Diego Velázquez", "1630", "Vulcan/Hephaestus 的铁匠铺形象在这幅油画中非常鲜明，火光、金属和劳动感构成主视觉。"), "火与锻造之神，奥林匹斯的工匠。他打造神兵、宫殿和机械奇物，也让残缺身体与超凡技艺并存。"),
  d(11, "hermes", "Hermes", "赫尔墨斯", "Ἑρμῆς", "奥林匹斯核心", ["信使", "旅行", "商业"], ["翼帽", "翼鞋", "双蛇杖"], "HUR-meez", "Hermes", art("Mercury and Argus", "Peter Paul Rubens", "约 1635-1638", "Rubens 以 Mercury/Hermes 斩杀百眼巨人 Argus 的故事展示他的机智、速度和欺骗能力。"), "众神信使，跨越天空、人间和冥界。他也是旅人、商人、盗贼和语言机智的保护者。"),
  d(12, "dionysus", "Dionysus", "狄俄尼索斯", "Διόνυσος", "奥林匹斯核心", ["葡萄酒", "狂欢", "戏剧"], ["葡萄藤", "酒杯", "豹"], "dye-uh-NY-sus", "Dionysus", art("Bacchus", "Caravaggio", "约 1595", "Caravaggio 的 Bacchus/Dionysus 既年轻诱人又带一点不安，是英语艺术教材中常见的酒神形象。"), "葡萄酒、戏剧和狂喜之神。他让人突破日常秩序，也提醒人类压抑的激情会以更强烈的方式回归。"),
  d(13, "hades", "Hades", "哈迪斯", "ᾍδης", "冥界与家宅", ["冥界", "财富", "死者"], ["隐身盔", "双叉杖", "冥府犬"], "HAY-deez", "Hades", art("The Abduction of Proserpina", "Rembrandt", "约 1631", "Rembrandt 用强烈动作表现 Pluto/Hades 抢走 Proserpina/Persephone 的瞬间，是冥王故事的经典绘画主题。"), "冥界之王，不等同于邪恶，而是掌管死者秩序和地下财富。他很少离开冥府，最著名的故事是带走珀耳塞福涅。"),
  d(14, "hestia", "Hestia", "赫斯提亚", "Ἑστία", "冥界与家宅", ["炉火", "家宅", "城邦"], ["炉火", "面纱", "圆形祭坛"], "HES-tee-uh", "Hestia", art("Vesta / Vestal imagery", "古典雕塑与学院派绘画传统", "18-19 世纪常见", "Hestia 在英语图像里常借 Roman Vesta 和维斯塔贞女形象呈现，重点是炉火、面纱和静默秩序。"), "炉火女神，象征家庭和城邦中心。她不像其他神那样卷入大量戏剧冲突，却是每次祭祀最先和最后被纪念的安定力量。"),
  d(15, "persephone", "Persephone", "珀耳塞福涅", "Περσεφόνη", "冥界与家宅", ["春天", "冥后", "重生"], ["石榴", "鲜花", "火炬"], "per-SEF-uh-nee", "Persephone", art("Proserpine", "Dante Gabriel Rossetti", "1874", "拉斐尔前派用石榴和幽暗色调表现 Proserpine/Persephone 的冥后身份与春天记忆。"), "德墨忒耳之女，也是冥界王后。她一年往返冥界与大地，连接死亡、季节和复苏。"),
  d(16, "eros", "Eros", "厄洛斯", "Ἔρως", "著名小神", ["爱欲", "吸引", "生命力"], ["弓箭", "翅膀", "火炬"], "AIR-ohs", "Eros", art("Amor Vincit Omnia", "Caravaggio", "1601-1602", "Caravaggio 以 Cupid/Eros 的顽皮姿态表达“爱征服一切”，是早期巴洛克非常有名的爱神图像。"), "爱欲之神，既可被视作原初的吸引力量，也可被画成带弓箭的少年。他的箭让神和人陷入无法理性控制的爱。"),
  d(17, "nike", "Nike", "尼刻", "Νίκη", "著名小神", ["胜利", "荣耀", "凯旋"], ["翅膀", "桂冠", "棕榈枝"], "NY-kee", "Nike (mythology)", art("Winged Victory of Samothrace", "未知希腊雕刻家", "约公元前 190", "萨莫色雷斯的胜利女神雕像是 Nike 最具辨识度的艺术形象，常被视为胜利与速度的雕塑范本。"), "胜利女神，常以有翼形象降临战场或竞赛。她为胜者带来荣耀，也常出现在雅典娜或宙斯身边。"),
  d(18, "hebe", "Hebe", "赫柏", "Ἥβη", "著名小神", ["青春", "侍酒", "复新"], ["酒杯", "水罐", "青春花冠"], "HEE-bee", "Hebe (mythology)", art("Hebe", "Antonio Canova", "1796", "Canova 的新古典主义雕塑把 Hebe 表现为端杯的青春女神，姿态轻盈清洁。"), "青春女神，曾为奥林匹斯诸神斟神酒。后来她与成为神的赫拉克勒斯结合，象征英雄获得不朽青春。"),
  d(19, "iris", "Iris", "伊里斯", "Ἶρις", "著名小神", ["彩虹", "传信", "誓言"], ["彩虹", "水罐", "翅膀"], "EYE-ris", "Iris (mythology)", art("Iris Carrying the Water of the River Styx", "Guy Head", "约 1793", "这幅学院派作品描绘 Iris 为诸神取来冥河水，强调她作为神圣信使的速度和庄严。"), "彩虹女神，也是女神们的信使。她连接天与地，常负责把神意迅速带到人间。"),
  d(20, "helios", "Helios", "赫利俄斯", "Ἥλιος", "著名小神", ["太阳", "光照", "见证"], ["太阳车", "光冠", "马"], "HEE-lee-ohs", "Helios", art("The Fall of Phaeton", "Peter Paul Rubens", "约 1604-1605", "Rubens 表现 Phaethon 驾太阳车失控坠落，间接强化 Helios 的太阳车传统。"), "太阳神，每日驾车穿越天空。他能看见万物，因此常在誓言、秘密和真相故事里成为关键见证者。"),
  d(21, "selene", "Selene", "塞勒涅", "Σελήνη", "著名小神", ["月亮", "夜空", "爱情"], ["月轮", "白马", "银冠"], "suh-LEE-nee", "Selene", art("Selene and Endymion", "学院派绘画传统", "18-19 世纪常见", "Selene 俯视沉睡的 Endymion 是她最常见的绘画主题，月光和睡眠构成浪漫主视觉。"), "月亮女神，驾银色月车穿过夜空。她爱上沉睡的恩底弥翁，故事常被画成静谧、梦境般的夜间场景。"),
  d(22, "eos", "Eos", "厄俄斯", "Ἠώς", "著名小神", ["黎明", "晨光", "新开始"], ["玫瑰色手指", "翅膀", "晨车"], "EE-ohs", "Eos", art("Aurora", "Guido Reni", "1614", "Reni 的天顶画以 Aurora/Eos 引出白昼，是黎明女神在西方艺术中的经典形象。"), "黎明女神，每天打开天门让太阳升起。她的故事常与晨光、短暂爱情和时间流逝联系在一起。"),
  d(23, "hecate", "Hecate", "赫卡忒", "Ἑκάτη", "著名小神", ["魔法", "岔路", "夜晚"], ["火炬", "钥匙", "三重形象"], "HEK-uh-tee", "Hecate", art("The Night of Enitharmon's Joy / Hecate", "William Blake", "约 1795", "Blake 的图像让 Hecate 带有神秘、夜晚和边界感，影响了现代英语世界对她的想象。"), "魔法、夜晚和岔路女神，常持火炬出现。她在珀耳塞福涅故事里帮助寻找，也在后世成为巫术传统的重要神格。"),
  d(24, "pan", "Pan", "潘", "Πάν", "著名小神", ["牧野", "山林", "野性音乐"], ["排箫", "山羊角", "牧杖"], "PAN", "Pan (god)", art("Pan and Syrinx", "François Boucher", "1759", "Boucher 的洛可可油画把 Pan 的追逐与芦苇排箫来源联系起来，是 Pan 最常被绘制的故事之一。"), "半人半羊的山林与牧羊神，排箫是他的标志。他代表荒野中的冲动、音乐和突然袭来的恐慌。"),
  d(25, "asclepius", "Asclepius", "阿斯克勒庇俄斯", "Ἀσκληπιός", "著名小神", ["医术", "疗愈", "神庙"], ["蛇杖", "药碗", "犬"], "as-KLEE-pee-us", "Asclepius", art("Asclepius statue type", "古希腊/罗马雕塑传统", "公元前 4 世纪以后", "持蛇杖的 Asclepius 雕像类型成为西方医学图像的重要源头。"), "医神，阿波罗之子，医术强到能让死者复生。宙斯因此用雷霆击杀他，但他后来成为医学崇拜的中心。"),
  d(26, "hygieia", "Hygieia", "希吉亚", "Ὑγεία", "著名小神", ["健康", "卫生", "预防"], ["蛇", "药碗", "清洁"], "hy-JEE-uh", "Hygieia", art("Medicine, Hygieia detail", "Gustav Klimt", "1900-1907", "Klimt 为维也纳大学创作的《医学》中有醒目的 Hygieia 形象，后来虽毁于战火，但图像资料影响很大。"), "健康与卫生女神，常与阿斯克勒庇俄斯一起出现。她强调保持健康和预防疾病，而不只是治疗。"),
  d(27, "hypnos", "Hypnos", "许普诺斯", "Ὕπνος", "著名小神", ["睡眠", "梦境入口", "安息"], ["翅膀", "罂粟", "沉睡"], "HIP-noss", "Hypnos", art("Bronze Head of Hypnos", "希腊化或罗马复制品", "约公元前 4 世纪原型", "大英博物馆的 Hypnos 青铜头像让睡神形象显得安静、年轻而带翼。"), "睡眠之神，死亡之神塔那托斯的兄弟。他能让神和人都陷入沉睡，甚至在赫拉计策中影响宙斯。"),
  d(28, "thanatos", "Thanatos", "塔那托斯", "Θάνατος", "著名小神", ["死亡", "安静终结", "命运"], ["倒置火炬", "翅膀", "剑"], "THAN-uh-toss", "Thanatos", art("Sleep and His Half-Brother Death", "John William Waterhouse", "1874", "Waterhouse 把 Hypnos 与 Thanatos 并置，形成英语世界里非常直观的睡眠与死亡对照图像。"), "死亡的拟人神，通常代表平静、不可避免的终点。与暴力杀戮不同，他更像命运秩序的一部分。"),
  d(29, "morpheus", "Morpheus", "墨菲斯", "Μορφεύς", "著名小神", ["梦", "形象", "睡眠幻象"], ["翅膀", "梦幕", "人形"], "MOR-fee-us", "Morpheus", art("Iris and Morpheus", "Pierre-Narcisse Guérin", "1811", "Guérin 的作品描绘 Iris 到达梦神身边，Morpheus 因此与睡眠、信使和幻象相连。"), "梦神，擅长在梦中变化成人的形象。后来英语里的 morph、Morpheus 都带有变形与梦境的联想。"),
  d(30, "nemesis", "Nemesis", "涅墨西斯", "Νέμεσις", "著名小神", ["报应", "尺度", "傲慢惩罚"], ["天平", "剑", "轮"], "NEM-uh-sis", "Nemesis", art("Nemesis / The Great Fortune", "Albrecht Dürer", "约 1501-1502", "Dürer 的版画把命运、报应与高空俯视结合起来，是 Nemesis 视觉传统中的重要作品。"), "报应女神，惩罚过度幸运、傲慢和越界。她不是简单复仇，而是让失衡重新回到尺度之内。"),
  d(31, "tyche", "Tyche", "堤喀", "Τύχη", "著名小神", ["幸运", "城市命运", "偶然"], ["城冠", "舵", "丰饶角"], "TY-kee", "Tyche", art("Tyche of Antioch", "Eutychides", "约公元前 300", "安条克的 Tyche 雕像类型影响深远，城墙冠和河神脚下形象成为城市命运的象征。"), "幸运与城邦命运女神，象征不可预测的转折。她的形象常出现在城市守护和命运兴衰的语境中。"),
  d(32, "themis", "Themis", "忒弥斯", "Θέμις", "著名小神", ["神法", "秩序", "预言"], ["天平", "剑", "神谕"], "THEE-mis", "Themis", art("Themis / Lady Justice tradition", "古典与新古典主义艺术传统", "17-19 世纪常见", "Themis 后来与正义女神图像融合，天平、剑和端正姿态成为主流视觉符号。"), "神圣秩序和法度女神，也是早期神谕传统的一部分。她象征先于人类法律的宇宙规则。"),
  d(33, "leto", "Leto", "勒托", "Λητώ", "泰坦神族", ["母性", "避难", "神圣分娩"], ["双子", "棕榈", "面纱"], "LEE-toh", "Leto", art("Latona and the Lycian Peasants", "Jan Brueghel the Elder and Peter Paul Rubens", "约 1615", "Latona/Leto 请求饮水却遭驱赶的故事在巴洛克绘画中常见，强调母亲与流亡者身份。"), "阿波罗和阿耳忒弥斯的母亲。她因赫拉追迫而四处流亡，最终在提洛岛生下双子神。"),
  d(34, "rhea", "Rhea", "瑞亚", "Ῥέα", "泰坦神族", ["母神", "泰坦王后", "保护幼子"], ["狮子", "鼓", "石头"], "REE-uh", "Rhea (mythology)", art("Rhea gives Cronus the stone", "古典神话绘画传统", "18-19 世纪常见", "Rhea 用石头替代婴儿 Zeus 的情节常被画成母亲智胜吞子暴君的场景。"), "克洛诺斯的妻子，奥林匹斯诸神的母亲。她用裹布石头骗过克洛诺斯，保住宙斯并改变神族命运。"),
  d(35, "cronus", "Cronus", "克洛诺斯", "Κρόνος", "泰坦神族", ["时间", "泰坦王权", "吞噬"], ["镰刀", "沙漏", "石头"], "KROH-nus", "Cronus", art("Saturn Devouring His Son", "Francisco Goya", "1819-1823", "Goya 的黑色绘画把 Saturn/Cronus 吞子的恐怖推到极端，是现代观众最熟悉的相关图像之一。"), "泰坦王，用镰刀推翻乌拉诺斯。因害怕被子女推翻，他吞下自己的孩子，最终被宙斯反抗。"),
  d(36, "oceanus", "Oceanus", "俄刻阿诺斯", "Ὠκεανός", "泰坦神族", ["环世大河", "海洋边界", "水源"], ["水流", "牛角", "海蛇"], "oh-SEE-uh-nus", "Oceanus", art("Oceanus at the Trevi Fountain", "Pietro Bracci", "1759-1762", "虽然偏 Roman Oceanus 传统，特莱维喷泉的巨型海神形象很好地呈现了环世水域的宏大感。"), "环绕世界的大河之神，也是众多河神和水泽女神的祖先。古人常把他想象成世界边缘的水界。"),
  d(37, "tethys", "Tethys", "忒堤斯", "Τηθύς", "泰坦神族", ["淡水", "母性水源", "河流之母"], ["水罐", "鱼", "河流"], "TETH-iss", "Tethys (mythology)", art("Tethys mosaic tradition", "古罗马马赛克艺术", "2-4 世纪", "Tethys 常以海洋母神头像出现在马赛克中，头发、鱼和水草体现水域母性。"), "俄刻阿诺斯的妻子，许多河流和海洋女神的母亲。她象征滋养世界的原初水源。"),
  d(38, "hyperion", "Hyperion", "许珀里翁", "Ὑπερίων", "泰坦神族", ["高天之光", "太阳血统", "观照"], ["光轮", "火焰", "天空"], "hy-PEER-ee-un", "Hyperion (Titan)", art("Solar titan imagery", "古典太阳神图像传统", "无单一主流油画", "Hyperion 很少有独立名画，常通过 Helios 的太阳车和光轮形象间接呈现。"), "光明泰坦，赫利俄斯、塞勒涅和厄俄斯的父亲。他代表高处照耀的光，是天体光明家族的源头。"),
  d(39, "theia", "Theia", "忒亚", "Θεία", "泰坦神族", ["光辉", "视觉", "贵金属光泽"], ["金光", "眼睛", "宝石"], "THAY-uh", "Theia", art("Radiant mother imagery", "古典寓意绘画传统", "无单一主流油画", "Theia 独立形象较少，通常借光辉、宝石和天体母亲的寓意来视觉化。"), "光辉泰坦，太阳、月亮和黎明的母亲。她的名字与神圣光泽有关，也让金银宝石拥有令人敬畏的光。"),
  d(40, "coeus", "Coeus", "科俄斯", "Κοῖος", "泰坦神族", ["理智", "天轴", "北方"], ["星轴", "权杖", "星空"], "SEE-us", "Coeus", art("Titan genealogy illustration", "古典谱系插图传统", "无单一主流油画", "Coeus 很少被单独绘制，现代图像多来自神谱、星空和泰坦系谱说明。"), "泰坦之一，常与理性、询问和天体轴线联系。他是勒托和阿斯忒里亚的父亲，因此连接泰坦与奥林匹斯神系。"),
  d(41, "phoebe", "Phoebe", "福柏", "Φοίβη", "泰坦神族", ["明亮", "神谕", "月性"], ["月光", "神谕三脚架", "面纱"], "FEE-bee", "Phoebe (Titaness)", art("Phoebe and oracle tradition", "古典神谕图像传统", "无单一主流油画", "Phoebe 常以德尔斐神谕传承中的明亮女神理解，缺少统一的个人经典油画。"), "明亮的泰坦女神，与神谕传统有关。她是勒托的母亲，也因此成为阿波罗和阿耳忒弥斯的外祖母。"),
  d(42, "iapetus", "Iapetus", "伊阿珀托斯", "Ἰαπετός", "泰坦神族", ["死亡血统", "人类祖先", "泰坦父系"], ["权杖", "石山", "锁链"], "eye-AP-ih-tus", "Iapetus", art("Titan father imagery", "神话谱系插图传统", "无单一主流油画", "Iapetus 通常通过 Prometheus、Atlas 等子辈故事被看见，本人独立名画较少。"), "泰坦之一，普罗米修斯、厄庇墨透斯和阿特拉斯的父亲。他的家族与人类起源和对宙斯的反抗密切相关。"),
  d(43, "crius", "Crius", "克利俄斯", "Κρεῖος", "泰坦神族", ["星座", "南方", "泰坦血统"], ["星图", "公羊", "长矛"], "KRY-us", "Crius", art("Titan constellation imagery", "星图与谱系插图传统", "无单一主流油画", "Crius 的艺术形象稀少，通常用星座、天区和泰坦谱系图表达。"), "较少出场的泰坦，与星辰血统有关。他是阿斯特赖俄斯等神的父亲，连接泰坦与风、星和黎明。"),
  d(44, "mnemosyne", "Mnemosyne", "谟涅摩叙涅", "Μνημοσύνη", "泰坦神族", ["记忆", "诗歌源泉", "缪斯之母"], ["卷轴", "泉水", "九缪斯"], "nee-MOZ-ih-nee", "Mnemosyne", art("Mnemosyne", "Dante Gabriel Rossetti", "1881", "Rossetti 把记忆女神画成深沉凝视的女性，适合理解她作为诗歌和文化记忆源头的角色。"), "记忆女神，与宙斯结合生下九位缪斯。她提醒希腊文化中诗歌、历史和艺术都依赖记忆传承。"),
  d(45, "prometheus", "Prometheus", "普罗米修斯", "Προμηθεύς", "泰坦神族", ["先见", "火", "人类文明"], ["火炬", "锁链", "鹰"], "pruh-MEE-thee-us", "Prometheus", art("Prometheus Bound", "Peter Paul Rubens and Frans Snyders", "1611-1612", "Rubens 与 Snyders 合作的油画用强烈肉身痛苦表现普罗米修斯为人类取火后的惩罚。"), "为人类盗取天火的泰坦，象征反抗和文明开端。宙斯把他锁在高加索山，让鹰每日啄食他的肝脏。"),
  d(46, "epimetheus", "Epimetheus", "厄庇墨透斯", "Ἐπιμηθεύς", "泰坦神族", ["后见", "失误", "人类命运"], ["陶罐", "礼物", "动物"], "ep-uh-MEE-thee-us", "Epimetheus", art("Pandora", "John William Waterhouse", "1896", "Epimetheus 常通过 Pandora 故事进入图像传统，Waterhouse 的潘多拉强调好奇心与命运转折。"), "普罗米修斯的兄弟，名字有“事后才想”的意味。他接受潘多拉，间接把灾祸与希望带入人间故事。"),
  d(47, "atlas", "Atlas", "阿特拉斯", "Ἄτλας", "泰坦神族", ["承天", "耐力", "地图想象"], ["天球", "肩膀", "山"], "AT-lus", "Atlas (mythology)", art("Farnese Atlas", "罗马复制品，希腊化原型", "约公元 2 世纪", "Farnese Atlas 是最著名的 Atlas 形象之一，肩扛天球的姿态也影响了 atlas 作为地图集的词义。"), "被罚在世界西端托起天穹的泰坦。他代表承受、边界和巨大重量，也出现在赫拉克勒斯取金苹果的故事里。"),
  d(48, "metis", "Metis", "墨提斯", "Μῆτις", "泰坦神族", ["智谋", "变形", "雅典娜之母"], ["猫头鹰", "蛇", "智慧冠"], "MEE-tis", "Metis (mythology)", art("Jupiter swallowing Metis tradition", "神话插图传统", "无单一主流油画", "Metis 的核心故事是被 Zeus 吞下，独立艺术形象较少，常借智慧女神和变形母题呈现。"), "智谋女神，雅典娜的母亲。宙斯害怕预言，吞下怀孕的墨提斯，后来雅典娜从他头中诞生。"),
  d(49, "dione", "Dione", "狄俄涅", "Διώνη", "泰坦神族", ["女神血统", "神谕", "阿佛洛狄忒谱系"], ["鸽子", "橄榄", "神座"], "dye-OH-nee", "Dione (Titaness)", art("Dodona goddess tradition", "古典神谕与雕塑传统", "无单一主流油画", "Dione 常与多多纳神谕、Zeus 伴侣和 Aphrodite 母亲身份相连，独立名画较少。"), "早期女神之一，在一些传统中是阿佛洛狄忒之母。她与多多纳神谕和古老女神谱系有关。"),
  d(50, "astraeus", "Astraeus", "阿斯特赖俄斯", "Ἀστραῖος", "泰坦神族", ["星辰", "黄昏", "风之父"], ["星图", "暮色", "风"], "uh-STREE-us", "Astraeus", art("Starry titan imagery", "天文图谱与神话插图传统", "无单一主流油画", "Astraeus 多以星空、黄昏和风神父亲身份间接呈现。"), "星辰和黄昏相关的泰坦，与厄俄斯结合生下风神和星辰。于是黎明、风和夜空在他的家族中连成一体。"),
  d(51, "amphitrite", "Amphitrite", "安菲特里忒", "Ἀμφιτρίτη", "海洋与风", ["海后", "海浪", "婚姻"], ["海豚", "贝壳", "海王冠"], "am-fi-TRY-tee", "Amphitrite", art("The Triumph of Neptune and Amphitrite", "Nicolas Poussin", "约 1634", "Amphitrite 常与 Neptune/Poseidon 共同出现，作为海后坐在海上凯旋队列中。"), "波塞冬的妻子，海洋女王。她不像波塞冬那样暴烈，更代表海水的庄严、深阔与王后身份。"),
  d(52, "triton", "Triton", "特里同", "Τρίτων", "海洋与风", ["海神信使", "号角", "海浪"], ["海螺", "鱼尾", "三叉戟"], "TRY-ton", "Triton (mythology)", art("Fontana del Tritone", "Gian Lorenzo Bernini", "1642-1643", "贝尼尼的特里同喷泉把 Triton 吹海螺的形象变成巴洛克城市景观中的经典。"), "波塞冬与安菲特里忒之子，常以鱼尾人身出现。他吹响海螺号角，可以平息或召唤海浪。"),
  d(53, "proteus", "Proteus", "普罗透斯", "Πρωτεύς", "海洋与风", ["海老人", "变形", "预言"], ["海豹", "水形", "权杖"], "PROH-tee-us", "Proteus", art("Proteus changing shape tradition", "神话插图与版画传统", "16-19 世纪常见", "Proteus 的主视觉是不断变形，艺术作品常把他画成被抓住时变化为兽、水和火的海老人。"), "能预言未来的海老人，但必须先被抓住才肯说真话。他最著名的能力是不断变形逃脱。"),
  d(54, "nereus", "Nereus", "涅柔斯", "Νηρεύς", "海洋与风", ["海老人", "真诚", "海中智慧"], ["海杖", "鱼尾", "海女儿"], "NEER-ee-us", "Nereus", art("Heracles wrestling Nereus", "古希腊瓶画传统", "公元前 6 世纪常见", "Nereus 常在黑绘或红绘陶瓶中与 Heracles 搏斗，海老人形象古老而稳定。"), "温和诚实的海老人，涅瑞伊得斯海仙女之父。英雄常通过他获取路线、预言或海中秘密。"),
  d(55, "thetis", "Thetis", "忒提斯", "Θέτις", "海洋与风", ["海仙女", "母亲", "英雄命运"], ["海水", "银足", "盔甲"], "THEE-tis", "Thetis", art("Jupiter and Thetis", "Jean-Auguste-Dominique Ingres", "1811", "Ingres 把 Thetis 画成向 Zeus 哀求的母亲，画面同时呈现她的美、柔软和政治性请求。"), "海仙女，阿喀琉斯的母亲。她知道儿子的短命英雄命运，曾为他求助宙斯和赫淮斯托斯。"),
  d(56, "galatea", "Galatea", "伽拉忒亚", "Γαλάτεια", "海洋与风", ["海仙女", "爱情", "白色浪花"], ["海贝", "珍珠", "浪花"], "gal-uh-TEE-uh", "Galatea (mythology)", art("The Triumph of Galatea", "Raphael", "1512", "拉斐尔的壁画让 Galatea 成为文艺复兴海仙女美感的代表，海上队列动感强烈。"), "海中仙女，常与独眼巨人波吕斐摩斯和牧人阿喀斯的爱情悲剧相连。她的名字带有白色、乳白和浪花的联想。"),
  d(57, "boreas", "Boreas", "玻瑞阿斯", "Βορέας", "海洋与风", ["北风", "寒冷", "强力"], ["翅膀", "斗篷", "风云"], "BOR-ee-us", "Boreas (god)", art("Boreas", "John William Waterhouse", "1903", "Waterhouse 用被风卷起的衣袍与冷色调表现 Boreas 的北风力量，是英文世界很常见的相关图像。"), "北风之神，带来寒冷和冬季气息。他也出现在掳走俄瑞提亚的故事中，象征风的突袭。"),
  d(58, "zephyrus", "Zephyrus", "仄费罗斯", "Ζέφυρος", "海洋与风", ["西风", "春天", "温柔"], ["花", "微风", "翅膀"], "ZEF-er-us", "Zephyrus", art("The Birth of Venus", "Sandro Botticelli", "约 1485", "画面左侧吹送 Venus 上岸的风神就是 Zephyrus，他成为温柔西风的经典视觉入口。"), "西风之神，通常被视为温和、带来春天的风。他与花神和生长季节关系密切。"),
  d(59, "notus", "Notus", "诺托斯", "Νότος", "海洋与风", ["南风", "湿热", "暴雨"], ["云", "雨水", "翅膀"], "NOH-tus", "Notus", art("Tower of the Winds reliefs", "古雅典风塔浮雕", "约公元前 1 世纪", "雅典风塔把八风拟人化，Notus 的形象与雨云和潮湿南风相连。"), "南风之神，常带来夏末或秋季的湿热暴雨。在农业社会中，他既能滋润也能造成损害。"),
  d(60, "eurus", "Eurus", "欧罗斯", "Εὖρος", "海洋与风", ["东风", "变动天气", "航海"], ["风袋", "云", "翅膀"], "YOO-rus", "Eurus", art("Tower of the Winds reliefs", "古雅典风塔浮雕", "约公元前 1 世纪", "Eurus 没有像北风那样的单幅名画，风塔浮雕是理解八风神形象的重要古典来源。"), "东风之神，常与变化莫测的天气有关。航海和季节转换时，他的方向感尤其重要。"),
  d(61, "aeolus", "Aeolus", "埃俄洛斯", "Αἴολος", "海洋与风", ["风之管理", "风袋", "航海"], ["风袋", "岛屿", "权杖"], "EE-oh-lus", "Aeolus", art("Juno and Aeolus", "François Boucher", "1769", "Boucher 把 Aeolus 画成掌管风洞的神，适合理解他作为风的看守者而非单一风向神。"), "风的管理者，住在浮岛上保管诸风。奥德修斯曾得到他的风袋，却因同伴好奇而再次迷失。"),
  d(62, "glaucus", "Glaucus", "格劳科斯", "Γλαῦκος", "海洋与风", ["海神", "预言", "变形"], ["鱼尾", "海草", "蓝绿海色"], "GLAW-kus", "Glaucus", art("Glaucus and Scylla", "Laurent de La Hyre", "约 1640 年代", "Glaucus 追求 Scylla 的故事常被画家采用，表现他从渔夫变成海神后的异质感。"), "原为渔夫，吃下神奇草药后化为海神。他拥有预言能力，也因爱情故事与斯库拉相连。"),
  d(63, "leucothea", "Leucothea", "琉科忒亚", "Λευκοθέα", "海洋与风", ["海上救助", "白色女神", "航海"], ["面纱", "海浪", "救生带"], "loo-koh-THEE-uh", "Leucothea", art("Ino and Melicertes tradition", "学院派神话绘画传统", "18-19 世纪常见", "Leucothea 常通过 Ino 抱子投海并神化的故事呈现，视觉重点是海浪与救助。"), "原为凡女伊诺，死后成为海上救助女神。在《奥德赛》中，她帮助奥德修斯脱离风暴。"),
  d(64, "gaia", "Gaia", "盖亚", "Γαῖα", "原初神", ["大地", "母体", "万物根基"], ["大地", "果实", "山脉"], "GAY-uh", "Gaia", art("Gaia on the Pergamon Altar", "希腊化雕刻家群", "约公元前 180-160", "佩加蒙祭坛浮雕中 Gaia 从大地升起，强烈表现她作为地母和巨人族之母的力量。"), "大地本身的神格，是许多神族和怪物的母亲。她既是生命根基，也会推动反抗天空和新王权的力量。"),
  d(65, "uranus", "Uranus", "乌拉诺斯", "Οὐρανός", "原初神", ["天空", "父权", "原初王权"], ["星空", "镰刀", "天穹"], "YOOR-uh-nus", "Uranus (mythology)", art("The Mutilation of Uranus by Saturn", "Giorgio Vasari and Cristofano Gherardi", "约 1560", "这类文艺复兴图像表现 Cronus 用镰刀推翻 Uranus 的瞬间，是天空父神故事的核心视觉。"), "天空的原初神，盖亚的伴侣。他压制子女，最终被克洛诺斯推翻，开启神族更替。"),
  d(66, "nyx", "Nyx", "尼克斯", "Νύξ", "原初神", ["夜", "黑暗", "神秘"], ["黑纱", "星星", "翅膀"], "NIKS", "Nyx", art("Night", "William-Adolphe Bouguereau", "1883", "Bouguereau 的 Night 虽是寓意画，却很适合呈现 Nyx 的黑夜、星光和静默气质。"), "夜的原初女神，古老到连宙斯也敬畏。她生下睡眠、死亡、命运等许多强大的拟人神。"),
  d(67, "erebus", "Erebus", "厄瑞玻斯", "Ἔρεβος", "原初神", ["幽暗", "冥界阴影", "黑暗空间"], ["阴影", "洞穴", "黑雾"], "AIR-uh-bus", "Erebus", art("Underworld darkness imagery", "古典插图与版画传统", "无单一主流油画", "Erebus 更像空间和黑暗本身，通常通过冥界入口、洞穴和阴影表现。"), "幽暗的原初神，代表光明之前或冥界附近的黑暗。与尼克斯一起，他属于宇宙最早的层次。"),
  d(68, "tartarus", "Tartarus", "塔耳塔洛斯", "Τάρταρος", "原初神", ["深渊", "囚禁", "宇宙底层"], ["深坑", "锁链", "岩壁"], "TAR-tuh-rus", "Tartarus", art("The Fall of the Titans tradition", "学院派与版画传统", "17-19 世纪常见", "Tartarus 作为深渊常在泰坦坠落或地狱想象中出现，重点不是人物肖像而是空间恐怖。"), "比冥界更深的宇宙深渊，也可被视作神格。泰坦和巨大的罪犯常被囚禁在那里。"),
  d(69, "aether", "Aether", "埃忒耳", "Αἰθήρ", "原初神", ["上层空气", "明亮天空", "纯净光"], ["光雾", "高空", "金色气流"], "EE-ther", "Aether (mythology)", art("Luminous atmosphere imagery", "古典寓意绘画传统", "无单一主流油画", "Aether 很少被人格化绘制，常用高空、金光和纯净空气的寓意表达。"), "上层明亮空气的原初神，与凡人呼吸的低层空气不同。他象征神明所在的清澈光域。"),
  d(70, "hemera", "Hemera", "赫墨拉", "Ἡμέρα", "原初神", ["白昼", "日光", "每日循环"], ["晨光", "白衣", "天空门"], "HEM-er-uh", "Hemera", art("Day / Aurora allegory", "寓意绘画传统", "无单一主流油画", "Hemera 常与 Day 的寓意图像或 Aurora/Eos 的黎明图像相邻，独立名画较少。"), "白昼女神，与尼克斯形成昼夜交替。她从幽暗中升起，使世界进入可见的日光秩序。"),
  d(71, "pontus", "Pontus", "蓬托斯", "Πόντος", "原初神", ["海本身", "深海", "海族祖先"], ["海浪", "鱼", "蓝绿色"], "PON-tus", "Pontus (mythology)", art("Marine deity mosaic tradition", "古罗马马赛克传统", "2-4 世纪", "Pontus 作为海本身很少有单一油画，常以海神头像、鱼和浪纹出现在古典装饰中。"), "海洋本身的原初神，早于波塞冬的统治秩序。他与盖亚结合，生下许多古老海神。"),
  d(72, "chaos", "Chaos", "卡俄斯", "Χάος", "原初神", ["初始裂隙", "未成形", "宇宙开端"], ["空隙", "雾", "裂缝"], "KAY-oss", "Chaos (cosmogony)", art("Chaos", "George Frederic Watts", "约 1875", "Watts 的寓意画把 Chaos 处理成模糊而厚重的未成形状态，适合作为宇宙开端的现代视觉。"), "最初的空隙或裂开状态，不是单纯混乱。许多原初神从这种开放的宇宙状态中逐渐出现。"),
  d(73, "phanes", "Phanes", "法涅斯", "Φάνης", "原初神", ["显现", "创生", "奥尔弗斯传统"], ["宇宙蛋", "蛇", "光"], "FAY-neez", "Phanes", art("Orphic Phanes relief tradition", "古代奥尔弗斯图像传统", "约公元 2 世纪以后", "Phanes 常从宇宙蛋中显现，缠蛇、有翼并带黄道符号，是奥尔弗斯神谱的独特形象。"), "奥尔弗斯传统中的创生神，从宇宙蛋中显现。名字有“显现、发光”的含义，象征万物开始呈现形态。"),
  d(74, "clotho", "Clotho", "克洛托", "Κλωθώ", "命运与人格化", ["命运纺线", "出生", "生命开端"], ["纺锤", "线", "羊毛"], "KLOH-thoh", "Clotho", art("A Golden Thread", "John Melhuish Strudwick", "1885", "这幅拉斐尔前派作品表现命运之线，适合作为三命运女神尤其 Clotho 纺线职责的视觉参考。"), "三命运女神之一，负责纺出生命之线。她代表生命开始进入命运织物的那一刻。"),
  d(75, "lachesis", "Lachesis", "拉刻西斯", "Λάχεσις", "命运与人格化", ["命运分配", "寿命长度", "抽签"], ["量尺", "线", "卷轴"], "LAK-uh-sis", "Lachesis", art("The Three Fates", "Paul Thumann", "19 世纪", "三命运女神常被合画，Lachesis 的核心是丈量和分配每个人的命运长度。"), "三命运女神之一，负责丈量生命之线。她决定一个生命将获得多少时间和怎样的命运份额。"),
  d(76, "atropos", "Atropos", "阿特罗波斯", "Ἄτροπος", "命运与人格化", ["命运终止", "死亡时刻", "不可转回"], ["剪刀", "线", "黑衣"], "AT-ruh-pahs", "Atropos", art("The Three Fates", "Paul Thumann", "19 世纪", "Atropos 通常持剪刀或刀刃，负责剪断生命线，是命运三姐妹中最令人畏惧的一位。"), "三命运女神之一，负责剪断生命之线。她的名字含有“不可改变”的意味。"),
  d(77, "eris", "Eris", "厄里斯", "Ἔρις", "命运与人格化", ["纷争", "竞争", "不和"], ["金苹果", "火炬", "混乱"], "AIR-is", "Eris (mythology)", art("The Judgement of Paris", "Peter Paul Rubens", "约 1636", "Eris 投下“不和的金苹果”引发审判帕里斯，Rubens 的相关画作常作为特洛伊战争前因的视觉入口。"), "纷争女神，最著名的行为是把金苹果投入婚宴，引发三女神竞争。这个小动作最终牵动特洛伊战争。"),
  d(78, "harmonia", "Harmonia", "哈耳摩尼亚", "Ἁρμονία", "命运与人格化", ["和谐", "婚姻", "调停"], ["项链", "婚冠", "竖琴"], "har-MOH-nee-uh", "Harmonia (mythology)", art("The Wedding of Cadmus and Harmonia", "Evelyn De Morgan", "1877", "De Morgan 描绘神圣婚礼，也暗示 Harmonia 的项链后来带来的家族诅咒。"), "和谐女神，阿瑞斯与阿佛洛狄忒之女。她与卡德摩斯的婚礼盛大，却因诅咒项链牵出后代悲剧。"),
  d(79, "enyo", "Enyo", "厄倪俄", "Ἐνυώ", "命运与人格化", ["战争恐怖", "毁灭", "战场尖叫"], ["血色盾牌", "火", "长矛"], "EN-eye-oh", "Enyo", art("Bellona", "Rembrandt", "1633", "Enyo 常与 Roman Bellona 互相对应，Rembrandt 的 Bellona 可作为战争女神恐怖面的视觉参照。"), "战争中的毁灭女神，常伴随阿瑞斯。她代表战场上燃烧、尖叫和城市被毁的恐怖面。"),
  d(80, "deimos", "Deimos", "得摩斯", "Δεῖμος", "命运与人格化", ["恐惧", "战场惊惧", "阿瑞斯随从"], ["面具", "盾牌", "阴影"], "DY-moss", "Deimos (deity)", art("Ares chariot vase tradition", "古希腊瓶画传统", "公元前 6-5 世纪", "Deimos 常作为 Ares 的随从出现在战车和战场图像中，独立肖像较少。"), "恐惧的拟人神，阿瑞斯与阿佛洛狄忒之子。他和福波斯一起伴随战神，让敌人丧胆。"),
  d(81, "phobos", "Phobos", "福波斯", "Φόβος", "命运与人格化", ["惊慌", "逃散", "战场恐怖"], ["恐怖面具", "马", "盾"], "FOH-boss", "Phobos (mythology)", art("Shield blazon and Ares imagery", "古希腊瓶画与盾牌图像传统", "公元前 6-5 世纪", "Phobos 的名字常与战士盾牌上的恐怖面具相连，强调心理震慑。"), "惊慌与溃散的拟人神，也是阿瑞斯之子。他的名字后来成为 phobia 的词源。"),
  d(82, "eileithyia", "Eileithyia", "厄勒梯亚", "Εἰλείθυια", "命运与人格化", ["分娩", "出生", "产痛"], ["火炬", "双手", "婴儿"], "eye-lye-ITH-ee-uh", "Eileithyia", art("Birth of Athena vase tradition", "古希腊瓶画传统", "公元前 6-5 世纪", "Eileithyia 常出现在神圣分娩场景中，尤其与出生和产痛仪式相关。"), "分娩女神，掌管出生时刻的痛苦与顺利。她的到来或迟延能决定母亲和孩子的命运。"),
  d(83, "peitho", "Peitho", "佩托", "Πειθώ", "命运与人格化", ["说服", "诱导", "魅力语言"], ["花冠", "鸽子", "卷轴"], "PIE-thoh", "Peitho", art("Aphrodite and Peitho vase tradition", "古希腊陶瓶画", "公元前 5 世纪", "Peitho 常与 Aphrodite 同画，象征爱情不只是美，也是语言和心理上的说服。"), "说服女神，常伴随阿佛洛狄忒。她代表甜言、魅力和让他人愿意靠近的心理力量。"),
  d(84, "hymen", "Hymen", "许门", "Ὑμήν", "命运与人格化", ["婚礼", "婚歌", "结合"], ["火炬", "花冠", "婚纱"], "HY-men", "Hymen (god)", art("Hymen / wedding allegory tradition", "新古典主义婚礼寓意画", "18-19 世纪常见", "Hymen 常持婚礼火炬出现，是西方婚礼寓意图里辨识度很高的小神。"), "婚礼之神，名字也与婚歌有关。古人希望他的祝福能让结合顺利、家庭延续。"),
  d(85, "priapus", "Priapus", "普里阿普斯", "Πρίαπος", "命运与人格化", ["生殖", "园圃", "边界守护"], ["园圃", "果篮", "夸张生殖符号"], "pry-AY-pus", "Priapus", art("Priapus fresco from Pompeii", "古罗马壁画", "公元 1 世纪", "庞贝壁画中的 Priapus 以夸张尺度和果篮表现财富、土地肥力与守护功能。"), "生殖和园圃守护神，常以夸张身体符号出现。古代人把他放在花园和边界处，用来祈求丰产并驱逐侵入者。"),
  d(86, "anteros", "Anteros", "安忒洛斯", "Ἀντέρως", "命运与人格化", ["回应之爱", "爱的回报", "反爱"], ["弓箭", "翅膀", "蝴蝶"], "AN-tuh-ross", "Anteros", art("Shaftesbury Memorial Fountain", "Alfred Gilbert", "1893", "伦敦皮卡迪利广场的雕像常被误称为 Eros，实际常解释为 Anteros，使他在现代公共艺术中很有名。"), "回应之爱的神，常被理解为厄洛斯的对应面。没有回应的爱会失衡，安忒洛斯象征爱情中的互相承认。"),
  d(87, "kratos", "Kratos", "克拉托斯", "Κράτος", "命运与人格化", ["力量", "统治权", "强制"], ["锁链", "权杖", "肌肉"], "KRAY-toss", "Kratos (mythology)", art("Prometheus Bound imagery", "古希腊悲剧与插图传统", "古代至近代", "Kratos 在《被缚的普罗米修斯》中协助执行宙斯命令，常通过锁链场景被理解。"), "力量的拟人神，宙斯政权的执行者之一。他在普罗米修斯受罚故事中体现冷硬权力。"),
  d(88, "bia", "Bia", "比亚", "Βία", "命运与人格化", ["暴力", "强迫", "执行"], ["锁链", "短剑", "盾"], "BY-uh", "Bia (mythology)", art("Prometheus Bound imagery", "古希腊悲剧与插图传统", "古代至近代", "Bia 与 Kratos 一起执行对 Prometheus 的惩罚，艺术形象多依附这个故事。"), "暴力和强迫的拟人女神，尼刻的姐妹。她代表权力真正落到身体上的执行力。"),
  d(89, "zelus", "Zelus", "泽洛斯", "Ζῆλος", "命运与人格化", ["竞争", "热忱", "嫉羡"], ["火焰", "桂冠", "追逐"], "ZEE-lus", "Zelus", art("Emulation allegory tradition", "文艺复兴与巴洛克寓意画", "无单一主流油画", "Zelus 常作为竞争、热忱或嫉羡的寓意出现，独立神话名画较少。"), "竞争与热忱的拟人神，尼刻、克拉托斯和比亚的兄弟。他体现追赶、比较和争胜的心理能量。"),
  d(90, "aglaea", "Aglaea", "阿格莱亚", "Ἀγλαΐα", "缪斯与美惠", ["光辉", "优雅", "美惠"], ["花", "轻纱", "舞姿"], "uh-GLEE-uh", "Aglaea", art("The Three Graces", "Peter Paul Rubens", "约 1635", "Rubens 的《三美惠》是美惠女神最经典的群像之一，Aglaea 通常代表光辉与优雅。"), "三美惠女神之一，名字与光辉、灿烂有关。她常与欢愉、魅力和社交中的优雅相连。"),
  d(91, "calliope", "Calliope", "卡利俄佩", "Καλλιόπη", "缪斯与美惠", ["史诗", "雄辩", "英雄诗"], ["书写板", "卷轴", "金冠"], "kuh-LY-uh-pee", "Calliope", art("The Muses on Parnassus", "Raphael", "1511", "Raphael 的《帕尔纳索斯》是缪斯群像经典，Calliope 通常作为史诗缪斯被置于高贵位置。"), "九缪斯之一，掌管史诗和高贵的诗歌声音。她常被视为缪斯中的首席，也是俄耳甫斯的母亲。"),
  d(92, "clio", "Clio", "克利俄", "Κλειώ", "缪斯与美惠", ["历史", "记载", "名声"], ["卷轴", "书", "喇叭"], "KLY-oh", "Clio", art("The Muses on Parnassus", "Raphael", "1511", "Clio 常持卷轴或书，代表历史把人的行动保存为可传述的名声。"), "历史缪斯，负责记录和传述过去。她让英雄事迹不只发生一次，而能在记忆中持续存在。"),
  d(93, "erato", "Erato", "厄拉托", "Ἐρατώ", "缪斯与美惠", ["爱情诗", "抒情", "柔情"], ["里拉琴", "玫瑰", "花冠"], "AIR-uh-toh", "Erato", art("The Muses on Parnassus", "Raphael", "1511", "Erato 常以小里拉和花冠出现，适合表达爱情诗的温柔与节奏。"), "爱情诗缪斯，掌管柔情和抒情表达。她的名字与爱相关，常让诗歌带上亲密、轻盈的语气。"),
  d(94, "euterpe", "Euterpe", "欧忒耳佩", "Εὐτέρπη", "缪斯与美惠", ["音乐", "笛声", "愉悦"], ["双管笛", "花环", "乐谱"], "yoo-TUR-pee", "Euterpe", art("The Muses on Parnassus", "Raphael", "1511", "Euterpe 通常持笛，象征音乐带来的愉悦和节奏秩序。"), "音乐与笛声缪斯。她代表使人心情变明亮的旋律，也与诗歌表演的声音层面相关。"),
  d(95, "melpomene", "Melpomene", "墨尔波墨涅", "Μελπομένη", "缪斯与美惠", ["悲剧", "戏剧", "庄严歌唱"], ["悲剧面具", "短剑", "高靴"], "mel-POM-uh-nee", "Melpomene", art("The Muses on Parnassus", "Raphael", "1511", "Melpomene 常持悲剧面具，显示古典戏剧把痛苦转化为形式的能力。"), "悲剧缪斯，掌管庄严戏剧和悲剧歌唱。她让痛苦、错误和命运成为可被观看和理解的艺术。"),
  d(96, "polyhymnia", "Polyhymnia", "波吕许谟尼亚", "Πολυύμνια", "缪斯与美惠", ["圣歌", "沉思", "庄重诗"], ["面纱", "手指抵唇", "卷轴"], "pol-ee-HIM-nee-uh", "Polyhymnia", art("The Muses on Parnassus", "Raphael", "1511", "Polyhymnia 常被画得沉静端庄，象征赞歌、神圣语言和沉思。"), "圣歌与庄严诗歌缪斯。她通常姿态沉静，代表语言在宗教和仪式中的力量。"),
  d(97, "terpsichore", "Terpsichore", "忒耳普西科瑞", "Τερψιχόρη", "缪斯与美惠", ["舞蹈", "合唱", "身体节奏"], ["里拉琴", "舞步", "花冠"], "terp-SIK-uh-ree", "Terpsichore", art("The Muses on Parnassus", "Raphael", "1511", "Terpsichore 的图像常突出舞姿和乐器，表现诗、乐、舞未分家的古典艺术观。"), "舞蹈与合唱缪斯。她让诗歌从文字变成身体节奏，也常与合唱歌舞传统相连。"),
  d(98, "thalia-muse", "Thalia", "塔利亚", "Θάλεια", "缪斯与美惠", ["喜剧", "牧歌", "轻快戏剧"], ["喜剧面具", "牧杖", "常春藤"], "THAY-lee-uh", "Thalia (Muse)", art("The Muses on Parnassus", "Raphael", "1511", "Thalia 常持喜剧面具，代表笑、机智和牧歌式轻快。"), "喜剧与牧歌缪斯，让舞台拥有笑声和机智。她与悲剧缪斯墨尔波墨涅形成戏剧两极。", "Thalia"),
  d(99, "urania", "Urania", "乌拉尼亚", "Οὐρανία", "缪斯与美惠", ["天文学", "星图", "宇宙秩序"], ["星球仪", "圆规", "星冠"], "yoo-RAY-nee-uh", "Urania", art("The Muses on Parnassus", "Raphael", "1511", "Urania 通常持天球和圆规，体现古代天文学与神圣秩序的关系。"), "天文学缪斯，掌管星图与宇宙秩序。她提醒古代学问中艺术、数学和神圣观察常常连在一起。"),
  d(100, "maia", "Maia", "玛亚", "Μαῖα", "缪斯与美惠", ["春季成长", "隐居", "赫尔墨斯之母"], ["山洞", "花枝", "星"], "MY-uh", "Maia", art("Maia / Pleiad tradition", "星图与神话绘画传统", "18-19 世纪常见", "Maia 作为 Pleiad 和 Hermes 之母，常通过昴星团、山洞和母亲形象呈现，缺少单一公认油画。"), "昴星团女神之一，赫尔墨斯的母亲。她住在山洞中，名字也让英语月份 May 带有春季生长的联想。")
];

const state = {
  group: "全部",
  query: "",
  sort: "rank",
  englishVoiceName: "",
  chineseVoiceName: "",
  greekVoiceName: "",
  quizId: "",
  quizRevealed: false,
  quizChoices: [],
  quizChoiceId: "",
  quizAnswered: false,
  quizCorrect: 0,
  quizTotal: 0,
  quizMisses: {},
  quizReviewMode: false
};

let imageObserver = null;
const quizStorageKey = "greek-mythology-quiz-progress-v1";
const rasterPortraitIds = new Set([
  "zeus", "hera", "poseidon", "demeter", "athena", "apollo", "artemis", "ares", "aphrodite",
  "hephaestus", "hermes", "dionysus", "hades", "hestia", "persephone", "eros", "nike",
  "hebe", "iris", "helios", "selene", "eos", "hecate", "pan", "asclepius", "hygieia",
  "hypnos", "thanatos", "morpheus", "nemesis", "tyche", "themis", "leto", "rhea", "cronus",
  "oceanus", "tethys", "hyperion", "theia", "coeus", "phoebe", "iapetus", "crius", "mnemosyne",
  "prometheus", "epimetheus", "atlas", "metis", "dione", "astraeus", "amphitrite", "triton",
  "proteus", "nereus", "thetis", "galatea", "boreas", "zephyrus", "notus", "eurus", "aeolus",
  "glaucus", "leucothea", "gaia", "uranus", "nyx", "erebus", "tartarus", "aether", "hemera",
  "pontus", "chaos", "phanes", "clotho", "lachesis", "atropos", "eris", "harmonia", "enyo",
  "deimos", "phobos", "eileithyia", "peitho", "hymen", "priapus", "anteros", "kratos", "bia",
  "zelus", "aglaea", "calliope", "clio", "erato", "euterpe", "melpomene", "polyhymnia",
  "terpsichore", "thalia-muse", "urania", "maia"
]);

const groupThemes = {
  "奥林匹斯核心": { bg1: "#f8efe2", bg2: "#cad9df", accent: "#8a3147", robe: "#f7f0df", metal: "#b9822d" },
  "冥界与家宅": { bg1: "#f2eee7", bg2: "#c9c3cb", accent: "#4a344f", robe: "#eee8df", metal: "#8d7041" },
  "著名小神": { bg1: "#f5f1e7", bg2: "#c7dfd5", accent: "#245c66", robe: "#fff4df", metal: "#b78329" },
  "泰坦神族": { bg1: "#f3ead8", bg2: "#c9c7b3", accent: "#6b5b2e", robe: "#eee2c6", metal: "#9f7b35" },
  "海洋与风": { bg1: "#edf6f5", bg2: "#a9cfda", accent: "#155f74", robe: "#e8f1ee", metal: "#6f9ca5" },
  "原初神": { bg1: "#efe9f2", bg2: "#b9bccd", accent: "#373f63", robe: "#e8e1ef", metal: "#8b83b1" },
  "命运与人格化": { bg1: "#f4eee8", bg2: "#d8c3bc", accent: "#7c3a37", robe: "#f2e6dc", metal: "#ad7c3a" },
  "缪斯与美惠": { bg1: "#f7f0e8", bg2: "#d9d5be", accent: "#6b6f3b", robe: "#fff5e6", metal: "#b8913e" }
};

const groupVisualNotes = {
  "奥林匹斯核心": "背景采用神殿式垂直结构和明亮天光，强调奥林匹斯神的公共权威与秩序感。",
  "冥界与家宅": "背景压低明度，加入地下或炉火式空间感，把死亡、家宅和边界秩序放在同一视觉语境里。",
  "著名小神": "背景更轻、更开放，让信使、医神、爱情、胜利等功能性神格显得容易辨认。",
  "泰坦神族": "背景偏古铜和大地色，强调比奥林匹斯更古老、更宏大的上一代神力。",
  "海洋与风": "背景使用浪线、流动云气和蓝绿色调，提示海域、风向、航海与自然力量。",
  "原初神": "背景加入裂隙、星点和宇宙环，表现这些神更像宇宙状态本身，而不只是普通人物。",
  "命运与人格化": "背景用线、弧和克制色块表现抽象力量，帮助把命运、恐惧、和谐、竞争等概念人格化。",
  "缪斯与美惠": "背景更柔和，加入光晕、曲线和舞台感，突出艺术、记忆、诗歌、优雅与表达。"
};

const propVisualNotes = {
  lightning: ["霹雳", "霹雳直接指向天空主权和惩戒力量，是宙斯式王权最稳定的视觉标识。"],
  peacock: ["孔雀", "孔雀来自赫拉的传统标志，华丽尾羽对应神后、婚姻与尊严。"],
  trident: ["三叉戟", "三叉戟让观众立刻联想到海浪、地震和波塞冬式的海权。"],
  wheat: ["麦穗", "麦穗把丰收、谷物和季节循环集中在一个清楚的农业符号里。"],
  owlShield: ["猫头鹰与盾", "猫头鹰代表智慧，盾牌代表战略防护，二者合在一起就是雅典娜最典型的形象。"],
  sunLyre: ["太阳与里拉琴", "太阳光和里拉琴把光明、音乐、预言与秩序连接起来。"],
  moonBow: ["新月与弓", "新月提示夜空和月性，弓箭提示狩猎、边界和迅疾行动。"],
  spearShield: ["长矛与盾", "武器和盾牌把战场冲突、勇武和直接力量放到画面中心。"],
  shellRose: ["贝壳与玫瑰", "贝壳回应海沫诞生传统，玫瑰则提示美、爱欲和吸引力。"],
  hammerAnvil: ["锤与铁砧", "锤子和铁砧把火、金属、劳动和工匠技艺直接可视化。"],
  caduceus: ["双蛇杖", "双蛇杖和翼形元素提示信使速度、谈判、旅行与跨界能力。"],
  grapesCup: ["葡萄与酒杯", "葡萄和酒杯把酒神的丰盛、狂欢、戏剧性和失控感集中起来。"],
  bident: ["双叉杖", "双叉杖比三叉戟更阴沉，适合表现冥界统治和地下财富。"],
  hearth: ["炉火", "炉火是家宅与城邦中心，画面用它表达安定、祭祀和持续燃烧的秩序。"],
  pomegranate: ["石榴", "石榴对应珀耳塞福涅吃下冥界食物的故事，是春天与冥后身份的关键物。"],
  sunChariot: ["太阳车", "太阳车表现每日穿越天空的轨迹，让太阳神的职责变成可见运动。"],
  moon: ["月轮", "月轮和银色光晕把夜空、周期和静默爱情放进画面。"],
  dawn: ["黎明光", "玫瑰色晨光提示每天开启白昼的瞬间，也对应 Eos 的黎明传统。"],
  twinTorches: ["双火炬", "火炬照亮夜晚与岔路，适合表现寻找、魔法和边界守护。"],
  pipes: ["排箫", "排箫是潘神最直观的标志，把山林、牧野和野性音乐连在一起。"],
  serpentStaff: ["蛇杖", "蛇绕杖表现医学、疗愈、更新和神庙治疗传统。"],
  poppy: ["罂粟", "罂粟柔化画面，提示睡眠、梦境和意识下沉。"],
  downTorch: ["倒置火炬", "倒置火炬是生命火焰熄灭的象征，适合表达安静的死亡。"],
  scales: ["天平", "天平把报应、尺度和命运分配变成清楚的判断符号。"],
  cornucopia: ["丰饶角", "丰饶角表现幸运、城市命运和突然降临的富足。"],
  scalesSword: ["天平与剑", "天平表现秩序与衡量，剑表现裁断，合起来就是神圣法度。"],
  lionDrum: ["狮子与鼓", "狮子和鼓突出母神、护佑与古老仪式力量。"],
  sickle: ["镰刀", "镰刀指向克洛诺斯推翻乌拉诺斯的故事，也暗示时间的切割。"],
  waveHorn: ["水流与牛角", "水流和角状元素表现环世大河、古老水源和边界感。"],
  globe: ["天球", "天球把承担天空、星辰秩序或宇宙结构的神职视觉化。"],
  fireChain: ["火与锁链", "火代表文明赠礼，锁链提示违抗神权后的惩罚。"],
  earthFruit: ["大地与果实", "果实、土地和绿色元素让盖亚式的生养力量变得直观。"],
  starScythe: ["星空与镰形", "星空表现天穹，镰形暗示乌拉诺斯相关的创世暴力。"],
  nightStars: ["夜幕与星群", "星群和暗色背景把夜本身塑造成有生命的原初力量。"],
  void: ["初始裂隙", "裂隙和雾状空间表现 Chaos 作为最初空隙，而不是现代意义的混乱。"],
  cosmicEgg: ["宇宙蛋", "宇宙蛋是奥尔弗斯神谱里万物显形的核心母题。"],
  spindle: ["纺锤", "纺锤表现生命之线的开始，是 Clotho 最清楚的职责符号。"],
  measureThread: ["量线", "量线对应寿命分配，表现 Lachesis 丈量命运长度。"],
  shears: ["剪刀", "剪刀代表剪断生命线，让 Atropos 的不可逆职责一眼可见。"],
  apple: ["金苹果", "金苹果提示不和女神引发三女神竞争和特洛伊战争的故事。"],
  necklace: ["项链", "项链对应 Harmonia 的婚礼与诅咒，既美丽又带有命运代价。"],
  globeCompass: ["天球与圆规", "天球和圆规把天文学、测量和宇宙秩序结合起来。"],
  bow: ["弓", "弓箭表现远距行动、狩猎或带来影响的迅速力量。"],
  lyre: ["里拉琴", "里拉琴提示音乐、诗歌、和谐与神圣表达。"],
  torch: ["火炬", "火炬提示引导、仪式、夜行和寻找。"],
  scroll: ["卷轴", "卷轴把历史、诗歌、法律或记忆变成可保存的知识。"],
  stars: ["星群", "星群提示天象、夜空、预言或更高层的宇宙秩序。"],
  light: ["光辉", "光辉适合表现太阳家族、上层空气和神圣可见性，让抽象的明亮力量更容易被看见。"],
  rainbow: ["彩虹", "彩虹直接提示天与地之间的传信通道，也适合表现速度、颜色和神圣消息。"],
  wave: ["海浪", "海浪直接指向海洋、航海、水域祖先或流动自然力。"],
  wind: ["风带", "风带和流线表现方向、速度和不可抓住的气流。"],
  flowers: ["花与花冠", "花朵表现青春、魅力、春季成长或艺术性的柔美。"],
  mask: ["面具", "面具提示戏剧、恐惧或人格化情绪的外显。"],
  chains: ["锁链", "锁链表现强制、惩罚、束缚或权力执行。"],
  flame: ["火焰", "火焰提示炉火、锻造、文明、祭祀或神力显现。"],
  cup: ["杯", "杯象征酒、青春侍奉、宴饮或神圣饮品。"],
  laurel: ["月桂", "月桂代表荣耀、诗歌、胜利和古典神圣气质。"]
};

const feminineIds = new Set([
  "hera", "demeter", "athena", "artemis", "aphrodite", "hestia", "persephone", "nike", "hebe",
  "iris", "selene", "eos", "hecate", "hygieia", "nemesis", "tyche", "themis", "leto", "rhea",
  "tethys", "theia", "phoebe", "mnemosyne", "metis", "dione", "amphitrite", "thetis", "galatea",
  "leucothea", "gaia", "nyx", "hemera", "clotho", "lachesis", "atropos", "eris", "harmonia",
  "enyo", "bia", "aglaea", "calliope", "clio", "erato", "euterpe", "melpomene", "polyhymnia",
  "terpsichore", "thalia-muse", "urania", "maia"
]);

const deityStories = window.mythStories || {};
const deityLineage = window.mythLineage || {};
const lineageSources = window.mythLineageSources || [];
const lineageOverview = window.mythLineageOverview || [];

const els = {
  totalCount: document.querySelector("#totalCount"),
  visibleCount: document.querySelector("#visibleCount"),
  searchInput: document.querySelector("#searchInput"),
  searchSuggestions: document.querySelector("#searchSuggestions"),
  sortSelect: document.querySelector("#sortSelect"),
  voiceSelect: document.querySelector("#voiceSelect"),
  stopSpeech: document.querySelector("#stopSpeech"),
  filters: document.querySelector("#groupFilters"),
  memoryTrainer: document.querySelector("#memoryTrainer"),
  lineageBoard: document.querySelector("#lineageBoard"),
  catalog: document.querySelector("#catalog"),
  dialog: document.querySelector("#detailDialog"),
  panel: document.querySelector("#detailPanel"),
  toast: document.querySelector("#toast")
};

function d(rank, id, name, cn, greek, group, domains, symbols, pronunciation, wiki, artwork, summary, speech) {
  return {
    rank,
    id,
    name,
    cn,
    greek,
    group,
    domains,
    symbols,
    pronunciation,
    wiki,
    artwork,
    summary,
    speech: speech || name.replace(/\s+\(.+\)$/u, "")
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return stripDiacritics(value)
    .toLocaleLowerCase("en-US")
    .replace(/[^\p{Letter}\p{Number}\u4e00-\u9fff]+/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
}

function stripDiacritics(value) {
  return String(value).normalize("NFD").replace(/\p{Mark}/gu, "");
}

function transliterateGreek(value) {
  const map = {
    α: "a", β: "b", γ: "g", δ: "d", ε: "e", ζ: "z", η: "e", θ: "th", ι: "i", κ: "k",
    λ: "l", μ: "m", ν: "n", ξ: "x", ο: "o", π: "p", ρ: "r", σ: "s", ς: "s", τ: "t",
    υ: "y", φ: "ph", χ: "ch", ψ: "ps", ω: "o"
  };
  return stripDiacritics(value)
    .toLocaleLowerCase("el-GR")
    .replace(/[α-ω]/gu, (letter) => map[letter] || letter);
}

function searchTextVariants(value) {
  const source = String(value || "");
  const variants = [source, transliterateGreek(source)];
  return [...new Set(variants.map(normalize).filter(Boolean))];
}

function searchTokens(value) {
  return searchTextVariants(value)
    .join(" ")
    .replace(/([a-z])([\u4e00-\u9fff])/giu, "$1 $2")
    .replace(/([\u4e00-\u9fff])([a-z])/giu, "$1 $2")
    .split(/\s+/u)
    .filter(Boolean);
}

function wikiUrl(item) {
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(item.wiki).replaceAll("%20", "_")}`;
}

function getSearchText(item) {
  const story = getStory(item);
  const lineage = getLineage(item);
  return searchTextVariants([
    item.id,
    item.name,
    item.cn,
    item.greek,
    transliterateGreek(item.greek),
    item.group,
    item.domains.join(" "),
    item.symbols.join(" "),
    item.pronunciation,
    item.speech,
    item.artwork.title,
    item.artwork.artist,
    item.summary,
    story.titleZh,
    story.titleEn,
    story.zh,
    story.en,
    relationSearchText(lineage)
  ].join(" ")).join(" ");
}

function getPrimarySearchText(item) {
  return searchTextVariants([
    item.id,
    item.name,
    item.cn,
    item.greek,
    transliterateGreek(item.greek),
    item.speech
  ].join(" ")).join(" ");
}

function getFacetSearchText(item) {
  return searchTextVariants([
    item.group,
    item.domains.join(" "),
    item.symbols.join(" "),
    item.pronunciation,
    item.artwork.title,
    item.artwork.artist
  ].join(" ")).join(" ");
}

function itemSearchScore(item, terms) {
  if (!terms.length) return 0;
  const primary = getPrimarySearchText(item);
  const facets = getFacetSearchText(item);
  const everything = getSearchText(item);
  return terms.reduce((score, term) => {
    const exactName = normalize(item.name) === term || normalize(item.cn) === term || normalize(item.id) === term;
    if (exactName) return score + 120;
    if (primary.includes(term)) return score + 80;
    if (facets.includes(term)) return score + 38;
    if (everything.includes(term)) return score + 10;
    return score;
  }, 0);
}

function renderFilters() {
  const counts = deities.reduce((map, item) => {
    map.set(item.group, (map.get(item.group) || 0) + 1);
    return map;
  }, new Map());
  const groups = ["全部", ...counts.keys()];
  els.filters.innerHTML = groups
    .map((group) => {
      const count = group === "全部" ? deities.length : counts.get(group);
      return `<button class="filter-button" type="button" data-group="${escapeHtml(group)}" aria-pressed="${group === state.group}">${escapeHtml(group)} ${count}</button>`;
    })
    .join("");
}

function renderMemoryTrainer() {
  if (!els.memoryTrainer) return;
  const item = currentQuizItem();
  const profile = visualProfile(item);
  const choices = currentQuizChoices(item);
  const [propLabel] = propVisualNotes[profile.prop] || propVisualNotes.laurel;
  const missIds = quizMissIds();
  const answer = state.quizRevealed || state.quizAnswered
    ? `
      <div class="memory-answer is-revealed">
        <span>答案</span>
        <strong>${escapeHtml(item.name)} · ${escapeHtml(item.cn)}</strong>
        <em>${escapeHtml(item.greek)} · ${escapeHtml(item.pronunciation)}</em>
        <p>${escapeHtml(cardImageCue(item, profile))}</p>
      </div>
    `
    : `
      <div class="memory-answer">
        <span>先猜一猜</span>
        <strong>这是哪位神？</strong>
        <em>看主符号、神职和画面元素。</em>
      </div>
    `;

  els.memoryTrainer.innerHTML = `
    <div class="memory-copy">
      <p class="eyebrow">Picture Memory</p>
      <h2 id="memoryTrainerTitle">看图认神练习</h2>
      <p>先观察全身形象里的道具和神职标签，再点开答案。每次只练一位，适合快速复习。</p>
      <div class="memory-score" aria-label="本轮答题统计">
        <strong>${state.quizCorrect}</strong>
        <span>答对 / ${state.quizTotal || 0} 题</span>
        <em>${state.quizReviewMode ? `错题复习 ${missIds.length}` : `错题池 ${missIds.length}`}</em>
      </div>
    </div>
    <div class="memory-stage">
      <div class="memory-image art-frame">
        <img src="${escapeHtml(deityImageSource(item))}" alt="看图认神练习：${escapeHtml(item.name)} 的现代生成全身形象">
        ${renderPortraitQuickLabel(item, profile)}
      </div>
      <div class="memory-panel">
        <div class="memory-clues" aria-label="看图线索">
          ${renderMemoryClue("主符号", propLabel)}
          ${renderMemoryClue("神职", item.domains.slice(0, 2).join(" / "))}
          ${renderMemoryClue("象征物", item.symbols.slice(0, 3).join(" / "))}
        </div>
        <div class="memory-choice-grid" aria-label="选择神名">
          ${choices.map((choice) => renderQuizChoice(choice, item)).join("")}
        </div>
        ${renderQuizFeedback(item)}
        ${answer}
        <div class="memory-actions">
          <button class="memory-primary" type="button" data-quiz-reveal>${state.quizRevealed || state.quizAnswered ? "答案已显示" : "直接看答案"}</button>
          <button type="button" data-quiz-next>换一位</button>
          ${missIds.length ? `<button type="button" data-quiz-review>${state.quizReviewMode ? "继续错题" : `复习错题 ${missIds.length}`}</button>` : ""}
          ${state.quizReviewMode ? `<button type="button" data-quiz-all>回到全部</button>` : ""}
          <button type="button" data-speak="${escapeHtml(item.id)}" data-speak-lang="en">听英文名</button>
          <button type="button" data-detail="${escapeHtml(item.id)}">打开详情</button>
          <button type="button" data-quiz-reset>重置记录</button>
        </div>
      </div>
    </div>
  `;
}

function renderQuizChoice(choice, item) {
  const isLocked = state.quizAnswered || state.quizRevealed;
  const isSelected = state.quizChoiceId === choice.id;
  const isCorrect = choice.id === item.id;
  const classes = [
    "memory-choice",
    isSelected ? "is-selected" : "",
    isLocked && isCorrect ? "is-correct" : "",
    state.quizAnswered && isSelected && !isCorrect ? "is-wrong" : ""
  ].filter(Boolean).join(" ");
  return `
    <button class="${classes}" type="button" data-quiz-choice="${escapeHtml(choice.id)}" ${isLocked ? "disabled" : ""}>
      <strong>${escapeHtml(choice.name)}</strong>
      <span>${escapeHtml(choice.cn)}</span>
    </button>
  `;
}

function renderQuizFeedback(item) {
  if (!state.quizAnswered) return "";
  const isCorrect = state.quizChoiceId === item.id;
  const picked = deities.find((entry) => entry.id === state.quizChoiceId);
  return `
    <div class="memory-feedback ${isCorrect ? "is-correct" : "is-wrong"}">
      <strong>${isCorrect ? "答对了" : "再看主符号"}</strong>
      <p>${isCorrect ? "这个形象已经记住了一次。" : `你选的是 ${escapeHtml(picked?.cn || "另一个神")}，正确答案是 ${escapeHtml(item.cn)}。这道题已进入错题池。`}</p>
    </div>
  `;
}

function renderMemoryClue(label, value) {
  return `
    <div class="memory-clue">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `;
}

function currentQuizItem() {
  if (!state.quizId) state.quizId = deities[0].id;
  const item = deities.find((entry) => entry.id === state.quizId) || deities[0];
  currentQuizChoices(item);
  return item;
}

function currentQuizChoices(item) {
  if (!state.quizChoices.length || !state.quizChoices.includes(item.id)) {
    state.quizChoices = buildQuizChoices(item);
  }
  return state.quizChoices
    .map((id) => deities.find((entry) => entry.id === id))
    .filter(Boolean);
}

function buildQuizChoices(item) {
  const distractors = [];
  const used = new Set([item.id]);
  takeQuizDistractors(deities.filter((entry) => entry.group === item.group && entry.id !== item.id), distractors, used);
  takeQuizDistractors(deities.filter((entry) => entry.id !== item.id && sharesDomain(entry, item)), distractors, used);
  takeQuizDistractors(deities.filter((entry) => entry.id !== item.id), distractors, used);
  return shuffleQuizChoices([item.id, ...distractors]);
}

function takeQuizDistractors(pool, distractors, used) {
  shuffleQuizChoices(pool.map((entry) => entry.id)).forEach((id) => {
    if (distractors.length >= 3 || used.has(id)) return;
    used.add(id);
    distractors.push(id);
  });
}

function sharesDomain(entry, item) {
  return entry.domains.some((domain) => item.domains.includes(domain));
}

function shuffleQuizChoices(ids) {
  return [...ids].sort(() => Math.random() - 0.5);
}

function nextQuizItem() {
  const currentIndex = deities.findIndex((item) => item.id === state.quizId);
  const pool = quizPool();
  let nextItem = pool[Math.floor(Math.random() * pool.length)] || deities[0];
  if (pool.length > 1 && nextItem.id === state.quizId) {
    nextItem = pool[(pool.findIndex((item) => item.id === state.quizId) + 1) % pool.length] || deities[(currentIndex + 17) % deities.length];
  }
  state.quizId = nextItem.id;
  state.quizRevealed = false;
  state.quizChoiceId = "";
  state.quizAnswered = false;
  state.quizChoices = buildQuizChoices(nextItem);
}

function quizPool() {
  const misses = quizMissIds()
    .map((id) => deities.find((item) => item.id === id))
    .filter(Boolean);
  if (state.quizReviewMode && misses.length) return misses;
  if (state.quizReviewMode && !misses.length) state.quizReviewMode = false;
  return deities;
}

function quizMissIds() {
  return Object.entries(state.quizMisses || {})
    .filter(([, count]) => Number(count) > 0)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .map(([id]) => id)
    .filter((id) => deities.some((item) => item.id === id));
}

function recordQuizAnswer(item, isCorrect) {
  state.quizTotal += 1;
  if (isCorrect) {
    state.quizCorrect += 1;
    reduceQuizMiss(item.id);
  } else {
    state.quizMisses[item.id] = (Number(state.quizMisses[item.id]) || 0) + 1;
  }
  if (state.quizReviewMode && !quizMissIds().length) state.quizReviewMode = false;
  saveQuizProgress();
}

function reduceQuizMiss(id) {
  const count = Number(state.quizMisses[id]) || 0;
  if (count <= 1) {
    delete state.quizMisses[id];
  } else {
    state.quizMisses[id] = count - 1;
  }
}

function loadQuizProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(quizStorageKey) || "{}");
    state.quizCorrect = Number(stored.correct) || 0;
    state.quizTotal = Number(stored.total) || 0;
    state.quizMisses = sanitizeQuizMisses(stored.misses);
  } catch {
    state.quizCorrect = 0;
    state.quizTotal = 0;
    state.quizMisses = {};
  }
}

function saveQuizProgress() {
  try {
    localStorage.setItem(quizStorageKey, JSON.stringify({
      correct: state.quizCorrect,
      total: state.quizTotal,
      misses: state.quizMisses
    }));
  } catch {
    // Local storage can be unavailable in private browsing modes.
  }
}

function sanitizeQuizMisses(misses) {
  const clean = {};
  if (!misses || typeof misses !== "object") return clean;
  Object.entries(misses).forEach(([id, count]) => {
    const numericCount = Number(count);
    if (numericCount > 0 && deities.some((item) => item.id === id)) clean[id] = numericCount;
  });
  return clean;
}

function resetQuizProgress() {
  state.quizCorrect = 0;
  state.quizTotal = 0;
  state.quizMisses = {};
  state.quizReviewMode = false;
  saveQuizProgress();
}

function renderLineageBoard() {
  if (!els.lineageBoard || !lineageOverview.length) return;
  els.lineageBoard.innerHTML = `
    <div class="lineage-board-head">
      <div>
        <p class="eyebrow">Family Lines</p>
        <h2>必记主干谱系</h2>
      </div>
      <p>这里只放最常识的几组关系，复杂分支和异说放到每位神的详情页里。</p>
    </div>
    <div class="lineage-board-grid">
      ${lineageOverview.map(renderOverviewGroup).join("")}
    </div>
  `;
}

function renderOverviewGroup(group) {
  return `
    <article class="lineage-board-group">
      <div class="lineage-board-title">
        <h3>${escapeHtml(group.title)}</h3>
        <p>${escapeHtml(group.subtitle)}</p>
      </div>
      <div class="lineage-clusters">
        ${(group.clusters || []).map(renderOverviewCluster).join("")}
      </div>
    </article>
  `;
}

function renderOverviewCluster(cluster) {
  return `
    <div class="lineage-cluster">
      <div class="cluster-side">${renderOverviewNodes(cluster.fromIds, cluster.fromNames, "源头")}</div>
      <div class="cluster-relation">${escapeHtml(cluster.relation)}</div>
      <div class="cluster-side">${renderOverviewNodes(cluster.toIds, cluster.toNames, "结果")}</div>
      <p>${escapeHtml(cluster.note)}</p>
    </div>
  `;
}

function renderOverviewNodes(ids = [], names = [], emptyText) {
  const nodes = [
    ...ids.map((id) => {
      const item = deities.find((entry) => entry.id === id);
      if (!item) return `<span class="overview-node external">${escapeHtml(id)}</span>`;
      return `<button class="overview-node" type="button" data-detail="${escapeHtml(item.id)}">${escapeHtml(item.name)}<span>${escapeHtml(item.cn)}</span></button>`;
    }),
    ...names.map((name) => `<span class="overview-node external">${escapeHtml(name)}</span>`)
  ];
  return nodes.length ? nodes.join("") : `<span class="overview-node muted">${escapeHtml(emptyText)}</span>`;
}

function getVisibleItems() {
  const terms = searchTokens(state.query);
  return deities
    .filter((item) => state.group === "全部" || item.group === state.group)
    .filter((item) => {
      if (!terms.length) return true;
      const haystack = getSearchText(item);
      const compactHaystack = haystack.replace(/\s+/gu, "");
      return terms.every((term) => haystack.includes(term) || compactHaystack.includes(term.replace(/\s+/gu, "")));
    })
    .sort((a, b) => {
      if (terms.length) {
        const scoreDiff = itemSearchScore(b, terms) - itemSearchScore(a, terms);
        if (scoreDiff) return scoreDiff;
      }
      if (state.sort === "name") return a.name.localeCompare(b.name, "en");
      if (state.sort === "group") return a.group.localeCompare(b.group, "zh-Hans-CN") || a.rank - b.rank;
      return a.rank - b.rank;
    });
}

function renderCatalog() {
  const items = getVisibleItems();
  els.totalCount.textContent = String(deities.length);
  els.visibleCount.textContent = String(items.length);

  if (imageObserver) imageObserver.disconnect();

  if (!items.length) {
    els.catalog.innerHTML = `<div class="empty-state">没有找到匹配的神祇。换一个英文名、中文名、领域或艺术家试试。</div>`;
    return;
  }

  els.catalog.innerHTML = items.map(renderCard).join("");
  hydrateImages();
}

function renderCard(item) {
  const story = getStory(item);
  const profile = visualProfile(item);
  return `
    <article class="deity-card" data-id="${escapeHtml(item.id)}">
      <div class="art-frame" data-image-id="${escapeHtml(item.id)}">
        <div class="image-placeholder">${escapeHtml(item.name.slice(0, 1))}</div>
        <img alt="${escapeHtml(item.name)} 的现代生成全身形象" hidden>
        ${renderPortraitQuickLabel(item, profile)}
        <span class="rank-badge">#${item.rank}</span>
        <span class="group-badge">${escapeHtml(item.group)}</span>
      </div>
      <div class="card-body">
        <div class="card-title-row">
          <button class="name-button" type="button" data-speak="${escapeHtml(item.id)}" data-speak-lang="en" title="朗读英文名 ${escapeHtml(item.name)}">
            <strong>${escapeHtml(item.name)}</strong>
            <span>${escapeHtml(item.pronunciation)}</span>
          </button>
          <span class="cn-name">${escapeHtml(item.cn)}</span>
        </div>
        <div class="pronunciation">点击英文名听英文发音；点击希腊文听希腊语读法</div>
        ${tagList(item.domains, "domain-list")}
        ${renderImageMemoryCue(item, profile)}
        <p class="summary">${escapeHtml(item.summary)}</p>
        <p class="artwork-line"><span>经典艺术参考</span>${escapeHtml(item.artwork.title)} · ${escapeHtml(item.artwork.artist)} · ${escapeHtml(item.artwork.year)}</p>
        <p class="story-line"><span>代表小故事</span>${escapeHtml(story.titleZh)} · ${escapeHtml(story.titleEn)}</p>
        <div class="card-footer">
          <button class="greek-name" type="button" data-speak="${escapeHtml(item.id)}" data-speak-lang="el" title="朗读希腊文名 ${escapeHtml(item.greek)}">${escapeHtml(item.greek)}</button>
          <button class="card-action" type="button" data-detail="${escapeHtml(item.id)}">详情</button>
        </div>
      </div>
    </article>
  `;
}

function renderImageMemoryCue(item, profile) {
  return `
    <p class="image-memory">
      <span>看图记忆点</span>
      ${escapeHtml(cardImageCue(item, profile))}
    </p>
  `;
}

function renderPortraitQuickLabel(item, profile) {
  const [propLabel] = propVisualNotes[profile.prop] || propVisualNotes.laurel;
  return `
    <div class="portrait-quick-label" aria-label="${escapeHtml(item.cn)} 形象重点">
      <strong>${escapeHtml(propLabel)}</strong>
      <span>${escapeHtml(item.domains.slice(0, 2).join(" / "))}</span>
    </div>
  `;
}

function cardImageCue(item, profile) {
  const [propLabel] = propVisualNotes[profile.prop] || propVisualNotes.laurel;
  const domains = item.domains.slice(0, 2).join("、");
  const symbols = item.symbols.slice(0, 2).join("、");
  return `先认${propLabel}，再记${item.cn}掌管${domains}；画面里的${symbols}就是最重要的提示。`;
}

function tagList(items, className) {
  return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function hydrateImages() {
  const frames = [...document.querySelectorAll("[data-image-id]")];
  const eagerFrames = frames.slice(0, 8);
  const lazyFrames = frames.slice(8);
  eagerFrames.forEach(loadImage);

  if ("IntersectionObserver" in window) {
    imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageObserver.unobserve(entry.target);
          loadImage(entry.target);
        }
      });
    }, { rootMargin: "220px" });
    lazyFrames.forEach((frame) => imageObserver.observe(frame));
  } else {
    lazyFrames.forEach(loadImage);
  }
}

async function loadImage(frame) {
  if (frame.dataset.loaded === "true") return;
  frame.dataset.loaded = "true";
  const item = deities.find((entry) => entry.id === frame.dataset.imageId);
  if (!item) return;

  setFrameImage(frame, deityImageSource(item));
}

function deityImageSource(item) {
  if (rasterPortraitIds.has(item.id)) {
    return `assets/deities/${item.id}.jpg`;
  }
  return generatedDeityPortrait(item);
}

function setFrameImage(frame, source) {
  const img = frame.querySelector("img");
  const placeholder = frame.querySelector(".image-placeholder");
  img.addEventListener("load", () => {
    img.hidden = false;
    if (placeholder) placeholder.hidden = true;
  }, { once: true });
  img.addEventListener("error", () => {
    if (!img.dataset.fallback) {
      img.dataset.fallback = "true";
      img.src = generatedDeityPortrait(itemFromFrame(frame));
      return;
    }
    img.hidden = true;
    if (placeholder) placeholder.hidden = false;
  }, { once: true });
  img.src = source;
}

function itemFromFrame(frame) {
  return deities.find((entry) => entry.id === frame.dataset.imageId) || deities[0];
}

function generatedDeityPortrait(item) {
  const profile = visualProfile(item);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 980" role="img" aria-label="${escapeHtml(item.name)} full body generated deity portrait">
      <defs>
        <linearGradient id="bg-${item.id}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${profile.bg1}"/>
          <stop offset="0.58" stop-color="${profile.bg2}"/>
          <stop offset="1" stop-color="#f8f3e8"/>
        </linearGradient>
        <radialGradient id="halo-${item.id}" cx="50%" cy="26%" r="38%">
          <stop offset="0" stop-color="#fffdf8" stop-opacity="0.95"/>
          <stop offset="0.62" stop-color="#fffdf8" stop-opacity="0.32"/>
          <stop offset="1" stop-color="#fffdf8" stop-opacity="0"/>
        </radialGradient>
        <filter id="shadow-${item.id}" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#1f2430" flood-opacity="0.2"/>
        </filter>
      </defs>
      <rect width="720" height="980" fill="url(#bg-${item.id})"/>
      ${sceneSvg(profile)}
      <circle cx="360" cy="255" r="230" fill="url(#halo-${item.id})"/>
      <g filter="url(#shadow-${item.id})">
        ${auraSvg(profile)}
        ${figureSvg(profile)}
        ${propSvg(profile)}
      </g>
      <path d="M110 902 C210 858 510 858 610 902" fill="none" stroke="${profile.accent}" stroke-width="10" opacity="0.24"/>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function visualProfile(item) {
  const theme = groupThemes[item.group] || groupThemes["著名小神"];
  const seed = hashId(item.id);
  const prop = pickVisualProp(item);
  const feminine = feminineIds.has(item.id);
  const skin = ["#c98f68", "#b87958", "#d7a27c", "#a86c4e"][seed % 4];
  const hair = feminine
    ? ["#1f1b1a", "#6a432b", "#8a5c32", "#2c2630"][seed % 4]
    : ["#1c1718", "#5a3828", "#7a512f", "#252331"][seed % 4];
  return {
    ...theme,
    item,
    seed,
    prop,
    feminine,
    skin,
    hair,
    robe: theme.robe,
    side: seed % 2 ? -1 : 1,
    description: `现代生成全身形象：突出${item.domains.slice(0, 2).join("、")}，主视觉符号为${item.symbols.slice(0, 3).join("、")}。`
  };
}

function hashId(value) {
  return [...value].reduce((total, char) => ((total * 31) + char.charCodeAt(0)) % 997, 17);
}

function pickVisualProp(item) {
  const text = `${item.id} ${item.name} ${item.domains.join(" ")} ${item.symbols.join(" ")}`.toLowerCase();
  const exact = {
    zeus: "lightning", hera: "peacock", poseidon: "trident", demeter: "wheat", athena: "owlShield",
    apollo: "sunLyre", artemis: "moonBow", ares: "spearShield", aphrodite: "shellRose",
    hephaestus: "hammerAnvil", hermes: "caduceus", dionysus: "grapesCup", hades: "bident",
    hestia: "hearth", persephone: "pomegranate", helios: "sunChariot", selene: "moon",
    eos: "dawn", hecate: "twinTorches", pan: "pipes", asclepius: "serpentStaff",
    eros: "bow", nike: "laurel", hebe: "cup", iris: "rainbow", hygieia: "serpentStaff",
    hypnos: "poppy", thanatos: "downTorch", morpheus: "poppy", nemesis: "scales", tyche: "cornucopia",
    themis: "scalesSword", rhea: "lionDrum", cronus: "sickle", oceanus: "waveHorn",
    leto: "flowers", hyperion: "light", theia: "light", coeus: "stars", phoebe: "moon",
    iapetus: "chains", crius: "stars", mnemosyne: "scroll", epimetheus: "scroll",
    metis: "owlShield", dione: "shellRose", astraeus: "stars", amphitrite: "wave",
    triton: "waveHorn", proteus: "wave", nereus: "waveHorn", thetis: "wave", galatea: "wave",
    boreas: "wind", zephyrus: "wind", notus: "wind", eurus: "wind", aeolus: "wind",
    glaucus: "wave", leucothea: "wave", atlas: "globe", prometheus: "fireChain",
    gaia: "earthFruit", uranus: "starScythe", nyx: "nightStars", erebus: "nightStars",
    tartarus: "void", aether: "light", hemera: "dawn", pontus: "wave", chaos: "void",
    phanes: "cosmicEgg", clotho: "spindle",
    lachesis: "measureThread", atropos: "shears", eris: "apple", harmonia: "necklace",
    enyo: "spearShield", deimos: "mask", phobos: "mask", eileithyia: "torch",
    peitho: "flowers", hymen: "torch", priapus: "earthFruit", anteros: "bow",
    kratos: "chains", bia: "chains", zelus: "flame", aglaea: "flowers",
    calliope: "scroll", clio: "scroll", erato: "lyre", euterpe: "lyre",
    melpomene: "mask", polyhymnia: "scroll", terpsichore: "lyre", "thalia-muse": "mask",
    urania: "globeCompass", maia: "stars"
  };
  if (exact[item.id]) return exact[item.id];
  if (text.includes("三叉戟")) return "trident";
  if (text.includes("霹雳") || text.includes("雷霆")) return "lightning";
  if (text.includes("孔雀")) return "peacock";
  if (text.includes("麦") || text.includes("谷物")) return "wheat";
  if (text.includes("猫头鹰") || text.includes("盾")) return "owlShield";
  if (text.includes("弓")) return text.includes("月") ? "moonBow" : "bow";
  if (text.includes("里拉") || text.includes("音乐")) return "lyre";
  if (text.includes("葡萄") || text.includes("酒")) return "grapesCup";
  if (text.includes("火炬")) return "torch";
  if (text.includes("蛇杖") || text.includes("蛇")) return "serpentStaff";
  if (text.includes("天平")) return "scales";
  if (text.includes("卷轴") || text.includes("书")) return "scroll";
  if (text.includes("星") || text.includes("天文")) return "stars";
  if (text.includes("光") || text.includes("明亮") || text.includes("视觉")) return "light";
  if (text.includes("彩虹")) return "rainbow";
  if (text.includes("海") || text.includes("浪")) return "wave";
  if (text.includes("风")) return "wind";
  if (text.includes("花")) return "flowers";
  if (text.includes("面具")) return "mask";
  if (text.includes("锁链")) return "chains";
  if (text.includes("火")) return "flame";
  if (text.includes("杯")) return "cup";
  return "laurel";
}

function sceneSvg(profile) {
  const { item, accent } = profile;
  const group = item.group;
  const rings = `<circle cx="360" cy="285" r="250" fill="none" stroke="${accent}" stroke-width="2" opacity="0.18"/><circle cx="360" cy="285" r="185" fill="none" stroke="${accent}" stroke-width="2" opacity="0.16"/>`;
  if (group === "海洋与风") return `${rings}<path d="M0 820 C120 760 220 880 360 815 C500 750 580 858 720 800 L720 980 L0 980 Z" fill="${accent}" opacity="0.16"/><path d="M48 138 C150 108 240 128 330 102 C450 66 560 94 668 68" fill="none" stroke="#fffdf8" stroke-width="18" opacity="0.42"/>`;
  if (group === "原初神") return `${rings}<path d="M80 160 L640 820" stroke="${accent}" stroke-width="70" opacity="0.08"/><circle cx="118" cy="122" r="8" fill="#fffdf8" opacity="0.9"/><circle cx="612" cy="162" r="6" fill="#fffdf8" opacity="0.8"/><circle cx="566" cy="742" r="7" fill="#fffdf8" opacity="0.75"/>`;
  if (group === "命运与人格化") return `${rings}<path d="M95 160 C235 210 260 104 360 170 C470 244 540 144 635 196" fill="none" stroke="${accent}" stroke-width="8" opacity="0.22"/><path d="M122 812 C260 770 476 792 602 740" fill="none" stroke="${accent}" stroke-width="6" opacity="0.18"/>`;
  if (group === "缪斯与美惠") return `${rings}<path d="M120 830 C180 760 258 780 316 712 C378 640 480 690 566 612" fill="none" stroke="${accent}" stroke-width="9" opacity="0.2"/><circle cx="178" cy="188" r="34" fill="#fffdf8" opacity="0.4"/><circle cx="564" cy="216" r="24" fill="#fffdf8" opacity="0.32"/>`;
  if (group === "冥界与家宅") return `${rings}<path d="M0 800 C170 760 240 792 360 745 C482 698 560 742 720 690 L720 980 L0 980 Z" fill="#1f2430" opacity="0.13"/><path d="M155 170 C235 112 485 110 568 178" fill="none" stroke="${accent}" stroke-width="12" opacity="0.18"/>`;
  return `${rings}<path d="M116 830 L604 830" stroke="${accent}" stroke-width="16" opacity="0.14"/><path d="M160 830 L220 184 L500 184 L560 830" stroke="${accent}" stroke-width="8" opacity="0.11" fill="none"/>`;
}

function auraSvg(profile) {
  const winged = /wing|rainbow|dawn|nike|eros|iris|eos|wind/i.test(`${profile.prop} ${profile.item.id} ${profile.item.symbols.join(" ")}`);
  if (winged) {
    return `<path d="M348 326 C188 230 98 318 86 508 C188 430 260 450 337 556 Z" fill="#fffdf8" opacity="0.58"/><path d="M372 326 C532 230 622 318 634 508 C532 430 460 450 383 556 Z" fill="#fffdf8" opacity="0.58"/>`;
  }
  if (/night|star|sun|moon|light|cosmic|globe/.test(profile.prop)) {
    return `<circle cx="360" cy="245" r="160" fill="none" stroke="${profile.metal}" stroke-width="18" opacity="0.22"/><circle cx="360" cy="245" r="112" fill="none" stroke="#fffdf8" stroke-width="7" opacity="0.45"/>`;
  }
  return `<path d="M240 336 C270 204 450 204 480 336 C458 300 264 300 240 336 Z" fill="#fffdf8" opacity="0.26"/>`;
}

function figureSvg(profile) {
  const { accent, robe, metal, skin, hair, feminine, item } = profile;
  const helmet = /athena|ares|enyo|deimos|phobos|spearShield|owlShield/.test(`${item.id} ${profile.prop}`);
  const seaTail = /triton|glaucus|nereus|waveHorn/.test(`${item.id} ${profile.prop}`);
  const goat = item.id === "pan";
  const crown = /zeus|hera|hades|poseidon|cronus|rhea|atlas|gaia|uranus|tyche|oceanus|amphitrite/.test(item.id);
  const torso = feminine
    ? `<path d="M292 352 C316 326 404 326 428 352 L458 612 C414 652 306 652 262 612 Z" fill="${robe}"/><path d="M300 382 C330 414 392 414 420 382" fill="none" stroke="${accent}" stroke-width="11" opacity="0.55"/>`
    : `<path d="M286 350 C316 324 404 324 434 350 L454 604 C414 642 306 642 266 604 Z" fill="${robe}"/><path d="M296 372 L424 372 L410 492 L310 492 Z" fill="${accent}" opacity="0.24"/>`;
  const lower = seaTail
    ? `<path d="M296 608 C355 676 386 730 370 812 C420 792 464 812 504 868 C404 866 302 858 216 882 C260 816 314 760 302 670 Z" fill="${accent}" opacity="0.62"/><path d="M300 688 C354 714 426 718 474 694" fill="none" stroke="#fffdf8" stroke-width="8" opacity="0.35"/>`
    : goat
      ? `<path d="M306 604 C292 680 282 752 250 838" fill="none" stroke="${hair}" stroke-width="28" stroke-linecap="round"/><path d="M414 604 C428 680 438 752 470 838" fill="none" stroke="${hair}" stroke-width="28" stroke-linecap="round"/><path d="M232 850 L284 850" stroke="${hair}" stroke-width="18" stroke-linecap="round"/><path d="M436 850 L488 850" stroke="${hair}" stroke-width="18" stroke-linecap="round"/>`
      : `<path d="M302 604 C288 694 278 768 252 846" fill="none" stroke="${robe}" stroke-width="34" stroke-linecap="round"/><path d="M418 604 C432 694 442 768 468 846" fill="none" stroke="${robe}" stroke-width="34" stroke-linecap="round"/><path d="M218 858 L292 858" stroke="${accent}" stroke-width="16" stroke-linecap="round" opacity="0.52"/><path d="M428 858 L502 858" stroke="${accent}" stroke-width="16" stroke-linecap="round" opacity="0.52"/>`;
  const headpiece = helmet
    ? `<path d="M292 212 C318 150 404 150 428 212 L420 226 C390 196 330 196 300 226 Z" fill="${metal}"/><path d="M358 136 C378 170 392 188 394 218" stroke="${accent}" stroke-width="14" stroke-linecap="round"/>`
    : crown
      ? `<path d="M292 194 L316 158 L342 192 L366 154 L394 192 L420 158 L430 202 Z" fill="${metal}"/>`
      : `<path d="M290 206 C310 154 412 154 430 206 C402 180 320 180 290 206 Z" fill="${hair}"/>`;
  const hairShape = feminine
    ? `<path d="M276 220 C280 146 438 146 444 222 C428 330 292 330 276 220 Z" fill="${hair}" opacity="0.94"/>`
    : `<path d="M292 214 C302 162 418 162 428 214 C394 198 326 198 292 214 Z" fill="${hair}"/>`;
  return `
    <ellipse cx="360" cy="882" rx="158" ry="38" fill="#1f2430" opacity="0.16"/>
    ${hairShape}
    <circle cx="360" cy="236" r="58" fill="${skin}"/>
    ${headpiece}
    <path d="M338 258 C350 270 372 270 384 258" fill="none" stroke="#5a342b" stroke-width="6" stroke-linecap="round" opacity="0.55"/>
    <path d="M292 352 C240 402 218 472 196 552" fill="none" stroke="${skin}" stroke-width="30" stroke-linecap="round"/>
    <path d="M428 352 C480 402 502 472 524 552" fill="none" stroke="${skin}" stroke-width="30" stroke-linecap="round"/>
    ${torso}
    <path d="M272 430 L448 430" stroke="${metal}" stroke-width="13" stroke-linecap="round" opacity="0.82"/>
    ${lower}
  `;
}

function propSvg(profile) {
  const { prop, accent, metal } = profile;
  const common = { accent, metal };
  const propMap = {
    lightning: lightningSvg, peacock: peacockSvg, trident: tridentSvg, wheat: wheatSvg, owlShield: owlShieldSvg,
    sunLyre: sunLyreSvg, moonBow: moonBowSvg, spearShield: spearShieldSvg, shellRose: shellRoseSvg,
    hammerAnvil: hammerAnvilSvg, caduceus: caduceusSvg, grapesCup: grapesCupSvg, bident: bidentSvg,
    hearth: hearthSvg, pomegranate: pomegranateSvg, sunChariot: sunChariotSvg, moon: moonSvg, dawn: dawnSvg,
    twinTorches: twinTorchesSvg, pipes: pipesSvg, serpentStaff: serpentStaffSvg, poppy: poppySvg,
    downTorch: downTorchSvg, scales: scalesSvg, cornucopia: cornucopiaSvg, scalesSword: scalesSwordSvg,
    lionDrum: drumSvg, sickle: sickleSvg, waveHorn: waveSvg, globe: globeSvg, fireChain: fireChainSvg,
    earthFruit: earthFruitSvg, starScythe: starScytheSvg, nightStars: starsSvg, void: voidSvg,
    cosmicEgg: cosmicEggSvg, spindle: spindleSvg, measureThread: measureThreadSvg, shears: shearsSvg,
    apple: appleSvg, necklace: necklaceSvg, globeCompass: globeCompassSvg, bow: moonBowSvg, lyre: sunLyreSvg,
    torch: twinTorchesSvg, scroll: scrollSvg, stars: starsSvg, light: starsSvg, rainbow: windSvg,
    wave: waveSvg, wind: windSvg, flowers: flowersSvg,
    mask: maskSvg, chains: fireChainSvg, flame: hearthSvg, cup: grapesCupSvg, laurel: laurelSvg
  };
  return (propMap[prop] || laurelSvg)(common);
}

function lightningSvg({ metal }) {
  return `<path d="M518 132 L454 348 L520 328 L448 612 L596 286 L526 304 L588 132 Z" fill="${metal}" stroke="#fff5ce" stroke-width="7"/>`;
}

function tridentSvg({ accent, metal }) {
  return `<path d="M520 148 L520 760" stroke="${metal}" stroke-width="14" stroke-linecap="round"/><path d="M472 178 L520 126 L568 178 M480 138 L480 224 M560 138 L560 224" fill="none" stroke="${metal}" stroke-width="13" stroke-linecap="round"/><path d="M496 392 C570 356 620 360 672 402" fill="none" stroke="${accent}" stroke-width="10" opacity="0.55"/>`;
}

function peacockSvg({ accent, metal }) {
  return `<path d="M168 254 C92 170 112 86 226 96 C280 108 308 160 296 236 C260 186 218 186 168 254 Z" fill="${accent}" opacity="0.32"/><circle cx="214" cy="154" r="20" fill="${metal}"/><circle cx="214" cy="154" r="8" fill="#1f2430"/><path d="M236 510 C170 442 150 330 196 248" fill="none" stroke="${accent}" stroke-width="12" stroke-linecap="round"/>`;
}

function wheatSvg({ accent, metal }) {
  return `<path d="M196 250 L196 724" stroke="${accent}" stroke-width="11" stroke-linecap="round"/><path d="M196 320 C146 284 148 238 194 220 C242 244 238 290 196 320 Z M196 410 C146 374 148 328 194 310 C242 334 238 380 196 410 Z M196 500 C146 464 148 418 194 400 C242 424 238 470 196 500 Z" fill="${metal}" opacity="0.9"/>`;
}

function owlShieldSvg({ accent, metal }) {
  return `<path d="M168 402 C230 372 282 410 282 486 C282 560 230 618 168 642 C106 618 54 560 54 486 C54 410 106 372 168 402 Z" fill="${accent}" opacity="0.76"/><circle cx="146" cy="478" r="17" fill="#fffdf8"/><circle cx="190" cy="478" r="17" fill="#fffdf8"/><path d="M168 496 L154 526 L182 526 Z" fill="${metal}"/><path d="M122 444 L146 420 L170 444 L194 420 L218 444" fill="none" stroke="${metal}" stroke-width="8" stroke-linecap="round"/>`;
}

function sunLyreSvg({ accent, metal }) {
  return `<circle cx="538" cy="190" r="52" fill="${metal}" opacity="0.78"/><path d="M492 420 C492 330 584 330 584 420 C584 498 492 498 492 420 Z" fill="none" stroke="${accent}" stroke-width="13"/><path d="M512 360 L512 492 M536 346 L536 506 M560 360 L560 492" stroke="${metal}" stroke-width="5"/>`;
}

function moonBowSvg({ accent, metal }) {
  return `<path d="M544 150 C498 182 498 250 544 282 C488 270 456 226 466 182 C474 146 504 126 544 150 Z" fill="${metal}" opacity="0.78"/><path d="M160 304 C238 428 238 570 160 694" fill="none" stroke="${accent}" stroke-width="14" stroke-linecap="round"/><path d="M160 304 L160 694" stroke="${metal}" stroke-width="5"/><path d="M166 500 L298 468" stroke="${metal}" stroke-width="7" stroke-linecap="round"/>`;
}

function spearShieldSvg({ accent, metal }) {
  return `<path d="M540 158 L540 760" stroke="${metal}" stroke-width="11" stroke-linecap="round"/><path d="M540 120 L512 180 L568 180 Z" fill="${metal}"/><path d="M172 402 C238 396 280 438 272 512 C264 588 214 626 172 646 C130 626 80 588 72 512 C64 438 106 396 172 402 Z" fill="${accent}" opacity="0.78"/><path d="M116 510 L228 510" stroke="${metal}" stroke-width="10" opacity="0.7"/>`;
}

function shellRoseSvg({ accent, metal }) {
  return `<path d="M516 520 C470 470 470 390 516 342 C562 390 562 470 516 520 Z" fill="${metal}" opacity="0.58"/><path d="M452 520 C486 434 546 434 580 520" fill="none" stroke="${accent}" stroke-width="12"/><circle cx="188" cy="300" r="28" fill="#c65f6d"/><path d="M188 272 C230 292 218 334 188 328 C158 334 146 292 188 272 Z" fill="#e8909a"/>`;
}

function hammerAnvilSvg({ accent, metal }) {
  return `<path d="M504 278 L596 370" stroke="${metal}" stroke-width="18" stroke-linecap="round"/><path d="M456 244 L528 172 L574 218 L502 290 Z" fill="${accent}"/><path d="M118 682 L270 682 L232 746 L154 746 Z" fill="${metal}" opacity="0.86"/><path d="M134 642 L258 642 L270 682 L118 682 Z" fill="${accent}" opacity="0.72"/>`;
}

function caduceusSvg({ accent, metal }) {
  return `<path d="M528 170 L528 728" stroke="${metal}" stroke-width="10" stroke-linecap="round"/><path d="M486 232 C420 190 418 282 528 302 C638 322 636 414 488 378 M570 232 C636 190 638 282 528 302 C418 322 420 414 568 378" fill="none" stroke="${accent}" stroke-width="8" stroke-linecap="round"/><path d="M492 180 C460 152 424 154 398 184 M564 180 C596 152 632 154 658 184" fill="none" stroke="${metal}" stroke-width="9" stroke-linecap="round"/>`;
}

function grapesCupSvg({ accent, metal }) {
  return `<path d="M508 368 L594 368 C586 438 562 472 552 528 L550 600 L580 600" fill="none" stroke="${metal}" stroke-width="11" stroke-linecap="round"/><circle cx="166" cy="286" r="18" fill="#6e375c"/><circle cx="198" cy="306" r="18" fill="#7b4169"/><circle cx="150" cy="326" r="18" fill="#58304f"/><circle cx="184" cy="348" r="18" fill="#734071"/><path d="M164 264 C170 222 214 218 238 238" fill="none" stroke="${accent}" stroke-width="8" stroke-linecap="round"/>`;
}

function bidentSvg({ metal }) {
  return `<path d="M518 160 L518 760" stroke="${metal}" stroke-width="13" stroke-linecap="round"/><path d="M482 168 L518 120 L554 168 M486 130 L486 228 M550 130 L550 228" fill="none" stroke="${metal}" stroke-width="12" stroke-linecap="round"/><path d="M144 560 L214 560 L214 630 L144 630 Z M214 594 L264 594" fill="none" stroke="${metal}" stroke-width="10" stroke-linejoin="round"/>`;
}

function hearthSvg({ accent, metal }) {
  return `<path d="M158 628 C126 568 176 526 166 478 C218 528 232 572 206 628 Z" fill="${metal}"/><path d="M194 634 C172 590 210 560 206 524 C252 570 258 608 232 634 Z" fill="${accent}"/><path d="M100 660 L276 660 L250 730 L126 730 Z" fill="${accent}" opacity="0.42"/>`;
}

function pomegranateSvg({ accent, metal }) {
  return `<circle cx="172" cy="420" r="54" fill="#9d2f3f"/><path d="M148 370 L172 338 L196 370" fill="${metal}"/><circle cx="152" cy="420" r="7" fill="#f5d6a2"/><circle cx="178" cy="440" r="7" fill="#f5d6a2"/><circle cx="196" cy="410" r="7" fill="#f5d6a2"/><path d="M526 600 C566 552 610 548 650 594" fill="none" stroke="${accent}" stroke-width="9" stroke-linecap="round"/>`;
}

function sunChariotSvg({ metal }) {
  return `<circle cx="546" cy="178" r="60" fill="${metal}" opacity="0.86"/><path d="M478 178 L614 178 M546 110 L546 246 M500 132 L592 224 M592 132 L500 224" stroke="#fff5ce" stroke-width="8" stroke-linecap="round"/><path d="M116 652 C198 604 262 612 308 662" fill="none" stroke="${metal}" stroke-width="10"/><circle cx="148" cy="688" r="22" fill="none" stroke="${metal}" stroke-width="9"/><circle cx="266" cy="688" r="22" fill="none" stroke="${metal}" stroke-width="9"/>`;
}

function moonSvg({ metal }) {
  return `<path d="M548 150 C488 196 492 292 556 334 C468 326 412 258 424 196 C434 144 480 118 548 150 Z" fill="${metal}" opacity="0.8"/>`;
}

function dawnSvg({ accent, metal }) {
  return `<path d="M102 252 C230 168 482 168 618 252" fill="none" stroke="${metal}" stroke-width="18" opacity="0.55"/><path d="M120 284 C244 224 478 224 600 284" fill="none" stroke="${accent}" stroke-width="10" opacity="0.45"/>`;
}

function twinTorchesSvg({ accent, metal }) {
  return `<path d="M174 310 L174 692 M546 310 L546 692" stroke="${metal}" stroke-width="10" stroke-linecap="round"/><path d="M150 298 C132 254 174 226 166 190 C214 234 222 276 190 304 Z M522 298 C504 254 546 226 538 190 C586 234 594 276 562 304 Z" fill="${accent}"/><path d="M166 292 C158 260 182 242 184 222 C206 254 202 282 186 298 Z M538 292 C530 260 554 242 556 222 C578 254 574 282 558 298 Z" fill="${metal}"/>`;
}

function pipesSvg({ accent, metal }) {
  return `<path d="M152 374 L152 560 M178 350 L178 560 M204 332 L204 560 M230 356 L230 560 M256 386 L256 560" stroke="${metal}" stroke-width="14" stroke-linecap="round"/><path d="M136 560 L272 560" stroke="${accent}" stroke-width="12" stroke-linecap="round"/>`;
}

function serpentStaffSvg({ accent, metal }) {
  return `<path d="M532 168 L532 760" stroke="${metal}" stroke-width="10" stroke-linecap="round"/><path d="M494 250 C438 218 436 300 532 318 C628 336 626 418 496 394 C432 382 450 476 532 488 C614 500 628 574 502 558" fill="none" stroke="${accent}" stroke-width="10" stroke-linecap="round"/><circle cx="498" cy="558" r="10" fill="${accent}"/>`;
}

function poppySvg({ accent, metal }) {
  return `<path d="M176 320 C160 254 226 226 260 274 C302 232 360 284 318 338 C350 390 276 422 244 368 C202 420 130 384 176 320 Z" fill="${accent}" opacity="0.82"/><circle cx="244" cy="326" r="18" fill="${metal}"/><path d="M244 344 L244 650" stroke="${metal}" stroke-width="9" stroke-linecap="round"/>`;
}

function downTorchSvg({ accent, metal }) {
  return `<path d="M190 300 L190 760" stroke="${metal}" stroke-width="12" stroke-linecap="round"/><path d="M164 746 C140 690 196 664 184 622 C236 668 242 720 206 758 Z" fill="${accent}"/>`;
}

function scalesSvg({ accent, metal }) {
  return `<path d="M528 224 L528 642" stroke="${metal}" stroke-width="11"/><path d="M440 310 L616 310" stroke="${metal}" stroke-width="10" stroke-linecap="round"/><path d="M466 310 L430 420 L502 420 Z M590 310 L554 420 L626 420 Z" fill="none" stroke="${accent}" stroke-width="8" stroke-linejoin="round"/>`;
}

function cornucopiaSvg({ accent, metal }) {
  return `<path d="M130 536 C190 420 292 378 342 416 C280 462 262 562 306 662 C226 650 150 610 130 536 Z" fill="${accent}" opacity="0.72"/><circle cx="260" cy="398" r="18" fill="#9d2f3f"/><circle cx="292" cy="412" r="16" fill="${metal}"/><path d="M302 372 C340 338 388 354 408 390" fill="none" stroke="#6f7e3e" stroke-width="9" stroke-linecap="round"/>`;
}

function scalesSwordSvg({ accent, metal }) {
  return `${scalesSvg({ accent, metal })}<path d="M170 198 L170 692" stroke="${metal}" stroke-width="10"/><path d="M170 150 L142 220 L198 220 Z" fill="${metal}"/><path d="M132 300 L208 300" stroke="${accent}" stroke-width="10" stroke-linecap="round"/>`;
}

function drumSvg({ accent, metal }) {
  return `<ellipse cx="174" cy="530" rx="76" ry="48" fill="${metal}" opacity="0.86"/><path d="M104 530 C120 590 228 590 244 530" fill="none" stroke="${accent}" stroke-width="12"/><path d="M520 620 C570 568 630 604 632 674 C574 640 538 666 520 620 Z" fill="${accent}" opacity="0.38"/>`;
}

function sickleSvg({ accent, metal }) {
  return `<path d="M520 164 C618 244 596 408 484 464 C550 358 538 262 454 202 Z" fill="${metal}" opacity="0.86"/><path d="M452 206 L546 612" stroke="${accent}" stroke-width="14" stroke-linecap="round"/>`;
}

function waveSvg({ accent, metal }) {
  return `<path d="M110 606 C170 510 282 548 284 632 C238 590 184 620 166 682 C222 682 284 710 316 760 C218 742 140 704 110 606 Z" fill="${accent}" opacity="0.54"/><path d="M474 322 C546 276 612 302 638 366" fill="none" stroke="${metal}" stroke-width="11" stroke-linecap="round"/>`;
}

function globeSvg({ accent, metal }) {
  return `<circle cx="360" cy="182" r="82" fill="none" stroke="${metal}" stroke-width="12"/><path d="M278 182 L442 182 M360 100 C398 142 398 222 360 264 M360 100 C322 142 322 222 360 264" fill="none" stroke="${accent}" stroke-width="7" opacity="0.65"/><path d="M314 270 L284 390 M406 270 L436 390" stroke="${metal}" stroke-width="10" stroke-linecap="round"/>`;
}

function fireChainSvg({ accent, metal }) {
  return `${hearthSvg({ accent, metal })}<path d="M500 380 C548 344 600 378 590 430 C580 482 516 492 494 446 M560 448 C512 484 460 450 470 398 C480 346 544 336 566 382" fill="none" stroke="${metal}" stroke-width="12" stroke-linecap="round"/>`;
}

function earthFruitSvg({ accent, metal }) {
  return `<circle cx="180" cy="454" r="70" fill="${accent}" opacity="0.55"/><path d="M124 456 C176 420 206 496 258 452" fill="none" stroke="#6f7e3e" stroke-width="12"/><circle cx="222" cy="382" r="24" fill="${metal}"/>`;
}

function starScytheSvg({ accent, metal }) {
  return `${sickleSvg({ accent, metal })}${starsSvg({ accent, metal })}`;
}

function starsSvg({ accent, metal }) {
  return `<path d="M174 186 L190 226 L232 230 L200 256 L210 298 L174 276 L138 298 L148 256 L116 230 L158 226 Z" fill="${metal}" opacity="0.86"/><path d="M546 310 L556 336 L584 338 L562 356 L570 384 L546 370 L522 384 L530 356 L508 338 L536 336 Z" fill="${accent}" opacity="0.72"/>`;
}

function voidSvg({ accent }) {
  return `<circle cx="360" cy="286" r="118" fill="#1f2430" opacity="0.22"/><path d="M262 286 C306 196 414 196 458 286 C414 376 306 376 262 286 Z" fill="none" stroke="${accent}" stroke-width="14" opacity="0.6"/>`;
}

function cosmicEggSvg({ accent, metal }) {
  return `<ellipse cx="520" cy="286" rx="62" ry="94" fill="#fffdf8" opacity="0.75" stroke="${metal}" stroke-width="10"/><path d="M466 286 C508 230 548 342 590 286" fill="none" stroke="${accent}" stroke-width="9"/><path d="M492 196 C440 250 440 328 492 382 M548 196 C600 250 600 328 548 382" fill="none" stroke="${accent}" stroke-width="7" opacity="0.58"/>`;
}

function spindleSvg({ accent, metal }) {
  return `<path d="M528 204 L528 700" stroke="${metal}" stroke-width="9"/><ellipse cx="528" cy="452" rx="28" ry="82" fill="${accent}" opacity="0.52"/><path d="M528 234 C448 332 468 520 384 640" fill="none" stroke="#fffdf8" stroke-width="6"/>`;
}

function measureThreadSvg({ accent, metal }) {
  return `<path d="M130 404 C260 344 450 496 590 390" fill="none" stroke="${metal}" stroke-width="7"/><path d="M162 456 L336 456" stroke="${accent}" stroke-width="11" stroke-linecap="round"/><path d="M184 436 L184 476 M232 436 L232 476 M280 436 L280 476 M328 436 L328 476" stroke="${metal}" stroke-width="5"/>`;
}

function shearsSvg({ accent, metal }) {
  return `<circle cx="496" cy="512" r="28" fill="none" stroke="${metal}" stroke-width="10"/><circle cx="560" cy="512" r="28" fill="none" stroke="${metal}" stroke-width="10"/><path d="M516 492 L610 320 M540 492 L452 320" stroke="${accent}" stroke-width="12" stroke-linecap="round"/>`;
}

function appleSvg({ accent, metal }) {
  return `<circle cx="530" cy="400" r="46" fill="${metal}"/><path d="M530 354 C536 314 574 310 594 334" fill="none" stroke="${accent}" stroke-width="9" stroke-linecap="round"/><path d="M520 400 L540 400" stroke="#fff5ce" stroke-width="8" stroke-linecap="round"/>`;
}

function necklaceSvg({ metal }) {
  return `<path d="M286 388 C316 448 404 448 434 388" fill="none" stroke="${metal}" stroke-width="11" stroke-linecap="round"/><circle cx="360" cy="444" r="18" fill="${metal}"/>`;
}

function globeCompassSvg({ accent, metal }) {
  return `${globeSvg({ accent, metal })}<path d="M144 520 L252 382 M252 382 L230 456 M252 382 L178 404" stroke="${accent}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`;
}

function scrollSvg({ accent, metal }) {
  return `<path d="M122 380 L296 380 L296 570 L122 570 Z" fill="#fff8e8" stroke="${metal}" stroke-width="9"/><path d="M154 432 L264 432 M154 474 L264 474 M154 516 L230 516" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>`;
}

function windSvg({ accent, metal }) {
  return `<path d="M92 324 C188 272 260 300 286 354 C226 340 178 356 138 406 M414 266 C514 214 616 252 638 334 C566 304 510 322 464 382" fill="none" stroke="${accent}" stroke-width="13" stroke-linecap="round" opacity="0.65"/><path d="M190 590 C270 556 352 570 414 626" fill="none" stroke="${metal}" stroke-width="9" stroke-linecap="round"/>`;
}

function flowersSvg({ accent, metal }) {
  return `<circle cx="176" cy="374" r="20" fill="${metal}"/><path d="M176 332 C216 350 216 398 176 416 C136 398 136 350 176 332 Z" fill="${accent}" opacity="0.7"/><path d="M176 416 L176 664" stroke="#6f7e3e" stroke-width="9"/><path d="M176 508 C222 476 254 500 260 536" fill="none" stroke="#6f7e3e" stroke-width="8" stroke-linecap="round"/>`;
}

function maskSvg({ accent, metal }) {
  return `<path d="M504 356 C574 322 626 364 620 444 C614 526 558 566 504 586 C450 566 394 526 388 444 C382 364 434 322 504 356 Z" fill="${accent}" opacity="0.76"/><circle cx="474" cy="434" r="15" fill="#fffdf8"/><circle cx="536" cy="434" r="15" fill="#fffdf8"/><path d="M464 512 C494 488 532 488 562 512" fill="none" stroke="${metal}" stroke-width="8" stroke-linecap="round"/>`;
}

function laurelSvg({ accent, metal }) {
  return `<path d="M164 410 C122 500 144 606 234 678" fill="none" stroke="${accent}" stroke-width="10"/><path d="M154 448 C196 430 210 388 188 360 M146 510 C194 500 222 464 214 430 M166 574 C212 574 246 544 250 506 M204 636 C246 624 278 590 286 552" fill="none" stroke="${metal}" stroke-width="9" stroke-linecap="round"/>`;
}

function getStory(item) {
  return deityStories[item.id] || {
    titleZh: "代表神话片段",
    titleEn: "Representative myth",
    zh: item.summary,
    en: `${item.name} is introduced here through the most widely recognizable role in Greek mythology.`
  };
}

function getLineage(item) {
  return deityLineage[item.id] || {
    parents: [],
    parentNames: [],
    consorts: [],
    consortNames: [],
    children: [],
    childNames: [],
    siblings: [],
    siblingNames: [],
    notes: ["这位神祇的谱系在主流入门材料中不够稳定，详情以神职和代表故事为主。"]
  };
}

function relationSearchText(lineage) {
  return [
    ...(lineage.parents || []),
    ...(lineage.parentNames || []),
    ...(lineage.consorts || []),
    ...(lineage.consortNames || []),
    ...(lineage.children || []),
    ...(lineage.childNames || []),
    ...(lineage.siblings || []),
    ...(lineage.siblingNames || []),
    ...(lineage.notes || [])
  ].map((entry) => {
    const item = deities.find((deity) => deity.id === entry);
    return item ? `${item.name} ${item.cn}` : entry;
  }).join(" ");
}

function renderStoryBox(item) {
  const story = getStory(item);
  return `
    <section class="story-box">
      <h3>最有名的小故事</h3>
      <div class="story-title">
        <strong>${escapeHtml(story.titleZh)}</strong>
        <span>${escapeHtml(story.titleEn)}</span>
      </div>
      <p lang="zh-CN">${escapeHtml(story.zh)}</p>
      <p lang="en">${escapeHtml(story.en)}</p>
    </section>
  `;
}

function renderGeneratedBox(item, profile) {
  const guide = generatedImageGuide(item, profile);
  return `
    <section class="generated-box">
      <div class="generated-box-head">
        <h3>生成全身形象解读</h3>
        <span>看图线索</span>
      </div>
      <p class="kid-image-cue"><strong>先看一眼</strong>${escapeHtml(cardImageCue(item, profile))}</p>
      <p>${escapeHtml(profile.description)}</p>
      <div class="image-guide">
        ${guide.map(({ label, text }) => `
          <div class="image-guide-row">
            <strong>${escapeHtml(label)}</strong>
            <p>${escapeHtml(text)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderPronunciationBox(item) {
  return `
    <section class="pronunciation-box">
      <div class="pronunciation-box-head">
        <h3>发音练习</h3>
        <span>点击听读</span>
      </div>
      <div class="pronunciation-actions">
        <button class="pronunciation-action" type="button" data-speak="${escapeHtml(item.id)}" data-speak-lang="en" title="朗读英文名 ${escapeHtml(item.name)}">
          <span>英文名</span>
          <strong>${escapeHtml(item.name)}</strong>
          <em>${escapeHtml(item.pronunciation)}</em>
        </button>
        <button class="pronunciation-action" type="button" data-speak="${escapeHtml(item.id)}" data-speak-lang="el" title="朗读希腊文名 ${escapeHtml(item.greek)}">
          <span>希腊文名</span>
          <strong>${escapeHtml(item.greek)}</strong>
          <em>${escapeHtml(transliterateGreek(item.greek))}</em>
        </button>
      </div>
      <p>英文按英语世界常见读法朗读；希腊文会优先使用系统希腊语音，没有希腊语音时会提示为近似读法。</p>
    </section>
  `;
}

function renderAudioIntroBox(item, profile) {
  const intro = detailAudioIntro(item, profile);
  return `
    <section class="audio-intro-box" data-audio-intro="${escapeHtml(item.id)}" data-active-intro-lang="zh" data-active-intro-mode="quick" data-active-intro-speed="normal">
      <div class="audio-intro-head">
        <h3>语音简介</h3>
        <span data-intro-status>默认不自动播放</span>
      </div>
      <div class="audio-intro-controls">
        <div class="audio-intro-tabs" aria-label="${escapeHtml(item.name)} 语音简介语言">
          <button type="button" data-intro-switch="zh" aria-pressed="true">中文</button>
          <button type="button" data-intro-switch="en" aria-pressed="false">English</button>
        </div>
        <div class="audio-intro-tabs audio-intro-mode-tabs" aria-label="${escapeHtml(item.name)} 语音简介长度">
          <button type="button" data-intro-mode="quick" aria-pressed="true">快速版</button>
          <button type="button" data-intro-mode="story" aria-pressed="false">故事版</button>
        </div>
        <div class="audio-intro-tabs audio-intro-speed-tabs" aria-label="${escapeHtml(item.name)} 语音简介语速">
          <button type="button" data-intro-speed="normal" aria-pressed="true">标准语速</button>
          <button type="button" data-intro-speed="slow" aria-pressed="false">慢速</button>
        </div>
      </div>
      <div class="audio-intro-copy">
        <p data-intro-lang="zh" data-intro-mode-text="quick" lang="zh-CN">${escapeHtml(intro.zhQuick)}</p>
        <p data-intro-lang="zh" data-intro-mode-text="story" lang="zh-CN" hidden>${escapeHtml(intro.zhStory)}</p>
        <p data-intro-lang="en" data-intro-mode-text="quick" lang="en" hidden>${escapeHtml(intro.enQuick)}</p>
        <p data-intro-lang="en" data-intro-mode-text="story" lang="en" hidden>${escapeHtml(intro.enStory)}</p>
      </div>
      <div class="audio-intro-actions">
        <button class="audio-intro-play" type="button" data-intro-play>播放快速版</button>
        <button type="button" data-intro-pause disabled>暂停</button>
        <button type="button" data-intro-stop>停止</button>
      </div>
      <p class="audio-intro-note">快速版适合先认识神祇；故事版会补充谱系和代表故事。语音只会在点击后开始，可暂停或慢速跟读。</p>
    </section>
  `;
}

function detailAudioIntro(item, profile) {
  const story = getStory(item);
  const lineage = getLineage(item);
  const [propLabel] = propVisualNotes[profile.prop] || propVisualNotes.laurel;
  const parentNames = lineage.parents
    .map((id) => deities.find((entry) => entry.id === id)?.cn)
    .filter(Boolean)
    .slice(0, 2);
  const zhLineage = parentNames.length ? `常见谱系会把${item.cn}放在${parentNames.join("和")}这一支里，方便把人物关系连起来。` : "";
  const enGroup = termEnglish(item.group);
  const zhStoryFirst = firstSentence(story.zh);
  const enStoryFirst = firstSentence(story.en);
  const zhQuick = [
    `${item.cn}，英文名 ${item.name}，主要和${item.domains.slice(0, 3).join("、")}有关。`,
    `看图先认${propLabel}，再记住${item.symbols.slice(0, 2).join("、")}。`,
    `代表故事《${story.titleZh}》可以这样先记：${zhStoryFirst}`
  ].filter(Boolean).join("");
  const zhStory = [
    `${item.cn}，英文名 ${item.name}，是希腊神话中和${item.domains.slice(0, 3).join("、")}有关的神祇。`,
    item.summary,
    `看这张生成形象时，可以先认${propLabel}，再看${item.symbols.slice(0, 3).join("、")}，这些都是帮助记住${item.cn}的关键线索。`,
    zhLineage,
    `最有名的小故事是《${story.titleZh}》：${story.zh}`
  ].filter(Boolean).join("");
  const enDomains = englishTerms(item.domains, 3).join(", ");
  const enSymbols = englishTerms(item.symbols, 3).join(", ");
  const enQuick = [
    `${item.name} is connected with ${enDomains || "a distinctive divine role"}.`,
    `Look for ${enSymbols || "the main visual symbols"} in the portrait.`,
    `Remember ${story.titleEn} this way: ${enStoryFirst}`
  ].join(" ");
  const enStory = [
    `${item.name} belongs to ${enGroup} and is connected with ${enDomains || "a distinctive divine role"}.`,
    `In the portrait, look first for ${enSymbols || "the main visual symbols"}; those clues help you remember who this deity is.`,
    `${story.titleEn}: ${story.en}`
  ].join(" ");
  return { zhQuick, zhStory, enQuick, enStory };
}

function firstSentence(text) {
  const sentence = text.match(/^.+?[。！？.!?]/u)?.[0] || text;
  return sentence.trim();
}

function englishTerms(terms, limit) {
  return terms.slice(0, limit).map((term) => termEnglish(term));
}

function termEnglish(term) {
  const map = {
    奥林匹斯核心: "the core Olympian gods", 奥林匹斯主神: "the Olympian gods", 冥界与家宅: "the underworld and household gods",
    著名小神: "well-known minor gods", 泰坦神族: "the Titans", 海洋与风: "sea and wind deities",
    海洋与风神: "sea and wind deities", 原初神: "the primordial gods", 命运与人格化: "fate and personified powers",
    命运与人格化神祇: "fate and personified powers", 缪斯与美惠: "the Muses and the Graces",
    三美惠与缪斯: "the Graces and the Muses",
    天空: "sky", 雷霆: "thunder", 王权: "kingship", 婚姻: "marriage", 王后: "queenship", 家庭: "family",
    海洋: "the sea", 地震: "earthquakes", 马: "horses", 农业: "agriculture", 谷物: "grain", 母亲: "motherhood",
    智慧: "wisdom", 战略: "strategy", 工艺: "craft", 太阳: "the sun", 音乐: "music", 预言: "prophecy",
    月亮: "the moon", 狩猎: "hunting", 少女: "maidenhood", 战争: "war", 暴烈: "violent force", 勇武: "valor",
    爱欲: "desire", 美: "beauty", 魅力: "charm", 火: "fire", 锻造: "smithcraft", 工匠: "craftsmanship",
    信使: "messengers", 旅行: "travel", 商业: "commerce", 葡萄酒: "wine", 狂欢: "ecstasy", 戏剧: "theater",
    冥界: "the underworld", 财富: "wealth", 死者: "the dead", 炉火: "hearth fire", 家宅: "home", 城邦: "the city",
    春天: "spring", 冥后: "queen of the underworld", 重生: "rebirth", 吸引: "attraction", 生命力: "life force",
    胜利: "victory", 荣耀: "glory", 凯旋: "triumph", 青春: "youth", 侍酒: "cup-bearing", 复新: "renewal",
    彩虹: "rainbow", 传信: "divine messages", 誓言: "oaths", 光照: "sunlight", 见证: "witnessing",
    夜空: "the night sky", 爱情: "love", 黎明: "dawn", 晨光: "morning light", 新开始: "new beginnings",
    魔法: "magic", 岔路: "crossroads", 夜晚: "night", 牧野: "pastures", 山林: "wild hills", 野性音乐: "wild music",
    医术: "medicine", 疗愈: "healing", 神庙: "temple healing", 健康: "health", 卫生: "hygiene", 预防: "prevention",
    睡眠: "sleep", 梦境入口: "the gate of dreams", 安息: "rest", 死亡: "death", 安静终结: "quiet ending",
    命运: "fate", 梦: "dreams", 形象: "forms", 睡眠幻象: "sleep visions", 报应: "retribution", 尺度: "measure",
    傲慢惩罚: "punishment of pride", 幸运: "fortune", 城市命运: "city fortune", 偶然: "chance",
    神法: "divine law", 秩序: "order", 母性: "motherhood", 避难: "refuge", 神圣分娩: "sacred birth",
    母神: "mother goddess", 泰坦王后: "Titan queen", 保护幼子: "protecting a child", 时间: "time",
    泰坦王权: "Titan kingship", 吞噬: "devouring", 环世大河: "world-encircling river", 海洋边界: "ocean boundary",
    水源: "water source", 淡水: "fresh water", 母性水源: "motherly waters", 河流之母: "mother of rivers",
    高天之光: "heavenly light", 太阳血统: "solar lineage", 观照: "watching light", 光辉: "radiance",
    视觉: "sight", 贵金属光泽: "the gleam of precious metals", 理智: "intellect", 天轴: "axis of heaven",
    北方: "the north", 明亮: "brightness", 神谕: "oracle", 月性: "moonlike brightness", 人类祖先: "human ancestry",
    火种: "fire", 文明: "civilization", 牺牲: "sacrifice", 力量: "strength", 统治权: "rule", 强制: "compulsion",
    霹雳: "thunderbolt", 鹰: "eagle", 橡树: "oak", 孔雀: "peacock", 王冠: "crown", 石榴: "pomegranate",
    三叉戟: "trident", 海马: "sea horse", 海豚: "dolphin", 麦穗: "wheat", 火炬: "torch", 丰饶角: "cornucopia",
    猫头鹰: "owl", 橄榄树: "olive tree", 盾牌: "shield", 里拉琴: "lyre", 月桂: "laurel", 弓: "bow",
    弓箭: "bow and arrows", 鹿: "deer", 新月: "crescent moon", 头盔: "helmet", 长矛: "spear", 战车: "chariot",
    贝壳: "shell", 鸽子: "dove", 玫瑰: "rose", 铁砧: "anvil", 锤子: "hammer", 火焰: "flame",
    翼帽: "winged cap", 翼鞋: "winged sandals", 双蛇杖: "caduceus", 葡萄藤: "grapevine", 酒杯: "wine cup",
    豹: "leopard", 隐身盔: "helmet of invisibility", 双叉杖: "bident", 冥府犬: "hound of Hades",
    炉火: "hearth fire", 面纱: "veil", 圆形祭坛: "round altar", 鲜花: "flowers", 翅膀: "wings",
    桂冠: "laurel wreath", 棕榈枝: "palm branch", 水罐: "water jar", 太阳车: "sun chariot", 光冠: "radiant crown",
    月轮: "moon disk", 白马: "white horses", 银冠: "silver crown", 玫瑰色手指: "rosy fingers", 晨车: "dawn chariot",
    钥匙: "keys", 三重形象: "triple form", 排箫: "panpipes", 山羊角: "goat horns", 牧杖: "shepherd staff",
    蛇杖: "serpent staff", 药碗: "medicine bowl", 犬: "dog", 蛇: "serpent", 清洁: "cleanliness",
    罂粟: "poppy", 沉睡: "sleep", 倒置火炬: "inverted torch", 剑: "sword", 梦幕: "dream veil",
    人形: "human form", 天平: "scales", 轮: "wheel", 城冠: "city crown", 舵: "rudder", 卷轴: "scroll",
    双子: "twins", 棕榈: "palm", 狮子: "lion", 鼓: "drum", 石头: "stone", 镰刀: "sickle", 沙漏: "hourglass",
    水流: "flowing water", 牛角: "bull horn", 海蛇: "sea serpent", 鱼: "fish", 河流: "river", 金光: "golden light",
    眼睛: "eye", 宝石: "gem", 星空: "starry sky", 星轴: "star axis", 权杖: "scepter", 神谕三脚架: "oracle tripod",
    锁链: "chains", 金苹果: "golden apple", 项链: "necklace", 悲剧面具: "tragic mask", 喜剧面具: "comic mask",
    星球仪: "celestial globe", 圆规: "compass", 星冠: "star crown"
  };
  return map[term] || term;
}

function renderImageLegend(item, profile) {
  const [propLabel] = propVisualNotes[profile.prop] || propVisualNotes.laurel;
  const legendItems = [
    ["主符号", propLabel],
    ["神职", item.domains.slice(0, 2).join(" / ")],
    ["元素", item.symbols.slice(0, 3).join(" / ")]
  ];
  return `
    <div class="visual-legend" aria-label="${escapeHtml(item.name)} 生成图视觉图例">
      <strong>视觉图例</strong>
      <div class="legend-items">
        ${legendItems.map(([label, value]) => `
          <span class="legend-chip"><span>${escapeHtml(label)}</span>${escapeHtml(value)}</span>
        `).join("")}
      </div>
    </div>
  `;
}

function generatedImageGuide(item, profile) {
  const [propLabel, propMeaning] = propVisualNotes[profile.prop] || propVisualNotes.laurel;
  const domainText = item.domains.slice(0, 3).join("、");
  const symbolText = item.symbols.slice(0, 3).join("、");
  const groupNote = groupVisualNotes[item.group] || groupVisualNotes["著名小神"];
  return [
    {
      label: "构图",
      text: `采用全身站姿，是为了同时看清${item.cn}的神格气质、服饰轮廓和手中符号；画面优先服务于${domainText}这几个核心神职。`
    },
    {
      label: "主符号",
      text: `${propLabel}是这张图的第一识别点。${propMeaning}`
    },
    {
      label: "元素",
      text: `画面中的${symbolText}来自这位神最常见的传统象征，用来帮助观众把人物和神话职责快速对应起来。`
    },
    {
      label: "背景",
      text: groupNote
    }
  ];
}

function renderArtworkBox(item, profile) {
  const comparison = artworkComparison(item, profile);
  return `
    <section class="artwork-box">
      <div class="artwork-box-head">
        <h3>经典艺术作品知识点</h3>
        <span>${escapeHtml(comparison.mode)}</span>
      </div>
      <p><strong>${escapeHtml(item.artwork.title)}</strong></p>
      <p>${escapeHtml(item.artwork.artist)} · ${escapeHtml(item.artwork.year)}</p>
      <p>${escapeHtml(item.artwork.note)}</p>
      <div class="artwork-compare">
        ${comparison.rows.map(({ label, text }) => `
          <div class="artwork-compare-row">
            <strong>${escapeHtml(label)}</strong>
            <p>${escapeHtml(text)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function artworkComparison(item, profile) {
  const [propLabel] = propVisualNotes[profile.prop] || propVisualNotes.laurel;
  const mode = artworkReferenceMode(item.artwork);
  const supportSymbols = comparisonSymbols(item, propLabel);
  return {
    mode,
    rows: [
      {
        label: "现代主图",
        text: `本站生成图优先让${item.cn}一眼可辨，所以把${propLabel}作为第一识别点，再用${supportSymbols}和全身姿态补足传统象征。`
      },
      {
        label: mode,
        text: `这条经典参考来自 ${item.artwork.artist} 的《${item.artwork.title}》（${item.artwork.year}），更适合观察英语艺术史中常见的 ${item.name} 形象或相关母题。`
      },
      {
        label: "对照看法",
        text: "现代图偏向快速识别神职与象征，经典作品则常抓住某个故事瞬间、寓意传统或古典造型；两者合起来看，既能认出神，也能理解它在艺术史中的样子。"
      }
    ]
  };
}

function comparisonSymbols(item, propLabel) {
  const symbols = item.symbols.filter((symbol) => !symbolCoveredByProp(symbol, propLabel));
  return (symbols.length ? symbols : item.symbols).slice(0, 2).join("、");
}

function symbolCoveredByProp(symbol, propLabel) {
  const compactSymbol = symbol.replace(/(牌|杖|树|枝|车|冠|轮|杯|琴|花)$/u, "");
  return propLabel.includes(symbol)
    || (compactSymbol.length >= 1 && propLabel.includes(compactSymbol));
}

function artworkReferenceMode(artwork) {
  const text = `${artwork.title} ${artwork.artist} ${artwork.year} ${artwork.note}`;
  if (/(雕塑|statue|sculpture|relief|Canova|Bernini|Winged Victory)/iu.test(text)) return "雕塑参考";
  if (/(瓶画|陶瓶|马赛克|壁画|钱币|fresco|mosaic|vase|relief|tradition|imagery|无单一主流油画|传统)/iu.test(text)) return "图像传统";
  return "经典作品";
}

function renderLineageBox(item) {
  const lineage = getLineage(item);
  const rows = [
    ["父母", "Parents", lineage.parents, lineage.parentNames],
    ["配偶 / 伴侣", "Consorts", lineage.consorts, lineage.consortNames],
    ["子女", "Children", lineage.children, lineage.childNames],
    ["兄弟姐妹", "Siblings", lineage.siblings, lineage.siblingNames]
  ].map(([labelZh, labelEn, ids, names]) => renderRelationRow(labelZh, labelEn, ids, names)).join("");
  const notes = (lineage.notes || []).map((note) => `<li>${escapeHtml(note)}</li>`).join("");
  const sources = lineageSources.map((source) => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a>`).join("");

  return `
    <section class="lineage-box">
      <div class="lineage-box-head">
        <h3>谱系关系</h3>
        <span>主流谱系 + 异说提示</span>
      </div>
      ${renderAncestryPath(item)}
      ${renderLineageMap(item, lineage)}
      <div class="relation-grid">
        ${rows}
      </div>
      ${notes ? `<ul class="lineage-notes">${notes}</ul>` : ""}
      ${sources ? `<div class="source-links">${sources}</div>` : ""}
    </section>
  `;
}

function renderAncestryPath(item) {
  const levels = buildAncestryLevels(item);
  const hasAncestors = levels.some((level) => level.distance > 0);
  return `
    <div class="ancestry-path" aria-label="${escapeHtml(item.name)} 的谱系路径">
      <div class="ancestry-path-head">
        <strong>谱系路径</strong>
        <span>${hasAncestors ? "从远祖到当前神" : "作为谱系起点呈现"}</span>
      </div>
      <div class="ancestry-levels">
        ${levels.map(renderAncestryLevel).join("")}
      </div>
      ${hasAncestors ? "" : `<p class="ancestry-note">古代材料中没有稳定的父母线索，本站把它作为这一支谱系的起点。</p>`}
    </div>
  `;
}

function buildAncestryLevels(item) {
  const levels = [{ distance: 0, ids: [item.id], names: [] }];
  const visited = new Set([item.id]);
  let frontier = [item.id];

  for (let distance = 1; distance <= 4; distance += 1) {
    const ids = [];
    const names = [];
    frontier.forEach((id) => {
      const lineage = getLineage({ id });
      (lineage.parents || []).forEach((parentId) => {
        if (!visited.has(parentId)) {
          visited.add(parentId);
          ids.push(parentId);
        }
      });
      (lineage.parentNames || []).map(compactLineageName)
        .filter(Boolean)
        .forEach((name) => {
          if (!names.includes(name)) names.push(name);
        });
    });

    if (!ids.length && !names.length) break;
    levels.push({ distance, ids, names });
    if (!ids.length) break;
    frontier = ids;
  }

  return levels.reverse();
}

function compactLineageName(name) {
  const normalized = String(name || "").trim();
  if (!normalized || normalized.length > 32) return "";
  if (/(appears|genealogy|varies|tradition|sea-foam|mortal|apotheosis|follow|source|cosmogony)/iu.test(normalized)) return "";
  return normalized;
}

function renderAncestryLevel(level, index, levels) {
  const label = ancestryLevelLabel(level.distance);
  const isLast = index === levels.length - 1;
  return `
    <div class="ancestry-level">
      <span class="ancestry-label">${escapeHtml(label)}</span>
      <div class="ancestry-nodes">
        ${level.ids.map((id) => renderAncestryNode(id, level.distance === 0)).join("")}
        ${level.names.map((name) => `<span class="ancestry-node external">${escapeHtml(name)}</span>`).join("")}
      </div>
      ${isLast ? "" : `<span class="ancestry-arrow" aria-hidden="true">↓</span>`}
    </div>
  `;
}

function ancestryLevelLabel(distance) {
  if (distance === 0) return "当前";
  if (distance === 1) return "父母";
  if (distance === 2) return "祖辈";
  if (distance === 3) return "曾祖辈";
  return "更早";
}

function renderAncestryNode(id, current = false) {
  const item = deities.find((entry) => entry.id === id);
  if (!item) return `<span class="ancestry-node external">${escapeHtml(id)}</span>`;
  if (current) return `<span class="ancestry-node self">${escapeHtml(item.name)}<span>${escapeHtml(item.cn)}</span></span>`;
  return `<button class="ancestry-node" type="button" data-detail="${escapeHtml(item.id)}">${escapeHtml(item.name)}<span>${escapeHtml(item.cn)}</span></button>`;
}

function renderLineageMap(item, lineage) {
  const parentNodes = renderMapNodes(lineage.parents, lineage.parentNames, "谱系上游");
  const childNodes = renderMapNodes(lineage.children, lineage.childNames, "谱系下游");
  const consortNodes = renderMapNodes(lineage.consorts, lineage.consortNames, "配偶 / 伴侣");
  const siblingNodes = renderMapNodes(lineage.siblings, lineage.siblingNames, "同辈");

  return `
    <div class="lineage-map" aria-label="${escapeHtml(item.name)} 的简明谱系图">
      <div class="lineage-map-row">
        <span class="map-label">父母</span>
        <div class="map-nodes">${parentNodes}</div>
      </div>
      <div class="map-connector" aria-hidden="true"></div>
      <div class="lineage-map-row current">
        <span class="map-label">当前</span>
        <div class="map-nodes">${renderCurrentMapNode(item)}</div>
      </div>
      <div class="map-connector" aria-hidden="true"></div>
      <div class="lineage-map-row">
        <span class="map-label">子女</span>
        <div class="map-nodes">${childNodes}</div>
      </div>
      <div class="lineage-map-side">
        <div>
          <span class="map-label">配偶</span>
          <div class="map-nodes">${consortNodes}</div>
        </div>
        <div>
          <span class="map-label">同辈</span>
          <div class="map-nodes">${siblingNodes}</div>
        </div>
      </div>
    </div>
  `;
}

function renderMapNodes(ids = [], names = [], emptyText) {
  const nodes = [
    ...ids.map((id) => {
      const item = deities.find((entry) => entry.id === id);
      if (!item) return `<span class="map-node external">${escapeHtml(id)}</span>`;
      return `<button class="map-node" type="button" data-detail="${escapeHtml(item.id)}">${escapeHtml(item.name)}<span>${escapeHtml(item.cn)}</span></button>`;
    }),
    ...names.map((name) => `<span class="map-node external">${escapeHtml(name)}</span>`)
  ];
  return nodes.length ? nodes.join("") : `<span class="map-node muted">${escapeHtml(emptyText)}</span>`;
}

function renderCurrentMapNode(item) {
  return `<span class="map-node self">${escapeHtml(item.name)}<span>${escapeHtml(item.cn)}</span></span>`;
}

function renderRelationRow(labelZh, labelEn, ids = [], names = []) {
  if (!ids.length && !names.length) return "";
  return `
    <div class="relation-row">
      <div>
        <strong>${escapeHtml(labelZh)}</strong>
        <span>${escapeHtml(labelEn)}</span>
      </div>
      <div class="relation-chips">
        ${ids.map(renderRelationChip).join("")}
        ${names.map((name) => `<span class="relation-chip external">${escapeHtml(name)}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderRelationChip(id) {
  const item = deities.find((entry) => entry.id === id);
  if (!item) return `<span class="relation-chip external">${escapeHtml(id)}</span>`;
  return `<button class="relation-chip" type="button" data-detail="${escapeHtml(item.id)}">${escapeHtml(item.name)}<span>${escapeHtml(item.cn)}</span></button>`;
}

function openDetail(id) {
  const item = deities.find((entry) => entry.id === id);
  if (!item) return;
  const profile = visualProfile(item);
  els.panel.innerHTML = `
    <div class="detail-media">
      <div class="detail-art art-frame" data-image-id="${escapeHtml(item.id)}">
        <div class="image-placeholder">${escapeHtml(item.name.slice(0, 1))}</div>
        <img alt="${escapeHtml(item.name)} 的现代生成全身形象" hidden>
        ${renderPortraitQuickLabel(item, profile)}
      </div>
      ${renderImageLegend(item, profile)}
    </div>
    <div class="detail-body">
      <div class="detail-topline">
        <div>
          <p class="eyebrow">${escapeHtml(item.group)} · #${item.rank}</p>
          <h2><button type="button" data-speak="${escapeHtml(item.id)}" data-speak-lang="en" title="朗读英文名 ${escapeHtml(item.name)}">${escapeHtml(item.name)}</button></h2>
        </div>
        <button class="close-button" type="button" data-close-dialog aria-label="关闭">×</button>
      </div>
      <div class="metadata">
        <span>${escapeHtml(item.cn)} · <button class="inline-greek-name" type="button" data-speak="${escapeHtml(item.id)}" data-speak-lang="el" title="朗读希腊文名 ${escapeHtml(item.greek)}">${escapeHtml(item.greek)}</button></span>
        <span>英文常见读音：${escapeHtml(item.pronunciation)} · 希腊文名可点击朗读</span>
      </div>
      ${renderPronunciationBox(item)}
      ${renderAudioIntroBox(item, profile)}
      ${tagList(item.domains, "domain-list")}
      ${tagList(item.symbols, "symbol-list")}
      ${renderGeneratedBox(item, profile)}
      <p class="summary">${escapeHtml(item.summary)}</p>
      ${renderStoryBox(item)}
      ${renderLineageBox(item)}
      ${renderArtworkBox(item, profile)}
      <a class="detail-link" href="${wikiUrl(item)}" target="_blank" rel="noreferrer">打开英文百科与图源参考</a>
    </div>
  `;

  if (els.dialog.open) {
    // Relation chips can replace content while the dialog is already open.
  } else if (typeof els.dialog.showModal === "function") {
    els.dialog.showModal();
  } else {
    els.dialog.setAttribute("open", "");
  }
  loadImage(els.panel.querySelector("[data-image-id]"));
}

function closeDetail() {
  stopIntroPlayback(null, false);
  if (els.dialog.open && typeof els.dialog.close === "function") {
    els.dialog.close();
  } else {
    els.dialog.removeAttribute("open");
  }
}

function populateVoices() {
  if (!("speechSynthesis" in window)) {
    els.voiceSelect.innerHTML = `<option>当前浏览器不支持语音</option>`;
    els.voiceSelect.disabled = true;
    return;
  }

  const voices = speechSynthesis.getVoices();
  const rawEnglishVoices = voices.filter((voice) => /^en[-_]/iu.test(voice.lang));
  const englishVoices = voices
    .filter((voice) => /^en[-_]/iu.test(voice.lang))
    .filter((voice) => !isNoveltyVoice(voice.name))
    .sort((a, b) => voiceScore(b, "en") - voiceScore(a, "en"));
  const greekVoices = voices
    .filter((voice) => /^el[-_]/iu.test(voice.lang))
    .sort((a, b) => voiceScore(b, "el") - voiceScore(a, "el"));
  const chineseVoices = voices
    .filter((voice) => /^zh[-_]/iu.test(voice.lang))
    .filter((voice) => !isNoveltyVoice(voice.name))
    .sort((a, b) => voiceScore(b, "zh") - voiceScore(a, "zh"));
  const candidates = englishVoices.length
    ? englishVoices
    : (rawEnglishVoices.length ? rawEnglishVoices : voices).sort((a, b) => voiceScore(b, "en") - voiceScore(a, "en"));

  if (!candidates.length) {
    els.voiceSelect.innerHTML = `<option value="">默认英文语音（加载中）</option>`;
    return;
  }

  els.voiceSelect.innerHTML = candidates.map((voice) => {
    const label = `${voice.name} · ${voice.lang}`;
    return `<option value="${escapeHtml(voice.name)}">${escapeHtml(label)}</option>`;
  }).join("");

  const preferred = pickVoice(candidates, "en");

  state.englishVoiceName = voiceStillAvailable(state.englishVoiceName, candidates) ? state.englishVoiceName : preferred?.name || "";
  state.chineseVoiceName = voiceStillAvailable(state.chineseVoiceName, chineseVoices) ? state.chineseVoiceName : (pickVoice(chineseVoices, "zh")?.name || "");
  state.greekVoiceName = voiceStillAvailable(state.greekVoiceName, greekVoices) ? state.greekVoiceName : (pickVoice(greekVoices, "el")?.name || "");
  els.voiceSelect.value = state.englishVoiceName;
}

function voiceStillAvailable(name, voices) {
  return Boolean(name && voices.some((voice) => voice.name === name));
}

function voiceScore(voice, lang) {
  let score = 0;
  if (lang === "en" && voice.lang === "en-US") score += 70;
  if (lang === "en" && /^en[-_]GB/iu.test(voice.lang)) score += 45;
  if (lang === "el" && /^el[-_]GR/iu.test(voice.lang)) score += 80;
  if (lang === "zh" && /^zh[-_]CN/iu.test(voice.lang)) score += 75;
  if (lang === "zh" && /^zh[-_](HK|TW)/iu.test(voice.lang)) score += 35;
  if (/samantha|alex|ava|allison|susan|victoria|daniel|karen|moira|tessa|serena|google|microsoft|aria|natural|premium|enhanced/iu.test(voice.name)) score += 25;
  if (voice.localService) score += 4;
  if (isNoveltyVoice(voice.name)) score -= 80;
  return score;
}

function isNoveltyVoice(name) {
  return /(albert|bad news|bahh|bells|boing|bubbles|cellos|fred|good news|jester|junior|kathy|organ|superstar|trinoids|whisper|wobble|zarvox|rocko|sandy|shelley|grandma|grandpa)/iu.test(name);
}

function pickVoice(voices, lang) {
  if (!voices.length) return null;
  return voices.find((voice) => !isNoveltyVoice(voice.name)) || voices[0];
}

function voiceForLanguage(lang) {
  const voices = speechSynthesis.getVoices();
  if (lang === "zh") {
    const chineseVoices = voices.filter((voice) => /^zh[-_]/iu.test(voice.lang)).sort((a, b) => voiceScore(b, "zh") - voiceScore(a, "zh"));
    return chineseVoices.find((voice) => voice.name === state.chineseVoiceName) || pickVoice(chineseVoices, "zh");
  }
  if (lang === "el") {
    const greekVoices = voices.filter((voice) => /^el[-_]/iu.test(voice.lang)).sort((a, b) => voiceScore(b, "el") - voiceScore(a, "el"));
    return greekVoices.find((voice) => voice.name === state.greekVoiceName) || pickVoice(greekVoices, "el");
  }
  const englishVoices = voices.filter((voice) => /^en[-_]/iu.test(voice.lang)).sort((a, b) => voiceScore(b, "en") - voiceScore(a, "en"));
  return englishVoices.find((voice) => voice.name === state.englishVoiceName) || pickVoice(englishVoices, "en");
}

function speakItem(id, lang = "en") {
  const item = deities.find((entry) => entry.id === id);
  if (!item) return;

  if (!("speechSynthesis" in window)) {
    showToast("当前浏览器不支持语音合成。");
    return;
  }

  const selected = voiceForLanguage(lang);
  const text = lang === "el" ? item.greek : item.speech;
  const fallbackLang = lang === "el" ? "el-GR" : "en-US";

  const utterance = new SpeechSynthesisUtterance(text);
  if (selected) utterance.voice = selected;
  utterance.lang = selected?.lang || fallbackLang;
  utterance.rate = lang === "el" ? 0.72 : 0.82;
  utterance.pitch = 1;
  utterance.volume = 1;

  resetAllIntroPlayback("简介朗读已停止");
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
  if (lang === "el") {
    showToast(`${item.greek} · 希腊语朗读${selected ? "" : "（系统无希腊语音时为近似读法）"}`);
  } else {
    showToast(`${item.name}: ${item.pronunciation}`);
  }
}

let activeIntroToken = 0;

function resetIntroPlayback(box, statusText = "默认不自动播放") {
  if (!box) return;
  delete box.dataset.introSpeaking;
  delete box.dataset.introToken;
  delete box.dataset.introPaused;
  const status = box.querySelector("[data-intro-status]");
  if (status) status.textContent = statusText;
  const playButton = box.querySelector("[data-intro-play]");
  if (playButton) {
    playButton.textContent = introPlayLabel(box);
    playButton.removeAttribute("aria-busy");
  }
  const pauseButton = box.querySelector("[data-intro-pause]");
  if (pauseButton) {
    pauseButton.textContent = "暂停";
    pauseButton.disabled = true;
  }
}

function resetAllIntroPlayback(statusText = "默认不自动播放") {
  document.querySelectorAll("[data-audio-intro]").forEach((box) => resetIntroPlayback(box, statusText));
}

function setIntroLanguage(box, lang) {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  activeIntroToken += 1;
  box.dataset.activeIntroLang = lang;
  updateIntroSelection(box);
  resetIntroPlayback(box, lang === "zh" ? "已切换到中文" : "Switched to English");
}

function setIntroMode(box, mode) {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  activeIntroToken += 1;
  box.dataset.activeIntroMode = mode;
  updateIntroSelection(box);
  const lang = box.dataset.activeIntroLang || "zh";
  const label = introModeName(mode, lang);
  resetIntroPlayback(box, lang === "zh" ? `已切换到${label}` : `Switched to ${label}`);
}

function setIntroSpeed(box, speed) {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  activeIntroToken += 1;
  box.dataset.activeIntroSpeed = speed;
  updateIntroSelection(box);
  const lang = box.dataset.activeIntroLang || "zh";
  const label = introSpeedName(speed, lang);
  resetIntroPlayback(box, lang === "zh" ? `已切换到${label}` : `Switched to ${label}`);
}

function updateIntroSelection(box) {
  const lang = box.dataset.activeIntroLang || "zh";
  const mode = box.dataset.activeIntroMode || "quick";
  const speed = box.dataset.activeIntroSpeed || "normal";
  box.querySelectorAll("[data-intro-switch]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.introSwitch === lang));
  });
  box.querySelectorAll("[data-intro-mode]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.introMode === mode));
  });
  box.querySelectorAll("[data-intro-speed]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.introSpeed === speed));
  });
  box.querySelectorAll("[data-intro-lang][data-intro-mode-text]").forEach((copy) => {
    copy.hidden = copy.dataset.introLang !== lang || copy.dataset.introModeText !== mode;
  });
}

function introModeName(mode, lang) {
  if (lang === "zh") return mode === "story" ? "故事版" : "快速版";
  return mode === "story" ? "story version" : "quick version";
}

function introSpeedName(speed, lang) {
  if (lang === "zh") return speed === "slow" ? "慢速" : "标准语速";
  return speed === "slow" ? "slow speed" : "normal speed";
}

function introSpeechRate(lang, speed) {
  if (lang === "zh") return speed === "slow" ? 0.72 : 0.86;
  return speed === "slow" ? 0.68 : 0.82;
}

function introPlayLabel(box) {
  const lang = box.dataset.activeIntroLang || "zh";
  const mode = box.dataset.activeIntroMode || "quick";
  if (lang === "zh") return `播放${introModeName(mode, lang)}`;
  return mode === "story" ? "Play story" : "Play quick version";
}

function introActiveStatus(lang, mode, speed) {
  const modeLabel = introModeName(mode, lang);
  const speedLabel = introSpeedName(speed, lang);
  return lang === "zh" ? `正在以${speedLabel}朗读中文${modeLabel}` : `Reading English ${modeLabel} at ${speedLabel}`;
}

function playDetailIntro(box) {
  if (!("speechSynthesis" in window)) {
    showToast("当前浏览器不支持语音合成。");
    return;
  }
  const lang = box.dataset.activeIntroLang || "zh";
  const mode = box.dataset.activeIntroMode || "quick";
  const speed = box.dataset.activeIntroSpeed || "normal";
  const text = box.querySelector(`[data-intro-lang="${lang}"][data-intro-mode-text="${mode}"]`)?.textContent?.trim();
  if (!text) return;

  const selected = voiceForLanguage(lang);
  const utterance = new SpeechSynthesisUtterance(text);
  if (selected) utterance.voice = selected;
  utterance.lang = selected?.lang || (lang === "zh" ? "zh-CN" : "en-US");
  utterance.rate = introSpeechRate(lang, speed);
  utterance.pitch = 1;
  utterance.volume = 1;

  activeIntroToken += 1;
  const token = String(activeIntroToken);
  const status = box.querySelector("[data-intro-status]");
  const playButton = box.querySelector("[data-intro-play]");
  const pauseButton = box.querySelector("[data-intro-pause]");
  const finishIntroPlayback = (message) => {
    if (box.dataset.introToken === token) resetIntroPlayback(box, message);
  };
  utterance.onend = () => finishIntroPlayback(lang === "zh" ? "朗读结束，可再次播放" : "Finished. Tap to replay");
  utterance.onerror = () => finishIntroPlayback(lang === "zh" ? "朗读中断，可再次播放" : "Stopped. Tap to replay");

  resetAllIntroPlayback();
  speechSynthesis.cancel();
  box.dataset.introSpeaking = lang;
  box.dataset.introToken = token;
  delete box.dataset.introPaused;
  const modeLabel = introModeName(mode, lang);
  const speedLabel = introSpeedName(speed, lang);
  if (status) status.textContent = introActiveStatus(lang, mode, speed);
  if (playButton) {
    playButton.textContent = lang === "zh" ? `正在朗读${modeLabel}` : `Reading ${modeLabel}`;
    playButton.setAttribute("aria-busy", "true");
  }
  if (pauseButton) {
    pauseButton.textContent = "暂停";
    pauseButton.disabled = false;
  }
  speechSynthesis.speak(utterance);
  showToast(lang === "zh" ? `正在以${speedLabel}朗读中文${modeLabel}。` : `Reading the English ${modeLabel} at ${speedLabel}.`);
}

function toggleIntroPause(box) {
  if (!("speechSynthesis" in window) || !box.dataset.introSpeaking) return;
  const lang = box.dataset.activeIntroLang || "zh";
  const mode = box.dataset.activeIntroMode || "quick";
  const speed = box.dataset.activeIntroSpeed || "normal";
  const status = box.querySelector("[data-intro-status]");
  const pauseButton = box.querySelector("[data-intro-pause]");

  if (box.dataset.introPaused === "true") {
    speechSynthesis.resume();
    delete box.dataset.introPaused;
    if (pauseButton) pauseButton.textContent = "暂停";
    if (status) status.textContent = introActiveStatus(lang, mode, speed);
    showToast(lang === "zh" ? "继续朗读。" : "Resuming audio.");
    return;
  }

  speechSynthesis.pause();
  box.dataset.introPaused = "true";
  if (pauseButton) pauseButton.textContent = lang === "zh" ? "继续" : "Resume";
  if (status) status.textContent = lang === "zh" ? `已暂停${introModeName(mode, lang)}` : `Paused ${introModeName(mode, lang)}`;
  showToast(lang === "zh" ? "已暂停朗读。" : "Audio paused.");
}

function stopIntroPlayback(box, showMessage = true) {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  activeIntroToken += 1;
  if (box) {
    resetIntroPlayback(box, "已停止朗读");
  } else {
    resetAllIntroPlayback("已停止朗读");
  }
  if (showMessage) showToast("已停止朗读。");
}

let toastTimer = null;
function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2200);
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    if (state.query && state.group !== "全部") {
      state.group = "全部";
      renderFilters();
    }
    renderCatalog();
  });

  els.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderCatalog();
  });

  els.voiceSelect.addEventListener("change", (event) => {
    state.englishVoiceName = event.target.value;
  });

  els.stopSpeech.addEventListener("click", () => {
    stopIntroPlayback(null, false);
  });

  els.memoryTrainer.addEventListener("click", (event) => {
    const choiceButton = event.target.closest("[data-quiz-choice]");
    if (choiceButton) {
      if (state.quizAnswered || state.quizRevealed) return;
      const item = currentQuizItem();
      state.quizChoiceId = choiceButton.dataset.quizChoice;
      state.quizAnswered = true;
      state.quizRevealed = true;
      recordQuizAnswer(item, state.quizChoiceId === item.id);
      renderMemoryTrainer();
      return;
    }

    if (event.target.closest("[data-quiz-reveal]")) {
      state.quizRevealed = true;
      renderMemoryTrainer();
      return;
    }

    if (event.target.closest("[data-quiz-next]")) {
      nextQuizItem();
      renderMemoryTrainer();
      return;
    }

    if (event.target.closest("[data-quiz-review]")) {
      state.quizReviewMode = true;
      nextQuizItem();
      renderMemoryTrainer();
      return;
    }

    if (event.target.closest("[data-quiz-all]")) {
      state.quizReviewMode = false;
      nextQuizItem();
      renderMemoryTrainer();
      return;
    }

    if (event.target.closest("[data-quiz-reset]")) {
      resetQuizProgress();
      renderMemoryTrainer();
    }
  });

  els.searchSuggestions.addEventListener("click", (event) => {
    const suggestionButton = event.target.closest("[data-search-suggestion]");
    const clearButton = event.target.closest("[data-search-clear]");
    if (!suggestionButton && !clearButton) return;

    state.query = suggestionButton ? suggestionButton.dataset.searchSuggestion : "";
    state.group = "全部";
    els.searchInput.value = state.query;
    renderFilters();
    renderCatalog();
    els.searchInput.focus();
  });

  els.filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-group]");
    if (!button) return;
    state.group = button.dataset.group;
    renderFilters();
    renderCatalog();
  });

  document.addEventListener("click", (event) => {
    const introSwitch = event.target.closest("[data-intro-switch]");
    if (introSwitch) {
      const introBox = introSwitch.closest("[data-audio-intro]");
      if (introBox) setIntroLanguage(introBox, introSwitch.dataset.introSwitch);
      return;
    }

    const introMode = event.target.closest("[data-intro-mode]");
    if (introMode) {
      const introBox = introMode.closest("[data-audio-intro]");
      if (introBox) setIntroMode(introBox, introMode.dataset.introMode);
      return;
    }

    const introSpeed = event.target.closest("[data-intro-speed]");
    if (introSpeed) {
      const introBox = introSpeed.closest("[data-audio-intro]");
      if (introBox) setIntroSpeed(introBox, introSpeed.dataset.introSpeed);
      return;
    }

    const introPlay = event.target.closest("[data-intro-play]");
    if (introPlay) {
      const introBox = introPlay.closest("[data-audio-intro]");
      if (introBox) playDetailIntro(introBox);
      return;
    }

    const introPause = event.target.closest("[data-intro-pause]");
    if (introPause) {
      const introBox = introPause.closest("[data-audio-intro]");
      if (introBox) toggleIntroPause(introBox);
      return;
    }

    const introStop = event.target.closest("[data-intro-stop]");
    if (introStop) {
      stopIntroPlayback(introStop.closest("[data-audio-intro]"));
      return;
    }

    const speakButton = event.target.closest("[data-speak]");
    if (speakButton) {
      speakItem(speakButton.dataset.speak, speakButton.dataset.speakLang || "en");
      return;
    }

    const detailButton = event.target.closest("[data-detail]");
    if (detailButton) {
      openDetail(detailButton.dataset.detail);
      return;
    }

    if (event.target.closest("[data-close-dialog]")) {
      closeDetail();
    }
  });

  els.dialog.addEventListener("click", (event) => {
    if (event.target === els.dialog) closeDetail();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDetail();
  });

  if ("speechSynthesis" in window) {
    speechSynthesis.addEventListener("voiceschanged", populateVoices);
  }
}

function init() {
  loadQuizProgress();
  renderMemoryTrainer();
  renderLineageBoard();
  renderFilters();
  renderCatalog();
  populateVoices();
  bindEvents();
}

init();
