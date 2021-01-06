import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'

const Home = () => {
  const { cocktails, loading } = useGlobalContext();


  return (
    <main>
      <SearchForm />
      {loading ? <Loading /> : <CocktailList />}
      <CocktailList />
    </main>
  )
}

export default Home
