export type SampleItem = {
  id: string;
  date: string;
  title: { zh: string; en: string };
  summary: { zh: string; en: string };
  sample: true;
};

export const sampleNews: SampleItem[] = [
  {
    id: "n1",
    date: "2026-09-10",
    title: {
      zh: "【示例】劳工权利与供应链尽职调查圆桌会召开",
      en: "[Sample] Roundtable on labor rights and supply-chain due diligence",
    },
    summary: {
      zh: "示例内容：会议讨论品牌采购端的人权尽职调查实践与劳工参与机制。",
      en: "Sample: Discussion of human-rights due diligence and worker voice in sourcing.",
    },
    sample: true,
  },
  {
    id: "n2",
    date: "2026-08-28",
    title: {
      zh: "【示例】USTR 301 与劳工标准：政策简报发布",
      en: "[Sample] Policy brief: USTR 301 and labor standards",
    },
    summary: {
      zh: "示例内容：概述过剩产能、贸易措施与劳工保护之间的政策关联。",
      en: "Sample: Overview of excess capacity, trade measures, and labor protections.",
    },
    sample: true,
  },
  {
    id: "n3",
    date: "2026-08-12",
    title: {
      zh: "【示例】法拉盛社区劳工法律常识讲座",
      en: "[Sample] Flushing community labor-law clinic",
    },
    summary: {
      zh: "示例内容：面向华语社群的工资与工时基本权利说明会。",
      en: "Sample: Wage-and-hour basics briefing for Chinese-speaking communities.",
    },
    sample: true,
  },
];

export const sampleCases: SampleItem[] = [
  {
    id: "c1",
    date: "2026-07-20",
    title: {
      zh: "【示例】拖欠工资调解成功个案（脱敏）",
      en: "[Sample] Wage-arrears mediation (anonymized)",
    },
    summary: {
      zh: "示例内容：通过协商与证据固定，协助工人追回部分欠薪。",
      en: "Sample: Mediation and evidence preservation helped recover partial unpaid wages.",
    },
    sample: true,
  },
  {
    id: "c2",
    date: "2026-06-05",
    title: {
      zh: "【示例】职业伤害认定咨询要点",
      en: "[Sample] Occupational injury consultation notes",
    },
    summary: {
      zh: "示例内容：说明工伤申报时限、证据清单与常见误区（非正式法律意见）。",
      en: "Sample: Filing timelines, evidence checklist, common pitfalls (not legal advice).",
    },
    sample: true,
  },
];

export const sampleWatchlist = [
  {
    id: "w1",
    name: { zh: "【示例企业】某某电子装配厂", en: "[Sample Co.] Example Electronics Assembly" },
    issues: {
      zh: "示例：涉嫌超时加班、克扣加班费，待进一步核实。",
      en: "Sample: Alleged excessive overtime and unpaid OT — pending verification.",
    },
    status: { zh: "观察中", en: "Under review" },
  },
  {
    id: "w2",
    name: { zh: "【示例企业】某某服装代工厂", en: "[Sample Co.] Example Garment Subcontractor" },
    issues: {
      zh: "示例：被举报存在招聘押金与限制离厂，已建议向监管部门反映。",
      en: "Sample: Reports of recruitment deposits and exit restrictions; referral suggested.",
    },
    status: { zh: "已记录投诉建议", en: "Complaint referral noted" },
  },
];

export const sampleSatisfied = [
  {
    id: "s1",
    name: { zh: "【示例】某社企纺织合作社", en: "[Sample] Community Textile Cooperative" },
    note: {
      zh: "示例褒奖：公开工时制度、工伤保险覆盖较好；建议加强集体协商培训。",
      en: "Sample praise: Transparent hours and injury insurance; recommend bargaining training.",
    },
  },
];

export const sampleVideos = [
  {
    id: "v1",
    category: "legal",
    title: {
      zh: "【示例】工资条与加班费计算入门",
      en: "[Sample] Pay stubs and overtime basics",
    },
    duration: "08:12",
  },
  {
    id: "v2",
    category: "life",
    title: {
      zh: "【示例】新移民工友入住安顿经验分享",
      en: "[Sample] Settling in: tips from recent migrant workers",
    },
    duration: "12:40",
  },
  {
    id: "v3",
    category: "talks",
    title: {
      zh: "【示例】会客厅：供应链尽职调查访谈",
      en: "[Sample] Talks: Interview on supply-chain due diligence",
    },
    duration: "24:05",
  },
];

export const sampleLaws = {
  labor: [
    {
      id: "l1",
      title: {
        zh: "【示例】劳动合同与解除：要点摘要",
        en: "[Sample] Employment contracts & termination — key points",
      },
    },
  ],
  civil: [
    {
      id: "l2",
      title: {
        zh: "【示例】侵权责任与损害赔偿概览",
        en: "[Sample] Tort liability and damages overview",
      },
    },
  ],
  administrative: [
    {
      id: "l3",
      title: {
        zh: "【示例】行政处罚与复议程序简介",
        en: "[Sample] Administrative penalties & review procedures",
      },
    },
  ],
  criminal: [
    {
      id: "l4",
      title: {
        zh: "【示例】强迫劳动相关刑事风险提示",
        en: "[Sample] Criminal risks related to forced labor",
      },
    },
  ],
  general: [
    {
      id: "l5",
      title: {
        zh: "【示例】跨境劳工常见法律问答",
        en: "[Sample] Cross-border labor FAQ",
      },
    },
  ],
};

export const sampleNotices = [
  {
    id: "nt1",
    date: "2026-09-02",
    title: {
      zh: "IRS 501(c)(3) 免税资格认定公告",
      en: "Notice: IRS 501(c)(3) determination",
    },
    body: {
      zh: "中国劳工倡导会已获美国 IRS 认定为 501(c)(3) 公共慈善机构（170(b)(1)(A)(vi)）。EIN：42-2894065。免税资格自 2026年6月2日生效；认定日期 2026年9月2日。",
      en: "China Labor Advocacy has been recognized by the IRS as a 501(c)(3) public charity under 170(b)(1)(A)(vi). EIN: 42-2894065. Tax-exempt status effective June 2, 2026; determination dated September 2, 2026.",
    },
  },
];
