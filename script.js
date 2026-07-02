// ========== 1. 完整知识库：14经脉361经穴+理疗参数库 ==========
const ACUPOINT_KNOWLEDGE = {
    // 常用精选穴
    "百会": {
        meridian: "督脉",
        location: "在头部，前发际正中直上5寸",
        indication: "头痛眩晕、失眠中风、脱肛阴挺，升阳举陷",
        therapy: { method: "点按/艾灸", force: "轻", duration: "3-5分钟" }
    },
    "印堂": {
        meridian: "经外奇穴",
        location: "在头部，两眉毛内侧端中间的凹陷中",
        indication: "头痛鼻塞、鼻炎失眠、小儿惊风",
        therapy: { method: "按揉/艾灸", force: "轻", duration: "3-5分钟" }
    },
    "太阳": {
        meridian: "经外奇穴",
        location: "在头部，眉梢与目外眦之间，向后约一横指凹陷中",
        indication: "头痛目疾、面瘫、眼疲劳",
        therapy: { method: "按揉", force: "轻", duration: "2-3分钟" }
    },
    "肩井": {
        meridian: "足少阳胆经",
        location: "在肩胛区，第7颈椎棘突与肩峰最外侧点连线的中点",
        indication: "肩背疼痛、颈椎病、乳痈、上肢不遂",
        therapy: { method: "按揉/推拿", force: "中", duration: "5-8分钟" }
    },
    "曲池": {
        meridian: "手阳明大肠经",
        location: "在肘区，尺泽与肱骨外上髁连线的中点处",
        indication: "热病、肘臂痛、高血压、湿疹",
        therapy: { method: "按揉/艾灸", force: "中", duration: "3-5分钟" }
    },
    "合谷": {
        meridian: "手阳明大肠经",
        location: "在手背，第2掌骨桡侧的中点处",
        indication: "头痛牙痛、感冒发热、面瘫痉挛",
        therapy: { method: "点按/按揉", force: "中", duration: "3-5分钟" }
    },
    "内关": {
        meridian: "手厥阴心包经",
        location: "在前臂前区，腕掌侧远端横纹上2寸，掌长肌腱与桡侧腕屈肌腱之间",
        indication: "心悸胸闷、胃痛呕吐、失眠眩晕",
        therapy: { method: "点按/按揉", force: "轻-中", duration: "3-5分钟" }
    },
    "足三里": {
        meridian: "足阳明胃经",
        location: "在小腿外侧，犊鼻下3寸，胫骨前嵴外1横指处",
        indication: "胃痛腹胀、消化不良、体虚乏力，保健要穴",
        therapy: { method: "按揉/艾灸", force: "中", duration: "5-10分钟" }
    },
    "三阴交": {
        meridian: "足太阴脾经",
        location: "在小腿内侧，内踝尖上3寸，胫骨内侧缘后际",
        indication: "月经不调、失眠脾虚、水肿遗精",
        therapy: { method: "按揉/艾灸", force: "中", duration: "5-8分钟" }
    },
    "涌泉": {
        meridian: "足少阴肾经",
        location: "在足底，屈足卷趾时足心最凹陷中",
        indication: "失眠头痛、高血压、咽喉肿痛、足心热",
        therapy: { method: "点按/搓揉", force: "中-重", duration: "5-10分钟" }
    },
    "命门": {
        meridian: "督脉",
        location: "在脊柱区，第2腰椎棘突下凹陷中，后正中线上",
        indication: "腰脊强痛、遗精阳痿、月经不调、五更泻",
        therapy: { method: "按揉/艾灸", force: "中", duration: "5-10分钟" }
    },
    "大椎": {
        meridian: "督脉",
        location: "在脊柱区，第7颈椎棘突下凹陷中，后正中线上",
        indication: "感冒发热、颈椎病、咳喘风疹",
        therapy: { method: "按揉/艾灸/拔罐", force: "中", duration: "5-8分钟" }
    },

    // 1. 手太阴肺经（11穴）
    "中府": { meridian: "手太阴肺经", location: "在胸部，横平第1肋间隙，锁骨下窝外侧，前正中线旁开6寸", indication: "咳嗽气喘、胸痛、肩背痛", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "云门": { meridian: "手太阴肺经", location: "在胸部，锁骨下窝凹陷中，肩胛骨喙突内缘，前正中线旁开6寸", indication: "咳嗽气喘、胸痛、肩背痛", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "天府": { meridian: "手太阴肺经", location: "在臂前区，腋前纹头下3寸，肱二头肌桡侧缘处", indication: "咳嗽气喘、鼻衄、上臂痛", therapy: { method: "按揉", force: "轻-中", duration: "3-5分钟" } },
    "侠白": { meridian: "手太阴肺经", location: "在臂前区，腋前纹头下4寸，肱二头肌桡侧缘处", indication: "咳嗽气喘、干呕、上臂痛", therapy: { method: "按揉", force: "轻-中", duration: "3-5分钟" } },
    "尺泽": { meridian: "手太阴肺经", location: "在肘区，肘横纹上，肱二头肌腱桡侧缘凹陷中", indication: "咳嗽咳喘、咽喉肿痛、肘臂挛痛", therapy: { method: "点按", force: "中", duration: "3-5分钟" } },
    "孔最": { meridian: "手太阴肺经", location: "在前臂前区，腕掌侧远端横纹上7寸，尺泽与太渊连线上", indication: "咳嗽咳血、鼻衄、肘臂痛", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "列缺": { meridian: "手太阴肺经", location: "在前臂，腕掌侧远端横纹上1.5寸，拇短伸肌腱与拇长展肌腱之间", indication: "咳嗽头痛、项强、口眼歪斜", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "经渠": { meridian: "手太阴肺经", location: "在前臂前区，腕掌侧远端横纹上1寸，桡骨茎突与桡动脉之间", indication: "咳嗽气喘、胸痛、手腕痛", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "太渊": { meridian: "手太阴肺经", location: "在腕前区，桡骨茎突与舟状骨之间，拇长展肌腱尺侧凹陷中", indication: "咳嗽气喘、无脉症、腕臂痛", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "鱼际": { meridian: "手太阴肺经", location: "在手外侧，第1掌骨桡侧中点赤白肉际处", indication: "咳嗽咳血、咽喉肿痛、失音发热", therapy: { method: "点按", force: "中", duration: "3-5分钟" } },
    "少商": { meridian: "手太阴肺经", location: "在手指，拇指末节桡侧，指甲根角侧上方0.1寸", indication: "咽喉肿痛、高热昏迷、癫狂", therapy: { method: "点刺/点按", force: "轻", duration: "1-2分钟" } },

    // 2. 手阳明大肠经（20穴）
    "商阳": { meridian: "手阳明大肠经", location: "在手指，食指末节桡侧，指甲根角侧上方0.1寸", indication: "齿痛咽喉肿痛、昏迷、热病", therapy: { method: "点刺/点按", force: "轻", duration: "1-2分钟" } },
    "二间": { meridian: "手阳明大肠经", location: "在手指，第2掌指关节桡侧远端赤白肉际凹陷中", indication: "齿痛、鼻衄、热病", therapy: { method: "点按", force: "中", duration: "2-3分钟" } },
    "三间": { meridian: "手阳明大肠经", location: "在手背，第2掌指关节桡侧近端凹陷中", indication: "齿痛咽痛、腹胀、手背肿痛", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "阳溪": { meridian: "手阳明大肠经", location: "在腕区，腕背侧远端横纹桡侧，桡骨茎突远端凹陷中", indication: "头痛目赤、手腕痛、耳聋", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "偏历": { meridian: "手阳明大肠经", location: "在前臂，腕背侧远端横纹上3寸，阳溪与曲池连线上", indication: "耳鸣鼻衄、手臂酸痛、水肿", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "温溜": { meridian: "手阳明大肠经", location: "在前臂，腕背侧远端横纹上5寸，阳溪与曲池连线上", indication: "头痛面肿、咽喉肿痛、肘臂痛", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "下廉": { meridian: "手阳明大肠经", location: "在前臂，肘横纹下4寸，阳溪与曲池连线上", indication: "肘臂痛、腹胀、头痛眩晕", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "上廉": { meridian: "手阳明大肠经", location: "在前臂，肘横纹下3寸，阳溪与曲池连线上", indication: "手臂麻木、肩臂酸痛、肠鸣腹痛", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "手三里": { meridian: "手阳明大肠经", location: "在前臂，肘横纹下2寸，阳溪与曲池连线上", indication: "肘臂痛、腹痛腹泻、齿痛颊肿", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "肘髎": { meridian: "手阳明大肠经", location: "在肘区，肱骨外上髁上缘，髁上嵴的前缘", indication: "肘臂酸痛、麻木、挛急", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "手五里": { meridian: "手阳明大肠经", location: "在臂部，肘横纹上3寸，曲池与肩髃连线上", indication: "肘臂挛痛、瘰疬", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "臂臑": { meridian: "手阳明大肠经", location: "在臂部，曲池上7寸，三角肌前缘处", indication: "肩臂痛、颈项拘挛、目疾", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "肩髃": { meridian: "手阳明大肠经", location: "在三角肌区，肩峰外侧缘前端与肱骨大结节两骨间凹陷中", indication: "肩臂挛痛、上肢不遂、瘾疹", therapy: { method: "按揉/艾灸", force: "中", duration: "5-8分钟" } },
    "巨骨": { meridian: "手阳明大肠经", location: "在肩胛区，锁骨肩峰端与肩胛冈之间凹陷中", indication: "肩背疼痛、瘰疬、瘿气", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "天鼎": { meridian: "手阳明大肠经", location: "在颈部，横平环状软骨，胸锁乳突肌后缘", indication: "暴喑气哽、咽喉肿痛、瘿气", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "扶突": { meridian: "手阳明大肠经", location: "在胸锁乳突肌区，横平喉结，胸锁乳突肌前后缘之间", indication: "咽喉肿痛、暴喑、瘿气瘰疬", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "禾髎": { meridian: "手阳明大肠经", location: "在面部，横平人中沟上1/3与下2/3交点，鼻孔外缘直下", indication: "鼻塞鼻衄、口歪", therapy: { method: "点按", force: "轻", duration: "2-3分钟" } },
    "迎香": { meridian: "手阳明大肠经", location: "在面部，鼻翼外缘中点旁，鼻唇沟中", indication: "鼻塞鼻炎、口歪面痒、胆道蛔虫", therapy: { method: "点按/揉按", force: "轻", duration: "2-3分钟" } },

    // 3. 足阳明胃经（45穴，节选核心，其余格式一致）
    "承泣": { meridian: "足阳明胃经", location: "在面部，眼球与眶下缘之间，瞳孔直下", indication: "目赤肿痛、夜盲、口眼歪斜", therapy: { method: "点按", force: "极轻", duration: "1-2分钟" } },
    "四白": { meridian: "足阳明胃经", location: "在面部，眶下孔处，瞳孔直下", indication: "目赤痛痒、口眼歪斜、面肌痉挛", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "地仓": { meridian: "足阳明胃经", location: "在面部，口角旁开0.4寸", indication: "口歪流涎、眼睑瞤动", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "颊车": { meridian: "足阳明胃经", location: "在面部，下颌角前上方一横指，咀嚼时咬肌隆起处", indication: "齿痛、口歪、颊肿、牙关不利", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "下关": { meridian: "足阳明胃经", location: "在面部，颧弓下缘中央与下颌切迹之间凹陷中", indication: "齿痛、口噤、耳鸣耳聋", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "头维": { meridian: "足阳明胃经", location: "在头部，额角发际直上0.5寸，头正中线旁开4.5寸", indication: "头痛、目眩、目痛", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "天枢": { meridian: "足阳明胃经", location: "在腹部，横平脐中，前正中线旁开2寸", indication: "腹痛腹胀、便秘泄泻、月经不调", therapy: { method: "揉按/艾灸", force: "中", duration: "5-10分钟" } },
    "伏兔": { meridian: "足阳明胃经", location: "在股前区，髌底上6寸，髂前上棘与髌底外侧端的连线上", indication: "下肢痿痹、腰痛膝冷、疝气", therapy: { method: "按揉/推拿", force: "中", duration: "5-8分钟" } },
    "梁丘": { meridian: "足阳明胃经", location: "在股前区，髌底上2寸，股外侧肌与股直肌肌腱之间", indication: "膝肿痛、下肢不遂、急性胃痛", therapy: { method: "点按/按揉", force: "中", duration: "3-5分钟" } },
    "犊鼻": { meridian: "足阳明胃经", location: "在膝前区，髌韧带外侧凹陷中", indication: "膝痛、下肢麻痹、屈伸不利", therapy: { method: "按揉/艾灸", force: "中", duration: "5-8分钟" } },
    "上巨虚": { meridian: "足阳明胃经", location: "在小腿外侧，犊鼻下6寸，犊鼻与解溪连线上", indication: "肠鸣腹痛、便秘泄泻、下肢痿痹", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "丰隆": { meridian: "足阳明胃经", location: "在小腿外侧，外踝尖上8寸，胫骨前肌的外缘", indication: "头痛眩晕、痰多咳嗽、下肢痿痹", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "解溪": { meridian: "足阳明胃经", location: "在踝区，踝关节前面中央凹陷中，拇长伸肌腱与趾长伸肌腱之间", indication: "下肢痿痹、踝关节痛、头痛眩晕", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "内庭": { meridian: "足阳明胃经", location: "在足背，第2、3趾间，趾蹼缘后方赤白肉际处", indication: "齿痛咽喉痛、腹痛便秘、热病", therapy: { method: "点按", force: "中", duration: "3-5分钟" } },
    "厉兑": { meridian: "足阳明胃经", location: "在足趾，第2趾末节外侧，趾甲根角侧后方0.1寸", indication: "鼻衄齿痛、热病多梦、癫狂", therapy: { method: "点刺/点按", force: "轻", duration: "1-2分钟" } },

    // 其余经脉穴位格式与上述一致，完整361穴可按此格式补充，此处保留核心常用穴，其余可按需扩展
    // 4. 足太阴脾经
    "隐白": { meridian: "足太阴脾经", location: "在足趾，大趾末节内侧，趾甲根角侧后方0.1寸", indication: "月经过多、便血、癫狂、腹胀", therapy: { method: "艾灸/点按", force: "轻", duration: "3-5分钟" } },
    "太白": { meridian: "足太阴脾经", location: "在跖区，第1跖趾关节近端赤白肉际凹陷中", indication: "胃痛腹胀、泄泻便秘、体重节痛", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "公孙": { meridian: "足太阴脾经", location: "在跖区，第1跖骨基底部的前下方赤白肉际处", indication: "胃痛呕吐、腹痛泄泻、心烦失眠", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "商丘": { meridian: "足太阴脾经", location: "在踝区，内踝前下方，舟骨粗隆与内踝尖连线中点凹陷中", indication: "腹胀泄泻、便秘、踝痛", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "阴陵泉": { meridian: "足太阴脾经", location: "在小腿内侧，胫骨内侧髁下缘与胫骨内侧缘之间的凹陷中", indication: "腹胀水肿、小便不利、膝痛", therapy: { method: "按揉", force: "中", duration: "5-8分钟" } },
    "血海": { meridian: "足太阴脾经", location: "在股前区，髌底内侧端上2寸，股内侧肌隆起处", indication: "月经不调、瘾疹湿疹、膝痛", therapy: { method: "按揉/艾灸", force: "中", duration: "5-8分钟" } },
    "大横": { meridian: "足太阴脾经", location: "在腹部，脐中旁开4寸", indication: "腹痛泄泻、便秘", therapy: { method: "揉按", force: "中", duration: "5-8分钟" } },
    "大包": { meridian: "足太阴脾经", location: "在胸外侧区，第6肋间隙，在腋中线上", indication: "胸胁痛、气喘、全身疼痛", therapy: { method: "按揉", force: "轻-中", duration: "3-5分钟" } },

    // 5. 手少阴心经
    "极泉": { meridian: "手少阴心经", location: "在腋区，腋窝中央，腋动脉搏动处", indication: "心痛心悸、肩臂疼痛、腋臭", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "少海": { meridian: "手少阴心经", location: "在肘前区，横平肘横纹，肱骨内上髁前缘", indication: "心痛癔症、肘臂挛痛、瘰疬", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "通里": { meridian: "手少阴心经", location: "在前臂前区，腕掌侧远端横纹上1寸，尺侧腕屈肌腱的桡侧缘", indication: "心悸怔忡、暴喑舌强、腕臂痛", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "神门": { meridian: "手少阴心经", location: "在腕前区，腕掌侧远端横纹尺侧端，尺侧腕屈肌腱的桡侧缘", indication: "心痛心烦、失眠健忘、癫狂痫", therapy: { method: "点按/按揉", force: "轻", duration: "3-5分钟" } },
    "少冲": { meridian: "手少阴心经", location: "在手指，小指末节桡侧，指甲根角侧上方0.1寸", indication: "心悸心痛、高热昏迷、癫狂", therapy: { method: "点刺/点按", force: "轻", duration: "1-2分钟" } },

    // 6. 手太阳小肠经
    "少泽": { meridian: "手太阳小肠经", location: "在手指，小指末节尺侧，指甲根角侧上方0.1寸", indication: "乳痈乳少、昏迷热病、头痛目翳", therapy: { method: "点刺/点按", force: "轻", duration: "1-2分钟" } },
    "后溪": { meridian: "手太阳小肠经", location: "在手内侧，第5掌指关节尺侧近端赤白肉际凹陷中", indication: "头项强痛、腰背痛、癫狂痫、疟疾", therapy: { method: "点按", force: "中", duration: "3-5分钟" } },
    "腕骨": { meridian: "手太阳小肠经", location: "在腕区，第5掌骨底与三角骨之间的赤白肉际凹陷中", indication: "头项强痛、指挛腕痛、黄疸", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "养老": { meridian: "手太阳小肠经", location: "在前臂后区，腕背横纹上1寸，尺骨头桡侧凹陷中", indication: "目视不明、肩背肘臂酸痛", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "肩贞": { meridian: "手太阳小肠经", location: "在肩胛区，肩关节后下方，腋后纹头直上1寸", indication: "肩臂疼痛、上肢不遂、瘰疬", therapy: { method: "按揉", force: "中", duration: "5-8分钟" } },
    "天宗": { meridian: "手太阳小肠经", location: "在肩胛区，肩胛冈中点与肩胛骨下角连线上1/3与下2/3交点凹陷中", indication: "肩胛疼痛、气喘、乳痈", therapy: { method: "按揉/推拿", force: "中-重", duration: "5-10分钟" } },
    "颧髎": { meridian: "手太阳小肠经", location: "在面部，颧骨下缘，目外眦直下凹陷中", indication: "口眼歪斜、眼睑瞤动、齿痛颊肿", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "听宫": { meridian: "手太阳小肠经", location: "在面部，耳屏正中与下颌骨髁状突之间的凹陷中", indication: "耳鸣耳聋、聤耳、齿痛", therapy: { method: "点按", force: "轻", duration: "2-3分钟" } },

    // 7. 足太阳膀胱经
    "睛明": { meridian: "足太阳膀胱经", location: "在面部，目内眦内上方眶内侧壁凹陷中", indication: "目赤肿痛、近视夜盲、急性腰扭伤", therapy: { method: "点按", force: "极轻", duration: "1-2分钟" } },
    "攒竹": { meridian: "足太阳膀胱经", location: "在面部，眉头凹陷中，额切迹处", indication: "头痛眉棱骨痛、目疾、呃逆", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "天柱": { meridian: "足太阳膀胱经", location: "在颈后区，横平第2颈椎棘突上际，斜方肌外缘凹陷中", indication: "后头痛、项强、肩背痛、鼻塞", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "风门": { meridian: "足太阳膀胱经", location: "在脊柱区，第2胸椎棘突下，后正中线旁开1.5寸", indication: "感冒咳嗽、项强、肩背痛", therapy: { method: "按揉/艾灸/拔罐", force: "中", duration: "5-8分钟" } },
    "肺俞": { meridian: "足太阳膀胱经", location: "在脊柱区，第3胸椎棘突下，后正中线旁开1.5寸", indication: "咳嗽气喘、咯血、骨蒸潮热", therapy: { method: "按揉/艾灸/拔罐", force: "中", duration: "5-10分钟" } },
    "心俞": { meridian: "足太阳膀胱经", location: "在脊柱区，第5胸椎棘突下，后正中线旁开1.5寸", indication: "心痛失眠、健忘癫狂、咳嗽咯血", therapy: { method: "按揉/艾灸", force: "中", duration: "5-8分钟" } },
    "膈俞": { meridian: "足太阳膀胱经", location: "在脊柱区，第7胸椎棘突下，后正中线旁开1.5寸", indication: "呕吐呃逆、气喘咳嗽、血虚潮热", therapy: { method: "按揉/艾灸/拔罐", force: "中", duration: "5-8分钟" } },
    "肝俞": { meridian: "足太阳膀胱经", location: "在脊柱区，第9胸椎棘突下，后正中线旁开1.5寸", indication: "胁痛黄疸、目疾、癫狂痫", therapy: { method: "按揉/艾灸", force: "中", duration: "5-8分钟" } },
    "脾俞": { meridian: "足太阳膀胱经", location: "在脊柱区，第11胸椎棘突下，后正中线旁开1.5寸", indication: "腹胀泄泻、呕吐消化不良、水肿背痛", therapy: { method: "按揉/艾灸/拔罐", force: "中", duration: "5-10分钟" } },
    "胃俞": { meridian: "足太阳膀胱经", location: "在脊柱区，第12胸椎棘突下，后正中线旁开1.5寸", indication: "胃脘痛、呕吐腹胀、肠鸣", therapy: { method: "按揉/艾灸", force: "中", duration: "5-8分钟" } },
    "肾俞": { meridian: "足太阳膀胱经", location: "在脊柱区，第2腰椎棘突下，后正中线旁开1.5寸", indication: "腰痛遗精、阳痿早泄、月经不调、耳鸣耳聋", therapy: { method: "按揉/艾灸/拔罐", force: "中", duration: "5-10分钟" } },
    "大肠俞": { meridian: "足太阳膀胱经", location: "在脊柱区，第4腰椎棘突下，后正中线旁开1.5寸", indication: "腰腿痛、腹胀便秘、泄泻", therapy: { method: "按揉/艾灸/拔罐", force: "中", duration: "5-10分钟" } },
    "次髎": { meridian: "足太阳膀胱经", location: "在骶区，正对第2骶后孔中", indication: "月经不调、痛经、腰痛、小便不利", therapy: { method: "按揉/艾灸", force: "中", duration: "5-8分钟" } },
    "承扶": { meridian: "足太阳膀胱经", location: "在股后区，臀沟的中点", indication: "腰腿痛、痔疾、下肢痿痹", therapy: { method: "按揉/推拿", force: "中-重", duration: "5-10分钟" } },
    "委中": { meridian: "足太阳膀胱经", location: "在膝后区，腘横纹中点", indication: "腰背痛、下肢痿痹、腹痛吐泻、小便不利", therapy: { method: "点按/按揉", force: "中", duration: "3-5分钟" } },
    "承山": { meridian: "足太阳膀胱经", location: "在小腿后区，腓肠肌两肌腹与肌腱交角处", indication: "腰腿拘急疼痛、痔疾、便秘", therapy: { method: "按揉/推拿", force: "中", duration: "5-8分钟" } },
    "昆仑": { meridian: "足太阳膀胱经", location: "在踝区，外踝尖与跟腱之间的凹陷中", indication: "后头痛项强、腰骶疼痛、足踝肿痛", therapy: { method: "点按/按揉", force: "中", duration: "3-5分钟" } },
    "申脉": { meridian: "足太阳膀胱经", location: "在踝区，外踝尖直下，外踝下缘与跟骨之间凹陷中", indication: "头痛眩晕、癫狂痫、腰腿酸痛", therapy: { method: "点按", force: "中", duration: "3-5分钟" } },
    "至阴": { meridian: "足太阳膀胱经", location: "在足趾，小趾末节外侧，趾甲根角侧后方0.1寸", indication: "头痛目痛、鼻塞鼻衄、胎位不正", therapy: { method: "艾灸/点按", force: "轻", duration: "3-5分钟" } },

    // 8. 足少阴肾经
    "涌泉": { meridian: "足少阴肾经", location: "在足底，屈足卷趾时足心最凹陷中", indication: "失眠头痛、高血压、咽喉肿痛、足心热", therapy: { method: "点按/搓揉", force: "中-重", duration: "5-10分钟" } },
    "然谷": { meridian: "足少阴肾经", location: "在足内侧，足舟骨粗隆下方，赤白肉际处", indication: "月经不调、遗精消渴、咽喉肿痛", therapy: { method: "点按", force: "中", duration: "3-5分钟" } },
    "太溪": { meridian: "足少阴肾经", location: "在踝区，内踝尖与跟腱之间的凹陷中", indication: "头痛目眩、咽喉肿痛、月经不调、腰脊痛", therapy: { method: "按揉/艾灸", force: "中", duration: "5-8分钟" } },
    "照海": { meridian: "足少阴肾经", location: "在踝区，内踝尖下1寸，内踝下缘边际凹陷中", indication: "失眠癫痫、咽喉干痛、月经不调", therapy: { method: "按揉/艾灸", force: "轻-中", duration: "3-5分钟" } },
    "复溜": { meridian: "足少阴肾经", location: "在小腿内侧，内踝尖上2寸，跟腱的前缘", indication: "水肿腹胀、泄泻盗汗、腰脊强痛", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "阴谷": { meridian: "足少阴肾经", location: "在膝后区，腘横纹上，半腱肌肌腱外侧缘", indication: "阳痿遗精、月经不调、膝股内侧痛", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },

    // 9. 手厥阴心包经
    "天池": { meridian: "手厥阴心包经", location: "在胸部，第4肋间隙，前正中线旁开5寸", indication: "胸闷心痛、咳嗽痰多、乳痈", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "曲泽": { meridian: "手厥阴心包经", location: "在肘前区，肘横纹上，肱二头肌腱的尺侧缘凹陷中", indication: "心痛心悸、胃痛呕吐、肘臂挛痛", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "郄门": { meridian: "手厥阴心包经", location: "在前臂前区，腕掌侧远端横纹上5寸，掌长肌腱与桡侧腕屈肌腱之间", indication: "心痛心悸、呕血咳血、疔疮", therapy: { method: "点按", force: "中", duration: "3-5分钟" } },
    "内关": { meridian: "手厥阴心包经", location: "在前臂前区，腕掌侧远端横纹上2寸，掌长肌腱与桡侧腕屈肌腱之间", indication: "心悸胸闷、胃痛呕吐、失眠眩晕", therapy: { method: "点按/按揉", force: "轻-中", duration: "3-5分钟" } },
    "大陵": { meridian: "手厥阴心包经", location: "在腕前区，腕掌侧远端横纹中，掌长肌腱与桡侧腕屈肌腱之间", indication: "心痛心悸、胃痛呕吐、癫狂、腕痛", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "劳宫": { meridian: "手厥阴心包经", location: "在掌区，横平第3掌指关节近端，第2、3掌骨之间偏于第3掌骨", indication: "中风昏迷、心痛癫狂、口疮口臭", therapy: { method: "点按", force: "中", duration: "2-3分钟" } },
    "中冲": { meridian: "手厥阴心包经", location: "在手指，中指末端最高点", indication: "中风昏迷、舌强不语、热病、中暑", therapy: { method: "点刺/点按", force: "轻", duration: "1-2分钟" } },

    // 10. 手少阳三焦经
    "关冲": { meridian: "手少阳三焦经", location: "在手指，第4指末节尺侧，指甲根角侧上方0.1寸", indication: "头痛目赤、咽喉肿痛、热病、昏厥", therapy: { method: "点刺/点按", force: "轻", duration: "1-2分钟" } },
    "中渚": { meridian: "手少阳三焦经", location: "在手背，第4、5掌骨间，第4掌指关节近端凹陷中", indication: "头痛目赤、耳鸣耳聋、肩背肘臂酸痛", therapy: { method: "点按", force: "中", duration: "3-5分钟" } },
    "阳池": { meridian: "手少阳三焦经", location: "在腕后区，腕背侧远端横纹中，指伸肌腱尺侧缘凹陷中", indication: "目赤肿痛、耳聋、腕痛、消渴", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "外关": { meridian: "手少阳三焦经", location: "在前臂后区，腕背侧远端横纹上2寸，尺骨与桡骨间隙中点", indication: "热病头痛、耳鸣耳聋、胁痛、上肢痿痹", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "支沟": { meridian: "手少阳三焦经", location: "在前臂后区，腕背侧远端横纹上3寸，尺骨与桡骨间隙中点", indication: "耳鸣耳聋、胁肋痛、便秘、热病", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "肩髎": { meridian: "手少阳三焦经", location: "在三角肌区，肩峰角与肱骨大结节两骨间凹陷中", indication: "肩臂挛痛、上肢不遂", therapy: { method: "按揉/艾灸", force: "中", duration: "5-8分钟" } },
    "翳风": { meridian: "手少阳三焦经", location: "在颈部，耳垂后方，乳突下端前方凹陷中", indication: "耳鸣耳聋、口眼歪斜、瘰疬", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "角孙": { meridian: "手少阳三焦经", location: "在头部，耳尖正对发际处", indication: "偏头痛、目赤肿痛、齿痛", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "耳门": { meridian: "手少阳三焦经", location: "在耳区，耳屏上切迹前方，下颌骨髁状突后缘凹陷中", indication: "耳鸣耳聋、聤耳、齿痛", therapy: { method: "点按", force: "轻", duration: "2-3分钟" } },
    "丝竹空": { meridian: "手少阳三焦经", location: "在面部，眉梢凹陷中", indication: "头痛、目赤肿痛、眼睑瞤动、癫狂", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },

    // 11. 足少阳胆经
    "瞳子髎": { meridian: "足少阳胆经", location: "在面部，目外眦外侧0.5寸凹陷中", indication: "头痛、目赤肿痛、目翳", therapy: { method: "点按", force: "轻", duration: "2-3分钟" } },
    "听会": { meridian: "足少阳胆经", location: "在面部，耳屏间切迹与下颌骨髁突之间的凹陷中", indication: "耳鸣耳聋、聤耳、齿痛、口歪", therapy: { method: "点按", force: "轻", duration: "2-3分钟" } },
    "率谷": { meridian: "足少阳胆经", location: "在头部，耳尖直上入发际1.5寸", indication: "偏头痛、眩晕、小儿惊风", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "阳白": { meridian: "足少阳胆经", location: "在头部，眉上1寸，瞳孔直上", indication: "头痛、目眩、目痛、眼睑下垂", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "风池": { meridian: "足少阳胆经", location: "在颈后区，枕骨之下，胸锁乳突肌上端与斜方肌上端之间的凹陷中", indication: "头痛眩晕、感冒鼻塞、颈项强痛、中风", therapy: { method: "按揉", force: "中", duration: "5-8分钟" } },
    "肩井": { meridian: "足少阳胆经", location: "在肩胛区，第7颈椎棘突与肩峰最外侧点连线的中点", indication: "肩背疼痛、颈椎病、乳痈、上肢不遂", therapy: { method: "按揉/推拿", force: "中", duration: "5-8分钟" } },
    "日月": { meridian: "足少阳胆经", location: "在胸部，第7肋间隙中，前正中线旁开4寸", indication: "胁肋疼痛、黄疸、呕吐吞酸", therapy: { method: "按揉", force: "轻-中", duration: "3-5分钟" } },
    "环跳": { meridian: "足少阳胆经", location: "在臀区，股骨大转子最凸点与骶管裂孔连线的外1/3与内2/3交点处", indication: "腰胯疼痛、下肢痿痹、半身不遂", therapy: { method: "按揉/推拿/艾灸", force: "重", duration: "8-15分钟" } },
    "风市": { meridian: "足少阳胆经", location: "在股部，髌底上7寸，直立垂手，掌心贴于大腿时，中指尖所指凹陷中", indication: "下肢痿痹、麻木、半身不遂、遍身瘙痒", therapy: { method: "按揉/推拿", force: "中", duration: "5-8分钟" } },
    "阳陵泉": { meridian: "足少阳胆经", location: "在小腿外侧，腓骨头前下方凹陷中", indication: "胁痛、口苦、呕吐、膝肿痛、下肢痿痹", therapy: { method: "按揉/艾灸", force: "中", duration: "5-8分钟" } },
    "悬钟": { meridian: "足少阳胆经", location: "在小腿外侧，外踝尖上3寸，腓骨前缘", indication: "痴呆、中风、颈项强痛、下肢痿痹", therapy: { method: "按揉/艾灸", force: "中", duration: "3-5分钟" } },
    "丘墟": { meridian: "足少阳胆经", location: "在踝区，外踝的前下方，趾长伸肌腱的外侧凹陷中", indication: "目赤肿痛、颈项痛、腋下肿、足内翻下垂", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "足临泣": { meridian: "足少阳胆经", location: "在足背，第4、5跖骨底结合部的前方，第5趾长伸肌腱外侧凹陷中", indication: "偏头痛、目赤肿痛、胁肋疼痛、月经不调", therapy: { method: "点按", force: "中", duration: "3-5分钟" } },
    "侠溪": { meridian: "足少阳胆经", location: "在足背，第4、5趾间，趾蹼缘后方赤白肉际处", indication: "头痛眩晕、耳鸣耳聋、胁痛、热病", therapy: { method: "点按", force: "中", duration: "2-3分钟" } },
    "足窍阴": { meridian: "足少阳胆经", location: "在足趾，第4趾末节外侧，趾甲根角侧后方0.1寸", indication: "头痛目赤、耳鸣耳聋、咽喉肿痛、热病", therapy: { method: "点刺/点按", force: "轻", duration: "1-2分钟" } },

    // 12. 足厥阴肝经
    "大敦": { meridian: "足厥阴肝经", location: "在足趾，大趾末节外侧，趾甲根角侧后方0.1寸", indication: "疝气、遗尿、月经不调、癫痫", therapy: { method: "点刺/艾灸", force: "轻", duration: "3-5分钟" } },
    "行间": { meridian: "足厥阴肝经", location: "在足背，第1、2趾间，趾蹼缘后方赤白肉际处", indication: "头痛目眩、目赤肿痛、月经不调、胁痛", therapy: { method: "点按", force: "中", duration: "3-5分钟" } },
    "太冲": { meridian: "足厥阴肝经", location: "在足背，第1、2跖骨间，跖骨底结合部前方凹陷中", indication: "头痛眩晕、目赤肿痛、月经不调、胁痛", therapy: { method: "点按/按揉", force: "中", duration: "3-5分钟" } },
    "中封": { meridian: "足厥阴肝经", location: "在踝区，内踝前，胫骨前肌肌腱的内侧缘凹陷中", indication: "疝气、遗精、小便不利、踝痛", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "曲泉": { meridian: "足厥阴肝经", location: "在膝部，腘横纹内侧端，半腱肌肌腱内缘凹陷中", indication: "月经不调、痛经、遗精、膝痛", therapy: { method: "按揉", force: "中", duration: "3-5分钟" } },
    "章门": { meridian: "足厥阴肝经", location: "在侧腹部，第11肋游离端的下际", indication: "腹胀泄泻、胁痛、痞块", therapy: { method: "按揉", force: "轻-中", duration: "3-5分钟" } },
    "期门": { meridian: "足厥阴肝经", location: "在胸部，第6肋间隙，前正中线旁开4寸", indication: "胸胁胀痛、呕吐吞酸、乳痈、郁证", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },

    // 13. 督脉
    "长强": { meridian: "督脉", location: "在会阴区，尾骨下方，尾骨端与肛门连线的中点处", indication: "泄泻便血、痔疾、脱肛、癫狂痫", therapy: { method: "按揉/艾灸", force: "中", duration: "3-5分钟" } },
    "腰阳关": { meridian: "督脉", location: "在脊柱区，第4腰椎棘突下凹陷中，后正中线上", indication: "腰骶疼痛、下肢痿痹、月经不调、遗精", therapy: { method: "按揉/艾灸/拔罐", force: "中", duration: "5-10分钟" } },
    "命门": { meridian: "督脉", location: "在脊柱区，第2腰椎棘突下凹陷中，后正中线上", indication: "腰脊强痛、遗精阳痿、月经不调、五更泻", therapy: { method: "按揉/艾灸/拔罐", force: "中", duration: "5-10分钟" } },
    "至阳": { meridian: "督脉", location: "在脊柱区，第7胸椎棘突下凹陷中，后正中线上", indication: "黄疸、胸胁胀满、咳嗽气喘、脊强", therapy: { method: "按揉/艾灸", force: "中", duration: "5-8分钟" } },
    "身柱": { meridian: "督脉", location: "在脊柱区，第3胸椎棘突下凹陷中，后正中线上", indication: "咳嗽气喘、癫痫、脊背强痛", therapy: { method: "按揉/艾灸", force: "中", duration: "5-8分钟" } },
    "大椎": { meridian: "督脉", location: "在脊柱区，第7颈椎棘突下凹陷中，后正中线上", indication: "感冒发热、颈椎病、咳喘风疹", therapy: { method: "按揉/艾灸/拔罐", force: "中", duration: "5-8分钟" } },
    "哑门": { meridian: "督脉", location: "在颈后区，第2颈椎棘突上际凹陷中，后正中线上", indication: "暴喑、舌强不语、癫狂痫、头痛项强", therapy: { method: "点按", force: "极轻", duration: "1-2分钟" } },
    "风府": { meridian: "督脉", location: "在颈后区，枕外隆凸直下，两侧斜方肌之间凹陷中", indication: "中风不语、癫狂痫、头痛项强、眩晕", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "百会": { meridian: "督脉", location: "在头部，前发际正中直上5寸", indication: "头痛眩晕、失眠中风、脱肛阴挺，升阳举陷", therapy: { method: "点按/艾灸", force: "轻", duration: "3-5分钟" } },
    "上星": { meridian: "督脉", location: "在头部，前发际正中直上1寸", indication: "头痛、目痛、鼻渊、鼻衄、热病", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "神庭": { meridian: "督脉", location: "在头部，前发际正中直上0.5寸", indication: "头痛、眩晕、失眠、鼻渊、癫狂", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "水沟": { meridian: "督脉", location: "在面部，人中沟的上1/3与中1/3交点处", indication: "昏迷晕厥、中风、癫狂痫、闪挫腰痛", therapy: { method: "点按", force: "重", duration: "1-2分钟" } },
    "承浆": { meridian: "任脉", location: "在面部，颏唇沟的正中凹陷处", indication: "口眼歪斜、齿龈肿痛、流涎、癫狂", therapy: { method: "点按", force: "轻", duration: "2-3分钟" } },

    // 14. 任脉
    "曲骨": { meridian: "任脉", location: "在下腹部，耻骨联合上缘，前正中线上", indication: "小便不利、遗尿、遗精、月经不调", therapy: { method: "艾灸", force: "轻-中", duration: "5-10分钟" } },
    "中极": { meridian: "任脉", location: "在下腹部，脐中下4寸，前正中线上", indication: "遗尿小便不利、遗精阳痿、月经不调、崩漏", therapy: { method: "艾灸/揉按", force: "中", duration: "5-10分钟" } },
    "关元": { meridian: "任脉", location: "在下腹部，脐中下3寸，前正中线上", indication: "中风脱证、虚劳冷惫、遗精阳痿、月经不调、腹痛泄泻", therapy: { method: "艾灸/揉按", force: "中", duration: "10-15分钟" } },
    "气海": { meridian: "任脉", location: "在下腹部，脐中下1.5寸，前正中线上", indication: "虚脱乏力、腹痛泄泻、遗精阳痿、月经不调", therapy: { method: "艾灸/揉按", force: "中", duration: "10-15分钟" } },
    "神阙": { meridian: "任脉", location: "在脐区，脐中央", indication: "虚脱、腹痛泄泻、水肿、脱肛，保健要穴", therapy: { method: "艾灸/热敷", force: "中", duration: "10-20分钟" } },
    "中脘": { meridian: "任脉", location: "在上腹部，脐中上4寸，前正中线上", indication: "胃痛腹胀、呕吐吞酸、黄疸、消化不良，胃之募穴", therapy: { method: "揉按/艾灸", force: "中", duration: "5-10分钟" } },
    "膻中": { meridian: "任脉", location: "在胸部，横平第4肋间隙，前正中线上", indication: "咳嗽气喘、胸闷心痛、乳少、噎膈", therapy: { method: "按揉", force: "轻", duration: "3-5分钟" } },
    "天突": { meridian: "任脉", location: "在颈前区，胸骨上窝中央，前正中线上", indication: "咳嗽气喘、胸痛、咽喉肿痛、噎膈", therapy: { method: "按揉", force: "轻", duration: "2-3分钟" } },
    "廉泉": { meridian: "任脉", location: "在颈前区，喉结上方，舌骨上缘凹陷中，前正中线上", indication: "舌强不语、舌下肿痛、吞咽困难", therapy: { method: "点按", force: "轻", duration: "2-3分钟" } }
};

// ========== 2. 全局变量 ==========
let imageBase64 = "";
let originalImage = null;
const canvas = document.getElementById('resultCanvas');
const ctx = canvas.getContext('2d');

// 机器人工作空间参数（模拟真实机械臂参数）
const ROBOT_PARAMS = {
    workRangeX: 600,  // 工作空间X方向宽度 mm
    workRangeY: 800,  // 工作空间Y方向高度 mm
    baseZ: 100,       // 基准高度 mm
    workZ: 5,         // 工作高度 mm
    moveSpeed: 100    // 运动速度 mm/s
};

// ========== 3. 页面交互初始化 ==========
const uploadArea = document.getElementById('uploadArea');
const imageInput = document.getElementById('imageInput');
const apiKeyInput = document.getElementById('apiKey');
const meridianSelect = document.getElementById('meridianSelect');
const startBtn = document.getElementById('startBtn');
const statusText = document.getElementById('statusText');
const previewBox = document.getElementById('previewBox');
const resultSection = document.getElementById('resultSection');

// 上传区域交互
uploadArea.addEventListener('click', () => imageInput.click());
uploadArea.addEventListener('dragover', e => {
    e.preventDefault();
    uploadArea.style.backgroundColor = '#eff6ff';
});
uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.backgroundColor = '#f8fafc';
});
uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.style.backgroundColor = '#f8fafc';
    if (e.dataTransfer.files[0]) handleImageFile(e.dataTransfer.files[0]);
});
imageInput.addEventListener('change', e => {
    if (e.target.files[0]) handleImageFile(e.target.files[0]);
});

// 按钮状态检查
function checkBtnStatus() {
    startBtn.disabled = !(apiKeyInput.value.trim() && imageBase64);
}
apiKeyInput.addEventListener('input', checkBtnStatus);

// ========== 4. 图像处理工具 ==========
function handleImageFile(file) {
    const reader = new FileReader();
    reader.onload = e => {
        const img = new Image();
        img.onload = () => {
            originalImage = img;
            const maxSize = 800;
            let w = img.width, h = img.height;
            if (w > maxSize || h > maxSize) {
                if (w > h) {
                    h = h * maxSize / w;
                    w = maxSize;
                } else {
                    w = w * maxSize / h;
                    h = maxSize;
                }
            }
            canvas.width = w;
            canvas.height = h;
            ctx.drawImage(img, 0, 0, w, h);
            imageBase64 = canvas.toDataURL('image/jpeg', 0.8);
            previewBox.style.display = 'block';
            checkBtnStatus();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// ========== 5. 根据经脉获取穴位列表 ==========
function getAcupointsByMeridian(meridianName) {
    if (meridianName === "常用保健穴（12穴）" || meridianName === "常用精选穴") {
        return ["百会", "印堂", "太阳", "肩井", "曲池", "合谷", "内关", "足三里", "三阴交", "涌泉", "命门", "大椎"];
    }
    return Object.keys(ACUPOINT_KNOWLEDGE).filter(name => ACUPOINT_KNOWLEDGE[name].meridian === meridianName);
}

// ========== 6. LLM调用：qwen-vl 穴位坐标识别 ==========
async function detectAcupoints(apiKey, imgBase64, meridianName) {
    const pointList = getAcupointsByMeridian(meridianName);
    const pointStr = pointList.join("、");

    const prompt = `请精准识别这张人体图片中的以下中医穴位：${pointStr}。
要求：
1. 每个穴位输出归一化坐标(x,y)，数值范围0-1，图像左上角为坐标原点，x为水平方向比例，y为垂直方向比例。
2. 严格只输出标准JSON格式，不要任何解释文字、markdown标记、代码块符号，直接输出JSON对象。
3. 若某个穴位在图中不可见或无法识别，对应坐标值设为null。
输出格式示例：
{"acupoints": [{"name": "合谷", "x": 0.42, "y": 0.55}, {"name": "足三里", "x": 0.31, "y": 0.78}]}`;

    const response = await fetch('https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'qwen-vl-plus',
            input: {
                messages: [
                    {
                        role: 'user',
                        content: [
                            { image: imgBase64 },
                            { text: prompt }
                        ]
                    }
                ]
            },
            parameters: {
                temperature: 0.1
            }
        })
    });

    if (!response.ok) throw new Error('模型调用失败，请检查API Key是否正确');
    const data = await response.json();
    const content = data.output.choices[0].message.content[0].text;

    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('模型输出格式异常，无法解析穴位坐标');
    return JSON.parse(jsonMatch[0]).acupoints;
}

// ========== 7. 坐标转换：图像坐标 → 机器人工作坐标系 ==========
function imageToRobotCoord(point) {
    return {
        name: point.name,
        x: point.x * ROBOT_PARAMS.workRangeX,
        y: point.y * ROBOT_PARAMS.workRangeY,
        z: ROBOT_PARAMS.workZ,
        unit: "mm"
    };
}



// 8.轨迹规划：输入必须是毫米级物理坐标
function planTrajectory(points) {
    const validPoints = points.filter(p => p.x != null && p.y != null);
    if (validPoints.length === 0) return { orderedPoints: [], totalDistance: 0, moveTime: 0 };

    const unvisited = [...validPoints];
    const ordered = [];
    let current = { x: 0, y: 0 }; // 机械臂原点(mm)
    let totalDist = 0;

    while (unvisited.length > 0) {
        let minDist = Infinity;
        let minIndex = -1;
        for (let i = 0; i < unvisited.length; i++) {
            const p = unvisited[i];
            const dist = Math.sqrt(Math.pow(p.x - current.x, 2) + Math.pow(p.y - current.y, 2));
            if (dist < minDist) {
                minDist = dist;
                minIndex = i;
            }
        }
        const nextPoint = unvisited.splice(minIndex, 1)[0];
        totalDist += minDist;
        ordered.push({ ...nextPoint, order: ordered.length + 1 });
        current = nextPoint;
    }
    // 返回原点
    totalDist += Math.sqrt(current.x * current.x + current.y * current.y);
    const moveTime = (totalDist / ROBOT_PARAMS.moveSpeed).toFixed(1);

    return {
        orderedPoints: ordered,
        totalDistance: totalDist.toFixed(1),
        moveTime: moveTime
    };
}

// ========== 9. 生成机器人执行指令（JSON格式） ==========
function generateRobotCommand(trajectory) {
    const commands = trajectory.orderedPoints.map(p => {
        const info = ACUPOINT_KNOWLEDGE[p.name]?.therapy || {};
        return {
            step: p.order,
            acupoint: p.name,
            position: { x: p.x.toFixed(1), y: p.y.toFixed(1), z: p.z, unit: "mm" },
            action: info.method || "按揉",
            force: info.force || "中",
            duration: info.duration || "5分钟"
        };
    });

    return JSON.stringify({
        robot_id: "therapy_arm_001",
        task_type: "acupoint_therapy",
        total_steps: commands.length,
        total_distance: trajectory.totalDistance + " mm",
        estimated_move_time: trajectory.moveTime + " s",
        waypoints: commands
    }, null, 2);
}

// ========== 10. LLM调用：qwen3.7-plus 生成理疗评估报告 ==========
async function generateReport(apiKey, orderedPoints) {
    const pointStr = orderedPoints
        .map(p => {
            const info = ACUPOINT_KNOWLEDGE[p.name] || {};
            const therapy = info.therapy || {};
            return `第${p.order}步：${p.name}（${info.meridian || '未知'}），理疗方式${therapy.method || '按揉'}，时长${therapy.duration || '5分钟'}`;
        })
        .join('\n');

    const prompt = `你是一名专业的理疗机器人主治医师，请根据以下机械臂理疗执行方案，生成一份综合理疗评估与疗程建议报告。
要求：
1. 先评估本次理疗方案的整体合理性与适用人群
2. 说明操作过程中的安全注意事项与禁忌症
3. 给出疗程建议（频次、周期、日常调养建议）
4. 语言专业严谨，符合中医理疗规范，字数300字左右

执行方案：
${pointStr}`;

    const response = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'qwen3.7-plus',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.3
        })
    });

    if (!response.ok) throw new Error('报告生成失败');
    const data = await response.json();
    return data.choices[0].message.content;
}



// 11.绘制轨迹与穴位：先把毫米坐标转回图像像素坐标
function drawTrajectory(orderedPoints) {
    ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);

    // 绘制运动轨迹虚线
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();

    ctx.moveTo(0, 0); // 机械臂原点对应图像左上角
    orderedPoints.forEach(p => {
        // 毫米坐标 → 归一化比例 → 画布像素坐标
        const ratioX = p.x / ROBOT_PARAMS.workRangeX;
        const ratioY = p.y / ROBOT_PARAMS.workRangeY;
        const px = ratioX * canvas.width;
        const py = ratioY * canvas.height;
        ctx.lineTo(px, py);
    });
    ctx.lineTo(0, 0); // 返回原点
    ctx.stroke();
    ctx.setLineDash([]);

    // 绘制穴位点与序号
    orderedPoints.forEach(p => {
        const ratioX = p.x / ROBOT_PARAMS.workRangeX;
        const ratioY = p.y / ROBOT_PARAMS.workRangeY;
        const px = ratioX * canvas.width;
        const py = ratioY * canvas.height;

        // 红色穴位圆点
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fill();

        // 白色序号背景
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();

        // 序号文字
        ctx.fillStyle = '#dc2626';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.order, px, py);

        // 穴位名称（带黑边增强可读性）
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px "Microsoft YaHei"';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3;
        ctx.textAlign = 'left';
        ctx.strokeText(p.name, px + 12, py + 5);
        ctx.fillText(p.name, px + 12, py + 5);
    });
}

// ========== 12. 结果渲染 ==========
function renderPointsTable(orderedPoints) {
    const tbody = document.querySelector('#pointsTable tbody');
    tbody.innerHTML = '';
    orderedPoints.forEach(p => {
        const info = ACUPOINT_KNOWLEDGE[p.name] || {};
        // 从毫米坐标反向计算图像归一化坐标
        const imgX = (p.x / ROBOT_PARAMS.workRangeX).toFixed(3);
        const imgY = (p.y / ROBOT_PARAMS.workRangeY).toFixed(3);

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${p.order}</td>
            <td>${p.name}</td>
            <td>${info.meridian || '-'}</td>
            <td>(${imgX}, ${imgY})</td>
            <td>(${p.x.toFixed(1)}, ${p.y.toFixed(1)}, ${p.z}) mm</td>
            <td>${info.location || '-'}</td>`;
        tbody.appendChild(tr);
    });
}

function renderTherapyTable(orderedPoints) {
    const tbody = document.querySelector('#therapyTable tbody');
    tbody.innerHTML = '';
    orderedPoints.forEach(p => {
        const info = ACUPOINT_KNOWLEDGE[p.name] || {};
        const therapy = info.therapy || {};
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${p.name}</td>
            <td>${therapy.method || '-'}</td>
            <td>${therapy.force || '-'}</td>
            <td>${therapy.duration || '-'}</td>
            <td>${info.indication || '-'}</td>`;
        tbody.appendChild(tr);
    });
}

// ========== 13. 主工作流 ==========
startBtn.addEventListener('click', async () => {
    const apiKey = apiKeyInput.value.trim();
    const selectedMeridian = meridianSelect.value;
    startBtn.disabled = true;
    statusText.textContent = '步骤1/5：正在调用qwen-vl视觉识别穴位坐标...';
    resultSection.style.display = 'none';

    try {
        // 步骤1：穴位识别（返回归一化坐标，这一步完全没变）
        const acupoints = await detectAcupoints(apiKey, imageBase64, selectedMeridian);

        // 步骤2：先转毫米坐标，再做轨迹规划
        statusText.textContent = '步骤2/5：正在进行机器人坐标系转换与轨迹规划...';
        const validPoints = acupoints.filter(p => p.x != null && p.y != null);
        const robotPoints = validPoints.map(p => imageToRobotCoord(p));
        const trajectory = planTrajectory(robotPoints);

        // 步骤3：生成执行指令
        statusText.textContent = '步骤3/5：正在生成机械臂执行指令...';
        const command = generateRobotCommand(trajectory);

        // 步骤4：可视化与渲染
        drawTrajectory(trajectory.orderedPoints);
        renderPointsTable(trajectory.orderedPoints);
        renderTherapyTable(trajectory.orderedPoints);

        // 填充统计数据
        document.getElementById('totalPoints').textContent = trajectory.orderedPoints.length + ' 个';
        document.getElementById('totalDistance').textContent = trajectory.totalDistance + ' mm';
        document.getElementById('moveTime').textContent = trajectory.moveTime + ' 秒';
        document.getElementById('commandBox').textContent = command;

        // 步骤5：生成理疗报告
        statusText.textContent = '步骤4/5：正在调用qwen3.7-plus生成理疗评估报告...';
        const report = await generateReport(apiKey, trajectory.orderedPoints);
        document.getElementById('reportBox').textContent = report;

        resultSection.style.display = 'block';
        statusText.textContent = '✅ 机器人穴位识别与轨迹规划完成';
    } catch (err) {
        statusText.textContent = '❌ 出错：' + err.message;
        console.error(err);
    } finally {
        startBtn.disabled = false;
    }
});