const skill_type_desc = {
  1: '主动技能',
  2: '终结技能',
  3: '奥义技能',
  4: '状态技能',
  5: '被动技能',
  6: '天赋技能'
}
const skills_all = {
  '0001': {
    role_id: '0001',
    role_name: '波雅·汉库克',
    avatar: '../../images/avatar.jpg',
    last_points: 2120,
    skill_arr: [
      [
        {
          skill_id: '0001_0_0',
          skill_level: '1',
          skill_name: '粉碎踢',
          skill_pre: null,
          skill_type: 1,
          skill_type_desc: skill_type_desc[1],
          desc: '消耗2魂玉，对单体造成90%伤害(11级100%)，享受踢技加成',
          current_level: 1,
          line: {
            1:false,
            2:true
          }
        },
        {
          skill_id: '0001_0_1',       
          skill_level: '1',
        },
        {
          skill_id: '0001_0_2',       
          skill_level: '1',
        },
        {
          skill_id: '0001_0_3',
          skill_level: '1',
        },
        {
          skill_id: '0001_0_4',
          skill_level: '1',
          skill_name: '香吻枪',
          skill_pre: null,
          skill_type: 1,
          skill_type_desc: skill_type_desc[1],
          desc: '消耗2魂玉，对直线造成61%伤害(11级68%)',
          current_level: 1,
          line: {
            1: false,
            2: true
          }
        }
      ],
      [
        {
          skill_id: '0001_1_0',
          skill_level: '5',
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_1_1',         
          skill_level: '5',
        },
        {
          skill_id: '0001_1_2',
          skill_level: '5',
          skill_name: '连环踢',
          skill_pre: null,
          skill_type: 1,
          skill_type_desc: skill_type_desc[1],
          desc: '消耗3魂玉，对单体造成135%伤害(11级150%)，享受踢击加成',
          current_level: 0,
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_1_3',
          skill_level: '5',
          skill_name: '速度强化',
          skill_pre: null,
          skill_type: 5,
          skill_type_desc: skill_type_desc[5],
          desc: '永久增加速度，满级10.5%',
          current_level: 0,
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_1_4',
          skill_level: '5',
          line: {
            1: false,
            2: true
          }
        }
      ],
      [
        {
          skill_id: '0001_2_0',
          skill_level: '10',
          skill_name: '魅惑风暴',
          skill_pre: ['0001_0_0'],
          skill_type: 2,
          skill_type_desc: skill_type_desc[2],
          desc: '消耗4魂玉，对单体造成225%伤害(11级250%)，享受踢击加成',
          current_level: 0,
          pre_level: 5,
          line: {
            1: true,
            2: true
          }
        },
        {
          skill_id: '0001_2_1',
          skill_level: '10',
          skill_name: '芳香脚',
          skill_pre: ['0001_2_0', '0001_2_2'],
          skill_type: 3,
          skill_type_desc: skill_type_desc[3],
          desc: '消耗100怒气，对单体造成270%伤害(11级300%)，享受踢击加成',
          current_level: 0,
          pre_level: 5,
          line: {
            1: true,
            2: true
          }
        },
        {
          skill_id: '0001_2_2',
          skill_level: '10',
          skill_name: '暴击强化',
          skill_pre: ['0001_1_2'],
          skill_type: 5,
          skill_type_desc: skill_type_desc[5],
          desc: '永久增加暴击，满级10.5%',
          current_level: 0,
          pre_level: 5,
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_2_3',
          skill_level: '10',
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_2_4',
          skill_level: '10',
          skill_name: '诱惑',
          skill_pre: ['0001_1_4'],
          skill_type: 4,
          skill_type_desc: skill_type_desc[4],
          desc: '额外魂玉1，对吻枪附加诱惑效果，令敌人伤害降低，效果持续2回合',
          current_level: 0,
          pre_level: 5,
          line: {
            1: false,
            2: false
          }
        }
      ],
      [
        {
          skill_id: '0001_3_0',
          skill_level: '20',
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_3_1',
          skill_level: '20',
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_3_2',
          skill_level: '20',
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_3_3',
          skill_level: '20',
          skill_name: '女王气场',
          skill_pre: ['0001_1_3'],
          skill_type: 6,
          skill_type_desc: skill_type_desc[6],
          desc: '战斗中，己方男性角色增加攻击力，满级10.5%',
          current_level: 0,
          pre_level: 5,
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_3_4',
          skill_level: '20',
          skill_name: '虏之矢',
          skill_pre: null,
          skill_type: 2,
          skill_type_desc: skill_type_desc[2],
          desc: '消耗3魂玉，对全体造成伤害',
          current_level: 0,
          line: {
            1: false,
            2: true
          }
        }
      ],
      [
        {
          skill_id: '0001_4_0',
          skill_level: '30',
          skill_name: '碎裂',
          skill_pre: ['0001_2_0'],
          skill_type: 4,
          skill_type_desc: skill_type_desc[4],
          desc: '额外魂玉1，对魅惑风暴附加碎裂效果，击中被诱惑敌人时，暴击率增加，暴击伤害增加',
          current_level: 0,
          pre_level: 5,
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_4_1',
          skill_level: '30',
          skill_name: '石化',
          skill_pre: ['0001_2_1'],
          skill_type: 4,
          skill_type_desc: skill_type_desc[4],
          desc: '额外怒气0，对芳香脚附加石化效果，满级100%',
          current_level: 0,
          pre_level: 5,
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_4_2',
          skill_level: '30',
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_4_3',
          skill_level: '30',
          skill_name: '甜甜甘风',
          skill_pre: ['0001_3_3'],
          skill_type: 1,
          skill_type_desc: skill_type_desc[1],
          desc: '消耗2魂玉，对直线造成伤害',
          current_level: 0,
          pre_level: 5,
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_4_4',
          skill_level: '30',
          skill_name: '石化',
          skill_pre: ['0001_3_4'],
          skill_type: 4,
          skill_type_desc: skill_type_desc[4],
          desc: '额外魂玉2，对虏之矢附加石化效果',
          current_level: 0,
          pre_level: 5,
          line: {
            1: false,
            2: true
          }
        }
      ],
      [
        {
          skill_id: '0001_5_0',
          skill_level: '40',
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_5_1',
          skill_level: '40',
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_5_2',
          skill_level: '40',
          skill_name: '防御强化',
          skill_pre: ['0001_2_2'],
          skill_type: 5,
          skill_type_desc: skill_type_desc[5],
          desc: '永久增加防御，满级10.5%',
          current_level: 0,
          pre_level: 5,
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_5_3',
          skill_level: '40',
          skill_name: '诱惑',
          skill_pre: ['0001_4_3'],
          skill_type: 4,
          skill_type_desc: skill_type_desc[4],
          desc: '额外魂玉1，对甜甜甘风附加诱惑效果，令敌人伤害降低，效果持续2回合',
          current_level: 0,
          pre_level: 5,
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_5_4',
          skill_level: '40',
          skill_name: '甜甜果实',
          skill_pre: ['0001_4_4'],
          skill_type: 6,
          skill_type_desc: skill_type_desc[6],
          desc: '常驻技能，对诱惑敌人伤害增加，石化几率增加',
          current_level: 0,
          pre_level: 3,
          line: {
            1: false,
            2: true
          }
        }
      ],
      [
        {
          skill_id: '0001_6_0',
          skill_level: '50',
          skill_name: '血量强化',
          skill_pre: ['0001_4_0'],
          skill_type: 5,
          skill_type_desc: skill_type_desc[5],
          desc: '永久增加血量，满级10.5%',
          current_level: 0,
          pre_level: 3,
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_6_1',
          skill_level: '50',
          skill_name: '击碎',
          skill_pre: ['0001_4_1'],
          skill_type: 4,
          skill_type_desc: skill_type_desc[4],
          desc: '额外怒气0，芳香脚提示暴击爆伤',
          current_level: 0,
          pre_level: 3,
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_6_2',
          skill_level: '50',
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_6_3',
          skill_level: '50',
          skill_name: '帝王资质',
          skill_pre: ['0001_5_3','0001_5_4'],
          skill_type: 6,
          skill_type_desc: skill_type_desc[6],
          desc: '常驻技能，无视魂玉降低和怒气降低效果，初始魂玉加2，初始怒气加30',
          current_level: 0,
          pre_level: 3,
          line: {
            1: true,
            2: false
          }
        }
      ],
      [
        {
          skill_id: '0001_7_0',
          skill_level: '60',
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_7_1',
          skill_level: '60',
          skill_name: '武斗专家',
          skill_pre: ['0001_6_1'],
          skill_type: 6,
          skill_type_desc: skill_type_desc[6],
          desc: '常驻技能，踢击增伤30%，踢击暴击率爆伤增加20%',
          current_level: 0,
          pre_level: 3,
          line: {
            1: false,
            2: false
          }
        },
        {
          skill_id: '0001_7_2',
          skill_level: '60',
          skill_name: '免伤强化',
          skill_pre: ['0001_5_2'],
          skill_type: 5,
          skill_type_desc: skill_type_desc[5],
          desc: '永久增加伤害减免，满级10.5%',
          current_level: 0,
          pre_level: 5,
          line: {
            1: false,
            2: true
          }
        },
        {
          skill_id: '0001_7_3',
          skill_level: '60',
        },
        {
          skill_id: '0001_7_4',
          skill_level: '60',
        }
      ],
      [
        {
          skill_id: '0001_8_0',
          skill_level: '80',
          skill_name: '攻击强化',
          skill_pre: ['0001_6_0'],
          skill_type: 5,
          skill_type_desc: skill_type_desc[5],
          desc: '永久增加攻击，满级10.5%',
          current_level: 0,
          pre_level: 5,
          line: {
            1: false,
            2: false
          }
        },
        {
          skill_id: '0001_8_1',
          skill_level: '80',
        },
        {
          skill_id: '0001_8_2',
          skill_level: '80',
          skill_name: '迷人魅惑',
          skill_pre: ['0001_7_2'],
          skill_type: 6,
          skill_type_desc: skill_type_desc[6],
          desc: '常驻技能，战斗开始随机魅惑一人，攻击汉库克时命中下降，持续两回合',
          current_level: 0,
          pre_level: 5,
          line: {
            1: false,
            2: false
          }
        },
        {
          skill_id: '0001_8_3',
          skill_level: '80',
        },
        {
          skill_id: '0001_8_4',
          skill_level: '80',
        }
      ]
    ]
  }
}

module.exports = {
  skills_all: skills_all
}