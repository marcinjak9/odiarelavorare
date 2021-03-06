import dynamic from 'next/dynamic'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import PageLayout from '../components/PageLayout'
const Form = dynamic(() => import('../components/Form'), { ssr: false })
// import Form from '../components/Form'

export default function Speakup({ source }) {
  return (
    <PageLayout meta={{ title: 'Testimonia la tua esperienza'}}>
      <h1>Speak up</h1>
      <Form />
      <MDXRemote {...source}/>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const source = `
  ### Ti senti a disagio a criticare l’etica lavorista?  
  Odiare il proprio lavoro non sembra difficile: l’aumento di incidenza di stress, ansia e bornout - oltre che l’incremento di dimissioni volontarie - non restituisce uno scenario confortante. Tuttavia non sempre sembra essere semplice esternare il proprio malessere o interiorizzare un’analisi coerente. Da una parte la permeante etica lavorista stigmatizza tutti coloro che si lamentano o addirittura immaginano un'esistenza emancipata dal lavoro: questo perché il lavoro è diventato misura stessa della vita e la sola messa in discussione di alcune delle sue dinamiche fondanti rappresenta per i più una vera e propria sfida alla stabilità sociale. Dall'altra la narrazione storica sembra volerci ricordare quanto le condizioni di lavoro di oggi siano "migliori di un tempo" e quindi intrinsecamente auspicabili: L'illusione di vivere nel migliore dei mondi possibili paralizza così qualsiasi critica o riflessione, anche individuale, cristallizzando lo status quo.
  
  Non solo sembra degradante odiare alcuni aspetti del proprio lavoro.
  
  Per certi versi sembra impossibile anche solo pensarlo
  
    
  
  Ti chiedo dunque di provare a sforzarti e a riflettere: qual è l'aspetto del tuo lavoro (o del mondo lavoro in generale) che odi maggiormente?
  
  Puoi scrivere qui e il tuo commento verrà pubblicato in modo da renderti completamente irriconoscibile.
  Odiare il proprio lavoro non sembra difficile: l’aumento di incidenza di stress, ansia e bornout - oltre che l’incremento di dimissioni volontarie - non restituisce uno scenario confortante. Tuttavia non sempre sembra essere semplice esternare il proprio malessere o interiorizzare un’analisi coerente. Da una parte la permeante etica lavorista stigmatizza tutti coloro che si lamentano o addirittura immaginano un'esistenza emancipata dal lavoro: questo perché il lavoro è diventato misura stessa della vita e la sola messa in discussione di alcune delle sue dinamiche fondanti rappresenta per i più una vera e propria sfida alla stabilità sociale. Dall'altra la narrazione storica sembra volerci ricordare quanto le condizioni di lavoro di oggi siano "migliori di un tempo" e quindi intrinsecamente auspicabili: L'illusione di vivere nel migliore dei mondi possibili paralizza così qualsiasi critica o riflessione, anche individuale, cristallizzando lo status quo.
  
  Non solo sembra degradante odiare alcuni aspetti del proprio lavoro.
  
  Per certi versi sembra impossibile anche solo pensarlo
  
    
  
  Ti chiedo dunque di provare a sforzarti e a riflettere: qual è l'aspetto del tuo lavoro (o del mondo lavoro in generale) che odi maggiormente?
  
  Puoi scrivere qui e il tuo commento verrà pubblicato in modo da renderti completamente irriconoscibile.`
  const mdxSource = await serialize(source)
  return { props: { source: mdxSource } }
}