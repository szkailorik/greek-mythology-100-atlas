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
  voiceName: ""
};

const wikiCache = new Map();
let imageObserver = null;

const els = {
  totalCount: document.querySelector("#totalCount"),
  visibleCount: document.querySelector("#visibleCount"),
  searchInput: document.querySelector("#searchInput"),
  sortSelect: document.querySelector("#sortSelect"),
  voiceSelect: document.querySelector("#voiceSelect"),
  stopSpeech: document.querySelector("#stopSpeech"),
  filters: document.querySelector("#groupFilters"),
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
  return String(value).toLocaleLowerCase("en-US");
}

function wikiUrl(item) {
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(item.wiki).replaceAll("%20", "_")}`;
}

function getSearchText(item) {
  return normalize([
    item.name,
    item.cn,
    item.greek,
    item.group,
    item.domains.join(" "),
    item.symbols.join(" "),
    item.pronunciation,
    item.artwork.title,
    item.artwork.artist,
    item.summary
  ].join(" "));
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

function getVisibleItems() {
  const terms = normalize(state.query).split(/\s+/u).filter(Boolean);
  return deities
    .filter((item) => state.group === "全部" || item.group === state.group)
    .filter((item) => {
      if (!terms.length) return true;
      const haystack = getSearchText(item);
      return terms.every((term) => haystack.includes(term));
    })
    .sort((a, b) => {
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
  return `
    <article class="deity-card" data-id="${escapeHtml(item.id)}">
      <div class="art-frame" data-image-id="${escapeHtml(item.id)}">
        <div class="image-placeholder">${escapeHtml(item.name.slice(0, 1))}</div>
        <img alt="${escapeHtml(item.name)} 的主流艺术形象" loading="lazy" hidden>
        <span class="rank-badge">#${item.rank}</span>
        <span class="group-badge">${escapeHtml(item.group)}</span>
      </div>
      <div class="card-body">
        <div class="card-title-row">
          <button class="name-button" type="button" data-speak="${escapeHtml(item.id)}" title="朗读 ${escapeHtml(item.name)}">
            <strong>${escapeHtml(item.name)}</strong>
            <span>${escapeHtml(item.pronunciation)}</span>
          </button>
          <span class="cn-name">${escapeHtml(item.cn)}</span>
        </div>
        <div class="pronunciation">点击英文名听发音</div>
        ${tagList(item.domains, "domain-list")}
        <p class="summary">${escapeHtml(item.summary)}</p>
        <p class="artwork-line"><span>代表形象</span>${escapeHtml(item.artwork.title)} · ${escapeHtml(item.artwork.artist)} · ${escapeHtml(item.artwork.year)}</p>
        <div class="card-footer">
          <span class="greek-name">${escapeHtml(item.greek)}</span>
          <button class="card-action" type="button" data-detail="${escapeHtml(item.id)}">详情</button>
        </div>
      </div>
    </article>
  `;
}

function tagList(items, className) {
  return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function hydrateImages() {
  const frames = [...document.querySelectorAll("[data-image-id]")];
  if ("IntersectionObserver" in window) {
    imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageObserver.unobserve(entry.target);
          loadImage(entry.target);
        }
      });
    }, { rootMargin: "220px" });
    frames.forEach((frame) => imageObserver.observe(frame));
  } else {
    frames.forEach(loadImage);
  }
}

async function fetchWikiImage(item) {
  if (!wikiCache.has(item.id)) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(item.wiki)}`;
    wikiCache.set(item.id, fetch(url)
      .then((response) => response.ok ? response.json() : null)
      .catch(() => null));
  }

  const data = await wikiCache.get(item.id);
  return data?.thumbnail?.source || data?.originalimage?.source || "";
}

async function loadImage(frame) {
  if (frame.dataset.loaded === "true") return;
  frame.dataset.loaded = "true";
  const item = deities.find((entry) => entry.id === frame.dataset.imageId);
  if (!item) return;

  const source = await fetchWikiImage(item);
  setFrameImage(frame, source || generatedFallbackImage(item));
}

function setFrameImage(frame, source) {
  const img = frame.querySelector("img");
  const placeholder = frame.querySelector(".image-placeholder");
  img.addEventListener("load", () => {
    img.hidden = false;
    if (placeholder) placeholder.hidden = true;
  }, { once: true });
  img.addEventListener("error", () => {
    img.hidden = true;
    if (placeholder) placeholder.hidden = false;
  }, { once: true });
  img.src = source;
}

function generatedFallbackImage(item) {
  const hue = [...item.id].reduce((total, char) => total + char.charCodeAt(0), 0) % 360;
  const accent = `hsl(${hue}, 46%, 34%)`;
  const glow = `hsl(${(hue + 42) % 360}, 58%, 72%)`;
  const title = escapeHtml(item.name);
  const greek = escapeHtml(item.greek);
  const domains = escapeHtml(item.domains.slice(0, 2).join(" · "));
  const symbol = escapeHtml(item.symbols[0] || item.name.slice(0, 1));
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#f7f2e8"/>
          <stop offset="0.52" stop-color="${glow}"/>
          <stop offset="1" stop-color="#d8c8ad"/>
        </linearGradient>
        <radialGradient id="halo" cx="50%" cy="34%" r="46%">
          <stop offset="0" stop-color="#fffdf8" stop-opacity="0.96"/>
          <stop offset="1" stop-color="#fffdf8" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="900" height="620" fill="url(#bg)"/>
      <rect x="34" y="34" width="832" height="552" rx="28" fill="none" stroke="${accent}" stroke-width="12" opacity="0.52"/>
      <circle cx="450" cy="230" r="210" fill="url(#halo)"/>
      <path d="M210 482 C318 404 348 288 450 288 C552 288 582 404 690 482 Z" fill="${accent}" opacity="0.2"/>
      <circle cx="450" cy="256" r="96" fill="${accent}" opacity="0.18"/>
      <text x="450" y="238" text-anchor="middle" font-family="Georgia, serif" font-size="118" fill="${accent}" font-weight="700">${title.slice(0, 1)}</text>
      <text x="450" y="360" text-anchor="middle" font-family="Georgia, serif" font-size="48" fill="#1f2430" font-weight="700">${title}</text>
      <text x="450" y="414" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#4f5968">${greek}</text>
      <text x="450" y="468" text-anchor="middle" font-family="system-ui, sans-serif" font-size="28" fill="#33404a">${domains}</text>
      <text x="450" y="520" text-anchor="middle" font-family="system-ui, sans-serif" font-size="24" fill="#6b5635">Generated classical study · ${symbol}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function openDetail(id) {
  const item = deities.find((entry) => entry.id === id);
  if (!item) return;
  els.panel.innerHTML = `
    <div class="detail-art art-frame" data-image-id="${escapeHtml(item.id)}">
      <div class="image-placeholder">${escapeHtml(item.name.slice(0, 1))}</div>
      <img alt="${escapeHtml(item.name)} 的艺术形象" hidden>
    </div>
    <div class="detail-body">
      <div class="detail-topline">
        <div>
          <p class="eyebrow">${escapeHtml(item.group)} · #${item.rank}</p>
          <h2><button type="button" data-speak="${escapeHtml(item.id)}">${escapeHtml(item.name)}</button></h2>
        </div>
        <button class="close-button" type="button" data-close-dialog aria-label="关闭">×</button>
      </div>
      <div class="metadata">
        <span>${escapeHtml(item.cn)} · ${escapeHtml(item.greek)}</span>
        <span>英文常见读音：${escapeHtml(item.pronunciation)}</span>
      </div>
      ${tagList(item.domains, "domain-list")}
      ${tagList(item.symbols, "symbol-list")}
      <p class="summary">${escapeHtml(item.summary)}</p>
      <section class="artwork-box">
        <h3>艺术作品知识点</h3>
        <p><strong>${escapeHtml(item.artwork.title)}</strong></p>
        <p>${escapeHtml(item.artwork.artist)} · ${escapeHtml(item.artwork.year)}</p>
        <p>${escapeHtml(item.artwork.note)}</p>
      </section>
      <a class="detail-link" href="${wikiUrl(item)}" target="_blank" rel="noreferrer">打开英文百科图源</a>
    </div>
  `;

  if (typeof els.dialog.showModal === "function") {
    els.dialog.showModal();
  } else {
    els.dialog.setAttribute("open", "");
  }
  loadImage(els.panel.querySelector("[data-image-id]"));
}

function closeDetail() {
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
  const englishVoices = voices.filter((voice) => /^en[-_]/iu.test(voice.lang));
  const candidates = englishVoices.length ? englishVoices : voices;

  if (!candidates.length) {
    els.voiceSelect.innerHTML = `<option value="">默认英文语音</option>`;
    return;
  }

  els.voiceSelect.innerHTML = candidates.map((voice) => {
    const label = `${voice.name} · ${voice.lang}`;
    return `<option value="${escapeHtml(voice.name)}">${escapeHtml(label)}</option>`;
  }).join("");

  const preferred = candidates.find((voice) => voice.lang === "en-US")
    || candidates.find((voice) => /^en-US/iu.test(voice.lang))
    || candidates.find((voice) => /^en-GB/iu.test(voice.lang))
    || candidates[0];

  state.voiceName = state.voiceName || preferred.name;
  els.voiceSelect.value = state.voiceName;
}

function speakItem(id) {
  const item = deities.find((entry) => entry.id === id);
  if (!item) return;

  if (!("speechSynthesis" in window)) {
    showToast("当前浏览器不支持语音合成。");
    return;
  }

  const voices = speechSynthesis.getVoices();
  const selected = voices.find((voice) => voice.name === els.voiceSelect.value)
    || voices.find((voice) => voice.lang === "en-US")
    || voices.find((voice) => /^en[-_]/iu.test(voice.lang));

  const utterance = new SpeechSynthesisUtterance(item.speech);
  if (selected) utterance.voice = selected;
  utterance.lang = selected?.lang || "en-US";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  utterance.volume = 1;

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
  showToast(`${item.name}: ${item.pronunciation}`);
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
    state.query = event.target.value;
    renderCatalog();
  });

  els.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderCatalog();
  });

  els.voiceSelect.addEventListener("change", (event) => {
    state.voiceName = event.target.value;
  });

  els.stopSpeech.addEventListener("click", () => {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
  });

  els.filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-group]");
    if (!button) return;
    state.group = button.dataset.group;
    renderFilters();
    renderCatalog();
  });

  document.addEventListener("click", (event) => {
    const speakButton = event.target.closest("[data-speak]");
    if (speakButton) {
      speakItem(speakButton.dataset.speak);
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
  renderFilters();
  renderCatalog();
  populateVoices();
  bindEvents();
}

init();
