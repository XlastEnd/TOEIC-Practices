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
    explain: 'once = ทันทีที่/เมื่อ ใช้เชื่อมเหตุการณ์

========================================================================================',
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
    explain: 'ถ้าพูดถึงคุณสมบัติหลายอย่าง ใช้ features เป็นคำนามพหูพจน์

========================================================================================',
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

/* ── Helper: สุ่มข้อสอบตาม part และจำนวนที่ต้องการ ── */
function sampleQuestions(part, count) {
  const pool = part === "all"
    ? QUESTION_BANK
    : QUESTION_BANK.filter(q => q.part === part);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/* ── Part counts ── */
const BANK_COUNTS = {
  all: QUESTION_BANK.length,
  '5': QUESTION_BANK.filter(q=>q.part==='5').length,
  '6': QUESTION_BANK.filter(q=>q.part==='6').length,
  '7': QUESTION_BANK.filter(q=>q.part==='7').length,
};