/*
 * questions.js — TOEIC Question Bank
 * Auto-generated from toeic_reading_100_each_topic_with_answers.txt
 * Total: 300 questions (Part5: 100, Part6: 100, Part7: 100)
 *
 * โครงสร้าง:
 *   part    : "5" | "6" | "7"
 *   type    : "grammar" | "reading"
 *   topic   : หัวข้อย่อย เช่น "Word Form", "Verb Tense"
 *   text    : คำถาม
 *   choices : [A, B, C, D]
 *   answer  : 0-3 (index)
 *   explain : คำอธิบายภาษาไทย
 *   context : passage/text (null ถ้าไม่มี)
 *   audio   : URL ไฟล์เสียง (null = ไม่มี)
 *
 * วิธีเพิ่มข้อสอบ: copy format ด้านล่างแล้ว push ขึ้น GitHub
 */

const QUESTION_BANK = [
  {
    id: 'P5-001',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Word Form',
    text: 'The marketing team prepared a _____ report on customer preferences in Southeast Asia.',
    choices: ['comprehension', 'comprehensive', 'comprehensively', 'comprehend'],
    answer: 1,
    explain: 'ต้องการ adjective ขยายคำนาม report; comprehensive = ครอบคลุม',
    context: null,
    audio: null,
  },
  {
    id: 'P5-002',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Word Form',
    text: 'Ms. Ortega spoke _____ about the new safety procedures during the orientation.',
    choices: ['clear', 'clearly', 'clearness', 'clarify'],
    answer: 1,
    explain: 'ต้องการ adverb ขยายกริยา spoke; clearly = อย่างชัดเจน',
    context: null,
    audio: null,
  },
  {
    id: 'P5-003',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Word Form',
    text: 'The applicant\'s strong _____ for the position impressed the hiring committee.',
    choices: ['recommend', 'recommended', 'recommendation', 'recommends'],
    answer: 2,
    explain: 'หลัง adjective strong ต้องการ noun; recommendation = การรับรอง/คำแนะนำ',
    context: null,
    audio: null,
  },
  {
    id: 'P5-004',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Word Form',
    text: 'The factory manager made a _____ decision to postpone production until Monday.',
    choices: ['strategic', 'strategy', 'strategically', 'strategize'],
    answer: 0,
    explain: 'ต้องการ adjective ขยาย decision; strategic = เชิงกลยุทธ์',
    context: null,
    audio: null,
  },
  {
    id: 'P5-005',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Word Form',
    text: 'The accounting software can calculate payroll deductions _____.',
    choices: ['automatic', 'automatically', 'automation', 'automate'],
    answer: 1,
    explain: 'ต้องการ adverb ขยาย calculate; automatically = โดยอัตโนมัติ',
    context: null,
    audio: null,
  },
  {
    id: 'P5-006',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Word Form',
    text: 'The new printer offers excellent _____ for high-volume offices.',
    choices: ['perform', 'performance', 'performed', 'performing'],
    answer: 1,
    explain: 'หลัง adjective excellent ต้องการ noun; performance = ประสิทธิภาพ',
    context: null,
    audio: null,
  },
  {
    id: 'P5-007',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Word Form',
    text: 'The board expressed _____ about the proposal\'s long-term cost.',
    choices: ['concern', 'concerned', 'concerning', 'concerns'],
    answer: 0,
    explain: 'express concern เป็น collocation; concern ในที่นี้เป็นคำนามนับไม่ได้',
    context: null,
    audio: null,
  },
  {
    id: 'P5-008',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Word Form',
    text: 'The consultant presented the data in a highly _____ manner.',
    choices: ['organize', 'organized', 'organization', 'organizes'],
    answer: 1,
    explain: 'ต้องการ adjective ขยาย manner; organized = เป็นระบบ',
    context: null,
    audio: null,
  },
  {
    id: 'P5-009',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Word Form',
    text: 'All visitors must sign in at the _____ desk before entering the building.',
    choices: ['receive', 'reception', 'receptive', 'receptionist'],
    answer: 1,
    explain: 'reception desk = โต๊ะต้อนรับ เป็น collocation',
    context: null,
    audio: null,
  },
  {
    id: 'P5-010',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Word Form',
    text: 'The training manual explains each procedure in _____ detail.',
    choices: ['consider', 'considerable', 'considerably', 'consideration'],
    answer: 1,
    explain: 'ต้องการ adjective ขยาย detail; considerable detail = รายละเอียดมาก',
    context: null,
    audio: null,
  },
  {
    id: 'P5-011',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Verb Tense',
    text: 'By the time the manager arrives, the technicians _____ the system check.',
    choices: ['complete', 'will have completed', 'are completing', 'completed'],
    answer: 1,
    explain: 'By the time + present ใช้ future perfect เพื่อบอกว่างานจะเสร็จก่อนเวลานั้น',
    context: null,
    audio: null,
  },
  {
    id: 'P5-012',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Verb Tense',
    text: 'The sales figures _____ steadily since the new website was launched.',
    choices: ['increase', 'have increased', 'are increased', 'were increasing'],
    answer: 1,
    explain: 'since + จุดเวลาในอดีต มักใช้ present perfect',
    context: null,
    audio: null,
  },
  {
    id: 'P5-013',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Subject-Verb Agreement',
    text: 'Neither the supervisor nor the assistants _____ authorized to approve refunds over $500.',
    choices: ['is', 'are', 'be', 'being'],
    answer: 1,
    explain: 'Neither...nor กริยาตามประธานที่อยู่ใกล้กว่า; assistants เป็นพหูพจน์ จึงใช้ are',
    context: null,
    audio: null,
  },
  {
    id: 'P5-014',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Verb Tense',
    text: 'The shipment _____ at the warehouse yesterday afternoon.',
    choices: ['arrives', 'arrived', 'has arrived', 'arriving'],
    answer: 1,
    explain: 'yesterday เป็นอดีตชัดเจน ใช้ past simple',
    context: null,
    audio: null,
  },
  {
    id: 'P5-015',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Subject-Verb Agreement',
    text: 'The committee _____ reviewing the budget proposal at this moment.',
    choices: ['is', 'are', 'were', 'be'],
    answer: 0,
    explain: 'committee มองเป็นหน่วยเดียวในบริบท TOEIC ทั่วไป ใช้เอกพจน์ is',
    context: null,
    audio: null,
  },
  {
    id: 'P5-016',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Passive Voice',
    text: 'Several employees _____ transferred to the new branch next month.',
    choices: ['will', 'will be', 'have', 'being'],
    answer: 1,
    explain: 'ประธาน employees ถูกย้าย จึงใช้ passive: will be transferred',
    context: null,
    audio: null,
  },
  {
    id: 'P5-017',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Passive Voice',
    text: 'The software update _____ automatically every Friday evening.',
    choices: ['installs', 'is installed', 'was installing', 'installing'],
    answer: 1,
    explain: 'software update ถูกติดตั้ง จึงใช้ passive voice',
    context: null,
    audio: null,
  },
  {
    id: 'P5-018',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Conditionals',
    text: 'If the client _____ the agreement today, we can begin the project next week.',
    choices: ['signs', 'signed', 'will sign', 'has signing'],
    answer: 0,
    explain: 'First conditional: If + present simple, will/can + base verb',
    context: null,
    audio: null,
  },
  {
    id: 'P5-019',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Verb Tense',
    text: 'The finance department _____ the annual report before it was sent to shareholders.',
    choices: ['reviews', 'had reviewed', 'will review', 'is reviewing'],
    answer: 1,
    explain: 'การทบทวนเกิดก่อนการส่งในอดีต ใช้ past perfect',
    context: null,
    audio: null,
  },
  {
    id: 'P5-020',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Subject-Verb Agreement',
    text: 'Every employee and contractor _____ required to wear an ID badge.',
    choices: ['are', 'is', 'have', 'were'],
    answer: 1,
    explain: 'Every + singular noun แม้มี and ก็เน้นรายบุคคล ใช้ is',
    context: null,
    audio: null,
  },
  {
    id: 'P5-021',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Prepositions',
    text: 'The quarterly meeting has been postponed _____ Friday morning.',
    choices: ['at', 'to', 'on', 'in'],
    answer: 1,
    explain: 'postpone to + วัน/เวลาใหม่ = เลื่อนไปเป็น',
    context: null,
    audio: null,
  },
  {
    id: 'P5-022',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Prepositions',
    text: 'Please submit your travel expenses _____ the end of the month.',
    choices: ['by', 'during', 'between', 'over'],
    answer: 0,
    explain: 'by = ไม่เกินกำหนดเวลา',
    context: null,
    audio: null,
  },
  {
    id: 'P5-023',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Prepositions',
    text: 'The new policy applies _____ all full-time and part-time staff.',
    choices: ['for', 'to', 'with', 'on'],
    answer: 1,
    explain: 'apply to = มีผลกับ/ใช้กับ',
    context: null,
    audio: null,
  },
  {
    id: 'P5-024',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Prepositions',
    text: 'The conference room is located _____ the third floor.',
    choices: ['at', 'on', 'in', 'by'],
    answer: 1,
    explain: 'ใช้ on กับชั้นของอาคาร',
    context: null,
    audio: null,
  },
  {
    id: 'P5-025',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Prepositions',
    text: 'The brochure provides information _____ local transportation options.',
    choices: ['about', 'into', 'across', 'among'],
    answer: 0,
    explain: 'information about = ข้อมูลเกี่ยวกับ',
    context: null,
    audio: null,
  },
  {
    id: 'P5-026',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Prepositions',
    text: 'The supplier is responsible _____ replacing defective parts.',
    choices: ['for', 'to', 'of', 'by'],
    answer: 0,
    explain: 'responsible for + gerund/noun',
    context: null,
    audio: null,
  },
  {
    id: 'P5-027',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Prepositions',
    text: 'Several changes were made _____ response to customer feedback.',
    choices: ['in', 'on', 'at', 'with'],
    answer: 0,
    explain: 'in response to = เพื่อตอบสนองต่อ',
    context: null,
    audio: null,
  },
  {
    id: 'P5-028',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Prepositions',
    text: 'Access to the archive is restricted _____ authorized personnel only.',
    choices: ['from', 'to', 'at', 'beside'],
    answer: 1,
    explain: 'restricted to = จำกัดไว้สำหรับ',
    context: null,
    audio: null,
  },
  {
    id: 'P5-029',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Prepositions',
    text: 'The invoice must be paid _____ 30 days of receipt.',
    choices: ['within', 'through', 'among', 'until'],
    answer: 0,
    explain: 'within 30 days = ภายใน 30 วัน',
    context: null,
    audio: null,
  },
  {
    id: 'P5-030',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Prepositions',
    text: 'The sales director will be away _____ business next week.',
    choices: ['on', 'in', 'for', 'with'],
    answer: 0,
    explain: 'on business = ไปทำธุรกิจ/ทำงาน',
    context: null,
    audio: null,
  },
  {
    id: 'P5-031',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Conjunctions',
    text: 'The proposal was approved _____ several members raised concerns about the cost.',
    choices: ['although', 'because', 'therefore', 'unless'],
    answer: 0,
    explain: 'although ใช้เชื่อมความขัดแย้ง: แม้ว่า',
    context: null,
    audio: null,
  },
  {
    id: 'P5-032',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Conjunctions',
    text: 'Please contact the help desk _____ you have difficulty accessing your account.',
    choices: ['whether', 'if', 'so', 'despite'],
    answer: 1,
    explain: 'if = ถ้า ใช้ในเงื่อนไข',
    context: null,
    audio: null,
  },
  {
    id: 'P5-033',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Conjunctions',
    text: 'The store will remain open late tonight _____ customers can pick up their orders.',
    choices: ['so that', 'even though', 'rather than', 'as soon as'],
    answer: 0,
    explain: 'so that = เพื่อให้ แสดงวัตถุประสงค์',
    context: null,
    audio: null,
  },
  {
    id: 'P5-034',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Transitions',
    text: 'The company expanded its warehouse; _____, delivery times have improved.',
    choices: ['however', 'nevertheless', 'as a result', 'otherwise'],
    answer: 2,
    explain: 'as a result แสดงผลลัพธ์จากประโยคก่อนหน้า',
    context: null,
    audio: null,
  },
  {
    id: 'P5-035',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Conjunctions',
    text: '_____ the weather was severe, the outdoor demonstration was moved indoors.',
    choices: ['Due to', 'Because', 'Despite', 'Instead of'],
    answer: 1,
    explain: 'Because + clause; ตามด้วยประโยคเต็ม the weather was severe',
    context: null,
    audio: null,
  },
  {
    id: 'P5-036',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Conjunctions',
    text: 'The contract cannot be finalized _____ both parties sign the last page.',
    choices: ['until', 'while', 'since', 'whereas'],
    answer: 0,
    explain: 'not...until = จะยังไม่...จนกว่า',
    context: null,
    audio: null,
  },
  {
    id: 'P5-037',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Transitions',
    text: 'The manual is available online; _____, printed copies can be requested.',
    choices: ['in addition', 'for example', 'on the contrary', 'therefore'],
    answer: 0,
    explain: 'in addition เพิ่มข้อมูลอีกอย่างหนึ่ง',
    context: null,
    audio: null,
  },
  {
    id: 'P5-038',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Preposition/Connector',
    text: '_____ the high demand, the manufacturer has increased production.',
    choices: ['Because', 'Since', 'Due to', 'Although'],
    answer: 2,
    explain: 'Due to + noun phrase; the high demand เป็นนามวลี',
    context: null,
    audio: null,
  },
  {
    id: 'P5-039',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Conjunctions',
    text: 'The new desks are larger _____ more durable than the previous model.',
    choices: ['or', 'but', 'and', 'nor'],
    answer: 2,
    explain: 'larger and more durable เชื่อมคุณสมบัติที่ไปทางเดียวกัน',
    context: null,
    audio: null,
  },
  {
    id: 'P5-040',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Transitions',
    text: 'The payment system was offline; _____, customers could not complete transactions.',
    choices: ['consequently', 'meanwhile', 'otherwise', 'similarly'],
    answer: 0,
    explain: 'consequently = ดังนั้น/ผลคือ',
    context: null,
    audio: null,
  },
  {
    id: 'P5-041',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Pronouns',
    text: 'Each participant should bring _____ own laptop to the seminar.',
    choices: ['them', 'their', 'theirs', 'themselves'],
    answer: 1,
    explain: 'their ใช้เป็น possessive adjective ขยาย own laptop',
    context: null,
    audio: null,
  },
  {
    id: 'P5-042',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Pronouns',
    text: 'The warranty covers repairs, but _____ does not include accidental damage.',
    choices: ['it', 'they', 'these', 'those'],
    answer: 0,
    explain: 'it แทน warranty ซึ่งเป็นเอกพจน์',
    context: null,
    audio: null,
  },
  {
    id: 'P5-043',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Pronouns',
    text: 'Only a few of the requested documents were available, so the auditor asked for _____.',
    choices: ['another', 'others', 'each', 'much'],
    answer: 1,
    explain: 'others = เอกสารอื่น ๆ ที่เหลือ ใช้แทนนามพหูพจน์',
    context: null,
    audio: null,
  },
  {
    id: 'P5-044',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Comparatives',
    text: 'The two proposals are similar, but this one is _____ expensive.',
    choices: ['less', 'few', 'little', 'least'],
    answer: 0,
    explain: 'less + adjective = น้อยกว่า ใช้เปรียบเทียบสองสิ่ง',
    context: null,
    audio: null,
  },
  {
    id: 'P5-045',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Determiners/Prepositions',
    text: 'Employees may choose _____ a morning session or an afternoon session.',
    choices: ['between', 'among', 'during', 'beside'],
    answer: 0,
    explain: 'between ใช้เมื่อเลือกหนึ่งในสองตัวเลือก',
    context: null,
    audio: null,
  },
  {
    id: 'P5-046',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Determiners',
    text: 'The director reviewed _____ application carefully before making a decision.',
    choices: ['each', 'many', 'several', 'all'],
    answer: 0,
    explain: 'each + singular noun; application เป็นเอกพจน์',
    context: null,
    audio: null,
  },
  {
    id: 'P5-047',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Pronouns',
    text: 'The new guidelines are more detailed than _____ issued last year.',
    choices: ['that', 'those', 'this', 'it'],
    answer: 1,
    explain: 'those แทน guidelines พหูพจน์',
    context: null,
    audio: null,
  },
  {
    id: 'P5-048',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Quantifiers',
    text: 'There are _____ seats available for the afternoon training session.',
    choices: ['limited', 'little', 'few', 'much'],
    answer: 2,
    explain: 'few + plural countable noun; seats เป็นคำนามนับได้พหูพจน์',
    context: null,
    audio: null,
  },
  {
    id: 'P5-049',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Quantifiers',
    text: 'The branch has hired _____ additional staff to handle the holiday rush.',
    choices: ['several', 'much', 'another', 'each'],
    answer: 0,
    explain: 'several + plural countable noun; staff ในความหมายคนหลายคนใช้ได้ในบริบทนี้',
    context: null,
    audio: null,
  },
  {
    id: 'P5-050',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Word Choice',
    text: 'The updated manual is more useful than the _____ one.',
    choices: ['formerly', 'former', 'formation', 'formed'],
    answer: 1,
    explain: 'former เป็น adjective ขยาย one หมายถึงอันก่อนหน้า',
    context: null,
    audio: null,
  },
  {
    id: 'P5-051',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Gerund/Infinitive',
    text: 'The company plans _____ a new distribution center in Busan.',
    choices: ['open', 'opened', 'to open', 'opening'],
    answer: 2,
    explain: 'plan + to infinitive',
    context: null,
    audio: null,
  },
  {
    id: 'P5-052',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Gerund/Infinitive',
    text: 'The manager suggested _____ the client before sending the final invoice.',
    choices: ['calling', 'to call', 'called', 'call'],
    answer: 0,
    explain: 'suggest + gerund',
    context: null,
    audio: null,
  },
  {
    id: 'P5-053',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Gerund/Infinitive',
    text: 'All employees are expected _____ the online ethics course by Friday.',
    choices: ['complete', 'to complete', 'completed', 'completing'],
    answer: 1,
    explain: 'be expected + to infinitive',
    context: null,
    audio: null,
  },
  {
    id: 'P5-054',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Gerund/Infinitive',
    text: 'The technician avoided _____ the machine while it was still connected to power.',
    choices: ['disassemble', 'to disassemble', 'disassembling', 'disassembled'],
    answer: 2,
    explain: 'avoid + gerund',
    context: null,
    audio: null,
  },
  {
    id: 'P5-055',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Gerund/Infinitive',
    text: 'The new policy allows workers _____ remotely two days a week.',
    choices: ['work', 'working', 'to work', 'worked'],
    answer: 2,
    explain: 'allow someone to do something',
    context: null,
    audio: null,
  },
  {
    id: 'P5-056',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Gerund/Infinitive',
    text: 'We appreciate _____ with our company for the past five years.',
    choices: ['you to work', 'your working', 'worked', 'to working'],
    answer: 1,
    explain: 'appreciate + possessive/gerund phrase',
    context: null,
    audio: null,
  },
  {
    id: 'P5-057',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Gerund/Infinitive',
    text: 'The contract requires both parties _____ written notice before termination.',
    choices: ['provide', 'to provide', 'providing', 'provided'],
    answer: 1,
    explain: 'require someone to do something',
    context: null,
    audio: null,
  },
  {
    id: 'P5-058',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Gerund/Infinitive',
    text: 'The team postponed _____ the product until additional tests were complete.',
    choices: ['launch', 'to launch', 'launching', 'launched'],
    answer: 2,
    explain: 'postpone + gerund',
    context: null,
    audio: null,
  },
  {
    id: 'P5-059',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Gerund/Infinitive',
    text: 'The guide is intended _____ new employees understand company procedures.',
    choices: ['help', 'helping', 'to help', 'helped'],
    answer: 2,
    explain: 'be intended to do = มีจุดประสงค์เพื่อ',
    context: null,
    audio: null,
  },
  {
    id: 'P5-060',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Gerund/Infinitive',
    text: 'Mr. Chen is responsible for _____ monthly performance reports.',
    choices: ['prepare', 'preparing', 'to prepare', 'prepared'],
    answer: 1,
    explain: 'preposition for + gerund',
    context: null,
    audio: null,
  },
  {
    id: 'P5-061',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Vocabulary',
    text: 'The hotel offers a _____ shuttle service to and from the airport.',
    choices: ['complimentary', 'complicated', 'competitive', 'comparable'],
    answer: 0,
    explain: 'complimentary = ฟรี เหมาะกับบริการ shuttle ของโรงแรม',
    context: null,
    audio: null,
  },
  {
    id: 'P5-062',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Vocabulary',
    text: 'The manager asked the team to _____ the budget before approving the purchase.',
    choices: ['review', 'restore', 'reserve', 'relieve'],
    answer: 0,
    explain: 'review the budget = ตรวจทานงบประมาณ',
    context: null,
    audio: null,
  },
  {
    id: 'P5-063',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Vocabulary',
    text: 'The airline will _____ passengers for meals if the delay exceeds three hours.',
    choices: ['reimburse', 'replace', 'recruit', 'release'],
    answer: 0,
    explain: 'reimburse = ชดเชย/คืนเงินค่าใช้จ่าย',
    context: null,
    audio: null,
  },
  {
    id: 'P5-064',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Vocabulary',
    text: 'The company is seeking a candidate with _____ knowledge of database management.',
    choices: ['extensive', 'temporary', 'visible', 'annual'],
    answer: 0,
    explain: 'extensive knowledge = ความรู้กว้างขวาง/ลึก',
    context: null,
    audio: null,
  },
  {
    id: 'P5-065',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Collocations',
    text: 'The marketing campaign helped _____ awareness of the new product.',
    choices: ['raise', 'rise', 'arise', 'lifted'],
    answer: 0,
    explain: 'raise awareness = เพิ่มการรับรู้; raise เป็น transitive verb',
    context: null,
    audio: null,
  },
  {
    id: 'P5-066',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Collocations',
    text: 'The supplier failed to meet the _____ deadline for delivery.',
    choices: ['agreed', 'agreeing', 'agreement', 'agreeable'],
    answer: 0,
    explain: 'agreed deadline = กำหนดเวลาที่ตกลงกันไว้',
    context: null,
    audio: null,
  },
  {
    id: 'P5-067',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Vocabulary/Word Form',
    text: 'The customer service representative handled the complaint in a _____ manner.',
    choices: ['professional', 'profession', 'professionally', 'professor'],
    answer: 0,
    explain: 'professional เป็น adjective ขยาย manner',
    context: null,
    audio: null,
  },
  {
    id: 'P5-068',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Vocabulary',
    text: 'The new software is _____ with most major operating systems.',
    choices: ['compatible', 'compulsory', 'considerate', 'conveniently'],
    answer: 0,
    explain: 'compatible with = เข้ากันได้กับ',
    context: null,
    audio: null,
  },
  {
    id: 'P5-069',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Vocabulary',
    text: 'The purchasing department will _____ bids from at least three vendors.',
    choices: ['solicit', 'submit', 'subscribe', 'sustain'],
    answer: 0,
    explain: 'solicit bids = ขอ/เชิญเสนอราคา',
    context: null,
    audio: null,
  },
  {
    id: 'P5-070',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Vocabulary',
    text: 'Please keep all receipts in order to _____ your expenses.',
    choices: ['verify', 'vary', 'value', 'vacate'],
    answer: 0,
    explain: 'verify expenses = ตรวจสอบ/ยืนยันค่าใช้จ่าย',
    context: null,
    audio: null,
  },
  {
    id: 'P5-071',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Relative Clauses',
    text: 'The employee _____ designed the new inventory system received an award.',
    choices: ['who', 'which', 'whose', 'what'],
    answer: 0,
    explain: 'who ใช้แทนคนใน relative clause',
    context: null,
    audio: null,
  },
  {
    id: 'P5-072',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Relative Clauses',
    text: 'The report, _____ was completed last week, includes several recommendations.',
    choices: ['who', 'which', 'where', 'what'],
    answer: 1,
    explain: 'which ใช้แทนสิ่งของ/เอกสารใน non-defining clause',
    context: null,
    audio: null,
  },
  {
    id: 'P5-073',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Relative Clauses',
    text: 'The restaurant _____ we held the reception has been renovated.',
    choices: ['where', 'which', 'who', 'whose'],
    answer: 0,
    explain: 'where ใช้แทนสถานที่',
    context: null,
    audio: null,
  },
  {
    id: 'P5-074',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Relative Clauses',
    text: 'The applicant _____ resume was selected will be contacted by Friday.',
    choices: ['who', 'whose', 'which', 'where'],
    answer: 1,
    explain: 'whose แสดงความเป็นเจ้าของ: resume ของ applicant',
    context: null,
    audio: null,
  },
  {
    id: 'P5-075',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Participles',
    text: '_____ carefully, the proposal could save the company thousands of dollars.',
    choices: ['Implementing', 'Implemented', 'To implement', 'Implements'],
    answer: 1,
    explain: 'ลดรูป passive clause: If implemented carefully = หากถูกนำไปใช้',
    context: null,
    audio: null,
  },
  {
    id: 'P5-076',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Participles',
    text: 'The documents _____ on the conference table are for the board members.',
    choices: ['placing', 'placed', 'place', 'were placing'],
    answer: 1,
    explain: 'documents ถูกวางไว้ ใช้ past participle placed เป็น reduced passive',
    context: null,
    audio: null,
  },
  {
    id: 'P5-077',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Participles',
    text: 'The manager sent an e-mail _____ the revised schedule.',
    choices: ['confirming', 'confirmed', 'confirmation', 'confirms'],
    answer: 0,
    explain: 'confirming เป็น participle phrase ขยาย e-mail: อีเมลที่ยืนยัน',
    context: null,
    audio: null,
  },
  {
    id: 'P5-078',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Participles',
    text: 'Products _____ from the online store can be returned within 14 days.',
    choices: ['purchase', 'purchasing', 'purchased', 'to purchase'],
    answer: 2,
    explain: 'products ถูกซื้อ ใช้ past participle purchased',
    context: null,
    audio: null,
  },
  {
    id: 'P5-079',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Relative Clauses',
    text: 'The candidate selected for the position is the one _____ experience best matches our needs.',
    choices: ['who', 'whose', 'which', 'where'],
    answer: 1,
    explain: 'whose experience = ประสบการณ์ของผู้สมัคร',
    context: null,
    audio: null,
  },
  {
    id: 'P5-080',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Relative Clauses',
    text: 'The office _____ the interviews will take place is on the second floor.',
    choices: ['where', 'which', 'who', 'whose'],
    answer: 0,
    explain: 'where ใช้แทนสถานที่ของการสัมภาษณ์',
    context: null,
    audio: null,
  },
  {
    id: 'P5-081',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Comparisons',
    text: 'This year’s sales results are _____ better than last year’s.',
    choices: ['signify', 'significant', 'significantly', 'significance'],
    answer: 2,
    explain: 'ต้องการ adverb ขยาย better; significantly better = ดีกว่าอย่างมาก',
    context: null,
    audio: null,
  },
  {
    id: 'P5-082',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Comparisons',
    text: 'Of all the submitted designs, Ms. Patel’s was the _____ innovative.',
    choices: ['more', 'most', 'much', 'many'],
    answer: 1,
    explain: 'of all ใช้ superlative: the most innovative',
    context: null,
    audio: null,
  },
  {
    id: 'P5-083',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Comparisons',
    text: 'The new scanner operates _____ than the older model.',
    choices: ['quick', 'quicker', 'more quickly', 'quickness'],
    answer: 2,
    explain: 'than ใช้ comparative; more quickly เป็น adverb comparative ขยาย operates',
    context: null,
    audio: null,
  },
  {
    id: 'P5-084',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Adjectives',
    text: 'The training room is not _____ enough for 80 participants.',
    choices: ['large', 'largely', 'largest', 'larger'],
    answer: 0,
    explain: 'adjective + enough: large enough',
    context: null,
    audio: null,
  },
  {
    id: 'P5-085',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Comparisons',
    text: 'The more detailed the instructions are, the _____ mistakes employees make.',
    choices: ['few', 'fewer', 'fewest', 'least'],
    answer: 1,
    explain: 'โครงสร้าง the more..., the fewer...',
    context: null,
    audio: null,
  },
  {
    id: 'P5-086',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Comparisons',
    text: 'The replacement parts arrived _____ than expected.',
    choices: ['early', 'earlier', 'earliest', 'earliness'],
    answer: 1,
    explain: 'than ใช้ comparative; earlier than expected',
    context: null,
    audio: null,
  },
  {
    id: 'P5-087',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Adverbs',
    text: 'The hotel is _____ located near the convention center.',
    choices: ['convenience', 'convenient', 'conveniently', 'convening'],
    answer: 2,
    explain: 'ต้องการ adverb ขยาย located',
    context: null,
    audio: null,
  },
  {
    id: 'P5-088',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Degree Adverbs',
    text: 'The manual is _____ clear that even first-time users can follow it.',
    choices: ['so', 'such', 'too', 'very'],
    answer: 0,
    explain: 'so + adjective + that clause',
    context: null,
    audio: null,
  },
  {
    id: 'P5-089',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Degree Adverbs',
    text: 'The conference fee is _____ high for many small businesses to afford.',
    choices: ['too', 'so', 'such', 'enough'],
    answer: 0,
    explain: 'too + adjective + to infinitive = มากเกินกว่าจะ',
    context: null,
    audio: null,
  },
  {
    id: 'P5-090',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Comparisons',
    text: 'The revised plan is _____ practical than the original version.',
    choices: ['more', 'most', 'much', 'many'],
    answer: 0,
    explain: 'than ใช้ comparative: more practical',
    context: null,
    audio: null,
  },
  {
    id: 'P5-091',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Subjunctive',
    text: 'The president insisted that the report _____ completed before noon.',
    choices: ['is', 'be', 'was', 'being'],
    answer: 1,
    explain: 'โครงสร้าง mandative subjunctive: insist that + subject + base verb',
    context: null,
    audio: null,
  },
  {
    id: 'P5-092',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Subjunctive',
    text: 'It is essential that all invoices _____ submitted with supporting documents.',
    choices: ['are', 'be', 'were', 'being'],
    answer: 1,
    explain: 'It is essential that + subject + base verb ในรูป subjunctive',
    context: null,
    audio: null,
  },
  {
    id: 'P5-093',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Conditionals',
    text: 'Had the shipment arrived earlier, the store _____ opened on schedule.',
    choices: ['will have', 'would have', 'would', 'had'],
    answer: 1,
    explain: 'Third conditional แบบ inversion: Had + S + V3, S would have + V3',
    context: null,
    audio: null,
  },
  {
    id: 'P5-094',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Inversion',
    text: 'No sooner had the meeting ended _____ the director announced a new project.',
    choices: ['than', 'when', 'then', 'while'],
    answer: 0,
    explain: 'No sooner...than เป็นโครงสร้างคู่กัน',
    context: null,
    audio: null,
  },
  {
    id: 'P5-095',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Word Form',
    text: 'The report was so detailed that the board needed _____ time to review it.',
    choices: ['additional', 'addition', 'additionally', 'adds'],
    answer: 0,
    explain: 'additional เป็น adjective ขยาย time',
    context: null,
    audio: null,
  },
  {
    id: 'P5-096',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Infinitive',
    text: 'The staff members were advised _____ personal belongings unattended.',
    choices: ['not leave', 'not to leave', 'not leaving', 'do not leave'],
    answer: 1,
    explain: 'advise someone not to do something',
    context: null,
    audio: null,
  },
  {
    id: 'P5-097',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Gerund',
    text: 'The printer is out of order and needs _____ immediately.',
    choices: ['repair', 'to repair', 'repairing', 'repaired'],
    answer: 2,
    explain: 'need + gerund มีความหมาย passive: needs repairing = needs to be repaired',
    context: null,
    audio: null,
  },
  {
    id: 'P5-098',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Inversion',
    text: 'Only after receiving approval _____ the team begin the installation.',
    choices: ['did', 'was', 'had', 'should'],
    answer: 0,
    explain: 'Only after ขึ้นต้นประโยคทำให้เกิด inversion: did + S + base verb',
    context: null,
    audio: null,
  },
  {
    id: 'P5-099',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Subjunctive',
    text: 'The consultant recommended that the company _____ its pricing strategy.',
    choices: ['reconsider', 'reconsiders', 'reconsidered', 'reconsidering'],
    answer: 0,
    explain: 'recommend that + subject + base verb',
    context: null,
    audio: null,
  },
  {
    id: 'P5-100',
    part: '5',
    partLabel: 'Part 5 — Incomplete Sentences',
    type: 'grammar',
    topic: 'Conjunctions',
    text: 'The office supplies were ordered _____ the inventory reached a critically low level.',
    choices: ['once', 'despite', 'unless', 'whereas'],
    answer: 0,
    explain: 'once = ทันทีที่/เมื่อ ใช้เชื่อมเหตุการณ์ ========================================================================================',
    context: null,
    audio: null,
  },
  {
    id: 'P6-001',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [1A]',
    text: 'Choose the best word/phrase for blank [1A]',
    choices: ['begin', 'began', 'beginning', 'to begin'],
    answer: 0,
    explain: 'หลัง will ต้องใช้กริยารูป base form: will begin',
    context: `Notice: Greenway Office Center

To all tenants:

Please be advised that lobby renovation will ___[1A]___ at Greenway Office Center on Monday, March 9. During this time, access to certain areas may be ___[1B]___ restricted for safety reasons. ___[1C]___ Signs will be posted throughout the building to direct visitors and employees to side entrance on Oak Street.

We apologize for any ___[1D]___ this work may cause and appreciate your cooperation.

Building Services`,
    audio: null,
  },
  {
    id: 'P6-002',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [1B]',
    text: 'Choose the best word/phrase for blank [1B]',
    choices: ['temporary', 'temporarily', 'temporaryness', 'temporaries'],
    answer: 1,
    explain: 'ต้องการ adverb ขยาย restricted: temporarily restricted',
    context: `Notice: Greenway Office Center

To all tenants:

Please be advised that lobby renovation will ___[1A]___ at Greenway Office Center on Monday, March 9. During this time, access to certain areas may be ___[1B]___ restricted for safety reasons. ___[1C]___ Signs will be posted throughout the building to direct visitors and employees to side entrance on Oak Street.

We apologize for any ___[1D]___ this work may cause and appreciate your cooperation.

Building Services`,
    audio: null,
  },
  {
    id: 'P6-003',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [1C]',
    text: 'Choose the best word/phrase for blank [1C]',
    choices: ['Employees should use the regular entrance only.', 'Signs will be posted throughout the building to direct visitors and employees to side entrance on Oak Street.', 'The project was completed last month.', 'The cafeteria menu will also be updated.'],
    answer: 1,
    explain: 'ประโยคนี้เชื่อมกับข้อมูลเรื่องทางเข้า/ทางเลือกในช่วงซ่อมบำรุงได้ดีที่สุด',
    context: `Notice: Greenway Office Center

To all tenants:

Please be advised that lobby renovation will ___[1A]___ at Greenway Office Center on Monday, March 9. During this time, access to certain areas may be ___[1B]___ restricted for safety reasons. ___[1C]___ Signs will be posted throughout the building to direct visitors and employees to side entrance on Oak Street.

We apologize for any ___[1D]___ this work may cause and appreciate your cooperation.

Building Services`,
    audio: null,
  },
  {
    id: 'P6-004',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [1D]',
    text: 'Choose the best word/phrase for blank [1D]',
    choices: ['inconvenience', 'inconvenient', 'inconveniently', 'inconveniences'],
    answer: 0,
    explain: 'any inconvenience เป็นวลีมาตรฐานในการขอโทษเรื่องความไม่สะดวก',
    context: `Notice: Greenway Office Center

To all tenants:

Please be advised that lobby renovation will ___[1A]___ at Greenway Office Center on Monday, March 9. During this time, access to certain areas may be ___[1B]___ restricted for safety reasons. ___[1C]___ Signs will be posted throughout the building to direct visitors and employees to side entrance on Oak Street.

We apologize for any ___[1D]___ this work may cause and appreciate your cooperation.

Building Services`,
    audio: null,
  },
  {
    id: 'P6-005',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [2A]',
    text: 'Choose the best word/phrase for blank [2A]',
    choices: ['begin', 'began', 'beginning', 'to begin'],
    answer: 0,
    explain: 'หลัง will ต้องใช้กริยารูป base form: will begin',
    context: `Notice: Northstar Logistics

To all tenants:

Please be advised that loading dock inspection will ___[2A]___ at Northstar Logistics on Wednesday, April 15. During this time, access to certain areas may be ___[2B]___ restricted for safety reasons. ___[2C]___ Signs will be posted throughout the building to direct visitors and employees to rear gate near Bay 4.

We apologize for any ___[2D]___ this work may cause and appreciate your cooperation.

Operations Team`,
    audio: null,
  },
  {
    id: 'P6-006',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [2B]',
    text: 'Choose the best word/phrase for blank [2B]',
    choices: ['temporary', 'temporarily', 'temporaryness', 'temporaries'],
    answer: 1,
    explain: 'ต้องการ adverb ขยาย restricted: temporarily restricted',
    context: `Notice: Northstar Logistics

To all tenants:

Please be advised that loading dock inspection will ___[2A]___ at Northstar Logistics on Wednesday, April 15. During this time, access to certain areas may be ___[2B]___ restricted for safety reasons. ___[2C]___ Signs will be posted throughout the building to direct visitors and employees to rear gate near Bay 4.

We apologize for any ___[2D]___ this work may cause and appreciate your cooperation.

Operations Team`,
    audio: null,
  },
  {
    id: 'P6-007',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [2C]',
    text: 'Choose the best word/phrase for blank [2C]',
    choices: ['Employees should use the regular entrance only.', 'Signs will be posted throughout the building to direct visitors and employees to rear gate near Bay 4.', 'The project was completed last month.', 'The cafeteria menu will also be updated.'],
    answer: 1,
    explain: 'ประโยคนี้เชื่อมกับข้อมูลเรื่องทางเข้า/ทางเลือกในช่วงซ่อมบำรุงได้ดีที่สุด',
    context: `Notice: Northstar Logistics

To all tenants:

Please be advised that loading dock inspection will ___[2A]___ at Northstar Logistics on Wednesday, April 15. During this time, access to certain areas may be ___[2B]___ restricted for safety reasons. ___[2C]___ Signs will be posted throughout the building to direct visitors and employees to rear gate near Bay 4.

We apologize for any ___[2D]___ this work may cause and appreciate your cooperation.

Operations Team`,
    audio: null,
  },
  {
    id: 'P6-008',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [2D]',
    text: 'Choose the best word/phrase for blank [2D]',
    choices: ['inconvenience', 'inconvenient', 'inconveniently', 'inconveniences'],
    answer: 0,
    explain: 'any inconvenience เป็นวลีมาตรฐานในการขอโทษเรื่องความไม่สะดวก',
    context: `Notice: Northstar Logistics

To all tenants:

Please be advised that loading dock inspection will ___[2A]___ at Northstar Logistics on Wednesday, April 15. During this time, access to certain areas may be ___[2B]___ restricted for safety reasons. ___[2C]___ Signs will be posted throughout the building to direct visitors and employees to rear gate near Bay 4.

We apologize for any ___[2D]___ this work may cause and appreciate your cooperation.

Operations Team`,
    audio: null,
  },
  {
    id: 'P6-009',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [3A]',
    text: 'Choose the best word/phrase for blank [3A]',
    choices: ['begin', 'began', 'beginning', 'to begin'],
    answer: 0,
    explain: 'หลัง will ต้องใช้กริยารูป base form: will begin',
    context: `Notice: Maple Tech Park

To all tenants:

Please be advised that elevator maintenance will ___[3A]___ at Maple Tech Park on Friday, May 22. During this time, access to certain areas may be ___[3B]___ restricted for safety reasons. ___[3C]___ Signs will be posted throughout the building to direct visitors and employees to stairs in the east wing.

We apologize for any ___[3D]___ this work may cause and appreciate your cooperation.

Facilities Department`,
    audio: null,
  },
  {
    id: 'P6-010',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [3B]',
    text: 'Choose the best word/phrase for blank [3B]',
    choices: ['temporary', 'temporarily', 'temporaryness', 'temporaries'],
    answer: 1,
    explain: 'ต้องการ adverb ขยาย restricted: temporarily restricted',
    context: `Notice: Maple Tech Park

To all tenants:

Please be advised that elevator maintenance will ___[3A]___ at Maple Tech Park on Friday, May 22. During this time, access to certain areas may be ___[3B]___ restricted for safety reasons. ___[3C]___ Signs will be posted throughout the building to direct visitors and employees to stairs in the east wing.

We apologize for any ___[3D]___ this work may cause and appreciate your cooperation.

Facilities Department`,
    audio: null,
  },
  {
    id: 'P6-011',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [3C]',
    text: 'Choose the best word/phrase for blank [3C]',
    choices: ['Employees should use the regular entrance only.', 'Signs will be posted throughout the building to direct visitors and employees to stairs in the east wing.', 'The project was completed last month.', 'The cafeteria menu will also be updated.'],
    answer: 1,
    explain: 'ประโยคนี้เชื่อมกับข้อมูลเรื่องทางเข้า/ทางเลือกในช่วงซ่อมบำรุงได้ดีที่สุด',
    context: `Notice: Maple Tech Park

To all tenants:

Please be advised that elevator maintenance will ___[3A]___ at Maple Tech Park on Friday, May 22. During this time, access to certain areas may be ___[3B]___ restricted for safety reasons. ___[3C]___ Signs will be posted throughout the building to direct visitors and employees to stairs in the east wing.

We apologize for any ___[3D]___ this work may cause and appreciate your cooperation.

Facilities Department`,
    audio: null,
  },
  {
    id: 'P6-012',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [3D]',
    text: 'Choose the best word/phrase for blank [3D]',
    choices: ['inconvenience', 'inconvenient', 'inconveniently', 'inconveniences'],
    answer: 0,
    explain: 'any inconvenience เป็นวลีมาตรฐานในการขอโทษเรื่องความไม่สะดวก',
    context: `Notice: Maple Tech Park

To all tenants:

Please be advised that elevator maintenance will ___[3A]___ at Maple Tech Park on Friday, May 22. During this time, access to certain areas may be ___[3B]___ restricted for safety reasons. ___[3C]___ Signs will be posted throughout the building to direct visitors and employees to stairs in the east wing.

We apologize for any ___[3D]___ this work may cause and appreciate your cooperation.

Facilities Department`,
    audio: null,
  },
  {
    id: 'P6-013',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [4A]',
    text: 'Choose the best word/phrase for blank [4A]',
    choices: ['begin', 'began', 'beginning', 'to begin'],
    answer: 0,
    explain: 'หลัง will ต้องใช้กริยารูป base form: will begin',
    context: `Notice: Harbor Plaza

To all tenants:

Please be advised that parking area repair will ___[4A]___ at Harbor Plaza on Tuesday, June 2. During this time, access to certain areas may be ___[4B]___ restricted for safety reasons. ___[4C]___ Signs will be posted throughout the building to direct visitors and employees to temporary lot across Pine Avenue.

We apologize for any ___[4D]___ this work may cause and appreciate your cooperation.

Property Management`,
    audio: null,
  },
  {
    id: 'P6-014',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [4B]',
    text: 'Choose the best word/phrase for blank [4B]',
    choices: ['temporary', 'temporarily', 'temporaryness', 'temporaries'],
    answer: 1,
    explain: 'ต้องการ adverb ขยาย restricted: temporarily restricted',
    context: `Notice: Harbor Plaza

To all tenants:

Please be advised that parking area repair will ___[4A]___ at Harbor Plaza on Tuesday, June 2. During this time, access to certain areas may be ___[4B]___ restricted for safety reasons. ___[4C]___ Signs will be posted throughout the building to direct visitors and employees to temporary lot across Pine Avenue.

We apologize for any ___[4D]___ this work may cause and appreciate your cooperation.

Property Management`,
    audio: null,
  },
  {
    id: 'P6-015',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [4C]',
    text: 'Choose the best word/phrase for blank [4C]',
    choices: ['Employees should use the regular entrance only.', 'Signs will be posted throughout the building to direct visitors and employees to temporary lot across Pine Avenue.', 'The project was completed last month.', 'The cafeteria menu will also be updated.'],
    answer: 1,
    explain: 'ประโยคนี้เชื่อมกับข้อมูลเรื่องทางเข้า/ทางเลือกในช่วงซ่อมบำรุงได้ดีที่สุด',
    context: `Notice: Harbor Plaza

To all tenants:

Please be advised that parking area repair will ___[4A]___ at Harbor Plaza on Tuesday, June 2. During this time, access to certain areas may be ___[4B]___ restricted for safety reasons. ___[4C]___ Signs will be posted throughout the building to direct visitors and employees to temporary lot across Pine Avenue.

We apologize for any ___[4D]___ this work may cause and appreciate your cooperation.

Property Management`,
    audio: null,
  },
  {
    id: 'P6-016',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [4D]',
    text: 'Choose the best word/phrase for blank [4D]',
    choices: ['inconvenience', 'inconvenient', 'inconveniently', 'inconveniences'],
    answer: 0,
    explain: 'any inconvenience เป็นวลีมาตรฐานในการขอโทษเรื่องความไม่สะดวก',
    context: `Notice: Harbor Plaza

To all tenants:

Please be advised that parking area repair will ___[4A]___ at Harbor Plaza on Tuesday, June 2. During this time, access to certain areas may be ___[4B]___ restricted for safety reasons. ___[4C]___ Signs will be posted throughout the building to direct visitors and employees to temporary lot across Pine Avenue.

We apologize for any ___[4D]___ this work may cause and appreciate your cooperation.

Property Management`,
    audio: null,
  },
  {
    id: 'P6-017',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [5A]',
    text: 'Choose the best word/phrase for blank [5A]',
    choices: ['begin', 'began', 'beginning', 'to begin'],
    answer: 0,
    explain: 'หลัง will ต้องใช้กริยารูป base form: will begin',
    context: `Notice: Silverline Tower

To all tenants:

Please be advised that security system upgrade will ___[5A]___ at Silverline Tower on Thursday, July 16. During this time, access to certain areas may be ___[5B]___ restricted for safety reasons. ___[5C]___ Signs will be posted throughout the building to direct visitors and employees to main desk for visitor badges.

We apologize for any ___[5D]___ this work may cause and appreciate your cooperation.

Tenant Services`,
    audio: null,
  },
  {
    id: 'P6-018',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [5B]',
    text: 'Choose the best word/phrase for blank [5B]',
    choices: ['temporary', 'temporarily', 'temporaryness', 'temporaries'],
    answer: 1,
    explain: 'ต้องการ adverb ขยาย restricted: temporarily restricted',
    context: `Notice: Silverline Tower

To all tenants:

Please be advised that security system upgrade will ___[5A]___ at Silverline Tower on Thursday, July 16. During this time, access to certain areas may be ___[5B]___ restricted for safety reasons. ___[5C]___ Signs will be posted throughout the building to direct visitors and employees to main desk for visitor badges.

We apologize for any ___[5D]___ this work may cause and appreciate your cooperation.

Tenant Services`,
    audio: null,
  },
  {
    id: 'P6-019',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [5C]',
    text: 'Choose the best word/phrase for blank [5C]',
    choices: ['Employees should use the regular entrance only.', 'Signs will be posted throughout the building to direct visitors and employees to main desk for visitor badges.', 'The project was completed last month.', 'The cafeteria menu will also be updated.'],
    answer: 1,
    explain: 'ประโยคนี้เชื่อมกับข้อมูลเรื่องทางเข้า/ทางเลือกในช่วงซ่อมบำรุงได้ดีที่สุด',
    context: `Notice: Silverline Tower

To all tenants:

Please be advised that security system upgrade will ___[5A]___ at Silverline Tower on Thursday, July 16. During this time, access to certain areas may be ___[5B]___ restricted for safety reasons. ___[5C]___ Signs will be posted throughout the building to direct visitors and employees to main desk for visitor badges.

We apologize for any ___[5D]___ this work may cause and appreciate your cooperation.

Tenant Services`,
    audio: null,
  },
  {
    id: 'P6-020',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [5D]',
    text: 'Choose the best word/phrase for blank [5D]',
    choices: ['inconvenience', 'inconvenient', 'inconveniently', 'inconveniences'],
    answer: 0,
    explain: 'any inconvenience เป็นวลีมาตรฐานในการขอโทษเรื่องความไม่สะดวก',
    context: `Notice: Silverline Tower

To all tenants:

Please be advised that security system upgrade will ___[5A]___ at Silverline Tower on Thursday, July 16. During this time, access to certain areas may be ___[5B]___ restricted for safety reasons. ___[5C]___ Signs will be posted throughout the building to direct visitors and employees to main desk for visitor badges.

We apologize for any ___[5D]___ this work may cause and appreciate your cooperation.

Tenant Services`,
    audio: null,
  },
  {
    id: 'P6-021',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [6A]',
    text: 'Choose the best word/phrase for blank [6A]',
    choices: ['recent', 'recently', 'recency', 'recede'],
    answer: 0,
    explain: 'ต้องการ adjective ขยาย purchase: recent purchase',
    context: `Email: delayed shipment from Mira Appliances

Dear Customer,

Thank you for your ___[6A]___ purchase of replacement filters from Mira Appliances. We regret to inform you that order #A4172 ___[6B]___ and will not arrive on the original delivery date. The delay occurred ___[6C]___ heavy snow in the Denver area.

Your shipment is now expected to arrive by March 18. ___[6D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-022',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [6B]',
    text: 'Choose the best word/phrase for blank [6B]',
    choices: ['has delayed', 'has been delayed', 'delaying', 'will delaying'],
    answer: 1,
    explain: 'order ถูกทำให้ล่าช้า จึงใช้ passive present perfect: has been delayed',
    context: `Email: delayed shipment from Mira Appliances

Dear Customer,

Thank you for your ___[6A]___ purchase of replacement filters from Mira Appliances. We regret to inform you that order #A4172 ___[6B]___ and will not arrive on the original delivery date. The delay occurred ___[6C]___ heavy snow in the Denver area.

Your shipment is now expected to arrive by March 18. ___[6D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-023',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [6C]',
    text: 'Choose the best word/phrase for blank [6C]',
    choices: ['because of', 'although', 'in order to', 'therefore'],
    answer: 0,
    explain: 'because of + noun phrase ใช้อธิบายสาเหตุ',
    context: `Email: delayed shipment from Mira Appliances

Dear Customer,

Thank you for your ___[6A]___ purchase of replacement filters from Mira Appliances. We regret to inform you that order #A4172 ___[6B]___ and will not arrive on the original delivery date. The delay occurred ___[6C]___ heavy snow in the Denver area.

Your shipment is now expected to arrive by March 18. ___[6D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-024',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [6D]',
    text: 'Choose the best word/phrase for blank [6D]',
    choices: ['We have included a prepaid return label for your convenience.', 'The warehouse was closed permanently last year.', 'We apologize for the inconvenience and will send tracking details as soon as they are available.', 'The invoice must be signed by the delivery driver.'],
    answer: 2,
    explain: 'ประโยคนี้เข้ากับบริบทการแจ้งของล่าช้าและการส่งเลข tracking',
    context: `Email: delayed shipment from Mira Appliances

Dear Customer,

Thank you for your ___[6A]___ purchase of replacement filters from Mira Appliances. We regret to inform you that order #A4172 ___[6B]___ and will not arrive on the original delivery date. The delay occurred ___[6C]___ heavy snow in the Denver area.

Your shipment is now expected to arrive by March 18. ___[6D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-025',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [7A]',
    text: 'Choose the best word/phrase for blank [7A]',
    choices: ['recent', 'recently', 'recency', 'recede'],
    answer: 0,
    explain: 'ต้องการ adjective ขยาย purchase: recent purchase',
    context: `Email: delayed shipment from Luma Office Supply

Dear Customer,

Thank you for your ___[7A]___ purchase of ergonomic chairs from Luma Office Supply. We regret to inform you that order #L2098 ___[7B]___ and will not arrive on the original delivery date. The delay occurred ___[7C]___ a temporary shortage at the regional warehouse.

Your shipment is now expected to arrive by April 4. ___[7D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-026',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [7B]',
    text: 'Choose the best word/phrase for blank [7B]',
    choices: ['has delayed', 'has been delayed', 'delaying', 'will delaying'],
    answer: 1,
    explain: 'order ถูกทำให้ล่าช้า จึงใช้ passive present perfect: has been delayed',
    context: `Email: delayed shipment from Luma Office Supply

Dear Customer,

Thank you for your ___[7A]___ purchase of ergonomic chairs from Luma Office Supply. We regret to inform you that order #L2098 ___[7B]___ and will not arrive on the original delivery date. The delay occurred ___[7C]___ a temporary shortage at the regional warehouse.

Your shipment is now expected to arrive by April 4. ___[7D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-027',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [7C]',
    text: 'Choose the best word/phrase for blank [7C]',
    choices: ['because of', 'although', 'in order to', 'therefore'],
    answer: 0,
    explain: 'because of + noun phrase ใช้อธิบายสาเหตุ',
    context: `Email: delayed shipment from Luma Office Supply

Dear Customer,

Thank you for your ___[7A]___ purchase of ergonomic chairs from Luma Office Supply. We regret to inform you that order #L2098 ___[7B]___ and will not arrive on the original delivery date. The delay occurred ___[7C]___ a temporary shortage at the regional warehouse.

Your shipment is now expected to arrive by April 4. ___[7D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-028',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [7D]',
    text: 'Choose the best word/phrase for blank [7D]',
    choices: ['We have included a prepaid return label for your convenience.', 'The warehouse was closed permanently last year.', 'We apologize for the inconvenience and will send tracking details as soon as they are available.', 'The invoice must be signed by the delivery driver.'],
    answer: 2,
    explain: 'ประโยคนี้เข้ากับบริบทการแจ้งของล่าช้าและการส่งเลข tracking',
    context: `Email: delayed shipment from Luma Office Supply

Dear Customer,

Thank you for your ___[7A]___ purchase of ergonomic chairs from Luma Office Supply. We regret to inform you that order #L2098 ___[7B]___ and will not arrive on the original delivery date. The delay occurred ___[7C]___ a temporary shortage at the regional warehouse.

Your shipment is now expected to arrive by April 4. ___[7D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-029',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [8A]',
    text: 'Choose the best word/phrase for blank [8A]',
    choices: ['recent', 'recently', 'recency', 'recede'],
    answer: 0,
    explain: 'ต้องการ adjective ขยาย purchase: recent purchase',
    context: `Email: delayed shipment from Orchid Catering

Dear Customer,

Thank you for your ___[8A]___ purchase of table linens from Orchid Catering. We regret to inform you that order #C5531 ___[8B]___ and will not arrive on the original delivery date. The delay occurred ___[8C]___ unexpected traffic restrictions downtown.

Your shipment is now expected to arrive by May 12. ___[8D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-030',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [8B]',
    text: 'Choose the best word/phrase for blank [8B]',
    choices: ['has delayed', 'has been delayed', 'delaying', 'will delaying'],
    answer: 1,
    explain: 'order ถูกทำให้ล่าช้า จึงใช้ passive present perfect: has been delayed',
    context: `Email: delayed shipment from Orchid Catering

Dear Customer,

Thank you for your ___[8A]___ purchase of table linens from Orchid Catering. We regret to inform you that order #C5531 ___[8B]___ and will not arrive on the original delivery date. The delay occurred ___[8C]___ unexpected traffic restrictions downtown.

Your shipment is now expected to arrive by May 12. ___[8D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-031',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [8C]',
    text: 'Choose the best word/phrase for blank [8C]',
    choices: ['because of', 'although', 'in order to', 'therefore'],
    answer: 0,
    explain: 'because of + noun phrase ใช้อธิบายสาเหตุ',
    context: `Email: delayed shipment from Orchid Catering

Dear Customer,

Thank you for your ___[8A]___ purchase of table linens from Orchid Catering. We regret to inform you that order #C5531 ___[8B]___ and will not arrive on the original delivery date. The delay occurred ___[8C]___ unexpected traffic restrictions downtown.

Your shipment is now expected to arrive by May 12. ___[8D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-032',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [8D]',
    text: 'Choose the best word/phrase for blank [8D]',
    choices: ['We have included a prepaid return label for your convenience.', 'The warehouse was closed permanently last year.', 'We apologize for the inconvenience and will send tracking details as soon as they are available.', 'The invoice must be signed by the delivery driver.'],
    answer: 2,
    explain: 'ประโยคนี้เข้ากับบริบทการแจ้งของล่าช้าและการส่งเลข tracking',
    context: `Email: delayed shipment from Orchid Catering

Dear Customer,

Thank you for your ___[8A]___ purchase of table linens from Orchid Catering. We regret to inform you that order #C5531 ___[8B]___ and will not arrive on the original delivery date. The delay occurred ___[8C]___ unexpected traffic restrictions downtown.

Your shipment is now expected to arrive by May 12. ___[8D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-033',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [9A]',
    text: 'Choose the best word/phrase for blank [9A]',
    choices: ['recent', 'recently', 'recency', 'recede'],
    answer: 0,
    explain: 'ต้องการ adjective ขยาย purchase: recent purchase',
    context: `Email: delayed shipment from Vista Electronics

Dear Customer,

Thank you for your ___[9A]___ purchase of wireless headsets from Vista Electronics. We regret to inform you that order #V8810 ___[9B]___ and will not arrive on the original delivery date. The delay occurred ___[9C]___ customs processing at the airport.

Your shipment is now expected to arrive by June 27. ___[9D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-034',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [9B]',
    text: 'Choose the best word/phrase for blank [9B]',
    choices: ['has delayed', 'has been delayed', 'delaying', 'will delaying'],
    answer: 1,
    explain: 'order ถูกทำให้ล่าช้า จึงใช้ passive present perfect: has been delayed',
    context: `Email: delayed shipment from Vista Electronics

Dear Customer,

Thank you for your ___[9A]___ purchase of wireless headsets from Vista Electronics. We regret to inform you that order #V8810 ___[9B]___ and will not arrive on the original delivery date. The delay occurred ___[9C]___ customs processing at the airport.

Your shipment is now expected to arrive by June 27. ___[9D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-035',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [9C]',
    text: 'Choose the best word/phrase for blank [9C]',
    choices: ['because of', 'although', 'in order to', 'therefore'],
    answer: 0,
    explain: 'because of + noun phrase ใช้อธิบายสาเหตุ',
    context: `Email: delayed shipment from Vista Electronics

Dear Customer,

Thank you for your ___[9A]___ purchase of wireless headsets from Vista Electronics. We regret to inform you that order #V8810 ___[9B]___ and will not arrive on the original delivery date. The delay occurred ___[9C]___ customs processing at the airport.

Your shipment is now expected to arrive by June 27. ___[9D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-036',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [9D]',
    text: 'Choose the best word/phrase for blank [9D]',
    choices: ['We have included a prepaid return label for your convenience.', 'The warehouse was closed permanently last year.', 'We apologize for the inconvenience and will send tracking details as soon as they are available.', 'The invoice must be signed by the delivery driver.'],
    answer: 2,
    explain: 'ประโยคนี้เข้ากับบริบทการแจ้งของล่าช้าและการส่งเลข tracking',
    context: `Email: delayed shipment from Vista Electronics

Dear Customer,

Thank you for your ___[9A]___ purchase of wireless headsets from Vista Electronics. We regret to inform you that order #V8810 ___[9B]___ and will not arrive on the original delivery date. The delay occurred ___[9C]___ customs processing at the airport.

Your shipment is now expected to arrive by June 27. ___[9D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-037',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [10A]',
    text: 'Choose the best word/phrase for blank [10A]',
    choices: ['recent', 'recently', 'recency', 'recede'],
    answer: 0,
    explain: 'ต้องการ adjective ขยาย purchase: recent purchase',
    context: `Email: delayed shipment from Pine Ridge Books

Dear Customer,

Thank you for your ___[10A]___ purchase of training manuals from Pine Ridge Books. We regret to inform you that order #B1326 ___[10B]___ and will not arrive on the original delivery date. The delay occurred ___[10C]___ a printing delay at our partner facility.

Your shipment is now expected to arrive by July 8. ___[10D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-038',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [10B]',
    text: 'Choose the best word/phrase for blank [10B]',
    choices: ['has delayed', 'has been delayed', 'delaying', 'will delaying'],
    answer: 1,
    explain: 'order ถูกทำให้ล่าช้า จึงใช้ passive present perfect: has been delayed',
    context: `Email: delayed shipment from Pine Ridge Books

Dear Customer,

Thank you for your ___[10A]___ purchase of training manuals from Pine Ridge Books. We regret to inform you that order #B1326 ___[10B]___ and will not arrive on the original delivery date. The delay occurred ___[10C]___ a printing delay at our partner facility.

Your shipment is now expected to arrive by July 8. ___[10D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-039',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [10C]',
    text: 'Choose the best word/phrase for blank [10C]',
    choices: ['because of', 'although', 'in order to', 'therefore'],
    answer: 0,
    explain: 'because of + noun phrase ใช้อธิบายสาเหตุ',
    context: `Email: delayed shipment from Pine Ridge Books

Dear Customer,

Thank you for your ___[10A]___ purchase of training manuals from Pine Ridge Books. We regret to inform you that order #B1326 ___[10B]___ and will not arrive on the original delivery date. The delay occurred ___[10C]___ a printing delay at our partner facility.

Your shipment is now expected to arrive by July 8. ___[10D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-040',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [10D]',
    text: 'Choose the best word/phrase for blank [10D]',
    choices: ['We have included a prepaid return label for your convenience.', 'The warehouse was closed permanently last year.', 'We apologize for the inconvenience and will send tracking details as soon as they are available.', 'The invoice must be signed by the delivery driver.'],
    answer: 2,
    explain: 'ประโยคนี้เข้ากับบริบทการแจ้งของล่าช้าและการส่งเลข tracking',
    context: `Email: delayed shipment from Pine Ridge Books

Dear Customer,

Thank you for your ___[10A]___ purchase of training manuals from Pine Ridge Books. We regret to inform you that order #B1326 ___[10B]___ and will not arrive on the original delivery date. The delay occurred ___[10C]___ a printing delay at our partner facility.

Your shipment is now expected to arrive by July 8. ___[10D]___ If you prefer to cancel the order, please contact our service desk within 24 hours.

Sincerely,
Customer Care`,
    audio: null,
  },
  {
    id: 'P6-041',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [11A]',
    text: 'Choose the best word/phrase for blank [11A]',
    choices: ['qualified', 'qualify', 'qualification', 'qualifyingly'],
    answer: 0,
    explain: 'qualified candidate = ผู้สมัครที่มีคุณสมบัติเหมาะสม',
    context: `Job Posting: Event Coordinator

Riverside Convention Hall is seeking a ___[11A]___ candidate for the position of Event Coordinator. Applicants should have two years of event planning experience and the ability to prepare client proposals accurately. The successful applicant will work closely with managers ___[11B]___ departmental goals are met.

Interested candidates are encouraged ___[11C]___ a resume and cover letter by the end of the month. ___[11D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-042',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [11B]',
    text: 'Choose the best word/phrase for blank [11B]',
    choices: ['ensure', 'ensuring', 'to ensure', 'ensured'],
    answer: 2,
    explain: 'to ensure แสดงวัตถุประสงค์: เพื่อให้เป้าหมายสำเร็จ',
    context: `Job Posting: Event Coordinator

Riverside Convention Hall is seeking a ___[11A]___ candidate for the position of Event Coordinator. Applicants should have two years of event planning experience and the ability to prepare client proposals accurately. The successful applicant will work closely with managers ___[11B]___ departmental goals are met.

Interested candidates are encouraged ___[11C]___ a resume and cover letter by the end of the month. ___[11D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-043',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [11C]',
    text: 'Choose the best word/phrase for blank [11C]',
    choices: ['submit', 'submitting', 'to submit', 'submitted'],
    answer: 2,
    explain: 'be encouraged to do something',
    context: `Job Posting: Event Coordinator

Riverside Convention Hall is seeking a ___[11A]___ candidate for the position of Event Coordinator. Applicants should have two years of event planning experience and the ability to prepare client proposals accurately. The successful applicant will work closely with managers ___[11B]___ departmental goals are met.

Interested candidates are encouraged ___[11C]___ a resume and cover letter by the end of the month. ___[11D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-044',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [11D]',
    text: 'Choose the best word/phrase for blank [11D]',
    choices: ['The company cafeteria closes at 2 P.M.', 'Only shortlisted applicants will be contacted for an interview.', 'All products include a one-year warranty.', 'The building is near a bus stop.'],
    answer: 1,
    explain: 'ประโยคนี้เป็นข้อมูลต่อเนื่องตามประกาศรับสมัครงาน',
    context: `Job Posting: Event Coordinator

Riverside Convention Hall is seeking a ___[11A]___ candidate for the position of Event Coordinator. Applicants should have two years of event planning experience and the ability to prepare client proposals accurately. The successful applicant will work closely with managers ___[11B]___ departmental goals are met.

Interested candidates are encouraged ___[11C]___ a resume and cover letter by the end of the month. ___[11D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-045',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [12A]',
    text: 'Choose the best word/phrase for blank [12A]',
    choices: ['qualified', 'qualify', 'qualification', 'qualifyingly'],
    answer: 0,
    explain: 'qualified candidate = ผู้สมัครที่มีคุณสมบัติเหมาะสม',
    context: `Job Posting: Inventory Analyst

Metro Retail Group is seeking a ___[12A]___ candidate for the position of Inventory Analyst. Applicants should have strong spreadsheet skills and the ability to prepare weekly stock reports accurately. The successful applicant will work closely with managers ___[12B]___ departmental goals are met.

Interested candidates are encouraged ___[12C]___ a resume and cover letter by the end of the month. ___[12D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-046',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [12B]',
    text: 'Choose the best word/phrase for blank [12B]',
    choices: ['ensure', 'ensuring', 'to ensure', 'ensured'],
    answer: 2,
    explain: 'to ensure แสดงวัตถุประสงค์: เพื่อให้เป้าหมายสำเร็จ',
    context: `Job Posting: Inventory Analyst

Metro Retail Group is seeking a ___[12A]___ candidate for the position of Inventory Analyst. Applicants should have strong spreadsheet skills and the ability to prepare weekly stock reports accurately. The successful applicant will work closely with managers ___[12B]___ departmental goals are met.

Interested candidates are encouraged ___[12C]___ a resume and cover letter by the end of the month. ___[12D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-047',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [12C]',
    text: 'Choose the best word/phrase for blank [12C]',
    choices: ['submit', 'submitting', 'to submit', 'submitted'],
    answer: 2,
    explain: 'be encouraged to do something',
    context: `Job Posting: Inventory Analyst

Metro Retail Group is seeking a ___[12A]___ candidate for the position of Inventory Analyst. Applicants should have strong spreadsheet skills and the ability to prepare weekly stock reports accurately. The successful applicant will work closely with managers ___[12B]___ departmental goals are met.

Interested candidates are encouraged ___[12C]___ a resume and cover letter by the end of the month. ___[12D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-048',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [12D]',
    text: 'Choose the best word/phrase for blank [12D]',
    choices: ['The company cafeteria closes at 2 P.M.', 'Only shortlisted applicants will be contacted for an interview.', 'All products include a one-year warranty.', 'The building is near a bus stop.'],
    answer: 1,
    explain: 'ประโยคนี้เป็นข้อมูลต่อเนื่องตามประกาศรับสมัครงาน',
    context: `Job Posting: Inventory Analyst

Metro Retail Group is seeking a ___[12A]___ candidate for the position of Inventory Analyst. Applicants should have strong spreadsheet skills and the ability to prepare weekly stock reports accurately. The successful applicant will work closely with managers ___[12B]___ departmental goals are met.

Interested candidates are encouraged ___[12C]___ a resume and cover letter by the end of the month. ___[12D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-049',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [13A]',
    text: 'Choose the best word/phrase for blank [13A]',
    choices: ['qualified', 'qualify', 'qualification', 'qualifyingly'],
    answer: 0,
    explain: 'qualified candidate = ผู้สมัครที่มีคุณสมบัติเหมาะสม',
    context: `Job Posting: Training Assistant

BrightPath Institute is seeking a ___[13A]___ candidate for the position of Training Assistant. Applicants should have experience preparing course materials and the ability to prepare attendance records accurately. The successful applicant will work closely with managers ___[13B]___ departmental goals are met.

Interested candidates are encouraged ___[13C]___ a resume and cover letter by the end of the month. ___[13D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-050',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [13B]',
    text: 'Choose the best word/phrase for blank [13B]',
    choices: ['ensure', 'ensuring', 'to ensure', 'ensured'],
    answer: 2,
    explain: 'to ensure แสดงวัตถุประสงค์: เพื่อให้เป้าหมายสำเร็จ',
    context: `Job Posting: Training Assistant

BrightPath Institute is seeking a ___[13A]___ candidate for the position of Training Assistant. Applicants should have experience preparing course materials and the ability to prepare attendance records accurately. The successful applicant will work closely with managers ___[13B]___ departmental goals are met.

Interested candidates are encouraged ___[13C]___ a resume and cover letter by the end of the month. ___[13D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-051',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [13C]',
    text: 'Choose the best word/phrase for blank [13C]',
    choices: ['submit', 'submitting', 'to submit', 'submitted'],
    answer: 2,
    explain: 'be encouraged to do something',
    context: `Job Posting: Training Assistant

BrightPath Institute is seeking a ___[13A]___ candidate for the position of Training Assistant. Applicants should have experience preparing course materials and the ability to prepare attendance records accurately. The successful applicant will work closely with managers ___[13B]___ departmental goals are met.

Interested candidates are encouraged ___[13C]___ a resume and cover letter by the end of the month. ___[13D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-052',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [13D]',
    text: 'Choose the best word/phrase for blank [13D]',
    choices: ['The company cafeteria closes at 2 P.M.', 'Only shortlisted applicants will be contacted for an interview.', 'All products include a one-year warranty.', 'The building is near a bus stop.'],
    answer: 1,
    explain: 'ประโยคนี้เป็นข้อมูลต่อเนื่องตามประกาศรับสมัครงาน',
    context: `Job Posting: Training Assistant

BrightPath Institute is seeking a ___[13A]___ candidate for the position of Training Assistant. Applicants should have experience preparing course materials and the ability to prepare attendance records accurately. The successful applicant will work closely with managers ___[13B]___ departmental goals are met.

Interested candidates are encouraged ___[13C]___ a resume and cover letter by the end of the month. ___[13D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-053',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [14A]',
    text: 'Choose the best word/phrase for blank [14A]',
    choices: ['qualified', 'qualify', 'qualification', 'qualifyingly'],
    answer: 0,
    explain: 'qualified candidate = ผู้สมัครที่มีคุณสมบัติเหมาะสม',
    context: `Job Posting: Customer Support Supervisor

Helio Mobile is seeking a ___[14A]___ candidate for the position of Customer Support Supervisor. Applicants should have excellent communication skills and the ability to prepare service schedules accurately. The successful applicant will work closely with managers ___[14B]___ departmental goals are met.

Interested candidates are encouraged ___[14C]___ a resume and cover letter by the end of the month. ___[14D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-054',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [14B]',
    text: 'Choose the best word/phrase for blank [14B]',
    choices: ['ensure', 'ensuring', 'to ensure', 'ensured'],
    answer: 2,
    explain: 'to ensure แสดงวัตถุประสงค์: เพื่อให้เป้าหมายสำเร็จ',
    context: `Job Posting: Customer Support Supervisor

Helio Mobile is seeking a ___[14A]___ candidate for the position of Customer Support Supervisor. Applicants should have excellent communication skills and the ability to prepare service schedules accurately. The successful applicant will work closely with managers ___[14B]___ departmental goals are met.

Interested candidates are encouraged ___[14C]___ a resume and cover letter by the end of the month. ___[14D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-055',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [14C]',
    text: 'Choose the best word/phrase for blank [14C]',
    choices: ['submit', 'submitting', 'to submit', 'submitted'],
    answer: 2,
    explain: 'be encouraged to do something',
    context: `Job Posting: Customer Support Supervisor

Helio Mobile is seeking a ___[14A]___ candidate for the position of Customer Support Supervisor. Applicants should have excellent communication skills and the ability to prepare service schedules accurately. The successful applicant will work closely with managers ___[14B]___ departmental goals are met.

Interested candidates are encouraged ___[14C]___ a resume and cover letter by the end of the month. ___[14D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-056',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [14D]',
    text: 'Choose the best word/phrase for blank [14D]',
    choices: ['The company cafeteria closes at 2 P.M.', 'Only shortlisted applicants will be contacted for an interview.', 'All products include a one-year warranty.', 'The building is near a bus stop.'],
    answer: 1,
    explain: 'ประโยคนี้เป็นข้อมูลต่อเนื่องตามประกาศรับสมัครงาน',
    context: `Job Posting: Customer Support Supervisor

Helio Mobile is seeking a ___[14A]___ candidate for the position of Customer Support Supervisor. Applicants should have excellent communication skills and the ability to prepare service schedules accurately. The successful applicant will work closely with managers ___[14B]___ departmental goals are met.

Interested candidates are encouraged ___[14C]___ a resume and cover letter by the end of the month. ___[14D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-057',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [15A]',
    text: 'Choose the best word/phrase for blank [15A]',
    choices: ['qualified', 'qualify', 'qualification', 'qualifyingly'],
    answer: 0,
    explain: 'qualified candidate = ผู้สมัครที่มีคุณสมบัติเหมาะสม',
    context: `Job Posting: Procurement Specialist

Aster Foods is seeking a ___[15A]___ candidate for the position of Procurement Specialist. Applicants should have knowledge of vendor contracts and the ability to prepare purchase orders accurately. The successful applicant will work closely with managers ___[15B]___ departmental goals are met.

Interested candidates are encouraged ___[15C]___ a resume and cover letter by the end of the month. ___[15D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-058',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [15B]',
    text: 'Choose the best word/phrase for blank [15B]',
    choices: ['ensure', 'ensuring', 'to ensure', 'ensured'],
    answer: 2,
    explain: 'to ensure แสดงวัตถุประสงค์: เพื่อให้เป้าหมายสำเร็จ',
    context: `Job Posting: Procurement Specialist

Aster Foods is seeking a ___[15A]___ candidate for the position of Procurement Specialist. Applicants should have knowledge of vendor contracts and the ability to prepare purchase orders accurately. The successful applicant will work closely with managers ___[15B]___ departmental goals are met.

Interested candidates are encouraged ___[15C]___ a resume and cover letter by the end of the month. ___[15D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-059',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [15C]',
    text: 'Choose the best word/phrase for blank [15C]',
    choices: ['submit', 'submitting', 'to submit', 'submitted'],
    answer: 2,
    explain: 'be encouraged to do something',
    context: `Job Posting: Procurement Specialist

Aster Foods is seeking a ___[15A]___ candidate for the position of Procurement Specialist. Applicants should have knowledge of vendor contracts and the ability to prepare purchase orders accurately. The successful applicant will work closely with managers ___[15B]___ departmental goals are met.

Interested candidates are encouraged ___[15C]___ a resume and cover letter by the end of the month. ___[15D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-060',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [15D]',
    text: 'Choose the best word/phrase for blank [15D]',
    choices: ['The company cafeteria closes at 2 P.M.', 'Only shortlisted applicants will be contacted for an interview.', 'All products include a one-year warranty.', 'The building is near a bus stop.'],
    answer: 1,
    explain: 'ประโยคนี้เป็นข้อมูลต่อเนื่องตามประกาศรับสมัครงาน',
    context: `Job Posting: Procurement Specialist

Aster Foods is seeking a ___[15A]___ candidate for the position of Procurement Specialist. Applicants should have knowledge of vendor contracts and the ability to prepare purchase orders accurately. The successful applicant will work closely with managers ___[15B]___ departmental goals are met.

Interested candidates are encouraged ___[15C]___ a resume and cover letter by the end of the month. ___[15D]___ Only shortlisted applicants will be contacted for an interview.`,
    audio: null,
  },
  {
    id: 'P6-061',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [16A]',
    text: 'Choose the best word/phrase for blank [16A]',
    choices: ['schedule', 'scheduled', 'scheduling', 'schedules'],
    answer: 1,
    explain: 'has been scheduled เป็น passive voice ที่ถูกต้อง',
    context: `Memo: quarterly sales review

To: Department Staff
Subject: Quarterly Sales Review

The quarterly sales review has been ___[16A]___ for Friday at 10 A.M. in Room 18B. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached regional performance data ___[16B]___ the meeting.

___[16C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[16D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-062',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [16B]',
    text: 'Choose the best word/phrase for blank [16B]',
    choices: ['prior to', 'instead', 'because', 'despite'],
    answer: 0,
    explain: 'prior to + noun = ก่อน',
    context: `Memo: quarterly sales review

To: Department Staff
Subject: Quarterly Sales Review

The quarterly sales review has been ___[16A]___ for Friday at 10 A.M. in Room 18B. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached regional performance data ___[16B]___ the meeting.

___[16C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[16D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-063',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [16C]',
    text: 'Choose the best word/phrase for blank [16C]',
    choices: ['Please arrive five minutes early.', 'The office moved to another city in 2021.', 'All receipts must be printed in color.', 'The product is available in three sizes.'],
    answer: 0,
    explain: 'ประโยคนี้สอดคล้องกับการเริ่มประชุมตรงเวลา',
    context: `Memo: quarterly sales review

To: Department Staff
Subject: Quarterly Sales Review

The quarterly sales review has been ___[16A]___ for Friday at 10 A.M. in Room 18B. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached regional performance data ___[16B]___ the meeting.

___[16C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[16D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-064',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [16D]',
    text: 'Choose the best word/phrase for blank [16D]',
    choices: ['questions', 'questionable', 'question', 'questioned'],
    answer: 0,
    explain: 'Any questions เป็นคำนามพหูพจน์ในวลีมาตรฐาน',
    context: `Memo: quarterly sales review

To: Department Staff
Subject: Quarterly Sales Review

The quarterly sales review has been ___[16A]___ for Friday at 10 A.M. in Room 18B. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached regional performance data ___[16B]___ the meeting.

___[16C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[16D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-065',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [17A]',
    text: 'Choose the best word/phrase for blank [17A]',
    choices: ['schedule', 'scheduled', 'scheduling', 'schedules'],
    answer: 1,
    explain: 'has been scheduled เป็น passive voice ที่ถูกต้อง',
    context: `Memo: software rollout briefing

To: Department Staff
Subject: Software Rollout Briefing

The software rollout briefing has been ___[17A]___ for Monday at 2 P.M. in Training Lab 2. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached updated login instructions ___[17B]___ the meeting.

___[17C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[17D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-066',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [17B]',
    text: 'Choose the best word/phrase for blank [17B]',
    choices: ['prior to', 'instead', 'because', 'despite'],
    answer: 0,
    explain: 'prior to + noun = ก่อน',
    context: `Memo: software rollout briefing

To: Department Staff
Subject: Software Rollout Briefing

The software rollout briefing has been ___[17A]___ for Monday at 2 P.M. in Training Lab 2. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached updated login instructions ___[17B]___ the meeting.

___[17C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[17D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-067',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [17C]',
    text: 'Choose the best word/phrase for blank [17C]',
    choices: ['Please arrive five minutes early.', 'The office moved to another city in 2021.', 'All receipts must be printed in color.', 'The product is available in three sizes.'],
    answer: 0,
    explain: 'ประโยคนี้สอดคล้องกับการเริ่มประชุมตรงเวลา',
    context: `Memo: software rollout briefing

To: Department Staff
Subject: Software Rollout Briefing

The software rollout briefing has been ___[17A]___ for Monday at 2 P.M. in Training Lab 2. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached updated login instructions ___[17B]___ the meeting.

___[17C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[17D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-068',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [17D]',
    text: 'Choose the best word/phrase for blank [17D]',
    choices: ['questions', 'questionable', 'question', 'questioned'],
    answer: 0,
    explain: 'Any questions เป็นคำนามพหูพจน์ในวลีมาตรฐาน',
    context: `Memo: software rollout briefing

To: Department Staff
Subject: Software Rollout Briefing

The software rollout briefing has been ___[17A]___ for Monday at 2 P.M. in Training Lab 2. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached updated login instructions ___[17B]___ the meeting.

___[17C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[17D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-069',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [18A]',
    text: 'Choose the best word/phrase for blank [18A]',
    choices: ['schedule', 'scheduled', 'scheduling', 'schedules'],
    answer: 1,
    explain: 'has been scheduled เป็น passive voice ที่ถูกต้อง',
    context: `Memo: annual budget discussion

To: Department Staff
Subject: Annual Budget Discussion

The annual budget discussion has been ___[18A]___ for Wednesday at 9 A.M. in Boardroom A. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached department spending estimates ___[18B]___ the meeting.

___[18C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[18D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-070',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [18B]',
    text: 'Choose the best word/phrase for blank [18B]',
    choices: ['prior to', 'instead', 'because', 'despite'],
    answer: 0,
    explain: 'prior to + noun = ก่อน',
    context: `Memo: annual budget discussion

To: Department Staff
Subject: Annual Budget Discussion

The annual budget discussion has been ___[18A]___ for Wednesday at 9 A.M. in Boardroom A. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached department spending estimates ___[18B]___ the meeting.

___[18C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[18D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-071',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [18C]',
    text: 'Choose the best word/phrase for blank [18C]',
    choices: ['Please arrive five minutes early.', 'The office moved to another city in 2021.', 'All receipts must be printed in color.', 'The product is available in three sizes.'],
    answer: 0,
    explain: 'ประโยคนี้สอดคล้องกับการเริ่มประชุมตรงเวลา',
    context: `Memo: annual budget discussion

To: Department Staff
Subject: Annual Budget Discussion

The annual budget discussion has been ___[18A]___ for Wednesday at 9 A.M. in Boardroom A. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached department spending estimates ___[18B]___ the meeting.

___[18C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[18D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-072',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [18D]',
    text: 'Choose the best word/phrase for blank [18D]',
    choices: ['questions', 'questionable', 'question', 'questioned'],
    answer: 0,
    explain: 'Any questions เป็นคำนามพหูพจน์ในวลีมาตรฐาน',
    context: `Memo: annual budget discussion

To: Department Staff
Subject: Annual Budget Discussion

The annual budget discussion has been ___[18A]___ for Wednesday at 9 A.M. in Boardroom A. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached department spending estimates ___[18B]___ the meeting.

___[18C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[18D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-073',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [19A]',
    text: 'Choose the best word/phrase for blank [19A]',
    choices: ['schedule', 'scheduled', 'scheduling', 'schedules'],
    answer: 1,
    explain: 'has been scheduled เป็น passive voice ที่ถูกต้อง',
    context: `Memo: supplier evaluation meeting

To: Department Staff
Subject: Supplier Evaluation Meeting

The supplier evaluation meeting has been ___[19A]___ for Tuesday at 3 P.M. in Conference Room C. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached vendor score sheets ___[19B]___ the meeting.

___[19C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[19D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-074',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [19B]',
    text: 'Choose the best word/phrase for blank [19B]',
    choices: ['prior to', 'instead', 'because', 'despite'],
    answer: 0,
    explain: 'prior to + noun = ก่อน',
    context: `Memo: supplier evaluation meeting

To: Department Staff
Subject: Supplier Evaluation Meeting

The supplier evaluation meeting has been ___[19A]___ for Tuesday at 3 P.M. in Conference Room C. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached vendor score sheets ___[19B]___ the meeting.

___[19C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[19D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-075',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [19C]',
    text: 'Choose the best word/phrase for blank [19C]',
    choices: ['Please arrive five minutes early.', 'The office moved to another city in 2021.', 'All receipts must be printed in color.', 'The product is available in three sizes.'],
    answer: 0,
    explain: 'ประโยคนี้สอดคล้องกับการเริ่มประชุมตรงเวลา',
    context: `Memo: supplier evaluation meeting

To: Department Staff
Subject: Supplier Evaluation Meeting

The supplier evaluation meeting has been ___[19A]___ for Tuesday at 3 P.M. in Conference Room C. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached vendor score sheets ___[19B]___ the meeting.

___[19C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[19D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-076',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [19D]',
    text: 'Choose the best word/phrase for blank [19D]',
    choices: ['questions', 'questionable', 'question', 'questioned'],
    answer: 0,
    explain: 'Any questions เป็นคำนามพหูพจน์ในวลีมาตรฐาน',
    context: `Memo: supplier evaluation meeting

To: Department Staff
Subject: Supplier Evaluation Meeting

The supplier evaluation meeting has been ___[19A]___ for Tuesday at 3 P.M. in Conference Room C. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached vendor score sheets ___[19B]___ the meeting.

___[19C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[19D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-077',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [20A]',
    text: 'Choose the best word/phrase for blank [20A]',
    choices: ['schedule', 'scheduled', 'scheduling', 'schedules'],
    answer: 1,
    explain: 'has been scheduled เป็น passive voice ที่ถูกต้อง',
    context: `Memo: safety committee session

To: Department Staff
Subject: Safety Committee Session

The safety committee session has been ___[20A]___ for Thursday at 1 P.M. in Auditorium 1. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached incident reports ___[20B]___ the meeting.

___[20C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[20D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-078',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [20B]',
    text: 'Choose the best word/phrase for blank [20B]',
    choices: ['prior to', 'instead', 'because', 'despite'],
    answer: 0,
    explain: 'prior to + noun = ก่อน',
    context: `Memo: safety committee session

To: Department Staff
Subject: Safety Committee Session

The safety committee session has been ___[20A]___ for Thursday at 1 P.M. in Auditorium 1. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached incident reports ___[20B]___ the meeting.

___[20C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[20D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-079',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [20C]',
    text: 'Choose the best word/phrase for blank [20C]',
    choices: ['Please arrive five minutes early.', 'The office moved to another city in 2021.', 'All receipts must be printed in color.', 'The product is available in three sizes.'],
    answer: 0,
    explain: 'ประโยคนี้สอดคล้องกับการเริ่มประชุมตรงเวลา',
    context: `Memo: safety committee session

To: Department Staff
Subject: Safety Committee Session

The safety committee session has been ___[20A]___ for Thursday at 1 P.M. in Auditorium 1. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached incident reports ___[20B]___ the meeting.

___[20C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[20D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-080',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [20D]',
    text: 'Choose the best word/phrase for blank [20D]',
    choices: ['questions', 'questionable', 'question', 'questioned'],
    answer: 0,
    explain: 'Any questions เป็นคำนามพหูพจน์ในวลีมาตรฐาน',
    context: `Memo: safety committee session

To: Department Staff
Subject: Safety Committee Session

The safety committee session has been ___[20A]___ for Thursday at 1 P.M. in Auditorium 1. Attendance is strongly recommended for all supervisors, as several important updates will be discussed. Please review the attached incident reports ___[20B]___ the meeting.

___[20C]___ This will allow us to begin the discussion promptly and focus on key decisions. Any questions should be directed to the administrative office.
Please send any ___[20D]___ in advance if you would like them added to the agenda.`,
    audio: null,
  },
  {
    id: 'P6-081',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [21A]',
    text: 'Choose the best word/phrase for blank [21A]',
    choices: ['designing', 'designed', 'design', 'designs'],
    answer: 1,
    explain: 'product ถูกออกแบบมา ใช้ past participle designed',
    context: `Advertisement: AirLite Desk Fan

Introducing the AirLite Desk Fan, a product ___[21A]___ for quiet offices. It includes three speed settings and a compact design that fits easily into limited spaces. The item is now ___[21B]___ online for only $39.

Customers who order before the end of the week will receive free shipping. ___[21C]___ Visit our website to read customer reviews and compare related products.
The AirLite Desk Fan also has several useful ___[21D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-082',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [21B]',
    text: 'Choose the best word/phrase for blank [21B]',
    choices: ['available', 'availability', 'availably', 'avail'],
    answer: 0,
    explain: 'available เป็น adjective หลัง be',
    context: `Advertisement: AirLite Desk Fan

Introducing the AirLite Desk Fan, a product ___[21A]___ for quiet offices. It includes three speed settings and a compact design that fits easily into limited spaces. The item is now ___[21B]___ online for only $39.

Customers who order before the end of the week will receive free shipping. ___[21C]___ Visit our website to read customer reviews and compare related products.
The AirLite Desk Fan also has several useful ___[21D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-083',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [21C]',
    text: 'Choose the best word/phrase for blank [21C]',
    choices: ['This offer is valid only while supplies last.', 'The finance department meets every Tuesday.', 'The applicant should attach a resume.', 'The repairs were completed last year.'],
    answer: 0,
    explain: 'ประโยคนี้เข้ากับโฆษณาและโปรโมชัน',
    context: `Advertisement: AirLite Desk Fan

Introducing the AirLite Desk Fan, a product ___[21A]___ for quiet offices. It includes three speed settings and a compact design that fits easily into limited spaces. The item is now ___[21B]___ online for only $39.

Customers who order before the end of the week will receive free shipping. ___[21C]___ Visit our website to read customer reviews and compare related products.
The AirLite Desk Fan also has several useful ___[21D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-084',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [21D]',
    text: 'Choose the best word/phrase for blank [21D]',
    choices: ['feature', 'features', 'featured', 'featuring'],
    answer: 1,
    explain: 'ถ้าพูดถึงคุณสมบัติหลายอย่าง ใช้ features เป็นคำนามพหูพจน์',
    context: `Advertisement: AirLite Desk Fan

Introducing the AirLite Desk Fan, a product ___[21A]___ for quiet offices. It includes three speed settings and a compact design that fits easily into limited spaces. The item is now ___[21B]___ online for only $39.

Customers who order before the end of the week will receive free shipping. ___[21C]___ Visit our website to read customer reviews and compare related products.
The AirLite Desk Fan also has several useful ___[21D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-085',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [22A]',
    text: 'Choose the best word/phrase for blank [22A]',
    choices: ['designing', 'designed', 'design', 'designs'],
    answer: 1,
    explain: 'product ถูกออกแบบมา ใช้ past participle designed',
    context: `Advertisement: ClearView Monitor Stand

Introducing the ClearView Monitor Stand, a product ___[22A]___ for shared workstations. It includes adjustable height and a compact design that fits easily into limited spaces. The item is now ___[22B]___ online for only $54.

Customers who order before the end of the week will receive free shipping. ___[22C]___ Visit our website to read customer reviews and compare related products.
The ClearView Monitor Stand also has several useful ___[22D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-086',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [22B]',
    text: 'Choose the best word/phrase for blank [22B]',
    choices: ['available', 'availability', 'availably', 'avail'],
    answer: 0,
    explain: 'available เป็น adjective หลัง be',
    context: `Advertisement: ClearView Monitor Stand

Introducing the ClearView Monitor Stand, a product ___[22A]___ for shared workstations. It includes adjustable height and a compact design that fits easily into limited spaces. The item is now ___[22B]___ online for only $54.

Customers who order before the end of the week will receive free shipping. ___[22C]___ Visit our website to read customer reviews and compare related products.
The ClearView Monitor Stand also has several useful ___[22D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-087',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [22C]',
    text: 'Choose the best word/phrase for blank [22C]',
    choices: ['This offer is valid only while supplies last.', 'The finance department meets every Tuesday.', 'The applicant should attach a resume.', 'The repairs were completed last year.'],
    answer: 0,
    explain: 'ประโยคนี้เข้ากับโฆษณาและโปรโมชัน',
    context: `Advertisement: ClearView Monitor Stand

Introducing the ClearView Monitor Stand, a product ___[22A]___ for shared workstations. It includes adjustable height and a compact design that fits easily into limited spaces. The item is now ___[22B]___ online for only $54.

Customers who order before the end of the week will receive free shipping. ___[22C]___ Visit our website to read customer reviews and compare related products.
The ClearView Monitor Stand also has several useful ___[22D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-088',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [22D]',
    text: 'Choose the best word/phrase for blank [22D]',
    choices: ['feature', 'features', 'featured', 'featuring'],
    answer: 1,
    explain: 'ถ้าพูดถึงคุณสมบัติหลายอย่าง ใช้ features เป็นคำนามพหูพจน์',
    context: `Advertisement: ClearView Monitor Stand

Introducing the ClearView Monitor Stand, a product ___[22A]___ for shared workstations. It includes adjustable height and a compact design that fits easily into limited spaces. The item is now ___[22B]___ online for only $54.

Customers who order before the end of the week will receive free shipping. ___[22C]___ Visit our website to read customer reviews and compare related products.
The ClearView Monitor Stand also has several useful ___[22D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-089',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [23A]',
    text: 'Choose the best word/phrase for blank [23A]',
    choices: ['designing', 'designed', 'design', 'designs'],
    answer: 1,
    explain: 'product ถูกออกแบบมา ใช้ past participle designed',
    context: `Advertisement: TravelPro Document Pouch

Introducing the TravelPro Document Pouch, a product ___[23A]___ for business travelers. It includes water-resistant material and a compact design that fits easily into limited spaces. The item is now ___[23B]___ online for only $18.

Customers who order before the end of the week will receive free shipping. ___[23C]___ Visit our website to read customer reviews and compare related products.
The TravelPro Document Pouch also has several useful ___[23D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-090',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [23B]',
    text: 'Choose the best word/phrase for blank [23B]',
    choices: ['available', 'availability', 'availably', 'avail'],
    answer: 0,
    explain: 'available เป็น adjective หลัง be',
    context: `Advertisement: TravelPro Document Pouch

Introducing the TravelPro Document Pouch, a product ___[23A]___ for business travelers. It includes water-resistant material and a compact design that fits easily into limited spaces. The item is now ___[23B]___ online for only $18.

Customers who order before the end of the week will receive free shipping. ___[23C]___ Visit our website to read customer reviews and compare related products.
The TravelPro Document Pouch also has several useful ___[23D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-091',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [23C]',
    text: 'Choose the best word/phrase for blank [23C]',
    choices: ['This offer is valid only while supplies last.', 'The finance department meets every Tuesday.', 'The applicant should attach a resume.', 'The repairs were completed last year.'],
    answer: 0,
    explain: 'ประโยคนี้เข้ากับโฆษณาและโปรโมชัน',
    context: `Advertisement: TravelPro Document Pouch

Introducing the TravelPro Document Pouch, a product ___[23A]___ for business travelers. It includes water-resistant material and a compact design that fits easily into limited spaces. The item is now ___[23B]___ online for only $18.

Customers who order before the end of the week will receive free shipping. ___[23C]___ Visit our website to read customer reviews and compare related products.
The TravelPro Document Pouch also has several useful ___[23D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-092',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [23D]',
    text: 'Choose the best word/phrase for blank [23D]',
    choices: ['feature', 'features', 'featured', 'featuring'],
    answer: 1,
    explain: 'ถ้าพูดถึงคุณสมบัติหลายอย่าง ใช้ features เป็นคำนามพหูพจน์',
    context: `Advertisement: TravelPro Document Pouch

Introducing the TravelPro Document Pouch, a product ___[23A]___ for business travelers. It includes water-resistant material and a compact design that fits easily into limited spaces. The item is now ___[23B]___ online for only $18.

Customers who order before the end of the week will receive free shipping. ___[23C]___ Visit our website to read customer reviews and compare related products.
The TravelPro Document Pouch also has several useful ___[23D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-093',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [24A]',
    text: 'Choose the best word/phrase for blank [24A]',
    choices: ['designing', 'designed', 'design', 'designs'],
    answer: 1,
    explain: 'product ถูกออกแบบมา ใช้ past participle designed',
    context: `Advertisement: EcoBrew Coffee Maker

Introducing the EcoBrew Coffee Maker, a product ___[24A]___ for small break rooms. It includes energy-saving mode and a compact design that fits easily into limited spaces. The item is now ___[24B]___ online for only $75.

Customers who order before the end of the week will receive free shipping. ___[24C]___ Visit our website to read customer reviews and compare related products.
The EcoBrew Coffee Maker also has several useful ___[24D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-094',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [24B]',
    text: 'Choose the best word/phrase for blank [24B]',
    choices: ['available', 'availability', 'availably', 'avail'],
    answer: 0,
    explain: 'available เป็น adjective หลัง be',
    context: `Advertisement: EcoBrew Coffee Maker

Introducing the EcoBrew Coffee Maker, a product ___[24A]___ for small break rooms. It includes energy-saving mode and a compact design that fits easily into limited spaces. The item is now ___[24B]___ online for only $75.

Customers who order before the end of the week will receive free shipping. ___[24C]___ Visit our website to read customer reviews and compare related products.
The EcoBrew Coffee Maker also has several useful ___[24D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-095',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [24C]',
    text: 'Choose the best word/phrase for blank [24C]',
    choices: ['This offer is valid only while supplies last.', 'The finance department meets every Tuesday.', 'The applicant should attach a resume.', 'The repairs were completed last year.'],
    answer: 0,
    explain: 'ประโยคนี้เข้ากับโฆษณาและโปรโมชัน',
    context: `Advertisement: EcoBrew Coffee Maker

Introducing the EcoBrew Coffee Maker, a product ___[24A]___ for small break rooms. It includes energy-saving mode and a compact design that fits easily into limited spaces. The item is now ___[24B]___ online for only $75.

Customers who order before the end of the week will receive free shipping. ___[24C]___ Visit our website to read customer reviews and compare related products.
The EcoBrew Coffee Maker also has several useful ___[24D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-096',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [24D]',
    text: 'Choose the best word/phrase for blank [24D]',
    choices: ['feature', 'features', 'featured', 'featuring'],
    answer: 1,
    explain: 'ถ้าพูดถึงคุณสมบัติหลายอย่าง ใช้ features เป็นคำนามพหูพจน์',
    context: `Advertisement: EcoBrew Coffee Maker

Introducing the EcoBrew Coffee Maker, a product ___[24A]___ for small break rooms. It includes energy-saving mode and a compact design that fits easily into limited spaces. The item is now ___[24B]___ online for only $75.

Customers who order before the end of the week will receive free shipping. ___[24C]___ Visit our website to read customer reviews and compare related products.
The EcoBrew Coffee Maker also has several useful ___[24D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-097',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [25A]',
    text: 'Choose the best word/phrase for blank [25A]',
    choices: ['designing', 'designed', 'design', 'designs'],
    answer: 1,
    explain: 'product ถูกออกแบบมา ใช้ past participle designed',
    context: `Advertisement: FlexNote Planner

Introducing the FlexNote Planner, a product ___[25A]___ for project teams. It includes weekly planning pages and a compact design that fits easily into limited spaces. The item is now ___[25B]___ online for only $12.

Customers who order before the end of the week will receive free shipping. ___[25C]___ Visit our website to read customer reviews and compare related products.
The FlexNote Planner also has several useful ___[25D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-098',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [25B]',
    text: 'Choose the best word/phrase for blank [25B]',
    choices: ['available', 'availability', 'availably', 'avail'],
    answer: 0,
    explain: 'available เป็น adjective หลัง be',
    context: `Advertisement: FlexNote Planner

Introducing the FlexNote Planner, a product ___[25A]___ for project teams. It includes weekly planning pages and a compact design that fits easily into limited spaces. The item is now ___[25B]___ online for only $12.

Customers who order before the end of the week will receive free shipping. ___[25C]___ Visit our website to read customer reviews and compare related products.
The FlexNote Planner also has several useful ___[25D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-099',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [25C]',
    text: 'Choose the best word/phrase for blank [25C]',
    choices: ['This offer is valid only while supplies last.', 'The finance department meets every Tuesday.', 'The applicant should attach a resume.', 'The repairs were completed last year.'],
    answer: 0,
    explain: 'ประโยคนี้เข้ากับโฆษณาและโปรโมชัน',
    context: `Advertisement: FlexNote Planner

Introducing the FlexNote Planner, a product ___[25A]___ for project teams. It includes weekly planning pages and a compact design that fits easily into limited spaces. The item is now ___[25B]___ online for only $12.

Customers who order before the end of the week will receive free shipping. ___[25C]___ Visit our website to read customer reviews and compare related products.
The FlexNote Planner also has several useful ___[25D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P6-100',
    part: '6',
    partLabel: 'Part 6 — Text Completion',
    type: 'grammar',
    topic: 'Text Completion [25D]',
    text: 'Choose the best word/phrase for blank [25D]',
    choices: ['feature', 'features', 'featured', 'featuring'],
    answer: 1,
    explain: 'ถ้าพูดถึงคุณสมบัติหลายอย่าง ใช้ features เป็นคำนามพหูพจน์ ========================================================================================',
    context: `Advertisement: FlexNote Planner

Introducing the FlexNote Planner, a product ___[25A]___ for project teams. It includes weekly planning pages and a compact design that fits easily into limited spaces. The item is now ___[25B]___ online for only $12.

Customers who order before the end of the week will receive free shipping. ___[25C]___ Visit our website to read customer reviews and compare related products.
The FlexNote Planner also has several useful ___[25D]___ for everyday use.`,
    audio: null,
  },
  {
    id: 'P7-001',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is the main purpose of the email?',
    choices: ['To request travel reimbursement', 'To announce a training session', 'To cancel a staff meeting', 'To introduce a new employee'],
    answer: 1,
    explain: 'อีเมลแจ้งรายละเอียดวัน เวลา สถานที่ และการลงทะเบียนอบรม',
    context: `Email: Data Privacy Workshop

To: All Staff
From: Training Department
Subject: Data Privacy Workshop

The Data Privacy Workshop will take place on Thursday, March 12 from 9:00 A.M. to 12:00 P.M. in Conference Room 4. The session is intended for employees who work with client information or internal records. Participants should bring a company laptop so they can complete the practice activities. Registration closes on March 9. Employees who attend the full session will receive a completion certificate.`,
    audio: null,
  },
  {
    id: 'P7-002',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Where will the session be held?',
    choices: ['Main Lobby', 'Human Resources Office', 'Online only', 'Conference Room 4'],
    answer: 3,
    explain: 'ข้อความระบุว่าสถานที่คือ Conference Room 4',
    context: `Email: Data Privacy Workshop

To: All Staff
From: Training Department
Subject: Data Privacy Workshop

The Data Privacy Workshop will take place on Thursday, March 12 from 9:00 A.M. to 12:00 P.M. in Conference Room 4. The session is intended for employees who work with client information or internal records. Participants should bring a company laptop so they can complete the practice activities. Registration closes on March 9. Employees who attend the full session will receive a completion certificate.`,
    audio: null,
  },
  {
    id: 'P7-003',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What should participants bring?',
    choices: ['a company laptop', 'A signed contract', 'A parking receipt', 'A product sample'],
    answer: 0,
    explain: 'ผู้เข้าร่วมต้องนำ a company laptop',
    context: `Email: Data Privacy Workshop

To: All Staff
From: Training Department
Subject: Data Privacy Workshop

The Data Privacy Workshop will take place on Thursday, March 12 from 9:00 A.M. to 12:00 P.M. in Conference Room 4. The session is intended for employees who work with client information or internal records. Participants should bring a company laptop so they can complete the practice activities. Registration closes on March 9. Employees who attend the full session will receive a completion certificate.`,
    audio: null,
  },
  {
    id: 'P7-004',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What will employees receive after attending the full session?',
    choices: ['A refund', 'A new uniform', 'completion certificate', 'A parking pass'],
    answer: 2,
    explain: 'ผู้ที่เข้าครบทั้ง session จะได้รับ completion certificate',
    context: `Email: Data Privacy Workshop

To: All Staff
From: Training Department
Subject: Data Privacy Workshop

The Data Privacy Workshop will take place on Thursday, March 12 from 9:00 A.M. to 12:00 P.M. in Conference Room 4. The session is intended for employees who work with client information or internal records. Participants should bring a company laptop so they can complete the practice activities. Registration closes on March 9. Employees who attend the full session will receive a completion certificate.`,
    audio: null,
  },
  {
    id: 'P7-005',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is the main purpose of the email?',
    choices: ['To request travel reimbursement', 'To announce a training session', 'To cancel a staff meeting', 'To introduce a new employee'],
    answer: 1,
    explain: 'อีเมลแจ้งรายละเอียดวัน เวลา สถานที่ และการลงทะเบียนอบรม',
    context: `Email: Customer Care Seminar

To: All Staff
From: Training Department
Subject: Customer Care Seminar

The Customer Care Seminar will take place on Tuesday, April 7 from 1:00 P.M. to 4:00 P.M. in Training Room B. The session is intended for employees who work with client information or internal records. Participants should bring recent customer feedback forms so they can complete the practice activities. Registration closes on April 3. Employees who attend the full session will receive a service toolkit.`,
    audio: null,
  },
  {
    id: 'P7-006',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Where will the session be held?',
    choices: ['Main Lobby', 'Human Resources Office', 'Online only', 'Training Room B'],
    answer: 3,
    explain: 'ข้อความระบุว่าสถานที่คือ Training Room B',
    context: `Email: Customer Care Seminar

To: All Staff
From: Training Department
Subject: Customer Care Seminar

The Customer Care Seminar will take place on Tuesday, April 7 from 1:00 P.M. to 4:00 P.M. in Training Room B. The session is intended for employees who work with client information or internal records. Participants should bring recent customer feedback forms so they can complete the practice activities. Registration closes on April 3. Employees who attend the full session will receive a service toolkit.`,
    audio: null,
  },
  {
    id: 'P7-007',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What should participants bring?',
    choices: ['recent customer feedback forms', 'A signed contract', 'A parking receipt', 'A product sample'],
    answer: 0,
    explain: 'ผู้เข้าร่วมต้องนำ recent customer feedback forms',
    context: `Email: Customer Care Seminar

To: All Staff
From: Training Department
Subject: Customer Care Seminar

The Customer Care Seminar will take place on Tuesday, April 7 from 1:00 P.M. to 4:00 P.M. in Training Room B. The session is intended for employees who work with client information or internal records. Participants should bring recent customer feedback forms so they can complete the practice activities. Registration closes on April 3. Employees who attend the full session will receive a service toolkit.`,
    audio: null,
  },
  {
    id: 'P7-008',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What will employees receive after attending the full session?',
    choices: ['A refund', 'A new uniform', 'service toolkit', 'A parking pass'],
    answer: 2,
    explain: 'ผู้ที่เข้าครบทั้ง session จะได้รับ service toolkit',
    context: `Email: Customer Care Seminar

To: All Staff
From: Training Department
Subject: Customer Care Seminar

The Customer Care Seminar will take place on Tuesday, April 7 from 1:00 P.M. to 4:00 P.M. in Training Room B. The session is intended for employees who work with client information or internal records. Participants should bring recent customer feedback forms so they can complete the practice activities. Registration closes on April 3. Employees who attend the full session will receive a service toolkit.`,
    audio: null,
  },
  {
    id: 'P7-009',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is the main purpose of the email?',
    choices: ['To request travel reimbursement', 'To announce a training session', 'To cancel a staff meeting', 'To introduce a new employee'],
    answer: 1,
    explain: 'อีเมลแจ้งรายละเอียดวัน เวลา สถานที่ และการลงทะเบียนอบรม',
    context: `Email: Inventory Basics Session

To: All Staff
From: Training Department
Subject: Inventory Basics Session

The Inventory Basics Session will take place on Monday, May 18 from 10:00 A.M. to 1:00 P.M. in Warehouse Office. The session is intended for employees who work with client information or internal records. Participants should bring a handheld scanner so they can complete the practice activities. Registration closes on May 14. Employees who attend the full session will receive a practice checklist.`,
    audio: null,
  },
  {
    id: 'P7-010',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Where will the session be held?',
    choices: ['Main Lobby', 'Human Resources Office', 'Online only', 'Warehouse Office'],
    answer: 3,
    explain: 'ข้อความระบุว่าสถานที่คือ Warehouse Office',
    context: `Email: Inventory Basics Session

To: All Staff
From: Training Department
Subject: Inventory Basics Session

The Inventory Basics Session will take place on Monday, May 18 from 10:00 A.M. to 1:00 P.M. in Warehouse Office. The session is intended for employees who work with client information or internal records. Participants should bring a handheld scanner so they can complete the practice activities. Registration closes on May 14. Employees who attend the full session will receive a practice checklist.`,
    audio: null,
  },
  {
    id: 'P7-011',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What should participants bring?',
    choices: ['a handheld scanner', 'A signed contract', 'A parking receipt', 'A product sample'],
    answer: 0,
    explain: 'ผู้เข้าร่วมต้องนำ a handheld scanner',
    context: `Email: Inventory Basics Session

To: All Staff
From: Training Department
Subject: Inventory Basics Session

The Inventory Basics Session will take place on Monday, May 18 from 10:00 A.M. to 1:00 P.M. in Warehouse Office. The session is intended for employees who work with client information or internal records. Participants should bring a handheld scanner so they can complete the practice activities. Registration closes on May 14. Employees who attend the full session will receive a practice checklist.`,
    audio: null,
  },
  {
    id: 'P7-012',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What will employees receive after attending the full session?',
    choices: ['A refund', 'A new uniform', 'practice checklist', 'A parking pass'],
    answer: 2,
    explain: 'ผู้ที่เข้าครบทั้ง session จะได้รับ practice checklist',
    context: `Email: Inventory Basics Session

To: All Staff
From: Training Department
Subject: Inventory Basics Session

The Inventory Basics Session will take place on Monday, May 18 from 10:00 A.M. to 1:00 P.M. in Warehouse Office. The session is intended for employees who work with client information or internal records. Participants should bring a handheld scanner so they can complete the practice activities. Registration closes on May 14. Employees who attend the full session will receive a practice checklist.`,
    audio: null,
  },
  {
    id: 'P7-013',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is the main purpose of the email?',
    choices: ['To request travel reimbursement', 'To announce a training session', 'To cancel a staff meeting', 'To introduce a new employee'],
    answer: 1,
    explain: 'อีเมลแจ้งรายละเอียดวัน เวลา สถานที่ และการลงทะเบียนอบรม',
    context: `Email: Presentation Skills Clinic

To: All Staff
From: Training Department
Subject: Presentation Skills Clinic

The Presentation Skills Clinic will take place on Wednesday, June 10 from 2:00 P.M. to 5:00 P.M. in Studio 2. The session is intended for employees who work with client information or internal records. Participants should bring a draft slide deck so they can complete the practice activities. Registration closes on June 5. Employees who attend the full session will receive a feedback report.`,
    audio: null,
  },
  {
    id: 'P7-014',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Where will the session be held?',
    choices: ['Main Lobby', 'Human Resources Office', 'Online only', 'Studio 2'],
    answer: 3,
    explain: 'ข้อความระบุว่าสถานที่คือ Studio 2',
    context: `Email: Presentation Skills Clinic

To: All Staff
From: Training Department
Subject: Presentation Skills Clinic

The Presentation Skills Clinic will take place on Wednesday, June 10 from 2:00 P.M. to 5:00 P.M. in Studio 2. The session is intended for employees who work with client information or internal records. Participants should bring a draft slide deck so they can complete the practice activities. Registration closes on June 5. Employees who attend the full session will receive a feedback report.`,
    audio: null,
  },
  {
    id: 'P7-015',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What should participants bring?',
    choices: ['a draft slide deck', 'A signed contract', 'A parking receipt', 'A product sample'],
    answer: 0,
    explain: 'ผู้เข้าร่วมต้องนำ a draft slide deck',
    context: `Email: Presentation Skills Clinic

To: All Staff
From: Training Department
Subject: Presentation Skills Clinic

The Presentation Skills Clinic will take place on Wednesday, June 10 from 2:00 P.M. to 5:00 P.M. in Studio 2. The session is intended for employees who work with client information or internal records. Participants should bring a draft slide deck so they can complete the practice activities. Registration closes on June 5. Employees who attend the full session will receive a feedback report.`,
    audio: null,
  },
  {
    id: 'P7-016',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What will employees receive after attending the full session?',
    choices: ['A refund', 'A new uniform', 'feedback report', 'A parking pass'],
    answer: 2,
    explain: 'ผู้ที่เข้าครบทั้ง session จะได้รับ feedback report',
    context: `Email: Presentation Skills Clinic

To: All Staff
From: Training Department
Subject: Presentation Skills Clinic

The Presentation Skills Clinic will take place on Wednesday, June 10 from 2:00 P.M. to 5:00 P.M. in Studio 2. The session is intended for employees who work with client information or internal records. Participants should bring a draft slide deck so they can complete the practice activities. Registration closes on June 5. Employees who attend the full session will receive a feedback report.`,
    audio: null,
  },
  {
    id: 'P7-017',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is the main purpose of the email?',
    choices: ['To request travel reimbursement', 'To announce a training session', 'To cancel a staff meeting', 'To introduce a new employee'],
    answer: 1,
    explain: 'อีเมลแจ้งรายละเอียดวัน เวลา สถานที่ และการลงทะเบียนอบรม',
    context: `Email: Travel Expense Training

To: All Staff
From: Training Department
Subject: Travel Expense Training

The Travel Expense Training will take place on Friday, July 24 from 8:30 A.M. to 11:30 A.M. in Finance Lab. The session is intended for employees who work with client information or internal records. Participants should bring three sample receipts so they can complete the practice activities. Registration closes on July 20. Employees who attend the full session will receive a expense guide.`,
    audio: null,
  },
  {
    id: 'P7-018',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Where will the session be held?',
    choices: ['Main Lobby', 'Human Resources Office', 'Online only', 'Finance Lab'],
    answer: 3,
    explain: 'ข้อความระบุว่าสถานที่คือ Finance Lab',
    context: `Email: Travel Expense Training

To: All Staff
From: Training Department
Subject: Travel Expense Training

The Travel Expense Training will take place on Friday, July 24 from 8:30 A.M. to 11:30 A.M. in Finance Lab. The session is intended for employees who work with client information or internal records. Participants should bring three sample receipts so they can complete the practice activities. Registration closes on July 20. Employees who attend the full session will receive a expense guide.`,
    audio: null,
  },
  {
    id: 'P7-019',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What should participants bring?',
    choices: ['three sample receipts', 'A signed contract', 'A parking receipt', 'A product sample'],
    answer: 0,
    explain: 'ผู้เข้าร่วมต้องนำ three sample receipts',
    context: `Email: Travel Expense Training

To: All Staff
From: Training Department
Subject: Travel Expense Training

The Travel Expense Training will take place on Friday, July 24 from 8:30 A.M. to 11:30 A.M. in Finance Lab. The session is intended for employees who work with client information or internal records. Participants should bring three sample receipts so they can complete the practice activities. Registration closes on July 20. Employees who attend the full session will receive a expense guide.`,
    audio: null,
  },
  {
    id: 'P7-020',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What will employees receive after attending the full session?',
    choices: ['A refund', 'A new uniform', 'expense guide', 'A parking pass'],
    answer: 2,
    explain: 'ผู้ที่เข้าครบทั้ง session จะได้รับ expense guide',
    context: `Email: Travel Expense Training

To: All Staff
From: Training Department
Subject: Travel Expense Training

The Travel Expense Training will take place on Friday, July 24 from 8:30 A.M. to 11:30 A.M. in Finance Lab. The session is intended for employees who work with client information or internal records. Participants should bring three sample receipts so they can complete the practice activities. Registration closes on July 20. Employees who attend the full session will receive a expense guide.`,
    audio: null,
  },
  {
    id: 'P7-021',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why will the organization change its schedule?',
    choices: ['Because all staff are on vacation', 'Because of renovations to the kitchen', 'Because a new branch is opening', 'Because prices are being reduced'],
    answer: 1,
    explain: 'ประกาศระบุเหตุผลว่า renovations to the kitchen',
    context: `Notice: CityLine Café

Customer Notice

CityLine Café will operate on a reduced schedule from May 3 to May 8 because of renovations to the kitchen. During this period, our hours will be 7:00 A.M. to 2:00 P.M.. Customers may still use cold sandwiches and bottled drinks. Regular service will resume on May 9. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-022',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What will be available during the change?',
    choices: ['All regular services', 'Overnight delivery', 'Free parking permits', 'cold sandwiches and bottled drinks'],
    answer: 3,
    explain: 'ประกาศบอกว่าลูกค้ายังใช้/รับบริการ cold sandwiches and bottled drinks ได้',
    context: `Notice: CityLine Café

Customer Notice

CityLine Café will operate on a reduced schedule from May 3 to May 8 because of renovations to the kitchen. During this period, our hours will be 7:00 A.M. to 2:00 P.M.. Customers may still use cold sandwiches and bottled drinks. Regular service will resume on May 9. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-023',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'When will regular service resume?',
    choices: ['May 9', 'May 3', 'Next month', 'It is not stated'],
    answer: 0,
    explain: 'ข้อความระบุว่าจะกลับสู่บริการปกติวันที่ May 9',
    context: `Notice: CityLine Café

Customer Notice

CityLine Café will operate on a reduced schedule from May 3 to May 8 because of renovations to the kitchen. During this period, our hours will be 7:00 A.M. to 2:00 P.M.. Customers may still use cold sandwiches and bottled drinks. Regular service will resume on May 9. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-024',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What does the word “resume” mean in the notice?',
    choices: ['write again', 'apply for a job', 'begin again', 'reduce greatly'],
    answer: 2,
    explain: 'resume ในบริบทนี้หมายถึงกลับมาเริ่มอีกครั้ง',
    context: `Notice: CityLine Café

Customer Notice

CityLine Café will operate on a reduced schedule from May 3 to May 8 because of renovations to the kitchen. During this period, our hours will be 7:00 A.M. to 2:00 P.M.. Customers may still use cold sandwiches and bottled drinks. Regular service will resume on May 9. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-025',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why will the organization change its schedule?',
    choices: ['Because all staff are on vacation', 'Because of annual equipment inspection', 'Because a new branch is opening', 'Because prices are being reduced'],
    answer: 1,
    explain: 'ประกาศระบุเหตุผลว่า annual equipment inspection',
    context: `Notice: Grand Fitness Club

Customer Notice

Grand Fitness Club will operate on a reduced schedule from June 1 to June 3 because of annual equipment inspection. During this period, our hours will be 6:00 A.M. to 8:00 P.M.. Customers may still use the swimming pool and locker rooms. Regular service will resume on June 4. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-026',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What will be available during the change?',
    choices: ['All regular services', 'Overnight delivery', 'Free parking permits', 'the swimming pool and locker rooms'],
    answer: 3,
    explain: 'ประกาศบอกว่าลูกค้ายังใช้/รับบริการ the swimming pool and locker rooms ได้',
    context: `Notice: Grand Fitness Club

Customer Notice

Grand Fitness Club will operate on a reduced schedule from June 1 to June 3 because of annual equipment inspection. During this period, our hours will be 6:00 A.M. to 8:00 P.M.. Customers may still use the swimming pool and locker rooms. Regular service will resume on June 4. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-027',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'When will regular service resume?',
    choices: ['June 4', 'June 1', 'Next month', 'It is not stated'],
    answer: 0,
    explain: 'ข้อความระบุว่าจะกลับสู่บริการปกติวันที่ June 4',
    context: `Notice: Grand Fitness Club

Customer Notice

Grand Fitness Club will operate on a reduced schedule from June 1 to June 3 because of annual equipment inspection. During this period, our hours will be 6:00 A.M. to 8:00 P.M.. Customers may still use the swimming pool and locker rooms. Regular service will resume on June 4. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-028',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What does the word “resume” mean in the notice?',
    choices: ['write again', 'apply for a job', 'begin again', 'reduce greatly'],
    answer: 2,
    explain: 'resume ในบริบทนี้หมายถึงกลับมาเริ่มอีกครั้ง',
    context: `Notice: Grand Fitness Club

Customer Notice

Grand Fitness Club will operate on a reduced schedule from June 1 to June 3 because of annual equipment inspection. During this period, our hours will be 6:00 A.M. to 8:00 P.M.. Customers may still use the swimming pool and locker rooms. Regular service will resume on June 4. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-029',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why will the organization change its schedule?',
    choices: ['Because all staff are on vacation', 'Because of installation of new shelves', 'Because a new branch is opening', 'Because prices are being reduced'],
    answer: 1,
    explain: 'ประกาศระบุเหตุผลว่า installation of new shelves',
    context: `Notice: Oakridge Library

Customer Notice

Oakridge Library will operate on a reduced schedule from April 11 to April 14 because of installation of new shelves. During this period, our hours will be 10:00 A.M. to 5:00 P.M.. Customers may still use the second-floor reading area. Regular service will resume on April 15. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-030',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What will be available during the change?',
    choices: ['All regular services', 'Overnight delivery', 'Free parking permits', 'the second-floor reading area'],
    answer: 3,
    explain: 'ประกาศบอกว่าลูกค้ายังใช้/รับบริการ the second-floor reading area ได้',
    context: `Notice: Oakridge Library

Customer Notice

Oakridge Library will operate on a reduced schedule from April 11 to April 14 because of installation of new shelves. During this period, our hours will be 10:00 A.M. to 5:00 P.M.. Customers may still use the second-floor reading area. Regular service will resume on April 15. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-031',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'When will regular service resume?',
    choices: ['April 15', 'April 11', 'Next month', 'It is not stated'],
    answer: 0,
    explain: 'ข้อความระบุว่าจะกลับสู่บริการปกติวันที่ April 15',
    context: `Notice: Oakridge Library

Customer Notice

Oakridge Library will operate on a reduced schedule from April 11 to April 14 because of installation of new shelves. During this period, our hours will be 10:00 A.M. to 5:00 P.M.. Customers may still use the second-floor reading area. Regular service will resume on April 15. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-032',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What does the word “resume” mean in the notice?',
    choices: ['write again', 'apply for a job', 'begin again', 'reduce greatly'],
    answer: 2,
    explain: 'resume ในบริบทนี้หมายถึงกลับมาเริ่มอีกครั้ง',
    context: `Notice: Oakridge Library

Customer Notice

Oakridge Library will operate on a reduced schedule from April 11 to April 14 because of installation of new shelves. During this period, our hours will be 10:00 A.M. to 5:00 P.M.. Customers may still use the second-floor reading area. Regular service will resume on April 15. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-033',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why will the organization change its schedule?',
    choices: ['Because all staff are on vacation', 'Because of software upgrades', 'Because a new branch is opening', 'Because prices are being reduced'],
    answer: 1,
    explain: 'ประกาศระบุเหตุผลว่า software upgrades',
    context: `Notice: Metro Copy Center

Customer Notice

Metro Copy Center will operate on a reduced schedule from July 6 to July 7 because of software upgrades. During this period, our hours will be 9:00 A.M. to 3:00 P.M.. Customers may still use black-and-white printing only. Regular service will resume on July 8. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-034',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What will be available during the change?',
    choices: ['All regular services', 'Overnight delivery', 'Free parking permits', 'black-and-white printing only'],
    answer: 3,
    explain: 'ประกาศบอกว่าลูกค้ายังใช้/รับบริการ black-and-white printing only ได้',
    context: `Notice: Metro Copy Center

Customer Notice

Metro Copy Center will operate on a reduced schedule from July 6 to July 7 because of software upgrades. During this period, our hours will be 9:00 A.M. to 3:00 P.M.. Customers may still use black-and-white printing only. Regular service will resume on July 8. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-035',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'When will regular service resume?',
    choices: ['July 8', 'July 6', 'Next month', 'It is not stated'],
    answer: 0,
    explain: 'ข้อความระบุว่าจะกลับสู่บริการปกติวันที่ July 8',
    context: `Notice: Metro Copy Center

Customer Notice

Metro Copy Center will operate on a reduced schedule from July 6 to July 7 because of software upgrades. During this period, our hours will be 9:00 A.M. to 3:00 P.M.. Customers may still use black-and-white printing only. Regular service will resume on July 8. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-036',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What does the word “resume” mean in the notice?',
    choices: ['write again', 'apply for a job', 'begin again', 'reduce greatly'],
    answer: 2,
    explain: 'resume ในบริบทนี้หมายถึงกลับมาเริ่มอีกครั้ง',
    context: `Notice: Metro Copy Center

Customer Notice

Metro Copy Center will operate on a reduced schedule from July 6 to July 7 because of software upgrades. During this period, our hours will be 9:00 A.M. to 3:00 P.M.. Customers may still use black-and-white printing only. Regular service will resume on July 8. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-037',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why will the organization change its schedule?',
    choices: ['Because all staff are on vacation', 'Because of staff training', 'Because a new branch is opening', 'Because prices are being reduced'],
    answer: 1,
    explain: 'ประกาศระบุเหตุผลว่า staff training',
    context: `Notice: Parkview Clinic

Customer Notice

Parkview Clinic will operate on a reduced schedule from August 12 because of staff training. During this period, our hours will be 8:00 A.M. to noon. Customers may still use urgent-care services. Regular service will resume on August 13. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-038',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What will be available during the change?',
    choices: ['All regular services', 'Overnight delivery', 'Free parking permits', 'urgent-care services'],
    answer: 3,
    explain: 'ประกาศบอกว่าลูกค้ายังใช้/รับบริการ urgent-care services ได้',
    context: `Notice: Parkview Clinic

Customer Notice

Parkview Clinic will operate on a reduced schedule from August 12 because of staff training. During this period, our hours will be 8:00 A.M. to noon. Customers may still use urgent-care services. Regular service will resume on August 13. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-039',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'When will regular service resume?',
    choices: ['August 13', 'August 12', 'Next month', 'It is not stated'],
    answer: 0,
    explain: 'ข้อความระบุว่าจะกลับสู่บริการปกติวันที่ August 13',
    context: `Notice: Parkview Clinic

Customer Notice

Parkview Clinic will operate on a reduced schedule from August 12 because of staff training. During this period, our hours will be 8:00 A.M. to noon. Customers may still use urgent-care services. Regular service will resume on August 13. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-040',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What does the word “resume” mean in the notice?',
    choices: ['write again', 'apply for a job', 'begin again', 'reduce greatly'],
    answer: 2,
    explain: 'resume ในบริบทนี้หมายถึงกลับมาเริ่มอีกครั้ง',
    context: `Notice: Parkview Clinic

Customer Notice

Parkview Clinic will operate on a reduced schedule from August 12 because of staff training. During this period, our hours will be 8:00 A.M. to noon. Customers may still use urgent-care services. Regular service will resume on August 13. We appreciate your patience while we improve our facilities.`,
    audio: null,
  },
  {
    id: 'P7-041',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is Nina looking for?',
    choices: ['A parking pass', 'the brochure file', 'A lunch menu', 'A repair invoice'],
    answer: 1,
    explain: 'Nina ถามหา the brochure file',
    context: `Instant Messages: Nina and Omar

Nina: Hi Omar, have you seen the brochure file? I need it for the client meeting tomorrow.
Omar: Yes, I placed it in the printer room about ten minutes ago.
Nina: Great. I have to check one detail before 3 P.M..
Omar: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-042',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Where is the item?',
    choices: ['Human Resources', 'The loading dock', 'The cafeteria', 'printer room'],
    answer: 3,
    explain: 'Omar บอกว่าวางไว้ที่ printer room',
    context: `Instant Messages: Nina and Omar

Nina: Hi Omar, have you seen the brochure file? I need it for the client meeting tomorrow.
Omar: Yes, I placed it in the printer room about ten minutes ago.
Nina: Great. I have to check one detail before 3 P.M..
Omar: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-043',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why does the item seem urgent?',
    choices: ['It is needed for the client meeting tomorrow.', 'It must be returned to a customer.', 'It is part of a shipment.', 'It contains a refund check.'],
    answer: 0,
    explain: 'Nina ต้องใช้ item สำหรับ the client meeting tomorrow',
    context: `Instant Messages: Nina and Omar

Nina: Hi Omar, have you seen the brochure file? I need it for the client meeting tomorrow.
Omar: Yes, I placed it in the printer room about ten minutes ago.
Nina: Great. I have to check one detail before 3 P.M..
Omar: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-044',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What did the second speaker do in addition to placing the item?',
    choices: ['Canceled the meeting', 'Called a supplier', 'Sent a copy by email', 'Updated the price'],
    answer: 2,
    explain: 'ข้อความสุดท้ายบอกว่าได้ส่งสำเนาไปทางอีเมลด้วย',
    context: `Instant Messages: Nina and Omar

Nina: Hi Omar, have you seen the brochure file? I need it for the client meeting tomorrow.
Omar: Yes, I placed it in the printer room about ten minutes ago.
Nina: Great. I have to check one detail before 3 P.M..
Omar: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-045',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is Leo looking for?',
    choices: ['A parking pass', 'the sales spreadsheet', 'A lunch menu', 'A repair invoice'],
    answer: 1,
    explain: 'Leo ถามหา the sales spreadsheet',
    context: `Instant Messages: Leo and Mina

Leo: Hi Mina, have you seen the sales spreadsheet? I need it for the regional review.
Mina: Yes, I placed it in the shared drive about ten minutes ago.
Leo: Great. I have to check one detail before noon.
Mina: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-046',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Where is the item?',
    choices: ['Human Resources', 'The loading dock', 'The cafeteria', 'shared drive'],
    answer: 3,
    explain: 'Mina บอกว่าวางไว้ที่ shared drive',
    context: `Instant Messages: Leo and Mina

Leo: Hi Mina, have you seen the sales spreadsheet? I need it for the regional review.
Mina: Yes, I placed it in the shared drive about ten minutes ago.
Leo: Great. I have to check one detail before noon.
Mina: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-047',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why does the item seem urgent?',
    choices: ['It is needed for the regional review.', 'It must be returned to a customer.', 'It is part of a shipment.', 'It contains a refund check.'],
    answer: 0,
    explain: 'Leo ต้องใช้ item สำหรับ the regional review',
    context: `Instant Messages: Leo and Mina

Leo: Hi Mina, have you seen the sales spreadsheet? I need it for the regional review.
Mina: Yes, I placed it in the shared drive about ten minutes ago.
Leo: Great. I have to check one detail before noon.
Mina: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-048',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What did the second speaker do in addition to placing the item?',
    choices: ['Canceled the meeting', 'Called a supplier', 'Sent a copy by email', 'Updated the price'],
    answer: 2,
    explain: 'ข้อความสุดท้ายบอกว่าได้ส่งสำเนาไปทางอีเมลด้วย',
    context: `Instant Messages: Leo and Mina

Leo: Hi Mina, have you seen the sales spreadsheet? I need it for the regional review.
Mina: Yes, I placed it in the shared drive about ten minutes ago.
Leo: Great. I have to check one detail before noon.
Mina: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-049',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is Priya looking for?',
    choices: ['A parking pass', 'the badge list', 'A lunch menu', 'A repair invoice'],
    answer: 1,
    explain: 'Priya ถามหา the badge list',
    context: `Instant Messages: Priya and Sam

Priya: Hi Sam, have you seen the badge list? I need it for the visitor check-in.
Sam: Yes, I placed it in the front desk about ten minutes ago.
Priya: Great. I have to check one detail by 5 P.M..
Sam: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-050',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Where is the item?',
    choices: ['Human Resources', 'The loading dock', 'The cafeteria', 'front desk'],
    answer: 3,
    explain: 'Sam บอกว่าวางไว้ที่ front desk',
    context: `Instant Messages: Priya and Sam

Priya: Hi Sam, have you seen the badge list? I need it for the visitor check-in.
Sam: Yes, I placed it in the front desk about ten minutes ago.
Priya: Great. I have to check one detail by 5 P.M..
Sam: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-051',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why does the item seem urgent?',
    choices: ['It is needed for the visitor check-in.', 'It must be returned to a customer.', 'It is part of a shipment.', 'It contains a refund check.'],
    answer: 0,
    explain: 'Priya ต้องใช้ item สำหรับ the visitor check-in',
    context: `Instant Messages: Priya and Sam

Priya: Hi Sam, have you seen the badge list? I need it for the visitor check-in.
Sam: Yes, I placed it in the front desk about ten minutes ago.
Priya: Great. I have to check one detail by 5 P.M..
Sam: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-052',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What did the second speaker do in addition to placing the item?',
    choices: ['Canceled the meeting', 'Called a supplier', 'Sent a copy by email', 'Updated the price'],
    answer: 2,
    explain: 'ข้อความสุดท้ายบอกว่าได้ส่งสำเนาไปทางอีเมลด้วย',
    context: `Instant Messages: Priya and Sam

Priya: Hi Sam, have you seen the badge list? I need it for the visitor check-in.
Sam: Yes, I placed it in the front desk about ten minutes ago.
Priya: Great. I have to check one detail by 5 P.M..
Sam: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-053',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is Anna looking for?',
    choices: ['A parking pass', 'the room layout', 'A lunch menu', 'A repair invoice'],
    answer: 1,
    explain: 'Anna ถามหา the room layout',
    context: `Instant Messages: Anna and Taro

Anna: Hi Taro, have you seen the room layout? I need it for Friday's workshop.
Taro: Yes, I placed it in the event folder about ten minutes ago.
Anna: Great. I have to check one detail this afternoon.
Taro: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-054',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Where is the item?',
    choices: ['Human Resources', 'The loading dock', 'The cafeteria', 'event folder'],
    answer: 3,
    explain: 'Taro บอกว่าวางไว้ที่ event folder',
    context: `Instant Messages: Anna and Taro

Anna: Hi Taro, have you seen the room layout? I need it for Friday's workshop.
Taro: Yes, I placed it in the event folder about ten minutes ago.
Anna: Great. I have to check one detail this afternoon.
Taro: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-055',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why does the item seem urgent?',
    choices: ['It is needed for Friday\'s workshop.', 'It must be returned to a customer.', 'It is part of a shipment.', 'It contains a refund check.'],
    answer: 0,
    explain: 'Anna ต้องใช้ item สำหรับ Friday\'s workshop',
    context: `Instant Messages: Anna and Taro

Anna: Hi Taro, have you seen the room layout? I need it for Friday's workshop.
Taro: Yes, I placed it in the event folder about ten minutes ago.
Anna: Great. I have to check one detail this afternoon.
Taro: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-056',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What did the second speaker do in addition to placing the item?',
    choices: ['Canceled the meeting', 'Called a supplier', 'Sent a copy by email', 'Updated the price'],
    answer: 2,
    explain: 'ข้อความสุดท้ายบอกว่าได้ส่งสำเนาไปทางอีเมลด้วย',
    context: `Instant Messages: Anna and Taro

Anna: Hi Taro, have you seen the room layout? I need it for Friday's workshop.
Taro: Yes, I placed it in the event folder about ten minutes ago.
Anna: Great. I have to check one detail this afternoon.
Taro: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-057',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is Ben looking for?',
    choices: ['A parking pass', 'the delivery schedule', 'A lunch menu', 'A repair invoice'],
    answer: 1,
    explain: 'Ben ถามหา the delivery schedule',
    context: `Instant Messages: Ben and Rosa

Ben: Hi Rosa, have you seen the delivery schedule? I need it for the morning dispatch.
Rosa: Yes, I placed it in the warehouse board about ten minutes ago.
Ben: Great. I have to check one detail before 10 A.M..
Rosa: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-058',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Where is the item?',
    choices: ['Human Resources', 'The loading dock', 'The cafeteria', 'warehouse board'],
    answer: 3,
    explain: 'Rosa บอกว่าวางไว้ที่ warehouse board',
    context: `Instant Messages: Ben and Rosa

Ben: Hi Rosa, have you seen the delivery schedule? I need it for the morning dispatch.
Rosa: Yes, I placed it in the warehouse board about ten minutes ago.
Ben: Great. I have to check one detail before 10 A.M..
Rosa: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-059',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why does the item seem urgent?',
    choices: ['It is needed for the morning dispatch.', 'It must be returned to a customer.', 'It is part of a shipment.', 'It contains a refund check.'],
    answer: 0,
    explain: 'Ben ต้องใช้ item สำหรับ the morning dispatch',
    context: `Instant Messages: Ben and Rosa

Ben: Hi Rosa, have you seen the delivery schedule? I need it for the morning dispatch.
Rosa: Yes, I placed it in the warehouse board about ten minutes ago.
Ben: Great. I have to check one detail before 10 A.M..
Rosa: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-060',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What did the second speaker do in addition to placing the item?',
    choices: ['Canceled the meeting', 'Called a supplier', 'Sent a copy by email', 'Updated the price'],
    answer: 2,
    explain: 'ข้อความสุดท้ายบอกว่าได้ส่งสำเนาไปทางอีเมลด้วย',
    context: `Instant Messages: Ben and Rosa

Ben: Hi Rosa, have you seen the delivery schedule? I need it for the morning dispatch.
Rosa: Yes, I placed it in the warehouse board about ten minutes ago.
Ben: Great. I have to check one detail before 10 A.M..
Rosa: No problem. I also sent a copy to your email in case you are away from your desk.`,
    audio: null,
  },
  {
    id: 'P7-061',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is being advertised?',
    choices: ['A job vacancy', 'corporate lunches and training events', 'A training manual', 'A financial report'],
    answer: 1,
    explain: 'โฆษณาระบุบริการหลักคือ corporate lunches and training events',
    context: `Advertisement: BlueLeaf Catering

BlueLeaf Catering now provides corporate lunches and training events. For a limited time, customers with orders over $250 will receive free dessert trays. Requests should be made at least two business days in advance to guarantee availability. Visit our online menu to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-062',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'How can customers receive the special offer?',
    choices: ['By paying in cash only', 'By visiting before noon', 'By joining a staff meeting', 'By having orders over $250'],
    answer: 3,
    explain: 'เงื่อนไขโปรโมชันคือ orders over $250',
    context: `Advertisement: BlueLeaf Catering

BlueLeaf Catering now provides corporate lunches and training events. For a limited time, customers with orders over $250 will receive free dessert trays. Requests should be made at least two business days in advance to guarantee availability. Visit our online menu to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-063',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why should requests be made in advance?',
    choices: ['To guarantee availability', 'To receive a parking permit', 'To meet the manager', 'To avoid signing a form'],
    answer: 0,
    explain: 'ข้อความบอกว่าต้องแจ้งล่วงหน้าเพื่อรับประกันความพร้อมของบริการ',
    context: `Advertisement: BlueLeaf Catering

BlueLeaf Catering now provides corporate lunches and training events. For a limited time, customers with orders over $250 will receive free dessert trays. Requests should be made at least two business days in advance to guarantee availability. Visit our online menu to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-064',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What can be done on the website?',
    choices: ['Apply for a passport', 'Reserve a hotel room', 'Submit an order form', 'Download tax records'],
    answer: 2,
    explain: 'ท้ายโฆษณาระบุว่าสามารถส่ง order form ผ่านเว็บไซต์',
    context: `Advertisement: BlueLeaf Catering

BlueLeaf Catering now provides corporate lunches and training events. For a limited time, customers with orders over $250 will receive free dessert trays. Requests should be made at least two business days in advance to guarantee availability. Visit our online menu to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-065',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is being advertised?',
    choices: ['A job vacancy', 'small offices', 'A training manual', 'A financial report'],
    answer: 1,
    explain: 'โฆษณาระบุบริการหลักคือ small offices',
    context: `Advertisement: RapidFix Computer Service

RapidFix Computer Service now provides small offices. For a limited time, customers with service plans over six months will receive free security check. Requests should be made at least one business day in advance to guarantee availability. Visit our support portal to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-066',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'How can customers receive the special offer?',
    choices: ['By paying in cash only', 'By visiting before noon', 'By joining a staff meeting', 'By having service plans over six months'],
    answer: 3,
    explain: 'เงื่อนไขโปรโมชันคือ service plans over six months',
    context: `Advertisement: RapidFix Computer Service

RapidFix Computer Service now provides small offices. For a limited time, customers with service plans over six months will receive free security check. Requests should be made at least one business day in advance to guarantee availability. Visit our support portal to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-067',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why should requests be made in advance?',
    choices: ['To guarantee availability', 'To receive a parking permit', 'To meet the manager', 'To avoid signing a form'],
    answer: 0,
    explain: 'ข้อความบอกว่าต้องแจ้งล่วงหน้าเพื่อรับประกันความพร้อมของบริการ',
    context: `Advertisement: RapidFix Computer Service

RapidFix Computer Service now provides small offices. For a limited time, customers with service plans over six months will receive free security check. Requests should be made at least one business day in advance to guarantee availability. Visit our support portal to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-068',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What can be done on the website?',
    choices: ['Apply for a passport', 'Reserve a hotel room', 'Submit an order form', 'Download tax records'],
    answer: 2,
    explain: 'ท้ายโฆษณาระบุว่าสามารถส่ง order form ผ่านเว็บไซต์',
    context: `Advertisement: RapidFix Computer Service

RapidFix Computer Service now provides small offices. For a limited time, customers with service plans over six months will receive free security check. Requests should be made at least one business day in advance to guarantee availability. Visit our support portal to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-069',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is being advertised?',
    choices: ['A job vacancy', 'brochures and posters', 'A training manual', 'A financial report'],
    answer: 1,
    explain: 'โฆษณาระบุบริการหลักคือ brochures and posters',
    context: `Advertisement: UrbanPrint Studio

UrbanPrint Studio now provides brochures and posters. For a limited time, customers with orders over 500 copies will receive free design review. Requests should be made at least three business days in advance to guarantee availability. Visit our sample gallery to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-070',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'How can customers receive the special offer?',
    choices: ['By paying in cash only', 'By visiting before noon', 'By joining a staff meeting', 'By having orders over 500 copies'],
    answer: 3,
    explain: 'เงื่อนไขโปรโมชันคือ orders over 500 copies',
    context: `Advertisement: UrbanPrint Studio

UrbanPrint Studio now provides brochures and posters. For a limited time, customers with orders over 500 copies will receive free design review. Requests should be made at least three business days in advance to guarantee availability. Visit our sample gallery to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-071',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why should requests be made in advance?',
    choices: ['To guarantee availability', 'To receive a parking permit', 'To meet the manager', 'To avoid signing a form'],
    answer: 0,
    explain: 'ข้อความบอกว่าต้องแจ้งล่วงหน้าเพื่อรับประกันความพร้อมของบริการ',
    context: `Advertisement: UrbanPrint Studio

UrbanPrint Studio now provides brochures and posters. For a limited time, customers with orders over 500 copies will receive free design review. Requests should be made at least three business days in advance to guarantee availability. Visit our sample gallery to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-072',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What can be done on the website?',
    choices: ['Apply for a passport', 'Reserve a hotel room', 'Submit an order form', 'Download tax records'],
    answer: 2,
    explain: 'ท้ายโฆษณาระบุว่าสามารถส่ง order form ผ่านเว็บไซต์',
    context: `Advertisement: UrbanPrint Studio

UrbanPrint Studio now provides brochures and posters. For a limited time, customers with orders over 500 copies will receive free design review. Requests should be made at least three business days in advance to guarantee availability. Visit our sample gallery to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-073',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is being advertised?',
    choices: ['A job vacancy', 'medical offices and clinics', 'A training manual', 'A financial report'],
    answer: 1,
    explain: 'โฆษณาระบุบริการหลักคือ medical offices and clinics',
    context: `Advertisement: CleanSpace Janitorial

CleanSpace Janitorial now provides medical offices and clinics. For a limited time, customers with new annual contracts will receive free supply assessment. Requests should be made at least five business days in advance to guarantee availability. Visit our service checklist to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-074',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'How can customers receive the special offer?',
    choices: ['By paying in cash only', 'By visiting before noon', 'By joining a staff meeting', 'By having new annual contracts'],
    answer: 3,
    explain: 'เงื่อนไขโปรโมชันคือ new annual contracts',
    context: `Advertisement: CleanSpace Janitorial

CleanSpace Janitorial now provides medical offices and clinics. For a limited time, customers with new annual contracts will receive free supply assessment. Requests should be made at least five business days in advance to guarantee availability. Visit our service checklist to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-075',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why should requests be made in advance?',
    choices: ['To guarantee availability', 'To receive a parking permit', 'To meet the manager', 'To avoid signing a form'],
    answer: 0,
    explain: 'ข้อความบอกว่าต้องแจ้งล่วงหน้าเพื่อรับประกันความพร้อมของบริการ',
    context: `Advertisement: CleanSpace Janitorial

CleanSpace Janitorial now provides medical offices and clinics. For a limited time, customers with new annual contracts will receive free supply assessment. Requests should be made at least five business days in advance to guarantee availability. Visit our service checklist to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-076',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What can be done on the website?',
    choices: ['Apply for a passport', 'Reserve a hotel room', 'Submit an order form', 'Download tax records'],
    answer: 2,
    explain: 'ท้ายโฆษณาระบุว่าสามารถส่ง order form ผ่านเว็บไซต์',
    context: `Advertisement: CleanSpace Janitorial

CleanSpace Janitorial now provides medical offices and clinics. For a limited time, customers with new annual contracts will receive free supply assessment. Requests should be made at least five business days in advance to guarantee availability. Visit our service checklist to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-077',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is being advertised?',
    choices: ['A job vacancy', 'local package delivery', 'A training manual', 'A financial report'],
    answer: 1,
    explain: 'โฆษณาระบุบริการหลักคือ local package delivery',
    context: `Advertisement: Summit Couriers

Summit Couriers now provides local package delivery. For a limited time, customers with monthly accounts will receive free pickup bins. Requests should be made at least 24 hours in advance to guarantee availability. Visit our rate calculator to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-078',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'How can customers receive the special offer?',
    choices: ['By paying in cash only', 'By visiting before noon', 'By joining a staff meeting', 'By having monthly accounts'],
    answer: 3,
    explain: 'เงื่อนไขโปรโมชันคือ monthly accounts',
    context: `Advertisement: Summit Couriers

Summit Couriers now provides local package delivery. For a limited time, customers with monthly accounts will receive free pickup bins. Requests should be made at least 24 hours in advance to guarantee availability. Visit our rate calculator to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-079',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why should requests be made in advance?',
    choices: ['To guarantee availability', 'To receive a parking permit', 'To meet the manager', 'To avoid signing a form'],
    answer: 0,
    explain: 'ข้อความบอกว่าต้องแจ้งล่วงหน้าเพื่อรับประกันความพร้อมของบริการ',
    context: `Advertisement: Summit Couriers

Summit Couriers now provides local package delivery. For a limited time, customers with monthly accounts will receive free pickup bins. Requests should be made at least 24 hours in advance to guarantee availability. Visit our rate calculator to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-080',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What can be done on the website?',
    choices: ['Apply for a passport', 'Reserve a hotel room', 'Submit an order form', 'Download tax records'],
    answer: 2,
    explain: 'ท้ายโฆษณาระบุว่าสามารถส่ง order form ผ่านเว็บไซต์',
    context: `Advertisement: Summit Couriers

Summit Couriers now provides local package delivery. For a limited time, customers with monthly accounts will receive free pickup bins. Requests should be made at least 24 hours in advance to guarantee availability. Visit our rate calculator to compare options, view prices, and submit an order form.`,
    audio: null,
  },
  {
    id: 'P7-081',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is the memo mainly about?',
    choices: ['A change in office furniture', 'A new recycling procedure', 'A request for vacation', 'A restaurant review'],
    answer: 1,
    explain: 'ข้อความสนับสนุนคำตอบว่า A new recycling procedure',
    context: `Memo: Recycling Program

Starting September 1, all departments must separate paper, plastic, and electronic waste. Collection bins will be placed near each elevator. Department assistants should report full bins to Facilities by 4 P.M. each Friday. The program is expected to reduce disposal costs and support the company's environmental goals.`,
    audio: null,
  },
  {
    id: 'P7-082',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Where will collection bins be located?',
    choices: ['It is not mentioned', 'Next year', 'At the front desk', 'Near each elevator'],
    answer: 3,
    explain: 'รายละเอียดในข้อความระบุว่า Near each elevator',
    context: `Memo: Recycling Program

Starting September 1, all departments must separate paper, plastic, and electronic waste. Collection bins will be placed near each elevator. Department assistants should report full bins to Facilities by 4 P.M. each Friday. The program is expected to reduce disposal costs and support the company's environmental goals.`,
    audio: null,
  },
  {
    id: 'P7-083',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Who should report full bins?',
    choices: ['Department assistants', 'A new password', 'A cancelled meeting', 'An unpaid fee'],
    answer: 0,
    explain: 'ข้อมูลตรงกับตัวเลือก Department assistants',
    context: `Memo: Recycling Program

Starting September 1, all departments must separate paper, plastic, and electronic waste. Collection bins will be placed near each elevator. Department assistants should report full bins to Facilities by 4 P.M. each Friday. The program is expected to reduce disposal costs and support the company's environmental goals.`,
    audio: null,
  },
  {
    id: 'P7-084',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why is the program being introduced?',
    choices: ['To replace the manager', 'To cancel a contract', 'To reduce costs and support environmental goals', 'To reduce office hours'],
    answer: 2,
    explain: 'จากข้อความ ตอบได้ว่า To reduce costs and support environmental goals',
    context: `Memo: Recycling Program

Starting September 1, all departments must separate paper, plastic, and electronic waste. Collection bins will be placed near each elevator. Department assistants should report full bins to Facilities by 4 P.M. each Friday. The program is expected to reduce disposal costs and support the company's environmental goals.`,
    audio: null,
  },
  {
    id: 'P7-085',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is the article mainly about?',
    choices: ['A change in office furniture', 'A company\'s expansion', 'A request for vacation', 'A restaurant review'],
    answer: 1,
    explain: 'ข้อความสนับสนุนคำตอบว่า A company\'s expansion',
    context: `Article: Local Manufacturer Expands

Barton Tools announced that it will open a second production line in October. The expansion will create 35 jobs and allow the company to fill custom orders more quickly. According to the plant manager, the company chose to expand after receiving several large contracts from construction firms in the region.`,
    audio: null,
  },
  {
    id: 'P7-086',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'When will the second production line open?',
    choices: ['It is not mentioned', 'Next year', 'At the front desk', 'In October'],
    answer: 3,
    explain: 'รายละเอียดในข้อความระบุว่า In October',
    context: `Article: Local Manufacturer Expands

Barton Tools announced that it will open a second production line in October. The expansion will create 35 jobs and allow the company to fill custom orders more quickly. According to the plant manager, the company chose to expand after receiving several large contracts from construction firms in the region.`,
    audio: null,
  },
  {
    id: 'P7-087',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is one expected result of the expansion?',
    choices: ['Custom orders can be filled more quickly', 'A new password', 'A cancelled meeting', 'An unpaid fee'],
    answer: 0,
    explain: 'ข้อมูลตรงกับตัวเลือก Custom orders can be filled more quickly',
    context: `Article: Local Manufacturer Expands

Barton Tools announced that it will open a second production line in October. The expansion will create 35 jobs and allow the company to fill custom orders more quickly. According to the plant manager, the company chose to expand after receiving several large contracts from construction firms in the region.`,
    audio: null,
  },
  {
    id: 'P7-088',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'Why did the company decide to expand?',
    choices: ['To replace the manager', 'To cancel a contract', 'It received large regional contracts', 'To reduce office hours'],
    answer: 2,
    explain: 'จากข้อความ ตอบได้ว่า It received large regional contracts',
    context: `Article: Local Manufacturer Expands

Barton Tools announced that it will open a second production line in October. The expansion will create 35 jobs and allow the company to fill custom orders more quickly. According to the plant manager, the company chose to expand after receiving several large contracts from construction firms in the region.`,
    audio: null,
  },
  {
    id: 'P7-089',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is the purpose of the letter?',
    choices: ['A change in office furniture', 'To confirm a hotel reservation', 'A request for vacation', 'A restaurant review'],
    answer: 1,
    explain: 'ข้อความสนับสนุนคำตอบว่า To confirm a hotel reservation',
    context: `Letter: Hotel Reservation

Dear Ms. Allen, This letter confirms your reservation at the East Harbor Hotel from May 14 to May 17. A deluxe room with a harbor view has been reserved under your name. Breakfast is included, but airport transportation must be requested separately at least 48 hours before arrival.`,
    audio: null,
  },
  {
    id: 'P7-090',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'How long will Ms. Allen stay?',
    choices: ['It is not mentioned', 'Next year', 'At the front desk', 'Three nights'],
    answer: 3,
    explain: 'รายละเอียดในข้อความระบุว่า Three nights',
    context: `Letter: Hotel Reservation

Dear Ms. Allen, This letter confirms your reservation at the East Harbor Hotel from May 14 to May 17. A deluxe room with a harbor view has been reserved under your name. Breakfast is included, but airport transportation must be requested separately at least 48 hours before arrival.`,
    audio: null,
  },
  {
    id: 'P7-091',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is included with the room?',
    choices: ['Breakfast', 'A new password', 'A cancelled meeting', 'An unpaid fee'],
    answer: 0,
    explain: 'ข้อมูลตรงกับตัวเลือก Breakfast',
    context: `Letter: Hotel Reservation

Dear Ms. Allen, This letter confirms your reservation at the East Harbor Hotel from May 14 to May 17. A deluxe room with a harbor view has been reserved under your name. Breakfast is included, but airport transportation must be requested separately at least 48 hours before arrival.`,
    audio: null,
  },
  {
    id: 'P7-092',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What must be requested separately?',
    choices: ['To replace the manager', 'To cancel a contract', 'Airport transportation', 'To reduce office hours'],
    answer: 2,
    explain: 'จากข้อความ ตอบได้ว่า Airport transportation',
    context: `Letter: Hotel Reservation

Dear Ms. Allen, This letter confirms your reservation at the East Harbor Hotel from May 14 to May 17. A deluxe room with a harbor view has been reserved under your name. Breakfast is included, but airport transportation must be requested separately at least 48 hours before arrival.`,
    audio: null,
  },
  {
    id: 'P7-093',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What begins at 10:00?',
    choices: ['A change in office furniture', 'Safety Demonstration', 'A request for vacation', 'A restaurant review'],
    answer: 1,
    explain: 'ข้อความสนับสนุนคำตอบว่า Safety Demonstration',
    context: `Schedule: Training Day

9:00 Registration; 9:30 Welcome Remarks; 10:00 Safety Demonstration; 11:30 Lunch; 12:30 Equipment Practice; 2:00 Review Quiz; 2:30 Closing Discussion. Participants must sign in before the welcome remarks to receive credit for the day.`,
    audio: null,
  },
  {
    id: 'P7-094',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'When is lunch scheduled?',
    choices: ['It is not mentioned', 'Next year', 'At the front desk', '11:30'],
    answer: 3,
    explain: 'รายละเอียดในข้อความระบุว่า 11:30',
    context: `Schedule: Training Day

9:00 Registration; 9:30 Welcome Remarks; 10:00 Safety Demonstration; 11:30 Lunch; 12:30 Equipment Practice; 2:00 Review Quiz; 2:30 Closing Discussion. Participants must sign in before the welcome remarks to receive credit for the day.`,
    audio: null,
  },
  {
    id: 'P7-095',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What happens after Equipment Practice?',
    choices: ['Review Quiz', 'A new password', 'A cancelled meeting', 'An unpaid fee'],
    answer: 0,
    explain: 'ข้อมูลตรงกับตัวเลือก Review Quiz',
    context: `Schedule: Training Day

9:00 Registration; 9:30 Welcome Remarks; 10:00 Safety Demonstration; 11:30 Lunch; 12:30 Equipment Practice; 2:00 Review Quiz; 2:30 Closing Discussion. Participants must sign in before the welcome remarks to receive credit for the day.`,
    audio: null,
  },
  {
    id: 'P7-096',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What must participants do to receive credit?',
    choices: ['To replace the manager', 'To cancel a contract', 'Sign in before the welcome remarks', 'To reduce office hours'],
    answer: 2,
    explain: 'จากข้อความ ตอบได้ว่า Sign in before the welcome remarks',
    context: `Schedule: Training Day

9:00 Registration; 9:30 Welcome Remarks; 10:00 Safety Demonstration; 11:30 Lunch; 12:30 Equipment Practice; 2:00 Review Quiz; 2:30 Closing Discussion. Participants must sign in before the welcome remarks to receive credit for the day.`,
    audio: null,
  },
  {
    id: 'P7-097',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What was delivered?',
    choices: ['A change in office furniture', 'Premium paper', 'A request for vacation', 'A restaurant review'],
    answer: 1,
    explain: 'ข้อความสนับสนุนคำตอบว่า Premium paper',
    context: `Invoice Note

Invoice #7782 is for 40 boxes of premium paper delivered to Kimura Legal Services on August 2. The total amount due is $680. Payment is requested within 30 days. A 5 percent discount will be applied if payment is received within 10 days of the invoice date.`,
    audio: null,
  },
  {
    id: 'P7-098',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What is the total amount due?',
    choices: ['It is not mentioned', 'Next year', 'At the front desk', '$680'],
    answer: 3,
    explain: 'รายละเอียดในข้อความระบุว่า $680',
    context: `Invoice Note

Invoice #7782 is for 40 boxes of premium paper delivered to Kimura Legal Services on August 2. The total amount due is $680. Payment is requested within 30 days. A 5 percent discount will be applied if payment is received within 10 days of the invoice date.`,
    audio: null,
  },
  {
    id: 'P7-099',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'How soon must payment be made to receive a discount?',
    choices: ['Within 10 days', 'A new password', 'A cancelled meeting', 'An unpaid fee'],
    answer: 0,
    explain: 'ข้อมูลตรงกับตัวเลือก Within 10 days',
    context: `Invoice Note

Invoice #7782 is for 40 boxes of premium paper delivered to Kimura Legal Services on August 2. The total amount due is $680. Payment is requested within 30 days. A 5 percent discount will be applied if payment is received within 10 days of the invoice date.`,
    audio: null,
  },
  {
    id: 'P7-100',
    part: '7',
    partLabel: 'Part 7 — Reading Comprehension',
    type: 'reading',
    topic: 'Reading Comprehension',
    text: 'What can be inferred about the customer?',
    choices: ['To replace the manager', 'To cancel a contract', 'It is a legal services firm', 'To reduce office hours'],
    answer: 2,
    explain: 'จากข้อความ ตอบได้ว่า It is a legal services firm',
    context: `Invoice Note

Invoice #7782 is for 40 boxes of premium paper delivered to Kimura Legal Services on August 2. The total amount due is $680. Payment is requested within 30 days. A 5 percent discount will be applied if payment is received within 10 days of the invoice date.`,
    audio: null,
  },
];

/* ================================================================
   ข้อสอบเก่า — TOEIC Reading Set 1 (2024)
   Source: tiwastudy.site | ข้อ 101–200 (100 ข้อ)
   Part 5: 30 ข้อ | Part 6: 16 ข้อ | Part 7: 54 ข้อ
   Choices: ภาษาอังกฤษล้วน | Explanation: ภาษาไทย (แสดงเฉพาะเฉลย)
================================================================ */
QUESTION_BANK.push({
  id: 'OLD-101',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'The new policy allows employees to set ----- own working hours under certain conditions.',
  choices: ['they', 'their', 'theirs', 'themselves'],
  answer: 1,
  explain: 'คำว่า "their" เป็นคำคุณศัพท์แสดงความเป็นเจ้าของ (possessive adjective) ซึ่งใช้ขยายคำนาม "own working hours" (ชั่วโมงทำงานของตนเอง) เพื่อแสดงว่าชั่วโมงทำงานเป็นของ "employees" (พนักงาน) ซึ่งเป็นพหูพจน์ (A) they (พวกเขา) – เป็นคำสรรพนามประธาน ไม่สามารถใช้ขยายคำนามได้ (C) theirs (ของพวกเขา) – เป็นคำสรรพนามแสดงความเป็นเจ้าของ (possessive pronoun) ใช้ขึ้นต้นประโยค หรือวางท้ายประโยคเพื่อแทนคำนาม ไม่สามารถใช้ขยายคำนามได้ (D) themselves (ตัวของพวกเขาเอง) – เป็นคำสรรพนามสะท้อน (reflexive pronoun) หรือคำส',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-102',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'Based on last year\'s data, Paik Company increased its sales projections ----- the current year.',
  choices: ['when', 'for', 'if', 'or'],
  answer: 1,
  explain: 'คำบุพบท "for" ใช้เพื่อระบุช่วงเวลาหรือวัตถุประสงค์ ในบริบทนี้ "sales projections for the current year" หมายถึงการคาดการณ์ยอดขายที่กำหนดไว้สำหรับปีปัจจุบัน ซึ่งเป็นสำนวนที่ใช้กันโดยทั่วไปและถูกต้อง (A) when (เมื่อ) – เป็นคำเชื่อมที่ใช้ระบุเวลา ไม่ใช่คำบุพบทที่เหมาะสมในการเชื่อม "projections" กับ "the current year" ในความหมายนี้ (C) if (ถ้า) – เป็นคำเชื่อมที่ใช้ในประโยคเงื่อนไข ไม่ใช่คำบุพบทที่ใช้กับวลีนี้ (D) or (หรือ) – เป็นคำเชื่อมที่ใช้แสดงทางเลือก ไม่เหมาะสมกับบริบทนี้',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-103',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'Harbison\'s Department Store interviews applicants ----- standard business hours.',
  choices: ['among', 'beside', 'during', 'onto'],
  answer: 2,
  explain: 'คำบุพบท "during" (ระหว่าง) ใช้เพื่อระบุว่าการกระทำ (การสัมภาษณ์) เกิดขึ้นตลอดช่วงเวลาหนึ่ง (เวลาทำการมาตรฐาน) ซึ่งมีความหมายเหมาะสมที่สุดกับบริบทของประโยค (A) among (ท่ามกลาง) – ใช้กับกลุ่มคนหรือสิ่งของ ไม่ใช่ช่วงเวลา (B) beside (ข้างๆ) – ใช้กับตำแหน่งทางกายภาพ ไม่ใช่ช่วงเวลา (D) onto (บน, ไปสู่) – ใช้กับการเคลื่อนที่ไปยังพื้นผิว ไม่ใช่ช่วงเวลา',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-104',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'Takealong Industries\' commercial propane heaters deliver more warmth to --- -- areas.',
  choices: ['wideness', 'widen', 'wider', 'widely'],
  answer: 2,
  explain: 'โครงสร้างประโยคต้องการคำคุณศัพท์ (adjective) มาขยายคำนาม "areas" (พื้นที่) วลี "more warmth to ----- areas" บ่งบอกถึงการเปรียบเทียบขนาดของพื้นที่ที่เครื่องทำความร้อนสามารถให้ความอบอุ่นได้มากขึ้น ดังนั้นจึงต้องใช้คำคุณศัพท์ขั้นกว่า (comparative adjective) "wider" เป็นคำคุณศัพท์ขั้นกว่าของ "wide" ที่มีความหมายว่า "กว้างขึ้น" ซึ่งเหมาะสมกับบริบทที่ต้องการอธิบายว่าเครื่องทำความร้อนสามารถครอบคลุมพื้นที่ได้ "กว้างขึ้น" เพื่อให้ความอบอุ่น "มากขึ้น" (A) wideness (ความกว้าง) – เป็นคำนาม ไม่สามารถขยายคำนา',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-105',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'By switching to new project-management software, the editorial team has ----- improved its publication processes.',
  choices: ['great', 'greatly', 'greater', 'greatest'],
  answer: 1,
  explain: 'คำว่า "improved" เป็นกริยา (verb) ในโครงสร้าง present perfect tense "has improved" การเติมคำในช่องว่างจะต้องเป็นคำที่ทำหน้าที่ขยายกริยา เพื่อบอกว่าการปรับปรุงนั้นเป็นอย่างไร ซึ่งคำที่ใช้ขยายกริยาคือคำวิเศษณ์ (adverb) คำว่า "greatly" เป็น adverb แปลว่า "อย่างมาก" ซึ่งเหมาะสมที่สุดในการขยายกริยา "improved" (ปรับปรุงอย่างมาก) (A) great (ยิ่งใหญ่/ดีเยี่ยม) – เป็นคำคุณศัพท์ (adjective) ใช้ขยายนาม (เช่น a great improvement) ไม่สามารถขยายกริยา "improved" ได้ (C) greater (ดีกว่า/มากกว่า) – เป็นคำคุณศัพท',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-106',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'The search committee ----- three candidates for the chief executive position.',
  choices: ['nominating', 'nomination', 'has nominated', 'has been nominated'],
  answer: 2,
  explain: 'ประโยคนี้ต้องการกริยาที่สมบูรณ์เพื่อแสดงว่าคณะกรรมการได้ดำเนินการเสนอชื่อผู้สมัครไปแล้ว "The search committee" เป็นประธานของประโยค ซึ่งเป็นคำนามเอกพจน์ (คณะกรรมการถูกมองว่าเป็นหนึ่งหน่วย) (C) "has nominated" เป็นกริยาในรูป Present Perfect Tense แบบ Active Voice ซึ่งแสดงถึงการกระทำที่เสร็จสิ้นแล้วและยังคงมีความเกี่ยวข้องกับปัจจุบัน กริยา "has" สอดคล้องกับประธานเอกพจน์ (A) nominating – เป็น V-ing ไม่สามารถทำหน้าที่เป็นกริยาหลักในประโยคได้โดยไม่มีกริยาช่วยนำหน้า (เช่น is nominating, was nominating)',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-107',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'Fill in the blank: Q.107 ----- a two-month delay, new carpeting was installed in the east conference room.',
  choices: ['Additionally', 'Although', 'After', 'Furthermore'],
  answer: 2,
  explain: 'คำว่า "After" (หลังจาก) เป็นคำบุพบทที่ใช้เพื่อระบุลำดับเวลาว่าสิ่งหนึ่งเกิดขึ้นหลังจากอีกสิ่งหนึ่ง ในประโยคนี้ "After a two-month delay" (หลังจากล่าช้าไปสองเดือน) แสดงให้เห็นว่าการติดตั้งพรมใหม่เกิดขึ้นหลังจากช่วงเวลาของการล่าช้าสองเดือน ซึ่งสร้างลำดับเหตุการณ์ที่สมเหตุสมผล (A) Additionally (นอกจากนี้) – เป็นคำวิเศษณ์ที่ใช้เพิ่มข้อมูล ไม่ได้ใช้ระบุลำดับเวลา (B) Although (แม้ว่า) – เป็นคำสันธานที่ใช้แสดงความขัดแย้ง ต้องตามด้วยอนุประโยค ไม่ใช่กลุ่มคำนาม (D) Furthermore (นอกจากนี้) – เป็นคำวิเศษณ์',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-108',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'To boost -----, the Makeup Artist Academy is offering a free starter kit to new students.',
  choices: ['enroll', 'enrolled', 'enrolling', 'enrollment'],
  answer: 3,
  explain: 'คำว่า "boost" (ส่งเสริม, เพิ่ม) เป็นกริยาที่ต้องการกรรม (direct object) ซึ่งจะต้องเป็นคำนาม คำว่า "enrollment" เป็นคำนามที่หมายถึง "การลงทะเบียน" หรือ "จำนวนผู้ลงทะเบียน" ซึ่งเหมาะสมกับบริบทของประโยคที่ต้องการเพิ่มจำนวนนักเรียนที่เข้ามาลงทะเบียนเรียน (A) enroll (ลงทะเบียน) – เป็นคำกริยา ไม่สามารถเป็นกรรมของ "boost" ในบริบทนี้ได้ (B) enrolled (ลงทะเบียนแล้ว) – เป็นคำกริยาในรูปอดีต หรือกริยาช่อง 3 ไม่สามารถเป็นกรรมของ "boost" ได้ (C) enrolling (กำลังลงทะเบียน/การลงทะเบียน) – เป็นรูป gerund (คำนามท',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-109',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. Because Lectula Furniture Company ------- its delivery times, we were unable to set a firm opening date for the new hotel.',
  choices: ['guarantees', 'advises', 'requires', 'delays'],
  answer: 0,
  explain: 'ประโยค "we were unable to set a firm opening date for the new hotel" (เราไม่สามารถกำหนดวันเปิดที่แน่นอนสำหรับโรงแรมใหม่ได้) บ่งชี้ถึงปัญหาในการวางแผนงานอันเนื่องมาจากเงื่อนไขการส่งมอบของ Lectula Furniture Company การที่บริษัท "guarantees" (รับประกัน) การส่งมอบสินค้า อาจหมายถึงการที่บริษัทมีตารางการส่งมอบที่ตายตัว ไม่ยืดหยุ่น หรือมีระยะเวลาการรับประกันที่นาน (เช่น รับประกันว่าจะส่งมอบใน 6 เดือนข้างหน้า) ทำให้โรงแรมไม่สามารถกำหนดวันเปิดที่แน่นอนที่ต้องการได้ แม้ว่าบริษัทจะทำตามที่รับประกันก็ตาม (B',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-110',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. The computer technician was very ------- but was not able to solve my problem.',
  choices: ['friendly', 'neutral', 'possible', 'frequent'],
  answer: 0,
  explain: 'ประโยคใช้คำเชื่อม "but" ซึ่งแสดงความขัดแย้งกันระหว่างประโยคหน้าและหลัง "very friendly" (เป็นมิตรมาก) เป็นคุณสมบัติเชิงบวกที่ขัดแย้งกับ "was not able to solve my problem" (ไม่สามารถแก้ปัญหาของฉันได้) ซึ่งเป็นผลลัพธ์เชิงลบ (B) neutral (เป็นกลาง) – ไม่ใช่คุณสมบัติที่เหมาะสมที่จะบรรยายช่างเทคนิคที่ให้บริการและไม่เข้ากับความขัดแย้งกับปัญหาที่แก้ไม่ได้ (C) possible (เป็นไปได้) – เป็นคำที่ใช้บรรยายความเป็นไปได้ ไม่ใช่คุณสมบัติส่วนตัวของบุคคล และไม่สามารถใช้ขยาย "very" ในลักษณะนี้ได้ (D) frequent (บ่อย',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-111',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. To make room for conference attendees, ------- visitors to the office building should use the rear parking area tomorrow.',
  choices: ['regular', 'regularly', 'regularize', 'regularity'],
  answer: 0,
  explain: 'ในประโยคช่องว่างอยู่หน้าคำนาม "visitors" (ผู้มาเยี่ยม) ซึ่งต้องการคำคุณศัพท์ (adjective) มาขยายเพื่อบอกลักษณะ (A) "regular" เป็นคำคุณศัพท์ แปลว่า ปกติ หรือ ประจำ สอดคล้องกับโครงสร้างประโยคที่ต้องการขยายคำนาม "visitors" เป็น "ผู้มาเยี่ยมประจำ" หรือ "ผู้มาเยี่ยมตามปกติ" (B) "regularly" เป็นคำวิเศษณ์ (adverb) แปลว่า อย่างสม ่าเสมอ ใช้ขยายคำกริยาหรือคำคุณศัพท์ ไม่สามารถขยายคำนามได้โดยตรงในตำแหน่งนี้ (C) "regularize" เป็นคำกริยา (verb) แปลว่า ทำให้เป็นปกติ หรือ ทำให้สม ่าเสมอ โครงสร้างประโยคไม่ได้ต้อ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-112',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. Employees must wear their security badge in a way that is ------- visible when in the building.',
  choices: ['clearly', 'recently', 'evenly', 'secretly'],
  answer: 0,
  explain: 'ช่องว่างต้องการคำวิเศษณ์ (adverb) มาขยายคำคุณศัพท์ (adjective) "visible" (มองเห็นได้) เพื่ออธิบายลักษณะของการมองเห็น (A) clearly (อย่างชัดเจน) – เหมาะสมที่สุด เพราะบัตรประจำตัวพนักงานควรถูกมองเห็นได้อย่างชัดเจนเพื่อจุดประสงค์ด้านความปลอดภัย (B) recently (เมื่อเร็วๆ นี้) – เป็นคำวิเศษณ์ที่บอกเวลา ไม่เกี่ยวกับการมองเห็น (C) evenly (อย่างสม ่าเสมอ) – อธิบายความสม ่าเสมอหรือเท่าเทียม ไม่เกี่ยวกับการมองเห็นว่าชัดเจนหรือไม่ (D) secretly (อย่างลับๆ) – มีความหมายตรงกันข้ามกับสิ่งที่ควรจะเป็นสำหรับบัตรปร',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-113',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'weather made that impossible.',
  choices: ['therefore', 'following', 'however', 'for example'],
  answer: 2,
  explain: 'ประโยคแรก "Ms. Phon wanted to attend the gallery opening" (คุณ Phon ต้องการไปร่วมพิธีเปิดแกลเลอรี่) แสดงถึงความต้องการหรือความปรารถนา ประโยคหลัง "the inclement weather made that impossible" (สภาพอากาศที่ไม่เอื้ออำนวยทำให้เป็นไปไม่ได้) แสดงถึงข้อจำกัดหรือผลลัพธ์ที่ขัดแย้งกับความต้องการนั้น คำว่า "however" (อย่างไรก็ตาม) เป็นคำเชื่อมที่ใช้แสดงความขัดแย้งหรือตรงกันข้ามระหว่างสองประโยคได้อย่างเหมาะสมที่สุด (A) therefore (ดังนั้น) – ใช้แสดงผลลัพธ์หรือข้อสรุป ไม่เหมาะสมกับความสัมพันธ์แบบขัดแย้งนี้ (B)',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-114',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'Giving leadership tasks to warehouse package handlers often ------- them to work more productively.',
  choices: ['adopts', 'reinforces', 'motivates', 'attracts'],
  answer: 2,
  explain: 'ประโยคกล่าวถึง "Giving leadership tasks" (การมอบหมายงานผู้นำ) ที่ส่งผลให้พนักงาน "work more productively" (ทำงานมีประสิทธิภาพมากขึ้น) คำว่า "motivates" (กระตุ้น, จูงใจ) เหมาะสมที่สุดกับบริบทนี้ เนื่องจากบทบาทความเป็นผู้นำมักจะเป็นแรงจูงใจให้พนักงานแสดงผลงานได้ดีขึ้นและมีความรับผิดชอบมากขึ้น ซึ่งนำไปสู่ประสิทธิภาพการทำงานที่ดีขึ้น (A) adopts (นำมาใช้, รับเลี้ยง) – ไม่สอดคล้องกับความหมายของการทำให้คนทำงานมีประสิทธิภาพมากขึ้น (B) reinforces (เสริมกำลัง, ตอกย ้า) – แม้จะหมายถึงทำให้แข็งแกร่งขึ้น แต่',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-115',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. Kaybing Construction works ------- on large commercial projects in the Newfoundland area.',
  choices: ['exclusively', 'exclusive', 'exclusivity', 'exclusives'],
  answer: 0,
  explain: '- ช่องว่างต้องการคำที่ทำหน้าที่ขยายกริยา "works" (ทำงาน) ซึ่งต้องเป็นคำวิเศษณ์ (adverb) - "Exclusively" (A) เป็นคำวิเศษณ์ (adverb) ลงท้ายด้วย -ly ทำหน้าที่ขยายกริยา "works" ได้อย่างถูกต้อง ทำให้ประโยคมีความหมายว่า Kaybing Construction ทำงานโดยเฉพาะในโครงการเชิงพาณิชย์ขนาดใหญ่ - (B) exclusive (พิเศษ/เฉพาะ) – เป็นคำคุณศัพท์ (adjective) ใช้ขยายคำนาม ไม่สามารถขยายกริยาได้ - (C) exclusivity (การเป็นเอกสิทธิ์) – เป็นคำนาม (noun) ไม่สามารถขยายกริยาได้ - (D) exclusives (สิ่งที่เป็นเอกสิทธิ์) – เป็นคำนาม',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-116',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. Carly Logan plans -------, so Alan Zill has volunteered to be the stamp club\'s next treasurer.',
  choices: ['resigning', 'to resign', 'resigns', 'to have resigned'],
  answer: 1,
  explain: 'กริยา "plan" (วางแผน) โดยทั่วไปจะตามด้วย infinitive (to + verb) เพื่อแสดงถึงการกระทำที่วางแผนไว้ว่าจะเกิดขึ้นในอนาคต โครงสร้าง "plan to do something" (วางแผนที่จะทำบางสิ่ง) เป็นรูปประโยคที่ถูกต้องตามหลักไวยากรณ์ (A) resigning (การลาออก) – กริยา "plan" ไม่นิยมตามด้วย gerund (-ing form) เมื่อพูดถึงการวางแผนทำสิ่งใดสิ่งหนึ่งในอนาคต (C) resigns (ลาออก - รูปกริยาช่อง 1 เติม s) – ไม่ถูกต้องตามหลักไวยากรณ์เมื่อตามหลัง "plans" (D) to have resigned (ได้ลาออกไปแล้ว) – Perfect infinitive (to have + V3) ใช้',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-117',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. Although the housing market slowed ------- the summer months, sales began to pick up again in the autumn. (แม้ว่าตลาดอสังหาริมทรัพย์จะชะลอตัวลง...ในช่วงฤดูร้อน ยอดขายก็เริ่มฟื้นตัวอีกครั้งในฤดูใบไม้ร่วง)',
  choices: ['apart', 'even', 'only', 'over'],
  answer: 3,
  explain: 'คำว่า "over" ในที่นี้ใช้เป็นบุพบท (preposition) เพื่อระบุช่วงเวลา หมายถึง "ตลอดช่วง" หรือ "ในระหว่าง" เมื่อใช้กับ "the summer months" จึงสื่อความหมายว่าตลาดชะลอตัวลงตลอดฤดูร้อน ซึ่งสอดคล้องกับบริบทที่ยอดขายฟื้นตัวในฤดูใบไม้ร่วง (A) apart – ไม่สามารถใช้เป็นบุพบทที่ระบุช่วงเวลาได้ หากเป็น "apart from" จะหมายถึง "ยกเว้น" ซึ่งไม่เข้ากับบริบท (B) even – เป็นคำวิเศษณ์ (adverb) หรือคำสันธาน (conjunction) ใช้สำหรับเน้นหรือแสดงความเท่าเทียม ไม่ใช่บุพบทที่ระบุช่วงเวลา (C) only – เป็นคำวิเศษณ์ (adverb) หมา',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-118',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. To remain fully functional, the exercise machines need to be cleaned -------.',
  choices: ['rather', 'almost', 'routinely', 'openly'],
  answer: 2,
  explain: 'คำว่า "routinely" หมายถึง "เป็นประจำ" หรือ "ตามปกติ" ซึ่งสื่อถึงการกระทำที่สม ่าเสมอ การทำความสะอาดเครื่องออกกำลังกาย "เป็นประจำ" (routinely) มีความจำเป็นเพื่อให้เครื่องจักร "ทำงานได้อย่างสมบูรณ์" (remain fully functional) ซึ่งสอดคล้องกับบริบทของการบำรุงรักษาอุปกรณ์ (A) rather (ค่อนข้าง, แทนที่จะ) – เป็นคำที่ใช้อธิบายระดับหรือทางเลือก ไม่เข้ากับบริบทของการทำความสะอาด (B) almost (เกือบจะ) – เป็นคำที่แสดงถึงความใกล้เคียง ไม่เหมาะสมกับบริบทที่ต้องการการทำความสะอาดที่สมบูรณ์และสม ่าเสมอ (D) openly (',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-119',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'The extended warranty is good for ten years or 100,000 miles, ------- comes first.',
  choices: ['whoever', 'either', 'whichever', 'another'],
  answer: 2,
  explain: '"Whichever" ใช้เมื่อกล่าวถึงการเลือกจากตัวเลือกที่มีจำกัด (ในที่นี้คือ 10 ปี หรือ 100,000 ไมล์) และมักใช้กับสิ่งที่ไม่ใช่บุคคล "whichever comes first" เป็นสำนวนที่ถูกต้องและใช้บ่อย หมายถึง \'สิ่งใดสิ่งหนึ่งที่มาถึง/เกิดขึ้นก่อน\' (A) whoever (ใครก็ตาม) – ใช้กับการเลือกคน ไม่เหมาะสมกับบริบทของปีและไมล์ (B) either (อย่างใดอย่างหนึ่ง) – แม้จะหมายถึงอย่างใดอย่างหนึ่ง แต่โครงสร้าง "either comes first" ไม่ถูกต้องตามหลักไวยากรณ์และสำนวนในประโยคนี้ "whichever" เป็นสรรพนามที่เหมาะสมกว่าในการอ้างถึงเงื่อนไข',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-120',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. Atlantic Grocers must offer online shopping options or ------- losing customers to other supermarkets. (ร้านขายของชำแอตแลนติกต้องเสนอทางเลือกในการซื้อของออนไลน์ มิฉะนั้นจะ----- --เสียลูกค้าให้กับซูเปอร์มาร์เก็ตอื่น ๆ)',
  choices: ['risk', 'protect', 'cancel', 'hold'],
  answer: 0,
  explain: 'โครงสร้างประโยค "or ------- losing customers" ต้องการคำกริยาที่แสดงถึงผลลัพธ์เชิงลบหรืออันตรายหากไม่ทำตามข้อเสนอแนะ "risk" (เสี่ยง) เมื่อใช้กับกริยาเติม -ing (gerund) จะมีความหมายว่า "เสี่ยงต่อการเกิดบางสิ่งบางอย่าง" ทำให้ "risk losing customers" (เสี่ยงต่อการเสียลูกค้า) เข้ากันได้ดีกับบริบทที่ร้านค้าอาจเสียลูกค้าหากไม่ปรับตัว (B) protect (ปกป้อง) – ปกป้องไม่ให้เสียลูกค้า แต่เมื่อตามด้วย "losing customers" จะกลายเป็น "ปกป้องการเสียลูกค้า" ซึ่งผิดความหมายและไวยากรณ์ในบริบทนี้ (ปกป้องไม่ให้สูญเสีย',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-121',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. -------- client is assigned a personal financial adviser to whom inquiries should be addressed.',
  choices: ['Each', 'All', 'Some', 'Most'],
  answer: 0,
  explain: '"Each" ใช้กับคำนามนับได้เอกพจน์ (singular countable noun) เพื่อหมายถึงทุกๆ หนึ่งในกลุ่ม ซึ่งสอดคล้องกับ "client" ที่เป็นเอกพจน์และกริยา "is assigned" ที่เป็นเอกพจน์ ประโยคต้องการจะสื่อว่าลูกค้าทุกราย (แต่ละราย) จะได้รับการมอบหมายที่ปรึกษาเฉพาะบุคคล (B) All (ทั้งหมด) – ใช้กับคำนามพหูพจน์ (เช่น all clients) หรือนามนับไม่ได้ ไม่สอดคล้องกับ "client is assigned" ที่เป็นเอกพจน์ (C) Some (บางส่วน) – ใช้กับคำนามพหูพจน์ (เช่น some clients) หรือนามนับไม่ได้ ไม่สอดคล้องกับ "client is assigned" ที่เป็นเอกพจ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-122',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'Mr. Singh wants to form a -------- to explore some employee reward programs.',
  choices: ['supervisor', 'suggestion', 'notification', 'committee'],
  answer: 3,
  explain: 'การ "explore some employee reward programs" (สำรวจโปรแกรมรางวัลสำหรับพนักงาน) เป็นกิจกรรมที่ต้องมีการรวบรวมความคิดเห็น การวิเคราะห์ และการตัดสินใจ ซึ่งมักจะทำโดยกลุ่มบุคคลที่รวมตัวกันเพื่อวัตถุประสงค์เฉพาะ คำว่า "committee" (คณะกรรมการ) หมายถึงกลุ่มบุคคลที่ได้รับการแต่งตั้งให้ทำงานเฉพาะอย่างหรือดูแลเรื่องใดเรื่องหนึ่ง ซึ่งสอดคล้องกับบริบทที่นายซิงห์ต้องการ "form" (จัดตั้ง) ขึ้นมาเพื่อสำรวจโปรแกรมต่างๆ (A) supervisor (หัวหน้างาน) – เป็นบุคคล ไม่ใช่สิ่งที่สามารถ "จัดตั้ง" เพื่อทำการสำรวจโปรแกรมได้',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-123',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'Please provide your phone number -------- the delivery driver needs to contact you.',
  choices: ['whereas', 'despite', 'if not', 'in case'],
  answer: 3,
  explain: '"in case" (ในกรณีที่/เผื่อว่า) เป็นสำนวนที่ใช้เพื่อระบุว่ามีการกระทำบางอย่างเกิดขึ้นเพื่อเตรียมพร้อมสำหรับความเป็นไปได้ที่จะเกิดเหตุการณ์ในอนาคต ซึ่งสอดคล้องกับประโยคที่ให้เบอร์โทรศัพท์เผื่อในกรณีที่คนขับจำเป็นต้องติดต่อ (A) whereas (ในขณะที่/ในทางตรงกันข้าม) – ใช้เพื่อแสดงการเปรียบเทียบความแตกต่างหรือความขัดแย้ง ไม่เข้ากับบริบทของประโยค (B) despite (ทั้งๆ ที่/แม้ว่า) – ใช้เพื่อแสดงความขัดแย้งหรืออุปสรรค ไม่เข้ากับบริบทของประโยค (C) if not (ถ้าไม่) – ใช้เพื่อแสดงเงื่อนไขในเชิงปฏิเสธ ซึ่งจะทำให้ป',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-124',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '-------- of Pondview Tower are required to make rent payments on or before the first day of every month.',
  choices: ['Owners', 'Buyers', 'Tourists', 'Tenants'],
  answer: 3,
  explain: 'ประโยคระบุว่าต้อง "make rent payments" (ชำระค่าเช่า) ซึ่งเป็นหน้าที่ของผู้ที่เช่าอสังหาริมทรัพย์ สอดคล้องกับคำว่า "Tenants" (ผู้เช่า) ที่หมายถึงผู้ที่เช่าหรืออาศัยอยู่ในทรัพย์สินของผู้อื่นโดยจ่ายค่าเช่า (A) Owners (เจ้าของ) – เจ้าของไม่จ่ายค่าเช่าสำหรับทรัพย์สินของตนเอง (B) Buyers (ผู้ซื้อ) – ผู้ซื้อจ่ายราคาซื้อขาย ไม่ได้จ่ายค่าเช่ารายเดือน (C) Tourists (นักท่องเที่ยว) – นักท่องเที่ยวจ่ายค่าที่พักชั่วคราว ไม่ได้เรียกว่า "rent payments" ในบริบทของสัญญาเช่ารายเดือน',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-125',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. Likoni Hospitality Group, one of Mombasa\'s largest employers, has a -------- impact on the local economy.',
  choices: ['considerably', 'considerable', 'considering', 'consideration'],
  answer: 1,
  explain: 'ช่องว่างอยู่ในโครงสร้าง "a -------- impact" โดยที่ "impact" เป็นคำนาม (noun) หมายถึง "ผลกระทบ" ตามหลักไวยากรณ์แล้ว หน้าคำนามที่นำหน้าด้วย article "a" มักจะเป็นคำคุณศัพท์ (adjective) เพื่อขยายคำนามนั้น "considerable" เป็นคำคุณศัพท์ (adjective) หมายถึง "สำคัญ" หรือ "ใหญ่หลวง" ซึ่งเข้ากับบริบทว่ากลุ่มบริษัทนี้มี "ผลกระทบที่สำคัญ/ใหญ่หลวง" ต่อเศรษฐกิจ (A) considerably (อย่างมาก, อย่างสำคัญ) – เป็นคำวิเศษณ์ (adverb) ใช้ขยายกริยาหรือคำคุณศัพท์ ไม่ใช้ขยายคำนามโดยตรงในตำแหน่งนี้ (C) considering (กำลังพิ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-126',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'Fill in the blank',
  choices: ['Besides best sellers, Booksters offers a wide selection of classics and', 'Somehow', 'Whose', 'Becoming'],
  answer: 0,
  explain: 'คำว่า "best sellers" (หนังสือขายดี) และ "a wide selection of classics and biographies" (หนังสือคลาสสิกและชีวประวัติให้เลือกมากมาย) แสดงถึงประเภทของหนังสือที่ร้าน Booksters มีให้บริการ คำว่า "Besides" (นอกจาก, นอกเหนือจาก) ใช้เพื่อเพิ่มข้อมูลหรือรายการเพิ่มเติมจากสิ่งที่กล่าวถึงไปแล้ว ทำให้ประโยคมีความหมายว่า Booksters มีทั้งหนังสือขายดีและยังมีหนังสือประเภทอื่น ๆ อีกด้วย (B) Somehow (ไม่ทางใดก็ทางหนึ่ง) – ไม่เหมาะสมกับบริบทที่ต้องการเชื่อมโยงรายการสินค้าที่เสนอขาย (C) Whose (ของใคร) – เป็นคำสรรพ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-127',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: 'New food regulations require all Dean\'s Burgers packaging to contain the notice that -------- undercooked meat can be harmful. เนื้อสัตว์ที่ปรุงไม่สุกอาจเป็นอันตรายได้)',
  choices: ['consumer', 'consumption', 'consumes', 'consuming'],
  answer: 3,
  explain: 'ช่องว่างต้องการคำที่ทำหน้าที่เป็นประธานของประโยคย่อย "-------- undercooked meat can be harmful" และสามารถรับคำว่า "undercooked meat" เป็นกรรมได้ (D) consuming เป็น Gerund (คำกริยาเติม -ing ที่ทำหน้าที่เป็นคำนาม) ทำหน้าที่เป็นประธานของประโยคย่อย "consuming undercooked meat can be harmful" และมีความหมายว่า "การบริโภคเนื้อสัตว์ที่ปรุงไม่สุก" ซึ่งสอดคล้องกับโครงสร้างและบริบทของประโยค (A) consumer (ผู้บริโภค) – เป็นคำนาม หมายถึงบุคคล ไม่ได้หมายถึงการกระทำและไม่สามารถรับกรรมได้โดยตรง (B) consumption (',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-128',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. Each Genutria snack bar contains as much protein as two eggs, with none ----- --- the fat and cholesterol.',
  choices: ['of', 'by', 'out', 'minus'],
  answer: 0,
  explain: 'วลี "none of + คำนาม" เป็นสำนวนที่ใช้กันทั่วไปในภาษาอังกฤษ หมายถึง "ไม่มีสิ่งนั้นเลยแม้แต่น้อย" หรือ "ไม่มีส่วนใดส่วนหนึ่งของสิ่งนั้น" ในประโยคนี้ "none of the fat and cholesterol" หมายความว่า ไม่มีส่วนประกอบของไขมันและคอเลสเตอรอลเลย (B) by – ไม่ใช่บุพบทที่ใช้ร่วมกับ "none" ในความหมายว่า \'ปราศจาก\' (C) out – ไม่สามารถใช้ "out" เดี่ยวๆ ได้ ต้องเป็น "out of" ซึ่งมักใช้ในความหมายว่า \'จากทั้งหมด\' แต่ไม่เข้ากับบริบทนี้เท่า "of" (D) minus – หมายถึง \'ลบออก\' หรือ \'หักออก\' ซึ่งไม่ตรงกับความหมายที่ต้องการส',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-129',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. Fisko eyeglass frames come in various --------, including round, square, and oval.',
  choices: ['sights', 'methods', 'shapes', 'materials'],
  answer: 2,
  explain: 'คำว่า round (ทรงกลม), square (ทรงสี่เหลี่ยม), และ oval (ทรงวงรี) เป็นคำที่ใช้อธิบายลักษณะทางกายภาพหรือแบบของสิ่งของ ซึ่งตรงกับความหมายของคำว่า "shapes" (รูปทรง) (A) sights (ทิวทัศน์/สิ่งที่มองเห็น) – ไม่เกี่ยวข้องกับทรงกลม สี่เหลี่ยม วงรี (B) methods (วิธีการ) – ไม่เกี่ยวข้องกับลักษณะทางกายภาพ (D) materials (วัสดุ) – คำว่า round, square, oval ไม่ได้อธิบายถึงวัสดุที่ใช้ทำกรอบแว่นตา',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-130',
  part: '5',
  partLabel: 'Part 5 — Incomplete Sentences',
  type: 'grammar',
  topic: 'Incomplete Sentences',
  set: 'ข้อสอบเก่า',
  text: '. The CEO wants a greater portion of next year\'s budget -------- to research and development.',
  choices: ['allocated', 'imprinted', 'economized', 'rationalized'],
  answer: 0,
  explain: 'คำว่า "allocated" หมายถึง "จัดสรร" หรือ "ปันส่วน" ซึ่งเหมาะสมกับบริบทที่ซีอีโอต้องการจัดสรรงบประมาณส่วนใหญ่ให้กับฝ่ายวิจัยและพัฒนา (B) imprinted (ประทับตรา, พิมพ์) – ไม่เกี่ยวข้องกับการจัดสรรงบประมาณ (C) economized (ประหยัด, ลดค่าใช้จ่าย) – สื่อถึงการลดค่าใช้จ่าย ไม่ใช่การจัดสรรหรือเพิ่มงบประมาณให้ส่วนใดส่วนหนึ่ง (D) rationalized (ทำให้มีเหตุผล, ปรับปรุงให้มีประสิทธิภาพ) – ไม่ใช่การกระทำที่ใช้กับงบประมาณในแง่ของการจัดสรร',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-131',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'Whether you play acoustic guitar ----- electric, taking lessons with an Estella Guitar teacher is the best way to improve your ability. (Fill in the blank)',
  choices: ['is', 'or', 'likely', 'from'],
  answer: 1,
  explain: 'ประโยค "Whether you play acoustic guitar ----- electric" ต้องการคำเชื่อมที่แสดงถึงทางเลือกสองอย่างคือ "acoustic guitar" (กีตาร์โปร่ง) หรือ "electric" (กีตาร์ไฟฟ้า) วลี "whether... or..." (ไม่ว่าจะเป็น... หรือ...) เป็นโครงสร้างที่ถูกต้องตามหลักไวยากรณ์ที่ใช้ในการนำเสนอทางเลือกหรือความเป็นไปได้ต่างๆ (A) is (เป็น) – เป็นคำกริยา ไม่ใช่คำเชื่อมที่ใช้แสดงทางเลือกในบริบทนี้ (C) likely (น่าจะ) – เป็นคำวิเศษณ์ ไม่ได้ทำหน้าที่เชื่อมทางเลือก (D) from (จาก) – เป็นคำบุพบท ไม่ได้ใช้ในการเชื่อมโยคทางเลือกสองสิ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-132',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'With years of experience crafting playing techniques, ----- qualified instructors can tailor lessons to focus on the skills you want to fine-tune. ผู้สอนที่ผ่านการรับรองของเราสามารถปรับแต่งบทเรียนเพื่อเน้นทักษะที่คุณต้องการปรับปรุง)',
  choices: ['our', 'ourselves', 'ours', 'us'],
  answer: 0,
  explain: 'ข้อความต้องการคำขยาย \'qualified instructors\' (ผู้สอนที่ผ่านการรับรอง) เพื่อแสดงความเป็นเจ้าของ (A) \'our\' (ของเรา) เป็นคำคุณศัพท์แสดงความเป็นเจ้าของ (possessive adjective) ใช้ขยายคำนาม \'qualified instructors\' ได้อย่างถูกต้อง เพื่อสื่อถึง \'ผู้สอนของ Estella Guitar Lessons\' (B) \'ourselves\' (ตัวเราเอง) เป็นสรรพนามสะท้อน (reflexive pronoun) ไม่สามารถใช้ขยายคำนามได้ (C) \'ours\' (ของเรา) เป็นสรรพนามแสดงความเป็นเจ้าของ (possessive pronoun) ใช้แทนคำนามที่แสดงความเป็นเจ้าของ ไม่สามารถวางหน้าคำนามเพื่อขยายไ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-133',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'Fill in the blank เฉลย: (C) The best resource for you as a learner is an expert to guide your progress.',
  choices: ['Contact a technician about repairs.', 'A high-quality instrument will help you to perform at your best.', 'The best resource for you as a learner is an expert to guide your', 'It took them several years to master their instruments.'],
  answer: 2,
  explain: 'ประโยคก่อนหน้าช่องว่างกล่าวถึงการ "overcome the challenges that cause many players to get discouraged" (เอาชนะความท้าทายที่ทำให้ผู้เล่นหลายคนท้อแท้) และประโยคหลังช่องว่างระบุว่า "An Estella Guitar teacher will help boost your confidence" (ครูสอนกีตาร์ของ Estella จะช่วยเพิ่มความมั่นใจของคุณ) ตัวเลือก (C) "The best resource for you as a learner is an expert to guide your progress" (แหล่งข้อมูลที่ดีที่สุดสำหรับคุณในฐานะผู้เรียนคือผู้เชี่ยวชาญที่จะแนะนำความก้าวหน้าของคุณ) เป็นการเชื่อมโยงแนวคิดได้อย',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-134',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'Choose the sentence that best fits blank [134] in the passage.',
  choices: ['So far', 'With that in mind', 'On a different note', 'At that point'],
  answer: 1,
  explain: 'ประโยคแรกกล่าวว่า "At Estella Guitar, we believe that playing music is a way of expressing yourself." (ที่ Estella Guitar เราเชื่อว่าการเล่นดนตรีเป็นวิธีการแสดงออกถึงตัวตนของคุณ) ประโยคที่สองกล่าวว่า "we will help you go beyond the familiar chords and riffs to develop your own identity as a musician." (เราจะช่วยให้คุณก้าวข้ามคอร์ดและริฟฟ์ที่คุ้นเคยเพื่อพัฒนาเอกลักษณ์เฉพาะตัวของคุณในฐานะนักดนตรี) "With that in mind" (ด้วยเหตุนี้/โดยคำนึงถึงสิ่งนั้น) เป็นวลีที่เชื่อมโยงแนวคิดแรก (ดนตรีคือการแสดงออ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-135',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'The actual time may vary based on the location of your ------- and your availability for accepting the item.',
  choices: ['garden', 'records', 'residence', 'organization'],
  answer: 2,
  explain: 'ข้อความกล่าวถึง "In-home delivery" (การจัดส่งถึงบ้าน) และ "Upon arrival at your home" (เมื่อถึงบ้านของคุณ) ซึ่งบ่งชี้ถึงการส่งสินค้าไปยังสถานที่อยู่อาศัยส่วนบุคคล คำว่า "residence" (ที่อยู่อาศัย) สอดคล้องกับบริบทของการจัดส่งสินค้าถึงบ้านและสถานที่ที่ผู้รับอาศัยอยู่ (A) garden (สวน) – ไม่ใช่คำที่ครอบคลุมสถานที่ส่งสินค้าทั้งหมดซึ่งคือบ้านหรือที่อยู่อาศัย (B) records (บันทึก) – ไม่เกี่ยวข้องกับสถานที่จัดส่งสินค้าทางกายภาพ (D) organization (องค์กร) – บริบทของข้อความเป็นเรื่องการจัดส่งส่วนบุคคล ไม่ใช',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-136',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'Vernico Furniture will work with a carrier ------- an appointment that is convenient for you.',
  choices: ['to schedule', 'is scheduling', 'as a schedule', 'that scheduled'],
  answer: 0,
  explain: 'ประโยค "Vernico Furniture will work with a carrier ------- an appointment" ต้องการคำกริยาที่แสดงวัตถุประสงค์ของการทำงานร่วมกับบริษัทขนส่ง เพื่อ "นัดหมาย" การนัดหมาย (A) "to schedule" เป็น infinitive of purpose (กริยาแสดงวัตถุประสงค์) ที่เหมาะสมและถูกต้องตามหลักไวยากรณ์ สื่อความหมายว่า Vernico Furniture จะทำงานร่วมกับบริษัทขนส่ง "เพื่อนัดหมาย" การส่งสินค้า (B) "is scheduling" (กำลังนัดหมาย) – เป็นรูป present continuous ไม่เข้ากับโครงสร้างประโยค ทำให้ผิดไวยากรณ์ (C) "as a schedule" (ในฐานะกำหนดการ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-137',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'Typical hours are Monday through Friday between 8 A.M. and 5 P.M., ------- evening appointments can often be arranged. (ชั่วโมงทำการปกติคือวันจันทร์ถึงศุกร์ระหว่าง 8 โมงเช้าถึง 5 โมงเย็น, -------- การนัดหมายตอนเย็นมักจะสามารถจัดได้)',
  choices: ['if so', 'when', 'though', 'in the meantime'],
  answer: 2,
  explain: 'ประโยคแรกระบุว่าชั่วโมงทำการปกติคือ 8 A.M. ถึง 5 P.M. ซึ่งเป็นเวลาทำการทั่วไปในเวลากลางวัน ส่วนประโยคที่สองระบุว่าสามารถนัดหมายในตอนเย็นได้ แสดงให้เห็นถึงการขัดแย้งหรือข้อแม้กับข้อมูลแรก (C) "though" (อย่างไรก็ตาม/ถึงแม้ว่า) ใช้เพื่อแสดงความขัดแย้งหรือการยอมรับในสิ่งที่ตรงกันข้ามกับข้อมูลที่กล่าวไปก่อนหน้า ซึ่งตรงกับบริบทที่ว่าแม้จะมีเวลาทำการปกติ แต่ก็สามารถนัดหมายนอกเวลานั้นได้ (A) "if so" (ถ้าเป็นเช่นนั้น) – เป็นการแสดงเงื่อนไข ไม่ใช่การขัดแย้ง (B) "when" (เมื่อ) – เป็นการระบุเวลา ไม่ได้แสดงค',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-138',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'Upon arrival at your home, the item will be placed in the location you desire. ------- . Assembly is included as well.',
  choices: ['When buying a home, location is extremely important.', 'Refinishing furniture is a form of art.', 'Furnished apartments can be found online.', 'All packing materials will be removed.'],
  answer: 3,
  explain: 'ข้อความนี้กล่าวถึงบริการส่งมอบสินค้าถึงบ้าน (in-home delivery) สำหรับเฟอร์นิเจอร์ ซึ่งรวมถึงการวางสินค้าในตำแหน่งที่ต้องการและการประกอบ (assembly). การนำวัสดุบรรจุภัณฑ์ออก (All packing materials will be removed) เป็นบริการที่สมเหตุสมผลและมักจะรวมอยู่ในการจัดส่งเฟอร์นิเจอร์แบบเต็มรูปแบบ ซึ่งช่วยให้ลูกค้าไม่ต้องจัดการกับขยะที่เกิดจากการแกะกล่อง และเป็นการเติมเต็มบริการ "การส่งมอบสินค้าถึงบ้าน" และ "การประกอบ" อย่างเป็นธรรมชาติ (A) When buying a home, location is extremely important. (เมื่อซื้อบ้าน',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-139',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'Choose the sentence that best fits blank [139] in the passage.',
  choices: ['Thank you for your timely order.', 'We have processed your request.', 'This is a payment reminder.', 'Please contact us to update your information.'],
  answer: 1,
  explain: 'ประโยคถัดจากช่องว่าง 139 คือ "Your subscription to Medical Innovations Quarterly has been canceled." (การสมัครสมาชิก Medical Innovations Quarterly ของคุณถูกยกเลิกแล้ว) ซึ่งเป็นการยืนยันว่าการขอยกเลิกได้ถูกดำเนินการแล้ว ดังนั้น "We have processed your request." (เราได้ดำเนินการตามคำขอของคุณแล้ว) เป็นการเปิดประโยคที่เหมาะสมที่สุด (A) Thank you for your timely order. (ขอบคุณสำหรับการสั่งซื้อที่ตรงเวลา) – ไม่สอดคล้องกับเนื้อหาที่เกี่ยวกับการยกเลิก (C) This is a payment reminder. (นี่คือการแจ้งเตือนก',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-140',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'Fill in the blank',
  choices: ['Starts', 'Started', 'Starter', 'Starting'],
  answer: 3,
  explain: 'ประโยคกล่าวถึงการยกเลิกการสมัครสมาชิกและระบุว่า "คุณจะไม่ได้รับฉบับพิมพ์อีกต่อไป" การใช้ "Starting May 1" (เริ่มตั้งแต่วันที่ 1 พฤษภาคม) เป็นการระบุจุดเริ่มต้นของช่วงเวลาที่ผู้สมัครจะไม่ได้รับฉบับพิมพ์ ซึ่งสอดคล้องกับการยกเลิก (A) Starts (เริ่มต้น) – ไม่เหมาะสมกับบริบทของการยกเลิก เพราะจะหมายถึงการสมัครเริ่มต้นในวันที่ 1 พฤษภาคม (B) Started (เริ่มต้นไปแล้ว) – ไม่เหมาะสมกับบริบทของการยกเลิก เพราะจะหมายถึงการสมัครเริ่มต้นไปแล้วในวันที่ 1 พฤษภาคม (C) Starter (ผู้เริ่มต้น/สิ่งที่ทำให้เริ่มต้น) – เป็',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-141',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: '(A) distributor (B) producer (C) reader (D) teacher',
  choices: ['distributor', 'producer', 'reader', 'teacher'],
  answer: 2,
  explain: 'ประโยค "We hope that you will consider once again becoming a ------- of our publications." (เราหวังว่าคุณจะพิจารณาอีกครั้งในการกลับมาเป็น ------- ของสิ่งตีพิมพ์ของเรา) แสดงให้เห็นว่า Academe Media ต้องการให้คุณ Pham กลับมาเป็นผู้ที่ใช้หรือบริโภคสิ่งตีพิมพ์ของพวกเขา (C) reader (ผู้อ่าน) – สอดคล้องกับบริบทที่ Thao Pham เป็นผู้รับการยกเลิกการสมัครสมาชิก (subscription) และได้รับการเชิญชวนให้กลับมาสมัครสมาชิกอีกครั้ง ซึ่งหมายถึงกลับมาเป็นผู้อ่าน (A) distributor (ผู้จัดจำหน่าย) – คุณ Pham ไม่ได้มีบทบา',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-142',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'Fill in the blank Visit www.academemedia.com/shop and enter the code DOUBLE ______ checkout.',
  choices: ['until', 'upon', 'without', 'next'],
  answer: 1,
  explain: 'ประโยคในภาพคือ "Visit www.academemedia.com/shop and enter the code DOUBLE ______ checkout." ช่องว่าง 142 อยู่ในส่วนของการบอกวิธีการใช้รหัสส่วนลด คำว่า "upon" ในที่นี้หมายถึง "เมื่อ" หรือ "ในขณะที่" ซึ่งทำให้วลี "enter the code DOUBLE upon checkout" แปลว่า "ใส่รหัส DOUBLE เมื่อชำระเงิน" ซึ่งเป็นสำนวนที่ถูกต้องและพบบ่อยในการใช้รหัสโปรโมชันในขั้นตอนการชำระเงินออนไลน์ (A) until (จนกระทั่ง) – ไม่เข้ากับบริบทของการบอกช่วงเวลาที่ต้องใส่รหัสโปรโมชัน (C) without (โดยปราศจาก) – ขัดแย้งกับความหมายที่ต้องกา',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-143',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'Fill in the blank (เติมคำในช่องว่าง) (Q.143)',
  choices: ['ranges', 'ranger', 'ranged', 'ranging'],
  answer: 0,
  explain: 'ประโยคกล่าวถึง "a thermometer that ____ from 0°F (-18°C) to 220°F (104°C)" (เทอร์โมมิเตอร์ที่ ____ ตั้งแต่ 0°F ถึง 220°F) ซึ่งอธิบายถึงคุณสมบัติหรือช่วงการทำงานของเทอร์โมมิเตอร์ (A) ranges เป็นกริยาช่อง 1 ผันตามประธานเอกพจน์ (thermometer) หมายถึง "มีช่วงการวัด" หรือ "ครอบคลุมช่วงอุณหภูมิ" ซึ่งเหมาะสมกับบริบท (B) ranger เป็นคำนาม หมายถึง "เจ้าหน้าที่พิทักษ์ป่า" หรือ "ผู้ดูแล" ไม่เข้ากับโครงสร้างประโยค (C) ranged เป็นกริยาช่อง 2 (อดีตกาล) หรือช่อง 3 (past participle) ใช้ไม่ได้กับบริบทนี้ที่พูดถึง',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-144',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'Fill in the blank',
  choices: ['size', 'safety', 'reliability', 'placement'],
  answer: 3,
  explain: 'ประโยค "Also important to consider is _______ 144. Thermometers should always be located in the warmest spot in the refrigerator." (สิ่งสำคัญที่ต้องพิจารณาคือ _______ 144. เทอร์โมมิเตอร์ควรอยู่ในจุดที่อุ่นที่สุดในตู้เย็นเสมอ) ข้อความที่ตามมาว่า "Thermometers should always be located in the warmest spot in the refrigerator." (เทอร์โมมิเตอร์ควรอยู่ในจุดที่อุ่นที่สุดในตู้เย็นเสมอ) อธิบายถึงตำแหน่งหรือการจัดวางเทอร์โมมิเตอร์โดยตรง (A) size (ขนาด) – ไม่เกี่ยวข้องกับตำแหน่งที่ควรวางเทอร์โมมิเตอร์ (B)',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-145',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'Fill in the blank',
  choices: ['Remove them carefully.', 'This is typically inside the door.', 'It should be kept cool at all times.', 'They can also be purchased in bulk.'],
  answer: 1,
  explain: 'ประโยคก่อนหน้าช่องว่าง 145 คือ "Thermometers should always be located in the warmest spot in the refrigerator." (เครื่องวัดอุณหภูมิควรอยู่ในจุดที่อุ่นที่สุดในตู้เย็นเสมอ) ตัวเลือก (B) "This is typically inside the door." (โดยทั่วไปจะอยู่ด้านในประตู) เป็นการระบุตำแหน่งที่คาดว่าจะเป็น "warmest spot" ในตู้เย็น ซึ่งสอดคล้องกับเนื้อหาที่อธิบายถึงตำแหน่งของเทอร์โมมิเตอร์ (A) Remove them carefully. (นำออกอย่างระมัดระวัง) – ไม่เกี่ยวข้องกับการระบุตำแหน่ง (C) It should be kept cool at all times. (ควรทำให',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-146',
  part: '6',
  partLabel: 'Part 6 — Text Completion',
  type: 'grammar',
  topic: 'Text Completion',
  set: 'ข้อสอบเก่า',
  text: 'Fill in the blank',
  choices: ['sold', 'seen', 'repaired', 'removed'],
  answer: 1,
  explain: '- อ้างอิงจากประโยคที่ว่า "This location is also appropriate because it allows the thermometer to be easily ______ as soon as the door is opened." (ตำแหน่งนี้เหมาะสมเพราะช่วยให้สามารถ...เทอร์โมมิเตอร์ได้อย่างง่ายดายทันทีที่เปิดประตู) และข้อความก่อนหน้าว่า "The head chef is responsible for checking these thermometers throughout the day" (หัวหน้าเชฟมีหน้าที่ตรวจสอบเทอร์โมมิเตอร์เหล่านี้ตลอดทั้งวัน) - การตรวจสอบ (checking) เทอร์โมมิเตอร์ในตู้เย็นหมายถึงการอ่านค่าอุณหภูมิ ซึ่งต้องสามารถมองเห็น (seen',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-147',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is the purpose of the e-mail?',
  choices: ['To welcome a new user to Rapido Net', 'To remind a user about a forgotten password', 'To confirm that a change was made to a user\'s account', 'To inform a user about new company policies'],
  answer: 2,
  explain: 'เนื้อหาอีเมลระบุชัดเจนว่า "Your secret-question option for password recovery was updated at 3:16 P.M. today." (ตัวเลือกคำถามลับสำหรับการกู้คืนรหัสผ่านของคุณได้รับการอัปเดตเมื่อเวลา 15:16 น. วันนี้) ซึ่งเป็นการยืนยันถึงการเปลี่ยนแปลงที่เกิดขึ้นกับบัญชีผู้ใช้ (A) To welcome a new user to Rapido Net (เพื่อต้อนรับผู้ใช้ใหม่เข้าสู่ Rapido Net) – เนื้อหาเกี่ยวกับการอัปเดตบัญชีเดิม ไม่ใช่การต้อนรับผู้ใช้ใหม่ (B) To remind a user about a forgotten password (เพื่อเตือนผู้ใช้เกี่ยวกับรหัสผ่านที่ลืม) – อีเ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-148',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is indicated about Rapido Net?',
  choices: ['It provides faster Internet speeds than its competitors.', 'It offers extra security through two-step verification.', 'It automatically generates complex passwords for customers.', 'It has increased its monthly user fee.'],
  answer: 1,
  explain: 'ในเนื้อหาอีเมลระบุว่า "Make the process even more secure by setting up two-step verification." (ทำให้กระบวนการปลอดภัยยิ่งขึ้นด้วยการตั้งค่าการยืนยันตัวตนสองขั้นตอน) ซึ่งบ่งชี้ว่า Rapido Net มีบริการนี้ (A) It provides faster Internet speeds than its competitors. (ให้บริการอินเทอร์เน็ตที่เร็วกว่าคู่แข่ง) – ไม่มีข้อมูลใดในอีเมลที่กล่าวถึงความเร็วอินเทอร์เน็ตหรือการเปรียบเทียบกับคู่แข่ง (C) It automatically generates complex passwords for customers. (สร้างรหัสผ่านที่ซับซ้อนให้ลูกค้าโดยอัตโนมัติ) –',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-149',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What kind of service has Ms. Duberville most likely contracted? (Ms. Duberville น่าจะทำสัญญาบริการประเภทใด)',
  choices: ['Window installation', 'House cleanup', 'Wall-to-wall carpeting', 'Internet access'],
  answer: 3,
  explain: 'อีเมลระบุว่า Global Tech จะ "install a Global Tech modem at your home" (ติดตั้งโมเด็ม Global Tech ที่บ้านของคุณ) และหลังจากติดตั้งแล้ว "you will be able to enjoy our service" (คุณจะสามารถเพลิดเพลินกับบริการของเราได้) โมเด็มเป็นอุปกรณ์หลักที่ใช้ในการเชื่อมต่ออินเทอร์เน็ต ดังนั้นบริการที่ทำสัญญาไว้น่าจะเป็นบริการอินเทอร์เน็ต (A) Window installation (การติดตั้งหน้าต่าง) – ไม่มีข้อมูลใด ๆ ในอีเมลที่กล่าวถึงการติดตั้งหน้าต่าง (B) House cleanup (การทำความสะอาดบ้าน) – ไม่มีข้อมูลใด ๆ ในอีเมลที่กล่าวถึง',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-150',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What will happen at the time selected by Ms. Duberville?',
  choices: ['She will pick up some equipment at an office.', 'She will receive a new Global Tech mobile phone', 'She will be visited by a Global Tech representative', 'She will be e-mailed a customer satisfaction survey.'],
  answer: 2,
  explain: 'อีเมลระบุว่าลูกค้าต้อง "set up an appointment for one of our representatives to install a Global Tech modem at your home" (นัดหมายเพื่อให้ตัวแทนของเรามาติดตั้งโมเด็ม Global Tech ที่บ้านของคุณ) และ "In preparation for our visit" (ในการเตรียมการสำหรับการมาเยือนของเรา) ซึ่งหมายความว่าตัวแทนของ Global Tech จะมาเยี่ยมและติดตั้งโมเด็มในเวลาที่เลือกว่างไว้ (A) She will pick up some equipment at an office. (เธอจะไปรับอุปกรณ์บางอย่างที่สำนักงาน) – ไม่ถูกต้อง เพราะอีเมลระบุว่าตัวแทนจะมาติดตั้ง "at your ho',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-151',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'At 1:49 P.M., what does Ms. Finton most likely mean when she writes, "I tried that"?',
  choices: ['She signed a rental agreement.', 'She submitted proof of income.', 'She contacted Ms. Seltzer.', 'She filled out a form.'],
  answer: 2,
  explain: 'ที่เวลา 1:48 P.M. Steven Khen แนะนำว่า "Double-check with Ariana Seltzer first. The human resources department usually has a form they can provide for you." (ลองตรวจสอบกับ Ariana Seltzer ก่อน แผนกทรัพยากรบุคคลมักจะมีแบบฟอร์มให้คุณได้) เมื่อ Katrina Finton ตอบว่า "I tried that." (ฉันลองทำแบบนั้นแล้ว) มันอ้างอิงถึงสิ่งที่ Steven เพิ่งแนะนำ ซึ่งคือการติดต่อ Ariana Seltzer หลังจากนั้น Katrina ยังเสริมว่า "They don\'t have a set form." (พวกเขาไม่มีแบบฟอร์มสำเร็จรูป) ซึ่งเป็นการยืนยันผลลัพธ์จากการติดต',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-152',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What most likely is Ms. Finton\'s position?',
  choices: ['Apartment manager', 'Office administrator', 'Human resources director', 'Web designer'],
  answer: 3,
  explain: 'Steven Khen (1:51 P.M.) ถาม Ms. Finton ว่า "You already have all your designs for their Web site ready, right?" (คุณเตรียมงานออกแบบทั้งหมดสำหรับเว็บไซต์ของพวกเขาพร้อมแล้วใช่ไหม) และ Katrina Finton (1:52 P.M.) ตอบว่า "I\'m all set." (ฉันพร้อมแล้ว) บทสนทนานี้แสดงให้เห็นว่า Ms. Finton มีหน้าที่รับผิดชอบในการออกแบบเว็บไซต์ (A) Apartment manager (ผู้จัดการอพาร์ตเมนต์) – ไม่มีการกล่าวถึงหน้าที่ที่เกี่ยวข้องกับการจัดการอพาร์ตเมนต์ (B) Office administrator (ผู้ดูแลสำนักงาน) – เป็นตำแหน่งที่กว้างเกินไปและ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-153',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is the purpose of the Web page?',
  choices: ['To promote career-assistance services', 'To announce a local job fair for recent graduates', 'To advertise open positions at social media companies', 'To describe rewarding careers in Web design and creation'],
  answer: 0,
  explain: 'หัวข้อของหน้าเว็บคือ "Marilis Professional Coaching: January Events" ซึ่งบ่งชี้ถึงบริการด้านอาชีพ การจัดกิจกรรมต่าง ๆ เช่น "Job Search Support" (การสนับสนุนการหางาน), "How to Market Yourself" (วิธีทำการตลาดให้ตัวเอง) และ "Interview Strategies" (กลยุทธ์การสัมภาษณ์) ล้วนเป็นบริการที่ช่วยพัฒนาและส่งเสริมอาชีพของผู้เข้าร่วม (B) To announce a local job fair for recent graduates (เพื่อประกาศงานนิทรรศการหางานในท้องถิ่นสำหรับผู้สำเร็จการศึกษาใหม่) – หน้าเว็บไม่ได้ประกาศงานนิทรรศการหางาน แต่เป็นการจัดเซส',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-154',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'According to the Web page, what will happen on January 17 ? (ตามหน้าเว็บเพจนี้ วันที่ 17 มกราคมจะเกิดอะไรขึ้น)',
  choices: ['Companies will post job opportunities.', 'Employers will make hiring decisions.', 'Job candidates will attend a group interview.', 'Participants will practice responding to interviewers.'],
  answer: 3,
  explain: 'รายละเอียดของกิจกรรมวันที่ 17 มกราคม (January 17 at 4:30 P.M.—Interview Strategies) ระบุว่า "This session will be interactive, featuring mock interviews with attendees." (การประชุมนี้จะเป็นแบบโต้ตอบ โดยมีการสัมภาษณ์จำลองกับผู้เข้าร่วม) "Mock interviews" (การสัมภาษณ์จำลอง) คือการฝึกซ้อมการสัมภาษณ์ ซึ่งตรงกับการฝึกตอบคำถามของผู้สัมภาษณ์ (A) Companies will post job opportunities. (บริษัทจะประกาศตำแหน่งงานว่าง) – ข้อมูลนี้เกี่ยวข้องกับวันที่ 15 มกราคม ("Job Search Support" และ "job announcements") ไ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-155',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is indicated about the events?',
  choices: ['They occur each month.', 'They take place online.', 'They are for senior professionals.', 'They are free of charge.'],
  answer: 1,
  explain: 'ข้อมูลจากภาพระบุชัดเจนในประโยคสุดท้ายว่า "Note that all January events are virtual." (โปรดทราบว่ากิจกรรมเดือนมกราคมทั้งหมดเป็นแบบเสมือนจริง/ออนไลน์) (A) They occur each month. (เกิดขึ้นทุกเดือน) – ข้อมูลระบุเพียง "January Events" (กิจกรรมเดือนมกราคม) ไม่ได้ระบุว่ามีขึ้นทุกเดือน (C) They are for senior professionals. (สำหรับผู้เชี่ยวชาญระดับสูง) – กิจกรรม "Job Search Support" (การสนับสนุนการหางาน) มีการกล่าวถึง "entry-level job" (งานระดับเริ่มต้น) ซึ่งไม่จำกัดแค่ผู้เชี่ยวชาญระดับสูง (D) They are',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-156',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is indicated about the activity complex?',
  choices: ['It has a variety of desirable features.', 'It is currently under construction.', 'It has low membership fees.', 'It is located in the central square.'],
  answer: 0,
  explain: 'บทความระบุว่าศูนย์กิจกรรม "includes a gym, theater, and swimming pool" (มีทั้งยิม, โรงละคร, และสระว่ายน ้า) ซึ่งแสดงถึงคุณสมบัติที่หลากหลาย นอกจากนี้ ยังมีการกล่าวถึงประโยชน์ว่า "This means you never have to leave the community unless you want to" (หมายความว่าคุณไม่จำเป็นต้องออกจากชุมชนเลย เว้นแต่คุณต้องการ) ซึ่งบ่งชี้ว่าคุณสมบัติเหล่านี้เป็นที่น่าปรารถนาและตอบโจทย์ความต้องการของผู้อยู่อาศัย (B) It is currently under construction. (กำลังอยู่ระหว่างการก่อสร้าง) – บทความกล่าวว่าเป็น "recently comp',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-157',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'How can a prospective resident learn more about Homestead at Eston?',
  choices: ['By viewing a model home online', 'By requesting a brochure', 'By visiting the community', 'By calling a current homeowner'],
  answer: 2,
  explain: 'ข้อมูลในบทความระบุว่า "Model homes are currently available for tours." (บ้านตัวอย่างเปิดให้เข้าชมแล้ว) และ "Open houses take place 12:30-4:00 P.M. Saturdays and Sundays." (บ้านเปิดให้เข้าชมระหว่างเวลา 12:30-16:00 น. ในวันเสาร์และอาทิตย์) นอกจากนี้ ผู้อำนวยการฝ่ายขาย Marjorie Solomon ยังกล่าวว่า "Once you visit, you’ll realize why so many people are purchasing homes here." (เมื่อคุณได้มาเยี่ยมชม คุณจะเข้าใจว่าทำไมคนจำนวนมากถึงซื้อบ้านที่นี่) ซึ่งทั้งหมดนี้บ่งชี้ถึงการเรียนรู้เพิ่มเติมได้จากการมาเ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-158',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "Homestead, however, is more than just a pretty place." more than just a pretty place.")',
  choices: ['[1]', '[2]', '[3]', '[4]'],
  answer: 2,
  explain: 'ประโยค "Homestead, however, is more than just a pretty place." มีคำว่า "however" ซึ่งบ่งชี้ถึงความขัดแย้งหรือการเปลี่ยนประเด็นจากสิ่งที่กล่าวมาก่อนหน้า โดยเน้นว่า "Homestead" มีคุณสมบัติอื่น ๆ ที่นอกเหนือไปจากความสวยงาม ตำแหน่ง [3] อยู่หลังประโยคที่กล่าวว่า "the Homestead planners deserve praise for creating a very attractive place to live." (ผู้วางแผนโครงการ Homestead สมควรได้รับคำชมเชยที่สร้างสถานที่น่าอยู่และสวยงามมาก) ซึ่งประโยคนี้สอดคล้องกับแนวคิดของ "pretty place" หลังจากประโยคที่ต้องการแ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-159',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is one purpose of the e-mail?',
  choices: ['To introduce a new owner', 'To acknowledge receipt of an estimate', 'To invite team members to a presentation', 'To ask for additional work references'],
  answer: 1,
  explain: 'อีเมลเริ่มต้นด้วยประโยค "Thank you for sending your estimate for the cement work..." (ขอบคุณที่ส่งใบเสนอราคาสำหรับงานซีเมนต์...) ซึ่งเป็นการยืนยันว่าได้รับใบเสนอราคาแล้ว (A) To introduce a new owner (เพื่อแนะนำเจ้าของคนใหม่) – ไม่มีข้อมูลใดกล่าวถึงเจ้าของคนใหม่ (C) To invite team members to a presentation (เพื่อเชิญสมาชิกในทีมเข้าร่วมการนำเสนอ) – อีเมลนี้ส่งถึง Rita Palore ซึ่งเป็นบุคคลภายนอก ไม่ใช่การเชิญสมาชิกในทีม และไม่มีการกล่าวถึงการนำเสนอ (D) To ask for additional work references (เพื่อขอ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-160',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'When will Mr. Fonsman meet with Ms. Cho?',
  choices: ['On March 2', 'On March 3', 'On March 4', 'On March 5'],
  answer: 1,
  explain: 'อีเมลลงวันที่ "March 2" (วันที่ 2 มีนาคม) และระบุว่า "I will be speaking with Ms. Cho about this tomorrow morning." (ฉันจะคุยกับคุณโชเรื่องนี้ในเช้าวันพรุ่งนี้) ซึ่งหมายถึงวันที่ 3 มีนาคม (A) On March 2 (วันที่ 2 มีนาคม) – เป็นวันที่ส่งอีเมล ไม่ใช่วันที่ประชุม (C) On March 4 (วันที่ 4 มีนาคม) – เป็นวันที่คุณฟอนส์แมนคาดว่าจะติดต่อกลับ (get back) ไม่ใช่วันที่ประชุม (D) On March 5 (วันที่ 5 มีนาคม) – ไม่มีข้อมูลกล่าวถึงในอีเมล',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-161',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What information is included in the announcement?',
  choices: ['Rates of pay', 'Work site locations', 'The application deadline', 'The training workshop\'s start time'],
  answer: 0,
  explain: 'ประกาศระบุอัตราค่าตอบแทนสำหรับตำแหน่งต่างๆ โดยตรง ได้แก่ Election Assistant, $18/hour (ผู้ช่วยการเลือกตั้ง, 18 ดอลลาร์/ชั่วโมง), Election Clerk, $20/hour (เสมียนการเลือกตั้ง, 20 ดอลลาร์/ชั่วโมง) และ Election Chief, $22/hour (หัวหน้าการเลือกตั้ง, 22 ดอลลาร์/ชั่วโมง) (B) Work site locations (สถานที่ทำงาน) – ไม่มีข้อมูลระบุสถานที่ทำงานเฉพาะเจาะจง (C) The application deadline (กำหนดเวลาการสมัคร) – ไม่มีข้อมูลกำหนดเส้นตายในการสมัคร (D) The training workshop\'s start time (เวลาเริ่มต้นของเวิร์คช็อปการฝ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-162',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What does the announcement suggest is a requirement for being hired?',
  choices: ['Interest in politics', 'A high school diploma', 'A voter registration card', 'Good communication skills'],
  answer: 3,
  explain: 'ข้อกำหนด (Requirements) ระบุว่า "Is comfortable interacting with the public" (สะดวกใจในการปฏิสัมพันธ์กับสาธารณะ) ซึ่งหมายถึงการมีทักษะในการสื่อสารที่ดี (A) Interest in politics (ความสนใจในการเมือง) – ไม่ถูกต้อง เพราะระบุว่า "Is not a politician and does not live with or work for a politician" (ไม่ใช่หรือทำงานให้กับนักการเมือง) (B) A high school diploma (ประกาศนียบัตรมัธยมปลาย) – ไม่มีการกล่าวถึงคุณวุฒิทางการศึกษาในข้อกำหนด (C) A voter registration card (บัตรลงทะเบียนผู้มีสิทธิ์เลือกตั้ง) – ไม่มี',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-163',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is mentioned about the training workshop?',
  choices: ['It is offered three times a year.', 'It is led by an experienced election official.', 'It is required for all election workers.', 'It is available both online and in person.'],
  answer: 2,
  explain: 'ข้อความระบุว่า "Workers must attend a four-hour pre-election training workshop" (พนักงานทุกคนต้องเข้าร่วมการอบรมเวิร์คช็อปก่อนการเลือกตั้งเป็นเวลาสี่ชั่วโมง) ซึ่งคำว่า "must attend" (ต้องเข้าร่วม) บ่งชี้ว่าเป็นข้อบังคับสำหรับทุกคน (A) It is offered three times a year. (มีการจัดขึ้นสามครั้งต่อปี) – ข้อความระบุวันที่อบรมคือ March 4 ไม่ได้ระบุว่าจัดสามครั้งต่อปี (B) It is led by an experienced election official. (นำโดยเจ้าหน้าที่การเลือกตั้งที่มีประสบการณ์) – ไม่มีข้อมูลในภาพที่กล่าวถึงผู้ที่นำการอ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-164',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is the purpose of the e-mail?',
  choices: ['To welcome a new customer', 'To report an account error', 'To confirm approval of a loan', 'To promote a new service'],
  answer: 3,
  explain: 'อีเมลระบุชัดเจนว่า "You are now able to enroll in Front Street Bank’s new Voice Identification System (VIS)." (คุณสามารถลงทะเบียนในระบบยืนยันตัวตนด้วยเสียง (VIS) ใหม่ของ Front Street Bank ได้แล้ว) และบรรยายถึงประโยชน์และวิธีการใช้งานของระบบ VIS เพื่อชักชวนให้ลูกค้าสมัครใช้บริการ ซึ่งเป็นการโปรโมตบริการใหม่ของธนาคาร (A) To welcome a new customer (เพื่อต้อนรับลูกค้าใหม่) – ข้อความระบุว่า "Thank you for being a valued Front Street Bank customer." (ขอบคุณที่เป็นลูกค้าคนสำคัญของ Front Street Bank) ซึ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-165',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is indicated about VIS?',
  choices: ['It provides voice access to accounts.', 'It can be used at various financial institutions.', 'It requires customers to pay a fee.', 'It is available only during designated hours.'],
  answer: 0,
  explain: 'ข้อความในอีเมลระบุว่า "Front Street Bank\'s new Voice Identification System (VIS)" (ระบบระบุตัวตนด้วยเสียงใหม่ของ Front Street Bank) และ "VIS is a fast, convenient, and secure way to access and control your bank accounts by phone." (VIS เป็นวิธีที่รวดเร็ว สะดวก และปลอดภัยในการเข้าถึงและควบคุมบัญชีธนาคารของคุณผ่านโทรศัพท์) นอกจากนี้ยังให้ตัวอย่างการใช้งานโดย "saying \'loan payment\'," "saying \'recent transactions\'," และ "saying \'transfer\'." ซึ่งทั้งหมดนี้เป็นการใช้เสียงเพื่อเข้าถึงและจัดการบัญชี (B)',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-166',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What should a customer do to cancel VIS?',
  choices: ['Visit a local bank branch', 'Make a telephone call', 'Complete an online form', 'Send an e-mail to customer service'],
  answer: 1,
  explain: 'ในย่อหน้าสุดท้ายของอีเมลระบุว่า "If in the future you no longer wish to use VIS to access your account, simply **call** to have one of our customer-service representatives delete your identification file." (หากในอนาคตคุณไม่ประสงค์จะใช้ VIS เพื่อเข้าถึงบัญชีของคุณ เพียงแค่โทรศัพท์เพื่อให้ตัวแทนฝ่ายบริการลูกค้าของเราลบไฟล์ระบุตัวตนของคุณ) ข้อมูลนี้ระบุชัดเจนว่าต้อง "call" (โทรศัพท์) เพื่อยกเลิก (A) Visit a local bank branch (ไปที่สาขาธนาคารในพื้นที่) – อีเมลระบุให้โทรศัพท์ ไม่ใช่ให้ไปที่สาขา (C)',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-167',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "You can perform numerous specific tasks." (ในตำแหน่งใดในตำแหน่งที่ทำเครื่องหมาย [1], [2], [3] และ [4] ที่ประโยคต่อไปนี้เหมาะสมที่สุด? "คุณสามารถทำภารกิจเฉพาะเจาะจงได้มากมาย")',
  choices: ['[1]', '[2]', '[3]', '[4]'],
  answer: 0,
  explain: 'ประโยค "You can perform numerous specific tasks." (คุณสามารถทำภารกิจเฉพาะเจาะจงได้มากมาย) เป็นประโยคสรุปความสามารถทั่วไปที่นำไปสู่การยกตัวอย่างเฉพาะเจาะจง ตำแหน่ง [1] อยู่ก่อนหน้าประโยคที่ยกตัวอย่างเช่น "For example, you can make a payment on a Front Street Bank loan by saying “loan payment.” You can check your credit-card transactions by saying “recent transactions.” You can even transfer money between accounts by saying “transfer.”" ซึ่งเป็นการระบุ "ภารกิจเฉพาะเจาะจง" ต่างๆ ที่สามารถทำได้ การว',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-168',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is the company offering to customers?',
  choices: ['A coupon for a specific author\'s books', 'A discount for ordering two books online', 'A reduced price for shipping', 'A free copy of the publisher\'s catalog'],
  answer: 1,
  explain: 'ข้อความระบุว่า "Buy one, get one 50 percent off when you purchase from our Web site" (ซื้อหนึ่งเล่ม ได้อีกหนึ่งเล่มลด 50 เปอร์เซ็นต์ เมื่อซื้อจากเว็บไซต์ของเรา) ซึ่งหมายถึงการให้ส่วนลดเมื่อซื้อหนังสือสองเล่มทางออนไลน์ (A) A coupon for a specific author\'s books (คูปองสำหรับหนังสือของนักเขียนเฉพาะราย) – ข้อเสนอเป็นสำหรับ "new titles in the Enterprise series" (หนังสือใหม่ในชุด Enterprise) โดยทั่วไป ไม่ได้จำกัดสำหรับนักเขียนคนใดคนหนึ่งและไม่ได้ระบุว่าเป็นคูปอง (C) A reduced price for shipping (ราคาล',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-169',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'Who is Mr. Yamada?',
  choices: ['A government agent', 'A career counselor', 'A biography writer', 'A company leader'],
  answer: 3,
  explain: 'จากข้อมูลของหนังสือ "Maestro by Christine Menon" ระบุว่า "A biography of famous executive Haruto Yamada" (ชีวประวัติของผู้บริหารชื่อดัง ฮารุโตะ ยามาดะ) และกล่าวถึง "how his career influenced business governance" (ว่าอาชีพของเขามีอิทธิพลต่อการกำกับดูแลกิจการธุรกิจอย่างไร) คำว่า "executive" หมายถึงผู้บริหารระดับสูง ซึ่งสอดคล้องกับตำแหน่งผู้นำในบริษัท (A) A government agent (เจ้าหน้าที่รัฐบาล) – ไม่มีข้อมูลที่ระบุว่าเป็นเจ้าหน้าที่รัฐบาล (B) A career counselor (ที่ปรึกษาด้านอาชีพ) – อาชีพของเขาเป็น',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-170',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What feature is shared by all of the books described in the advertisement?',
  choices: ['They were written by the same author.', 'They can be read in digital formats.', 'They focus on business topics.', 'They were translated into several languages.'],
  answer: 2,
  explain: '- หนังสือแต่ละเล่มมีเนื้อหาที่เกี่ยวข้องกับธุรกิจ: - Maestro: เกี่ยวกับ "business governance" (ธรรมาภิบาลทางธุรกิจ) และผู้บริหาร ("executive") - Working Under Moonbeams: เกี่ยวกับ "Commerce" (การค้า) และ "trade company" (บริษัทการค้า) - The Connections Unseen: เกี่ยวกับ "professor of business administration" (ศาสตราจารย์ด้านบริหารธุรกิจ) - Flashback: เกี่ยวกับ "trade commissioner" (กรรมาธิการการค้า) และอาชีพทางการทูต ซึ่งมักเกี่ยวข้องกับการค้า - (A) They were written by the same author. (หนังสือ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-171',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What book includes historic images?',
  choices: ['Maestro', 'Working Under Moonbeams', 'The Connections Unseen (The Connections Unseen)', 'Flashback'],
  answer: 2,
  explain: 'หนังสือ "The Connections Unseen" มีคำอธิบายว่า "A collection of transcribed lectures and archival photos" (ชุดรวมของบทบรรยายที่ถอดความและภาพถ่ายจากเอกสารเก่า) คำว่า "archival photos" (ภาพถ่ายจากเอกสารเก่า/หอจดหมายเหตุ) สื่อความหมายถึงภาพที่มีลักษณะทางประวัติศาสตร์หรือถูกเก็บรักษาไว้ ซึ่งสอดคล้องกับ "historic images" (ภาพประวัติศาสตร์) (A) Maestro – ไม่มีข้อมูลกล่าวถึงภาพ (B) Working Under Moonbeams – ไม่มีข้อมูลกล่าวถึงภาพ (D) Flashback – ไม่มีข้อมูลกล่าวถึงภาพ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-172',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: '. Where do the writers most likely work?',
  choices: ['At a travel agency', 'At a medical office', 'At a transportation company', 'At a telecommunications firm'],
  answer: 1,
  explain: 'การสนทนาในภาพพูดถึง "upcoming family physicians conference" (การประชุมแพทย์ประจำครอบครัวที่จะมีขึ้น) อย่างชัดเจน ข้อมูลนี้บ่งชี้ว่าผู้ที่เข้าร่วมการสนทนา (Priyanka Kapoor, Alonso Gonzalez, Brian Kim) น่าจะเป็นแพทย์หรือทำงานที่เกี่ยวข้องกับวงการแพทย์ ซึ่งเป็นส่วนหนึ่งของสำนักงานแพทย์ (A) At a travel agency (ที่บริษัทท่องเที่ยว) – ผู้เขียนกำลังจัดการเรื่องการเดินทางของตนเอง ไม่ได้จัดหาบริการด้านการท่องเที่ยวให้กับผู้อื่น (C) At a transportation company (ที่บริษัทขนส่ง) – ผู้เขียนกำลังจัดหารถรับส่ง',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-173',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: '. At 9:41 A.M., what does Ms. Kapoor most likely mean when she writes, "Where do we stand?" (เวลา 9:41 น. นางสาวคาปูร์น่าจะหมายถึงอะไรมากที่สุดเมื่อเธอเขียนว่า "Where do we stand?")',
  choices: ['She is requesting an update on preparations for a trip.', 'She wants to assess her colleagues\' interest in attending an event.', 'She is inquiring about her colleagues\' weekend activities.', 'She is checking staff readiness to host a conference.'],
  answer: 0,
  explain: 'ที่เวลา 9:41 น. Priyanka Kapoor เขียนว่า "We need to talk about the upcoming family physicians conference in London. Where do we stand?" (เราต้องคุยกันเกี่ยวกับการประชุมแพทย์ประจำครอบครัวที่จะมีขึ้นที่ลอนดอน เราอยู่ตรงไหนแล้ว?) วลี "Where do we stand?" ในบริบทนี้เป็นสำนวนที่หมายถึงการสอบถามสถานะปัจจุบันหรือความคืบหน้าของการดำเนินการบางอย่าง ข้อมูลที่ตามมาในบทสนทนา เช่น การซื้อตั๋วเครื่องบิน (airline tickets), การจัดหารถรับส่ง (shuttle), และการใช้งานโทรศัพท์มือถือ (mobile phones) ล้วนเกี่ยวข้องกั',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-174',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: '. What can be concluded about the writers?',
  choices: ['They will be traveling together.', 'They are preparing a presentation.', 'They have new mobile phone service.', 'They are each attending a conference for the first time.'],
  answer: 0,
  explain: 'อลอนโซ กอนซาเลซกล่าวว่า "I\'ve already purchased airline tickets for all of us." (ฉันซื้อตั๋วเครื่องบินให้พวกเราทุกคนแล้ว) และ "Scott Harris will arrange our shuttle from the London airport to the conference venue." (สกอตต์ แฮร์ริสจะจัดรถรับส่งจากสนามบินลอนดอนไปยังสถานที่จัดประชุมให้เรา) นอกจากนี้ยังมีการวางแผน "meeting up for our meals" (นัดเจอกันสำหรับมื้ออาหารของเรา) และ "Let’s meet there in the morning." (เรามาเจอกันที่นั่นตอนเช้า) ซึ่งทั้งหมดนี้บ่งชี้ว่าพวกเขาจะเดินทางและเข้าร่วมการประชุมด้ว',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-175',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'Why does Mr. Kim suggest SIM cards?',
  choices: ['They are less expensive than international plans.', 'They can be used on any device.', 'They are in stock at a nearby electronics store.', 'They do not require a Wi-Fi connection.'],
  answer: 3,
  explain: 'ข้อความของ Brian Kim (ไบรอัน คิม) ในเวลา 9:53 A.M. ระบุว่า "We won\'t have to worry about being connected to Wi-Fi." (เราจะไม่ต้องกังวลเกี่ยวกับการเชื่อมต่อกับ Wi-Fi) แสดงว่า SIM card ช่วยให้เชื่อมต่อได้โดยไม่ต้องพึ่ง Wi-Fi (A) They are less expensive than international plans. (ราคาถูกกว่าแผนบริการระหว่างประเทศ) – ข้อความไม่ได้กล่าวถึงเรื่องค่าใช้จ่ายเปรียบเทียบ (B) They can be used on any device. (ใช้ได้กับอุปกรณ์ใดก็ได้) – ข้อความไม่ได้กล่าวถึงความเข้ากันได้กับอุปกรณ์ (C) They are in stock at a',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-176',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is NOT indicated about Blissful Horse Stables?',
  choices: ['It provides grooming services.', 'It requires a minimum stay of three days.', 'It has a large, grassy field for grazing.', 'It is a family-run business.'],
  answer: 1,
  explain: 'ข้อความระบุว่า "Our business offers both long- and short-term boarding contracts." (ธุรกิจของเราให้บริการรับฝากม้าระยะยาวและระยะสั้น) แต่ไม่ได้ระบุข้อกำหนดขั้นต ่าของการเข้าพัก เช่น สามวัน (A) It provides grooming services. (ให้บริการดูแลและตกแต่งขนม้า) – ระบุว่า "Part-time worker needed to feed, wash, and groom horses." (ต้องการพนักงานพาร์ทไทม์เพื่อให้อาหาร ล้าง และดูแลขนม้า) ซึ่งบ่งชี้ว่ามีบริการนี้ (C) It has a large, grassy field for grazing. (มีทุ่งหญ้าขนาดใหญ่สำหรับแทะเล็ม) – ระบุว่า "a fi',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-177',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'In the job advertisement, the word "facility" in paragraph 2, line 1, is closest in meaning to',
  choices: ['simplicity', 'chance', 'openness', 'center'],
  answer: 3,
  explain: 'ในย่อหน้า 2 บรรทัดที่ 1 ระบุว่า "Blissful Horse Stables is the region\'s largest horse-boarding facility." (Blissful Horse Stables เป็นสถานที่รับฝากม้าที่ใหญ่ที่สุดในภูมิภาค) คำว่า "facility" ในบริบทนี้หมายถึงสถานที่หรือสิ่งอำนวยความสะดวกที่จัดเตรียมไว้เพื่อวัตถุประสงค์เฉพาะ ซึ่งมีความหมายใกล้เคียงกับ "center" ที่หมายถึงศูนย์กลางหรือสถานที่หลักสำหรับการดำเนินกิจกรรม (A) simplicity (ความเรียบง่าย) – ไม่ได้สื่อถึงลักษณะทางกายภาพหรือสถานที่ (B) chance (โอกาส) – ไม่ได้สื่อถึงสถานที่หรือสิ่งก่อสร้าง (',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-178',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What most likely is Colby Today?',
  choices: ['A regional newspaper', 'A newsletter for horse owners', 'A television program', 'A tourism brochure'],
  answer: 0,
  explain: 'อีเมลระบุว่า "This e-mail is in response to the advertisement that appeared in yesterday\'s edition of the Colby Today." (อีเมลฉบับนี้เป็นการตอบโฆษณาที่ปรากฏในฉบับเมื่อวานนี้ของ Colby Today) คำว่า "advertisement" (โฆษณา) และ "edition" (ฉบับพิมพ์) โดยเฉพาะ "yesterday\'s edition" (ฉบับเมื่อวานนี้) ชี้ให้เห็นว่า Colby Today เป็นสิ่งพิมพ์ที่ออกเป็นประจำ ซึ่งสอดคล้องกับลักษณะของหนังสือพิมพ์มากที่สุด (B) A newsletter for horse owners (จดหมายข่าวสำหรับเจ้าของม้า) – จดหมายข่าวอาจไม่มีการเรียกเป็น "edition',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-179',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is implied about Mr. Ota?',
  choices: ['He has experience working with animals.', 'He graduated from a local school.', 'He would like to become a journalist.', 'He is not able to work on weekends.'],
  answer: 0,
  explain: 'คุณ Ota ระบุในอีเมลว่า "I work for Ness Large Animal Clinic as a technician\'s assistant" (ผมทำงานที่ Ness Large Animal Clinic ในตำแหน่งผู้ช่วยช่างเทคนิค) ซึ่งคลินิกสัตว์ขนาดใหญ่ (Large Animal Clinic) บ่งบอกชัดเจนว่าเขามีประสบการณ์ในการทำงานกับสัตว์ และสอดคล้องกับคุณสมบัติที่ประกาศรับสมัครงานที่ต้องการผู้มีประสบการณ์ทำงานกับม้า (B) He graduated from a local school. (เขาจบจากโรงเรียนในท้องถิ่น) – ไม่มีข้อมูลใดๆ เกี่ยวกับการศึกษาหรือโรงเรียนของเขาในเอกสาร (C) He would like to become a journalist. (',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-180',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What has Mr. Ota most likely attached to his e-mail?',
  choices: ['A diploma', 'A résumé', 'A letter of reference', 'An article about horse care'],
  answer: 1,
  explain: 'ประกาศรับสมัครงานระบุชัดเจนว่า "To apply, send an e-mail... and attach your re sume ." (หากต้องการสมัคร... และแนบเรซูเม่ของคุณ) อีเมลของ Mr. Ota เป็นการตอบกลับโฆษณาตำแหน่งงานนี้ ซึ่งแสดงว่าเขาปฏิบัติตามคำแนะนำในการสมัครโดยการแนบเรซูเม่มาด้วย (A) A diploma (ประกาศนียบัตร) – ประกาศไม่ได้ระบุให้แนบประกาศนียบัตรในการสมัครเบื้องต้น (C) A letter of reference (จดหมายอ้างอิง) – ในเนื้อหาอีเมล Mr. Ota ระบุว่า "I am happy to provide references upon request." (ฉันยินดีที่จะให้ข้อมูลอ้างอิงเมื่อได้รับการร้อ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-181',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What motivated Ms. Dixon to contact Pink Fern Gardens?',
  choices: ['A positive review from a customer', 'An online post from Pink Fern Gardens', 'An article about Pink Fern Gardens', 'A phone message from Mr. Yoneda'],
  answer: 1,
  explain: 'ในช่อง Comment (ความคิดเห็น) คุณ Mia Dixon ระบุว่า "I saw the callout to local growers on your social media feed." (ฉันเห็นการประกาศเชิญชวนผู้ปลูกในท้องถิ่นในฟีดโซเชียลมีเดียของคุณ) คำว่า "social media feed" (ฟีดโซเชียลมีเดีย) บ่งชี้อย่างชัดเจนว่าเป็นโพสต์ออนไลน์ (A) A positive review from a customer (รีวิวเชิงบวกจากลูกค้า) – ไม่มีข้อมูลในภาพที่ระบุถึงรีวิว (C) An article about Pink Fern Gardens (บทความเกี่ยวกับ Pink Fern Gardens) – คุณดิ๊กซันระบุ "social media feed" ไม่ใช่บทความทั่วไป (D) A ph',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-182',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is indicated about Ms. Dixon?',
  choices: ['She wants to turn her hobby into a full-time business.', 'She would like a part-time job at Pink Fern Gardens', 'She founded a community garden with her neighbors.', 'She is president of a gardening club in Helensville.'],
  answer: 2,
  explain: 'ในข้อความของ Mia Dixon ระบุไว้อย่างชัดเจนว่า "A few years ago, I started a large community food garden with my neighbours here in Helensville for us to tend in our free time." (เมื่อไม่กี่ปีที่แล้ว ฉันได้เริ่มสวนอาหารชุมชนขนาดใหญ่กับเพื่อนบ้านของฉันที่เฮเลนสวิลล์ เพื่อให้พวกเราช่วยกันดูแลในเวลาว่าง) ซึ่งสอดคล้องโดยตรงกับตัวเลือก (C) (A) She wants to turn her hobby into a full-time business. (เธอต้องการเปลี่ยนงานอดิเรกของเธอให้เป็นธุรกิจเต็มเวลา) – ไม่ได้ระบุว่าเธอต้องการทำเป็นธุรกิจเต็มเวลา เพีย',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-183',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'According to Mr. Yoneda, what happened last year? (ตามที่ Mr. Yoneda กล่าวไว้ ปีที่แล้วเกิดอะไรขึ้น?)',
  choices: ['Some of his employees resigned.', 'Some trees his company purchased were unhealthy.', 'His company obtained a license to export citrus trees.', 'His company ran out of fruit trees to sell.'],
  answer: 1,
  explain: 'ในอีเมลของ Ken Yoneda ระบุว่า “There is a disease affecting certain varieties, so we must be cautious. We learned our lesson regarding this last autumn!” (มีโรคที่กระทบต่อพืชบางสายพันธุ์ เราจึงต้องระมัดระวัง เราได้บทเรียนเกี่ยวกับเรื่องนี้เมื่อฤดูใบไม้ร่วงที่แล้ว!) ซึ่งหมายความว่าต้นไม้ที่บริษัทเคยซื้อมาบางส่วนมีปัญหาเรื่องสุขภาพจากโรคระบาด (A) Some of his employees resigned. (พนักงานบางคนของเขาลาออก) – ไม่มีข้อมูลกล่าวถึงพนักงานลาออก (C) His company obtained a license to export citrus trees. (บ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-184',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What does Mr. Yoneda ask Ms. Dixon to do?',
  choices: ['Send him a list of supplies', 'Contact an independent grower', 'Buy seeds from Pink Fern Gardens', 'Bring some plants to Pink Fern Gardens'],
  answer: 3,
  explain: 'ในอีเมล นาย Ken Yoneda ระบุว่า "Please stop by at your convenience with samples of your offerings, and we can discuss our needs further in person." (กรุณาแวะมาตามความสะดวกพร้อมตัวอย่างสิ่งที่ท่านมี และเราสามารถหารือความต้องการของเราเพิ่มเติมแบบตัวต่อตัว) คำว่า "samples of your offerings" หมายถึงพืช (uncommon herbs) ที่นางสาวดิกซันเสนอขาย (A) Send him a list of supplies (ส่งรายการวัสดุให้เขา) – นายโยเนดะขอให้นำตัวอย่างมาด้วยตนเอง ไม่ใช่ส่งรายการ (B) Contact an independent grower (ติดต่อผู้ปลูกอิส',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-185',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'How much would Mr. Yoneda pay Ms. Dixon for one of her potted seedlings?',
  choices: ['$8.00', '$6.00', '$5.00', '$2.00'],
  answer: 3,
  explain: 'นางสาวดิกซันระบุว่าเธอมี “potted mint and cardamom seedlings as well as other uncommon herbs” (ต้นกล้าสะระแหน่และกระวานที่ปลูกในกระถาง รวมถึงสมุนไพรหายากอื่นๆ) นายโยเนดะระบุในอีเมลตอบกลับว่า “herbs for cooking, especially oregano, mint, and rosemary ($2)” (สมุนไพรสำหรับทำอาหาร โดยเฉพาะออริกาโน สะระแหน่ และโรสแมรี่ ราคา 2 ดอลลาร์) ต้นสะระแหน่ (mint) เป็นสมุนไพรชนิดหนึ่งที่นายโยเนดะรับซื้อในราคา 2 ดอลลาร์ ซึ่งสอดคล้องกับสิ่งที่นางสาวดิกซันมี (A) $8.00 – เป็นราคาสำหรับ ferns (เฟิร์น) ซึ่งนางสาวดิกซ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-186',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'According to the Web page, what is true about Elektroproof Repair?',
  choices: ['It recently raised its prices.', 'It is hiring more repair technicians.', 'It has experienced a sudden increase in business.', 'It requires full payment before work can begin.'],
  answer: 2,
  explain: 'ข้อมูลจากหน้าเว็บระบุว่า "Because of a dramatic increase in demand, we now require appointments for all services." (เนื่องจากความต้องการที่เพิ่มขึ้นอย่างมาก เราจึงต้องนัดหมายสำหรับการบริการทุกอย่างในตอนนี้) ซึ่งหมายความว่าธุรกิจมีการเติบโตอย่างรวดเร็ว (A) It recently raised its prices. (เพิ่งขึ้นราคาเมื่อไม่นานมานี้) – ข้อความระบุเพียงราคาให้บริการปัจจุบัน แต่ไม่ได้ระบุว่ามีการขึ้นราคาเมื่อเร็วๆ นี้ (B) It is hiring more repair technicians. (กำลังจ้างช่างซ่อมเพิ่ม) – ข้อความกล่าวถึง "highly qual',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-187',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'According to the e-mail, what is the earliest date when Ms. Nelson could bring in her laptop for service?',
  choices: ['On January 14', 'On January 15', 'On January 18', 'On January 19'],
  answer: 3,
  explain: 'อีเมลระบุชัดเจนว่า "The earliest available time slot is 8:00 A.M. on January 19." (ช่วงเวลาที่เร็วที่สุดที่ว่างคือ 8:00 น. ของวันที่ 19 มกราคม) (A) On January 14 (วันที่ 14 มกราคม) – เป็นวันที่ส่งอีเมล ไม่ใช่วันที่สามารถนำเครื่องเข้ารับบริการได้ (B) On January 15 (วันที่ 15 มกราคม) – อีเมลระบุว่าพวกเขา "booked solid through January 18" (จองเต็มหมดจนถึงวันที่ 18 มกราคม) ทำให้วันที่ 15 ไม่ว่าง (C) On January 18 (วันที่ 18 มกราคม) – อีเมลระบุว่า "booked solid through January 18" (จองเต็มหมดจนถึงวัน',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-188',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is most likely true about Mr. Jacquet?',
  choices: ['He owns the business.', 'He is a technician.', 'He is a receptionist.', 'He delivers repaired equipment.'],
  answer: 0,
  explain: 'อีเมลส่งจาก Arthur Jacquet โดยมีที่อยู่อีเมลเป็น ajacquet@elektroproofrepair.com และลงชื่อว่า "Arthur Jacquet, Elektroproof Repair" ซึ่งระบุตัวเขาโดยตรงกับชื่อบริษัทโดยไม่มีตำแหน่งเฉพาะ (เช่น ช่างเทคนิคหรือพนักงานต้อนรับ) การลงชื่อในลักษณะนี้มักจะบ่งบอกถึงบทบาทเจ้าของหรือผู้บริหารระดับสูงในธุรกิจ (B) He is a technician. (เขาเป็นช่างเทคนิค) – ไม่มีข้อมูลในอีเมลที่ระบุว่าเขาเป็นช่างเทคนิค อีเมลเกี่ยวข้องกับการจัดตารางนัดหมายการตรวจสอบ ไม่ใช่การซ่อมแซม (C) He is a receptionist. (เขาเป็นพนักงานต้อนร',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-189',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'According to the review, what was Ms. Nelson\'s main concern about her laptop?',
  choices: ['That the parts inside it might be damaged', 'That it was too old to be repaired', 'That it was responding too slowly', 'That its operating system had a virus'],
  answer: 0,
  explain: 'รีวิวของ Jessica Nelson ระบุว่า "I was afraid the internal components might have been ruined." (ฉันกลัวว่าส่วนประกอบภายในอาจจะเสียหาย) ซึ่งแสดงถึงความกังวลหลักเกี่ยวกับความเสียหายที่อาจเกิดขึ้นกับชิ้นส่วนภายใน (B) That it was too old to be repaired (ว่ามันเก่าเกินกว่าจะซ่อมได้) – รีวิวกล่าวถึง "faithful old laptop" (แล็ปท็อปเก่าที่ซื่อสัตย์) แต่ไม่ได้ระบุว่ากังวลเรื่องอายุที่ทำให้ซ่อมไม่ได้ (C) That it was responding too slowly (ว่ามันตอบสนองช้าเกินไป) – ไม่มีข้อมูลในรีวิวที่ระบุว่าแล็ปท็อปทำงา',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-190',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is suggested about the repair of Ms. Nelson\'s computer?',
  choices: ['It included installing new operating software.', 'It was completed more quickly than advertised.', 'It involved the replacement of internal circuits.', 'It required an upgrade to the hard drive.'],
  answer: 1,
  explain: 'จากข้อมูลในกล่องข้อความแรก (เว็บไซต์) ระบุว่า "Most repairs are completed within three to five business days." (การซ่อมส่วนใหญ่จะเสร็จภายในสามถึงห้าวันทำการ) แต่ในรีวิวของคุณเนลสัน ระบุว่า "Elektroproof Repair had my laptop fully functional and back in my hands within 24 hours." (เอเล็คโทรพรูฟ รีแพร์ ได้ส่งแล็ปท็อปที่ใช้งานได้เต็มที่คืนมือฉันภายใน 24 ชั่วโมง) ซึ่ง 24 ชั่วโมงนั้นเร็วกว่า 3-5 วันทำการที่โฆษณาไว้มาก (A) It included installing new operating software. (มีการติดตั้งซอฟต์แวร์ระบบปฏิบัต',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-191',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is the purpose of the advertisement?',
  choices: ['To sell guitars', 'To promote lessons', 'To attract music teachers', 'To announce a new location'],
  answer: 1,
  explain: 'ส่วนบนสุดของภาพมีหัวข้อว่า "Learn to play guitar at Alexis Instruments!" (เรียนกีตาร์ที่ Alexis Instruments!) และข้อความระบุว่า "Alexis Instruments will offer group and individual guitar instruction beginning April 2." (Alexis Instruments จะเปิดสอนกีตาร์แบบกลุ่มและรายบุคคลตั้งแต่วันที่ 2 เมษายน) ซึ่งเป็นการประกาศเกี่ยวกับการเปิดสอนกีตาร์โดยตรง (A) To sell guitars (เพื่อขายกีตาร์) – โฆษณาเน้นที่การเรียนการสอน ไม่ใช่การขายผลิตภัณฑ์กีตาร์ (C) To attract music teachers (เพื่อดึงดูดครูสอนดนตรี) – โฆษ',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-192',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is most likely true about the store where Ms. Towers works?',
  choices: ['It has been renovated.', 'It is hiring new employees.', 'It has more inventory than other locations.', 'It has extended its hours of operation.'],
  answer: 0,
  explain: 'ส่วนบนของเอกสาร ระบุว่า "Each of our locations has been updated with newly constructed classrooms and practice rooms." (สาขาแต่ละแห่งของเราได้รับการปรับปรุงด้วยห้องเรียนและห้องซ้อมที่สร้างขึ้นใหม่) "Updated with newly constructed" มีความหมายตรงกับการได้รับการปรับปรุงใหม่ (renovated) (B) It is hiring new employees. (กำลังจ้างพนักงานใหม่) – ไม่มีข้อมูลเกี่ยวกับการจ้างงานใหม่ในเอกสาร (C) It has more inventory than other locations. (มีสินค้าคงคลังมากกว่าสาขาอื่น) – ในอีเมลระบุว่า "We have only one g',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-193',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What does the e-mail indicate about the guitar?',
  choices: ['It is in need of repairs.', 'It has been on a shelf at the store in Chico.', 'It was previously owned by an Alexis Instruments customer', 'It is the only one of its model currently available.'],
  answer: 3,
  explain: 'อีเมลระบุว่า "We have only one guitar of the model you want in stock." (เรามีกีตาร์รุ่นที่คุณต้องการในสต็อกแค่ตัวเดียว) ซึ่งแสดงว่ามีกีตาร์รุ่นนี้พร้อมจำหน่ายเพียงตัวเดียวเท่านั้น (A) It is in need of repairs. (จำเป็นต้องได้รับการซ่อมแซม) – อีเมลระบุว่า "it is still in excellent condition. There are no scratches, scuffs, or dents on it whatsoever." (ยังอยู่ในสภาพดีเยี่ยม ไม่มีรอยขีดข่วน รอยถลอก หรือรอยบุบใดๆ เลย) ซึ่งตรงกันข้ามกับตัวเลือกนี้ (B) It has been on a shelf at the store in Chico. (เคย',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-194',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What can be inferred about Ms. Rivera?',
  choices: ['She damaged her guitar.', 'She requested a refund.', 'She was previously enrolled in an online class.', 'She purchased the floor model.'],
  answer: 3,
  explain: 'อีเมลระบุว่ากำลังติดตาม "order you placed" (คำสั่งซื้อที่คุณได้ทำไว้) และแจ้งว่ามีกีตาร์รุ่นที่เธอต้องการเหลือเพียง "display sample on the floor" (ตัวอย่างที่จัดแสดงบนพื้นร้าน) เท่านั้น และเสนอ "10 percent discount off the original retail price" (ส่วนลด 10 เปอร์เซ็นต์จากราคาขายปลีกเดิม) หากเธอยอมรับกีตาร์ตัวดังกล่าว ใบแจ้งหนี้ของ Alexis Instruments สำหรับคำสั่งซื้อของ Ms. Rivera (Order number: TS1058293) แสดงรายการ "10% discount on guitar" (ส่วนลด 10% สำหรับกีตาร์) (-$45.00) ซึ่งสอดคล้องกับข้อเส',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-195',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'According to the receipt, what is true about Alexis Instruments? (ตามใบเสร็จ อะไรเป็นความจริงเกี่ยวกับ Alexis Instruments?)',
  choices: ['It repairs instruments in its stores.', 'It has two stores in Santa Barbara.', 'It is holding an annual sale.', 'It was founded by a professional musician.'],
  answer: 0,
  explain: 'จากอีเมลระบุว่า "Our in-house luthier has thoroughly inspected the guitar" (ช่างทำเครื่องดนตรีประจำของเราได้ตรวจสอบกีตาร์อย่างละเอียดแล้ว) ซึ่ง luthier คือช่างผู้เชี่ยวชาญด้านการผลิตหรือซ่อมแซมเครื่องดนตรีประเภทเครื่องสาย และจากใบเสร็จ (Receipt) ในส่วน Description มีรายการ "Three-year repair and maintenance plan, good at any Alexis Instruments location" (แผนซ่อมแซมและบำรุงรักษา 3 ปี ใช้ได้ที่ Alexis Instruments ทุกสาขา) ซึ่งยืนยันว่ามีบริการซ่อมแซมและบำรุงรักษาเครื่องดนตรี (B) It has two stores',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-196',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What is suggested in the first e-mail about the Mirabel Museum of Art?',
  choices: ['It hires art teachers to lead tours.', 'It offers private tours to museum members.', 'Its art classes are free to the public.', 'Its next staff training will take place in ten days.'],
  answer: 0,
  explain: 'อีเมลฉบับแรกมีผู้รับคือ "All Instructors" (ผู้สอนทุกคน) และผู้ส่งคือ "Jee-Young Choi, Education Coordinator" (ผู้ประสานงานการศึกษา) ซึ่งกล่าวถึง "artists and educators" (ศิลปินและนักการศึกษา) ที่ช่วยงานพิพิธภัณฑ์ ตารางค่าธรรมเนียมมีรายการ "Category: Tour, Description: Lead group tour" (นำทัวร์กลุ่ม) ซึ่งมีค่าธรรมเนียมระบุไว้ สิ่งนี้ชี้ให้เห็นว่าพิพิธภัณฑ์จ้างผู้สอน ซึ่งเป็นครูสอนศิลปะหรือนักการศึกษา ให้นำทัวร์ (B) It offers private tours to museum members. (มีทัวร์ส่วนตัวสำหรับสมาชิกพิพิธภัณฑ์)',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-197',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What does the invoice suggest about Mr. Merriweather?',
  choices: ['He worked at the museum on September 30.', 'He has expertise in more than one art form.', 'One of his art classes was canceled.', 'Some of his artwork was exhibited in September.'],
  answer: 1,
  explain: 'ใบแจ้งหนี้ #00278 ระบุบริการที่ Devonte Merriweather ให้ไว้ ได้แก่ "Class: Drawing for Beginners" (ชั้นเรียนวาดภาพสำหรับผู้เริ่มต้น) และ "Class: Sculpting with Clay" (ชั้นเรียนปั้นดินเหนียว) แสดงให้เห็นว่าเขามีความรู้และทักษะในการสอนศิลปะทั้งการวาดภาพและการปั้น ซึ่งเป็นศิลปะคนละแขนงกัน (A) He worked at the museum on September 30. (เขาทำงานที่พิพิธภัณฑ์เมื่อวันที่ 30 กันยายน) – วันที่ 30 กันยายน เป็นวันที่ส่งใบแจ้งหนี้ ไม่ใช่วันที่เขาทำงาน (C) One of his art classes was canceled. (ชั้นเรียนศิลปะข',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-198',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'How long was the sculpting class that Mr. Merriweather taught?',
  choices: ['60 minutes', '75 minutes', '90 minutes', '120 minutes'],
  answer: 3,
  explain: 'จากใบแจ้งหนี้ (Invoice #00278) ของ Devonte Merriweather รายการ "Class: Sculpting with Clay" มีค่าบริการ $110 จากตารางค่าธรรมเนียมใหม่ (New fee schedule) รายการ "Class" ที่มีค่าธรรมเนียม $110 ตรงกับ "Teach art class" ซึ่งมีระยะเวลา "120 minutes" อีเมลจาก Jee-Young Choi ถึง Devonte Merriweather ยืนยันว่า Merriweather สอน "sculpting class" (A) 60 minutes – ตรงกับ "Lead group tour" ค่าธรรมเนียม $50 (B) 75 minutes – ตรงกับ "Teach art class" ค่าธรรมเนียม $65 (C) 90 minutes – ตรงกับ "Lead group tour" ค',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-199',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'According to the second e-mail, who most likely is Ms. Swann?',
  choices: ['A bookkeeper', 'An art teacher', 'Mr. Merriweather\'s assistant', 'Director of the Mirabel Museum of Art'],
  answer: 0,
  explain: 'ในอีเมลฉบับที่สองระบุว่า "I checked with Carol Swann, and she said that because invoice #00278 has already been paid, it would be best if you submitted a second invoice for the development. I will ask her to process it quickly when I receive it." (ฉันได้ตรวจสอบกับ Carol Swann และเธอบอกว่าเนื่องจากใบแจ้งหนี้ #00278 ได้รับการชำระเงินไปแล้ว จะเป็นการดีที่สุดถ้าคุณส่งใบแจ้งหนี้ฉบับที่สองสำหรับค่าพัฒนานี้ ฉันจะขอให้เธอ [Ms. Swann] ดำเนินการอย่างรวดเร็วเมื่อฉันได้รับ) Ms. Swann มีบทบาทในการตรวจสอบสถาน',
  context: null,
  audio: null,
});
QUESTION_BANK.push({
  id: 'OLD-200',
  part: '7',
  partLabel: 'Part 7 — Reading Comprehension',
  type: 'reading',
  topic: 'Reading Comprehension',
  set: 'ข้อสอบเก่า',
  text: 'What can be concluded about Ms. Choi?',
  choices: ['She forgot to read some student feedback forms.', 'She believes that Mr. Merriweather is owed $200.', 'She meets once a month with teachers.', 'She rejected Mr. Merriweather\'s October invoice.'],
  answer: 1,
  explain: 'จากอีเมลฉบับล่าง คุณชอย (Ms. Choi) ระบุว่า "I noticed that you neglected to charge us for developing the curriculum for your sculpting class..." (ฉันสังเกตเห็นว่าคุณลืมคิดค่าธรรมเนียมสำหรับการพัฒนาหลักสูตรสำหรับชั้นเรียนปั้นดินเผาของคุณ...) และในตารางค่าธรรมเนียม (Fee schedule) ระบุว่า "Development: Plan new course content" (การพัฒนา: วางแผนเนื้อหาหลักสูตรใหม่) มีค่าธรรมเนียมอยู่ที่ "$200" คุณชอยแนะนำให้คุณเมอร์ริเวเธอร์ส่ง "a second invoice for the development" (ใบแจ้งหนี้ฉบับที่สองสำหรับการพัฒ',
  context: null,
  audio: null,
});

/* ── BANK_COUNTS declaration + update ── */
const BANK_COUNTS = {};
BANK_COUNTS['old'] = QUESTION_BANK.filter(q => q.set === 'ข้อสอบเก่า').length;
BANK_COUNTS['all'] = QUESTION_BANK.length;