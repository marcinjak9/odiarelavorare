import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRef, useState, useEffect } from 'react'
import styles from '../styles/Form.module.css'
import { WidgetInstance } from 'friendly-challenge';
import Button from './Button';

export default function Form () {
  const [nick, setNick] = useState('')
  const [text, setText] = useState('')
  const [token, setToken] = useState('')
  const [success, setSuccess] = useState(false)

  const container = useRef();
  const widget = useRef();

  const doneCallback = (solution) => {
    // console.log('Captcha was solved. The form can be submitted.');
    // console.log(solution);
    setToken(solution);
  }

  const errorCallback = (err) => {
    // console.log('There was an error when trying to solve the Captcha.');
    // console.log(err);
  }

  useEffect(() => {
    if (WidgetInstance) {
      if (!widget.current && container.current) {
        widget.current = new WidgetInstance(container.current, { 
          startMode: "focus",
          doneCallback: doneCallback,
          errorCallback: errorCallback 
        });
      }
  
      return () => {
        if (widget.current != undefined) widget.current.reset();
      }
    }
  }, [container]);

  const submit = (e) => {
    e.preventDefault()
    if (text && nick && token) {
      fetch('/api/form', {
        method: 'POST',
        body: JSON.stringify({
          nick,
          text,
          solution: token,
        })
      }).then((r) => r.json())
      .then((json) => {
        if (json.success) {
          setSuccess(true)
        }
      })
    }
  }
  console.log(success)
  return(
    <div className={styles.wrapper}>
    <Head>
      {/* <script type="module" src="https://unpkg.com/friendly-challenge@0.9.0/widget.module.min.js" async defer></script>
      <script noModule src="https://unpkg.com/friendly-challenge@0.9.0/widget.min.js" async defer></script> */}
    </Head>
    {!success ? (
      <div className={styles.formContainer}>
        <h3>Odio il lavoro perchè:</h3>
        <textarea
          placeholder="Perchè il mio capo è un coglione"
          value={text} onChange={(e) => setText(e.target.value)}
          className={styles.form}
        />
        <div className={styles.wrapperFirma}>
          <div className={styles.col}>
            <label htmlFor="text">Professione (opzionale)</label>
            <input
              value={nick}
              onChange={(e) => setNick(e.target.value)}
              className={`${styles.form} ${styles.nick}`}
            />
            <label htmlFor="text">Ometti ongni riferimento personale che possa renderti doxxabile</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
            <div ref={container} className="frc-captcha dark" data-sitekey="FCMS9L5U25GTQ7FH" />
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 20, display: 'flex', justifyContent: 'center' }}>
          <Button buttonProps={{ onClick: submit }} label="Testimonia!" labelMobile />
        </div>
      </div>
    ) : (
      <h3>Grazie della tua testimonianza ❤️</h3>
    )}
    </div>
  )
}