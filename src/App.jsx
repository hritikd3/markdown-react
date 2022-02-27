import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('# markdown preview')

  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
        <main className="markdown"> 
<h3> Click here for <a href="https://www.markdownguide.org/cheat-sheet" target="_blank"> cheat sheet</a>
</h3>
        </main>
      </section>
    </main>
  )
}

export default App
