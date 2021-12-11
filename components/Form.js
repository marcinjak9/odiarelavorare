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
    if (text) {
      fetch('http://139.59.215.216/form', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
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
  return(
    <div className={styles.wrapper}>
    <Head>
      {/* <script type="module" src="https://unpkg.com/friendly-challenge@0.9.0/widget.module.min.js" async defer></script>
      <script noModule src="https://unpkg.com/friendly-challenge@0.9.0/widget.min.js" async defer></script> */}
    </Head>
    <div className={styles.formContainer}>
      <p>Invia una mail a <a href="mailto:mail@odiarelavorare.it" style={{ color: '#FF5F5D', fontWeight: 600 }}>mail@odiarelavorare.it</a></p>
      <p>
        Se non vuoi usare una mail personale usa un servizio anonimo tipo <a href="https://guerrillamail.com" target="_blank" rel="noreferrer">guerrillamail.com</a>
        <br />
        La sicurezza e privacy prima di tutto!
      </p>
    </div>
    </div>
  )
}
