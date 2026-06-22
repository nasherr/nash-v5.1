const SUBJECTS = {
  eni: {
    id: 'eni', icon: '💡', title: 'Entrepreneurship & Innovation', code: 'EAI 1200', subtitle: 'Build, test, and launch your ideas.', color:'green',
    blocks: [
      {id:'hypothesis', title:'Hypothesis', detail:'Find problems worth solving; turn assumptions into testable hypotheses.', topics:['Problem hunting','Riskiest assumption','Hypothesis','Customer discovery']},
      {id:'experiment', title:'Experiment', detail:'Design tests that produce evidence, not opinions.', topics:['Build–Measure–Learn','MVP','Validated learning','Actionable metrics']},
      {id:'prototype', title:'Prototype', detail:'Create artifacts that let users react and behave.', topics:['Prototype','First artifact','User testing','Feedback']},
      {id:'business', title:'Business', detail:'Check if the idea can survive economically and competitively.', topics:['PMF','Pivot vs persevere','Moats','Distribution','Unit economics']},
      {id:'pitch', title:'Pitch', detail:'Explain the problem, solution, traction, business model, and next step.', topics:['Financial model','Pitch','Demo Day','100 users']}
    ],
    strengths:['BML','Moats'], focus:['Unit Economics','PMF'],
    glossary: [
      ['Entrepreneurship','Discovering and acting on opportunities to create value for customers, communities, or markets.'],
      ['Riskiest assumption','The belief that kills the idea if it is false.'],
      ['Hypothesis','A testable sentence with customer, behavior, metric, and threshold.'],
      ['MVP','The smallest artifact that helps you learn.'],
      ['Validated learning','Evidence that changes or supports a decision.'],
      ['PMF','When users would be very disappointed if your product disappeared.'],
      ['Pivot','Change strategy while keeping the vision.'],
      ['Moat','A durable advantage that becomes hard to copy.'],
      ['CAC','Cost to acquire one paying customer.'],
      ['LTV','Profit from one customer over their lifetime.']
    ]
  },
  spanish: {
    id: 'spanish', icon: 'ñ', title: 'Spanish A1 / ELE', code: 'Curso de Español como Lengua Extranjera', subtitle: 'Learn Spanish for everyday life in Chile.', color:'purple',
    blocks: [
      {id:'resources', title:'Classroom survival phrases', detail:'Ask for help, repeat, and clarify in Spanish.', topics:['¿Cómo se dice...?','¿Qué significa...?','No entiendo','Otra vez, por favor']},
      {id:'introductions', title:'Introductions in Chile', detail:'Introduce yourself formally and informally.', topics:['Yo soy','Me llamo','Mucho gusto','¿Cómo te llamas?']},
      {id:'greetings', title:'Greetings and goodbyes', detail:'Use formal and informal greetings naturally.', topics:['Buenos días','Hola, ¿qué tal?','Hasta luego','Nos vemos']},
      {id:'food', title:'Food, shopping, and restaurants', detail:'Order, ask prices, express tastes and needs.', topics:['Me gusta','Quiero','Cuánto cuesta','Eso es todo']},
      {id:'city', title:'City, transport, and daily life', detail:'Talk about location, existence, routines, and movement.', topics:['Hay','Está','Voy a','Lugares en la ciudad']},
      {id:'tourism', title:'Tourism and opinions', detail:'Talk about plans, places, and opinions in Chile.', topics:['Me gustaría','Pienso que','Porque','Lugares turísticos']}
    ],
    strengths:['Greetings','Basic phrases'], focus:['Vocabulary','Present tense'],
    glossary: [
      ['¿Cómo se dice ___ en español?','How do you say ___ in Spanish?'],
      ['¿Qué significa ___?','What does ___ mean?'],
      ['No entiendo','I do not understand.'],
      ['Otra vez, por favor','Again, please / please repeat.'],
      ['Gracias','Thank you.'],
      ['Por favor','Please.'],
      ['De nada','You are welcome.'],
      ['Me llamo','My name is.'],
      ['Mucho gusto','Nice to meet you.'],
      ['Nos vemos','See you.']
    ]
  }
};

const QUESTIONS = {
  eni: [
    {topic:'Hypothesis', q:'Which hypothesis is strongest?', choices:['Students need help.','Our app will be popular.','At least 6/10 students who scan the QR finish one module.','People like education.'], a:2, trap:'The wrong answers are vague. A strong hypothesis has behavior + number + target group.', retry:'Create one hypothesis for your own project with a number and a time limit.'},
    {topic:'PMF', q:'A team asks 8 close friends if they like the app. 6 say yes. What is the trap?', choices:['This proves PMF.','The sample is biased and liking is weak evidence.','Friends are always reliable users.','PMF only applies to paid apps.'], a:1, trap:'PMF is not polite liking. It needs active users and stronger evidence, like disappointment if the product disappeared.', retry:'What PMF question would you ask active users?'},
    {topic:'Unit Economics', q:'CAC should be calculated using:', choices:['All website visitors','All signups','Paying customers acquired','Instagram followers'], a:2, trap:'CAC is about acquiring paying customers, not attention or signups.', retry:'If marketing cost is $100 and 5 paying customers are acquired, what is CAC?'},
    {topic:'Moats', q:'Which is NOT a strong moat?', choices:['Network effects','Switching costs','We had the idea first','Regulatory barriers'], a:2, trap:'Being first is easy to copy. A moat must stay defensible over time.', retry:'Name one moat Nash could develop.'},
    {topic:'Pivot', q:'Same vision, new customer segment after evidence. This is a:', choices:['Customer segment pivot','Value capture pivot','Platform pivot','No pivot'], a:0, trap:'A pivot changes strategy, not the whole vision. Here the segment changed.', retry:'Give an example of a customer segment pivot.'}
  ],
  spanish: [
    {topic:'Introductions', q:'How do you say “My name is Hesham” informally?', choices:['Yo llamo Hesham','Me llamo Hesham','Soy llamo Hesham','Mi llamo Hesham'], a:1, trap:'Use the reflexive verb llamarse: me llamo = my name is.', retry:'Say: “My name is Sara” in Spanish.'},
    {topic:'Classroom phrases', q:'What does “No entiendo” mean?', choices:['I understand','I do not understand','I am sorry','Again please'], a:1, trap:'No entiendo is the key survival phrase when you are lost in class.', retry:'How do you ask the teacher to repeat?'},
    {topic:'Greetings', q:'Which greeting is more formal?', choices:['Hola','Buenos días','¿Qué tal?','Nos vemos'], a:1, trap:'Buenos días / buenas tardes / buenas noches are safer formal greetings.', retry:'Give one informal greeting.'},
    {topic:'Introductions', q:'Choose the correct form: Tú ___ llamas Ana.', choices:['me','te','se','nos'], a:1, trap:'Tú uses te: tú te llamas.', retry:'Complete: Yo ___ llamo Omar.'},
    {topic:'Useful phrases', q:'“De nada” means:', choices:['Please','Thank you','You are welcome','Excuse me'], a:2, trap:'De nada is the response after gracias.', retry:'What do you say after someone says “gracias”?' }
  ]
};

const FLASHCARDS = {
  eni: [
    ['BML','Build–Measure–Learn, but plan backwards: Learn → Measure → Build.'],
    ['MVP','Smallest artifact that creates learning evidence.'],
    ['CAC','Only paying customers count.'],
    ['Pivot','Same vision, new route.'],
    ['PMF','Would users miss you if you disappeared?']
  ],
  spanish: [
    ['¿Cómo se dice ___?','How do you say ___?'],
    ['No entiendo','I do not understand.'],
    ['Me llamo...','My name is...'],
    ['Mucho gusto','Nice to meet you.'],
    ['Nos vemos','See you.']
  ]
};

const initialState = {
  route:'home', subject:'eni', completed:{eni:{},spanish:{}}, scores:{eni:{correct:0,total:0},spanish:{correct:0,total:0}},
  confidence:{eni:2,spanish:1}, practiceCount:{eni:0,spanish:0}, lastMistake:null, chat:[], notes:{}, feedback:[]
};
let state = JSON.parse(localStorage.getItem('nash51') || 'null') || structuredClone(initialState);
const app = document.getElementById('app');
function save(){localStorage.setItem('nash51',JSON.stringify(state));}
function S(){return SUBJECTS[state.subject];}
function readiness(id=state.subject){const s=state.scores[id]||{correct:0,total:0};const comp=Object.keys(state.completed[id]||{}).length;const total=SUBJECTS[id].blocks.length;const quiz=s.total?Math.round((s.correct/s.total)*45):0;const modules=Math.round((comp/total)*25);const practice=Math.min(20,(state.practiceCount[id]||0)*4);const conf=Math.min(10,(state.confidence[id]||0)*2);return Math.min(100,quiz+modules+practice+conf);}
function weakest(id=state.subject){return SUBJECTS[id].focus[0] || 'Practice';}
function setRoute(route){state.route=route;save();render();}
window.setRoute=setRoute;
function setSubject(id){state.subject=id;save();render();}
window.setSubject=setSubject;
function navActive(){document.querySelectorAll('[data-route]').forEach(b=>b.classList.toggle('active',b.dataset.route===state.route));}

document.getElementById('resetBtn').onclick=()=>{if(confirm('Reset local Nash progress on this device?')){state=structuredClone(initialState);save();render();}};
document.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>setRoute(b.dataset.route));

function subjectCards(){return `<div class="grid">${Object.values(SUBJECTS).map(s=>`<button class="subject-card ${state.subject===s.id?'active':''}" onclick="setSubject('${s.id}')"><div class="icon ${s.color==='purple'?'purple':''}">${s.icon}</div><div><h3>${s.title}</h3><p class="muted"><b>${s.code}</b><br>${s.subtitle}</p></div><div style="margin-left:auto;font-size:30px;color:${state.subject===s.id?'var(--green)':'#b7c9c6'}">${state.subject===s.id?'✓':'○'}</div></button>`).join('')}</div>`;}
function home(){app.innerHTML=`<section class="card hero"><span class="badge">V5.1 Smart Study MVP</span><h2>Choose your subject</h2>${subjectCards()}</section><section class="card"><h2>Welcome back!</h2><p class="lead">Nash now supports Entrepreneurship & Innovation and Spanish A1/ELE. The tutor, practice questions, flashcards, and study plan adapt to the subject you select.</p><div class="kpis"><div class="kpi"><span class="muted">Active subject</span><strong style="font-size:22px">${S().title}</strong></div><div class="kpi"><span class="muted">Readiness</span><strong>${readiness()}%</strong><div class="progress ${S().color==='purple'?'purple':''}"><span style="width:${readiness()}%"></span></div></div><div class="kpi"><span class="muted">Focus</span><strong style="font-size:22px">${weakest()}</strong></div><div class="kpi"><span class="muted">Practice done</span><strong>${state.practiceCount[state.subject]||0}</strong></div></div></section><section class="card"><h2>Quick actions</h2><div class="grid3"><button class="action-card" onclick="setRoute('tutor')"><div class="icon">✦</div><div><h3>Ask Nash</h3><p class="muted">Context-aware tutor</p></div></button><button class="action-card" onclick="setRoute('practice')"><div class="icon ${S().color==='purple'?'purple':''}">◎</div><div><h3>Practice</h3><p class="muted">Mistake explanations + new cases</p></div></button><button class="action-card" onclick="setRoute('flashcards')"><div class="icon">▣</div><div><h3>Flashcards</h3><p class="muted">Memory tricks</p></div></button></div></section>`;}
function dashboard(){app.innerHTML=`<section class="card"><span class="badge">Dashboard</span><h2>${S().title}</h2><div class="kpis"><div class="kpi"><span class="muted">Readiness</span><strong>${readiness()}%</strong></div><div class="kpi"><span class="muted">Score</span><strong>${state.scores[state.subject].correct}/${state.scores[state.subject].total}</strong></div><div class="kpi"><span class="muted">Strongest</span><strong style="font-size:22px">${S().strengths.join(', ')}</strong></div><div class="kpi"><span class="muted">Weakest</span><strong style="font-size:22px">${S().focus.join(', ')}</strong></div></div><div class="note"><b>Smart next step:</b> ${smartPlan()}</div></section><section class="card"><h2>Course map</h2><table class="table"><tr><th>Module</th><th>What it helps with</th><th>Status</th></tr>${S().blocks.map(b=>`<tr><td><b>${b.title}</b><br><span class="smalltext">${b.topics.join(' · ')}</span></td><td>${b.detail}</td><td>${state.completed[state.subject][b.id]?'Done':'Open'}</td></tr>`).join('')}</table></section>`;}
function smartPlan(){if(state.subject==='eni') return `Review ${weakest()}, do one infinite unit economics/startup case, then ask Nash to quiz you one question at a time.`;return `Review ${weakest()}, practice 5 vocabulary cards, then ask Nash to create a short Chilean dialogue for you.`;}
function paths(){app.innerHTML=`<section class="card"><span class="badge">Paths</span><h2>${S().title}</h2><p class="lead">Complete a path to improve your readiness score.</p><div class="grid">${S().blocks.map(b=>`<button class="module-card" onclick="openModule('${b.id}')"><div class="icon ${S().color==='purple'?'purple':''}">${state.completed[state.subject][b.id]?'✓':'→'}</div><div><h3>${b.title}</h3><p class="muted">${b.detail}</p><p class="smalltext">${b.topics.join(' · ')}</p></div></button>`).join('')}</div></section>`;}
window.openModule=(id)=>{const b=S().blocks.find(x=>x.id===id);app.innerHTML=`<section class="card"><span class="badge">${S().code}</span><h2>${b.title}</h2><p class="lead">${b.detail}</p><h3>What to know</h3><ul class="list">${b.topics.map(t=>`<li><b>${t}</b> — ${explainTopic(t)}</li>`).join('')}</ul><div class="row"><button class="primary" onclick="completeModule('${id}')">Mark complete</button><button class="secondary" onclick="askTopic('${b.title}')">Ask Nash about this</button><button class="secondary" onclick="setRoute('paths')">Back</button></div></section>`;};
function explainTopic(t){const map={
'Problem hunting':'Find real pain, not just interesting ideas.','Riskiest assumption':'The assumption that kills the idea if false.','Hypothesis':'Make it testable with a user, behavior, metric, and threshold.','Customer discovery':'Talk to users to understand problems before building.','Build–Measure–Learn':'Plan backwards from learning to metric to artifact.','MVP':'Smallest thing that creates evidence.','Validated learning':'Learning supported by data, not opinions.','Actionable metrics':'Metrics that help you decide.','Prototype':'A usable artifact to test behavior.','PMF':'Users would be very disappointed if it disappeared.','Moats':'Defensible advantages that compound.','Distribution':'How users actually find the product.','Unit economics':'CAC, LTV, LTV/CAC, payback.','Financial model':'How the idea makes money and survives.','Pitch':'Clear story: problem, solution, evidence, ask.',
'¿Cómo se dice...?':'Ask how to say a word in Spanish.','¿Qué significa...?':'Ask what a word means.','No entiendo':'Say you do not understand.','Otra vez, por favor':'Ask someone to repeat.','Yo soy':'I am.','Me llamo':'My name is.','Mucho gusto':'Nice to meet you.','¿Cómo te llamas?':'What is your name?','Buenos días':'Good morning.','Hola, ¿qué tal?':'Hi, how are things?','Hasta luego':'See you later.','Nos vemos':'See you.','Me gusta':'I like.','Quiero':'I want.','Cuánto cuesta':'How much does it cost?','Eso es todo':'That is all.','Hay':'There is / there are.','Está':'It is located.','Voy a':'I am going to.','Lugares en la ciudad':'Places in the city.','Me gustaría':'I would like.','Pienso que':'I think that.','Porque':'Because.','Lugares turísticos':'Tourist places.'};return map[t]||'Review this topic and ask Nash for an example.';}
window.completeModule=(id)=>{state.completed[state.subject][id]=true;save();dashboard();};
window.askTopic=(topic)=>{state.route='tutor';state.pendingPrompt=`Explain ${topic} for ${S().title}. Give exam/practice traps and one mini exercise.`;save();render();};

function practice(){const qs=QUESTIONS[state.subject];app.innerHTML=`<section class="card"><span class="badge">V5.1 Practice</span><h2>${S().title} practice</h2><p class="lead">Wrong answers now trigger “explain my mistake” and a similar practice task.</p><div class="grid">${qs.map((q,i)=>`<button class="module-card" onclick="showQuestion(${i})"><div class="icon ${S().color==='purple'?'purple':''}">?</div><div><h3>${q.topic}</h3><p class="muted">${q.q}</p></div></button>`).join('')}</div></section><section class="card"><span class="badge gold">Infinite practice</span><h2>Practice again with new numbers / new sentences</h2><div id="infiniteBox">${infinitePracticeHtml()}</div><button class="primary" onclick="newInfinitePractice()">Generate new practice</button></section>`;}
window.showQuestion=(i)=>{const q=QUESTIONS[state.subject][i];app.innerHTML=`<section class="card"><span class="badge">${q.topic}</span><h2>${q.q}</h2>${q.choices.map((c,j)=>`<button class="choice" onclick="answerPractice(${i},${j})">${String.fromCharCode(65+j)}. ${c}</button>`).join('')}<div id="explainBox"></div></section><section class="card"><button class="secondary" onclick="setRoute('practice')">Back to practice</button></section>`;};
window.answerPractice=(i,j)=>{const q=QUESTIONS[state.subject][i];state.scores[state.subject].total++;if(j===q.a) state.scores[state.subject].correct++;state.practiceCount[state.subject]=(state.practiceCount[state.subject]||0)+1;const box=document.getElementById('explainBox');document.querySelectorAll('.choice').forEach((b,k)=>{b.disabled=true;if(k===q.a)b.classList.add('correct');if(k===j&&j!==q.a)b.classList.add('wrong');});if(j===q.a){box.innerHTML=`<div class="note"><b>Correct.</b> ${q.trap}<br><b>Next:</b> ${q.retry}</div>`;}else{state.lastMistake={subject:state.subject,question:q.q,yourAnswer:q.choices[j],correctAnswer:q.choices[q.a],trap:q.trap,retry:q.retry};box.innerHTML=`<div class="note warning"><b>Explain my mistake</b><br><b>Your answer:</b> ${q.choices[j]}<br><b>Correct answer:</b> ${q.choices[q.a]}<br><b>Likely trap:</b> ${q.trap}<br><b>Try again:</b> ${q.retry}<br><button class="primary" style="margin-top:12px" onclick="askMistake()">Ask Nash to explain deeper</button></div>`;}save();};
window.askMistake=()=>{state.route='tutor';state.pendingPrompt=`Explain my mistake. I answered: ${JSON.stringify(state.lastMistake)}. Explain simply, give a memory trick, then give one similar practice question.`;save();render();};
function randomFrom(a){return a[Math.floor(Math.random()*a.length)];}
function infinitePracticeHtml(){if(state.subject==='eni'){const price=randomFrom([10,15,18,20,25,30]), cost=randomFrom([2,4,5,6,8]), cac=randomFrom([40,60,80,90,120]), tenure=randomFrom([4,6,8,10,12]);const ltv=(price-cost)*tenure, ratio=(ltv/cac).toFixed(2), pay=(cac/(price-cost)).toFixed(1);return `<div class="note"><b>New unit economics case</b><br>Price: $${price}/month · Cost: $${cost}/month · CAC: $${cac} · Tenure: ${tenure} months<br><br><b>Your task:</b> Calculate LTV, LTV/CAC, and payback. Then decide if it is healthy.<details><summary>Show answer</summary>LTV = ($${price} - $${cost}) × ${tenure} = $${ltv}. LTV/CAC = ${ratio}×. Payback = ${pay} months. ${ratio>=3?'Healthy by 3× rule.':ratio>=1?'Possible but tight.':'Unhealthy / bleeding.'}</details></div>`;}const tasks=[['Translate','I do not understand','No entiendo'],['Translate','Again, please','Otra vez, por favor'],['Complete','Yo ___ llamo Hesham','me'],['Complete','Tú ___ llamas Ana','te'],['Dialogue','Ask someone their name informally','¿Cómo te llamas?'],['Translate','Nice to meet you','Mucho gusto'],['Translate','That is all','Eso es todo']];const t=randomFrom(tasks);return `<div class="note"><b>New Spanish A1 practice</b><br><b>${t[0]}:</b> ${t[1]}<details><summary>Show answer</summary>${t[2]}</details></div>`;}
window.newInfinitePractice=()=>{state.practiceCount[state.subject]=(state.practiceCount[state.subject]||0)+1;save();document.getElementById('infiniteBox').innerHTML=infinitePracticeHtml();};

function tutor(){const quick=state.subject==='eni'?['Quiz me on my weakest topic','Explain CAC vs CPA','Generate a new unit economics case','Explain PMF like I am 12']:['Quiz me on Spanish A1','Practice introductions','Correct this sentence: Yo me llamo Hesham','Give me 5 Chile classroom phrases'];app.innerHTML=`<section class="card"><span class="badge">AI Tutor</span><h2>Nash Tutor — ${S().title}</h2><p class="lead">The tutor receives your selected subject, readiness score, completed modules, weakest topics, and last mistake.</p><div class="quick">${quick.map(q=>`<button onclick="sendQuick('${q.replaceAll("'","\\'")}')">${q}</button>`).join('')}</div><div id="chat" class="chatbox">${state.chat.slice(-12).map(m=>`<div class="msg ${m.role==='user'?'user':'bot'}"><b>${m.role==='user'?'You':'Nash Tutor'}:</b> ${escapeHtml(m.content)}</div>`).join('') || `<div class="msg bot"><b>Nash Tutor:</b> Ask me about ${S().title}.</div>`}</div><label>Your message</label><textarea id="msg" placeholder="Ask Nash anything about ${S().title}...">${state.pendingPrompt||''}</textarea><button class="primary" onclick="sendTutor()">Send to Nash Tutor</button></section>`;state.pendingPrompt='';save();}
window.sendQuick=(q)=>{document.getElementById('msg').value=q;sendTutor();};
function contextPayload(){return {activeSubject:S().title, subjectId:state.subject, readinessScore:readiness(), strongest:S().strengths, weakest:S().focus, completedModules:Object.keys(state.completed[state.subject]||{}), score:state.scores[state.subject], practiceCount:state.practiceCount[state.subject]||0, lastMistake:state.lastMistake};}
window.sendTutor=async()=>{const text=document.getElementById('msg').value.trim();if(!text)return;state.chat.push({role:'user',content:text});save();tutor();const chat=document.getElementById('chat');chat.innerHTML+=`<div class="msg bot"><b>Nash Tutor:</b> Thinking...</div>`;try{const res=await fetch('/.netlify/functions/tutor',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:text,context:contextPayload()})});const data=await res.json();const reply=data.reply || data.error || 'No reply received.';state.chat.push({role:'assistant',content:reply});save();tutor();}catch(e){state.chat.push({role:'assistant',content:'API error. Check Netlify Functions and OPENROUTER_API_KEY.'});save();tutor();}};
function escapeHtml(str){return String(str).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));}

function flashcards(){let i=0;const cards=FLASHCARDS[state.subject];app.innerHTML=`<section class="card"><span class="badge">Flashcards</span><h2>${S().title}</h2><div id="card" class="card flashcard">${cards[0][0]}</div><div class="row"><button class="primary" onclick="flipCard()">Flip</button><button class="secondary" onclick="nextCard()">Next</button></div></section>`;window.flipCard=()=>{const el=document.getElementById('card');el.textContent=el.textContent===cards[i][0]?cards[i][1]:cards[i][0];};window.nextCard=()=>{i=(i+1)%cards.length;document.getElementById('card').textContent=cards[i][0];};}
function feedback(){app.innerHTML=`<section class="card"><span class="badge">Feedback</span><h2>Help improve Nash</h2><label>Subject</label><input value="${S().title}" disabled><label>What worked?</label><textarea id="fb1"></textarea><label>What should improve?</label><textarea id="fb2"></textarea><button class="primary" onclick="saveFeedback()">Save feedback locally</button></section>`;}
window.saveFeedback=()=>{state.feedback.push({time:new Date().toISOString(),subject:state.subject,worked:fb1.value,improve:fb2.value});save();alert('Saved.');};

function render(){navActive();if(state.route==='home')home();else if(state.route==='dashboard')dashboard();else if(state.route==='paths')paths();else if(state.route==='practice')practice();else if(state.route==='tutor')tutor();else if(state.route==='flashcards')flashcards();else if(state.route==='feedback')feedback();else home();navActive();}
render();
