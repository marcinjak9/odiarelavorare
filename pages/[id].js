import Papa from 'papaparse';
import MainSection from '../components/MainSection';

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'http://localhost:3000';

export default function Id() {
  return (
   <MainSection />
  )
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://raw.githubusercontent.com/marcinjak9/odiarelavorare/main/public/dataentry.csv`)
  const r = await res.text()
  const { data } = Papa.parse(r)

  const formatted = data.map((item) => ({
    [data[0][0]]: item[0],
    [data[0][1]]: item[1],
    [data[0][2]]: item[2],
  }))
  formatted.shift()

  const quote = formatted[params.id]

  if (quote && quote.id && quote.text) {
    return { props: { quote } }
  }

  return { props: { quote: null } }

  // Pass post data to the page via props
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://raw.githubusercontent.com/marcinjak9/odiarelavorare/main/public/dataentry.csv`)
  const r = await res.text()
  const { data } = Papa.parse(r)
  
  const formatted = data.map((item) => ({
    [data[0][0]]: item[0],
    [data[0][1]]: item[1],
    [data[0][2]]: item[2],
  }))
  formatted.shift()
  
  // Get the paths we want to pre-render based on posts
  const paths = formatted.map((quote) => ({
    params: { id: quote.id },
  }))
  

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}