import { getAnimeResponse } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ({params}) => {
    const {keyword} = params
    const decodedKeyword = decodeURI(keyword)
    // console.log(decodedKeyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  return (
    <>
    {/* Anime Terpopuler */}
      <section>
      <Header title={`Pencarian untuk ${decodedKeyword}...`}/>
      <AnimeList api={searchAnime}/>
      </section>
    </>
  )
}

export default Page