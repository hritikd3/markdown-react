import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('# markdown preview')

  return (
    <main>
        <section className="cheat-sheet"> 
<h3> Click here for <a href="https://www.markdownguide.org/cheat-sheet" target="_blank"> cheat sheet</a>
</h3>
        </section>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      
      </section>
    <section className="footer"> build with 💜 by 
      <span onClick={()=> alert('ʕ•́ᴥ•̀ʔ Hritik is currently Smashing his keyboard until something good happens... 😄')}>Hritik </span></section>
    </main>
    
 
    
  )
}

export default App
