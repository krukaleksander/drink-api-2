import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'

const Home = () => {
  const { coctails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />
  }

  return (
    <main>
      <CocktailList />
      <SearchForm />
    </main>
  )
}

export default Home
