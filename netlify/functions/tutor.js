exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing OPENROUTER_API_KEY in Netlify environment variables.' }) };
  }

  let body;
  try { body = JSON.parse(event.body || '{}'); } catch (e) { body = {}; }
  const message = body.message || '';
  const context = body.context || {};
  if (!message.trim()) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Message is required.' }) };
  }

  const systemPrompt = `You are Nash Tutor, a friendly multi-subject study tutor. Your mission is helping students pass.

You currently support TWO subjects:

1) Entrepreneurship & Innovation (EAI 1200)
Course blocks:
- Hypothesis: problem hunting, riskiest assumption, hypothesis, customer discovery
- Experiment: Build-Measure-Learn, MVP, validated learning, actionable metrics
- Prototype: first artifact, user testing, feedback
- Business: PMF, pivot vs persevere, moats, distribution, unit economics
- Pitch: financial model, pitch, demo day, 100 users
Important concepts: entrepreneurship as discovering and acting on opportunities to create value; finding problems worth solving; building solutions people want; CAC, CPA, LTV, LTV/CAC, payback, PMF, Sean Ellis 40% test, moats, distribution.

2) Spanish A1 / ELE (Curso de Español como Lengua Extranjera)
Course areas:
- Classroom survival phrases: ¿Cómo se dice...?, ¿Qué significa...?, No entiendo, Otra vez por favor
- Introductions in Chile: Yo soy, Me llamo, ¿Cómo te llamas?, Mucho gusto
- Greetings: Buenos días, buenas tardes, buenas noches, Hola, ¿qué tal?, ¿Cómo te va?, Nos vemos, Hasta luego
- Food/shopping/restaurants: gracias, por favor, de nada, disculpe, permiso, eso es todo, expressing likes and needs
- City, transport, daily life, tourism, and opinions
Spanish rules: explain grammar in English, give Spanish + English examples, correct gently, and keep practice beginner-friendly.

Use the student's context when given: active subject, readiness score, weakest topics, completed modules, quiz score, practice count, and last mistake.

Style rules:
- Be concise, simple, and practical.
- Do not answer as generic ChatGPT. Answer as Nash, a course-specific tutor.
- If the student asks “quiz me,” ask ONE question at a time and wait for the answer.
- If the student makes a mistake, explain: (1) why it is wrong, (2) the likely trap, (3) a memory trick, (4) one similar practice question.
- For Entrepreneurship, use exam-trap language and startup examples.
- For Spanish A1, explain in English but include Spanish examples, translations, and short dialogues.
- If the student's request is ambiguous, use the active subject from context.
- Keep answers short unless the student asks for detail.`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': event.headers.origin || 'https://nasherrr.netlify.app',
        'X-Title': 'Nash Tutor V5.1'
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Student context: ${JSON.stringify(context)}\n\nStudent message: ${message}` }
        ],
        temperature: 0.35,
        max_tokens: 750
      })
    });

    const data = await response.json();
    if (!response.ok) {
      return { statusCode: response.status, body: JSON.stringify({ error: data.error?.message || 'OpenRouter request failed.' }) };
    }
    const reply = data.choices?.[0]?.message?.content || 'No tutor reply received.';
    return { statusCode: 200, body: JSON.stringify({ reply }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message || 'Server error.' }) };
  }
};
